import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { jsPDF } from 'jspdf';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = getProductById(id);
    const [activeImg, setActiveImg] = useState(product && product.images ? product.images.length - 1 : 0);

    if (!product) {
        return (
            <div className="bg-primary-theme" style={{ paddingTop: '150px', paddingBottom: '100px', textAlign: 'center', minHeight: '80vh', color: '#ffffff' }}>
                <div className="container">
                    <h2 style={{ color: '#ffffff', fontSize: '2.2rem', marginBottom: '20px' }}>Product Not Found</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '30px' }}>The requested security product could not be located.</p>
                    <button onClick={() => navigate('/products')} className="btn btn-primary" style={{ padding: '12px 30px' }}>Browse All Products</button>
                </div>
            </div>
        );
    }

    const handleDownloadPDF = async () => {
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();

        const loadImageAsBase64 = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    resolve(canvas.toDataURL('image/png'));
                };
                img.onerror = reject;
                img.src = src;
            });
        };

        const hasImage = product.images && product.images.length > 0;

        // === DEDICATED CATALOG SHEET (WHEN product.sections IS DEFINED, E.G. FB-EF-2213, FB-Y-1000, FBE-2000, D4006, ESS-05, HM-300, PSA-02, BG-CM-300, BGL-100, AIFACE MAGNUM LITE, AIFACE MAGNUM, FQR, F18, SF100, X990) ===
        if (product.sections) {
            // White clean background
            doc.setFillColor(255, 255, 255);
            doc.rect(0, 0, pageW, pageH, 'F');

            // --- FB-EF-2213 FLAP BARRIER CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'fbef2213') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (2-unit pair)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64('/assets/images/prod_fbef2213_pair.png');
                        const imgW = 66;
                        const imgH = 56;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 10, 6, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        try {
                            const prodImgData = await loadImageAsBase64('/assets/images/prod_fbef2213_tight.png');
                            doc.addImage(prodImgData, 'PNG', pageW - 74, 6, 64, 52, undefined, 'FAST');
                        } catch (e2) {
                            console.error("Failed to load FB-EF-2213 product image", e2);
                        }
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('FB-EF-2213', 10, 42);

                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Flap Barrier', 10, 51);

                // Horizontal Divider Line
                const dividerY = 58;
                doc.setDrawColor(0, 119, 182);
                doc.setLineWidth(0.5);
                doc.line(10, dividerY, pageW - 10, dividerY);

                // Section 1 Header: Technical Specifications:
                let currentY = dividerY + 7;
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Technical Specifications:', 10, currentY);
                currentY += 4.5;

                // Section 1: 16 Items List
                if (product.sections.col1 && product.sections.col1[0]) {
                    doc.setFontSize(5.8);
                    product.sections.col1[0].items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(35, 40, 50);
                        doc.text('▪', 10, currentY);
                        doc.text(cleanItem, 14, currentY);
                        currentY += 3.4;
                    });
                }

                // Middle Dark Blue Accent Strip
                const bannerY = 136;
                doc.setFillColor(15, 30, 55);
                doc.rect(0, bannerY, pageW, 7, 'F');
                doc.setFillColor(0, 180, 216);
                doc.rect(0, bannerY + 6, pageW, 1, 'F');

                // Section 2 Header: Functions & Features:
                let fY = bannerY + 14;
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Functions & Features:', 10, fY);
                fY += 5;

                // Section 2: 8 Items List
                if (product.sections.col2 && product.sections.col2[0]) {
                    doc.setFontSize(5.8);
                    product.sections.col2[0].items.forEach(item => {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(35, 40, 50);
                        const cleanText = String(item).replace(/^\d+\.\s*/, '').replace(/；/g, ';');
                        const lines = doc.splitTextToSize(cleanText, pageW - 24);
                        doc.text('▪', 10, fY);
                        doc.text(lines, 14, fY);
                        fY += lines.length * 2.8 + 1.2;
                    });
                }

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- FB-Y-1000 SINGLE-LANE FLAP BARRIER 2-PAGE CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET IMAGES) ---
            if (product.sections.catalogStyle === 'fby1000') {
                // ==================== PAGE 1 ====================
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Flap Barrier Pair)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64('/assets/images/prod_fby1000_tight.png');
                        const imgW = 62;
                        const imgH = 60;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 12, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        try {
                            const prodImgData = await loadImageAsBase64(product.images[0]);
                            doc.addImage(prodImgData, 'PNG', pageW - 74, 8, 62, 58, undefined, 'FAST');
                        } catch (e2) {
                            console.error("Failed to load FB-Y-1000 product image", e2);
                        }
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Single-Lane Flap Barrier', 10, 44);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('FB-Y-1000', 10, 56);

                // Horizontal Divider Line (Below Device Photo)
                const dividerY = 74;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.5);
                doc.line(10, dividerY, pageW - 10, dividerY);

                // Specifications List (Left / Center)
                let currentY = dividerY + 12;
                if (product.sections.col1 && product.sections.col1[0]) {
                    doc.setFontSize(9.0);
                    product.sections.col1[0].items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, 10, currentY);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            doc.text(val, 10 + labelWidth, currentY);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            doc.text(cleanItem, 10, currentY);
                        }
                        currentY += 8.2;
                    });
                }

                // Page 1 Footer
                const footerY1 = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY1, pageW - 10, footerY1);
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY1 + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY1 + 7);
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY1 + 12);
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('Page 1/2  |  ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY1 + 12, { align: 'right' });

                // ==================== PAGE 2 ====================
                doc.addPage('a4', 'portrait');
                doc.setFillColor(255, 255, 255);
                doc.rect(0, 0, pageW, pageH, 'F');

                // Header: Features
                let p2Y = 16;
                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Features', 10, p2Y);
                p2Y += 7;

                // 9 Bullet Points
                if (product.sections.col2 && product.sections.col2[0]) {
                    doc.setFontSize(7.0);
                    product.sections.col2[0].items.forEach(item => {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(30, 35, 45);
                        const cleanText = String(item).replace(/^\d+\.\s*/, '').replace(/；/g, ';');
                        const bulletLines = doc.splitTextToSize(cleanText, pageW - 26);
                        doc.setFillColor(0, 119, 182);
                        doc.circle(12, p2Y - 1.2, 0.8, 'F');
                        doc.text(bulletLines, 16, p2Y);
                        p2Y += bulletLines.length * 3.4 + 2.0;
                    });
                }

                p2Y += 4;

                // Header: Dimension
                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Dimension', 10, p2Y);
                p2Y += 5;

                // Technical Dimension Schematic Diagram
                try {
                    const dimImgData = await loadImageAsBase64('/assets/images/prod_fby1000_dimensions.png');
                    const dimW = pageW - 20;
                    const dimH = 52;
                    doc.addImage(dimImgData, 'PNG', 10, p2Y, dimW, dimH, undefined, 'FAST');
                } catch (e) {
                    console.error("Failed to load FB-Y-1000 dimensions diagram", e);
                }

                // Page 2 Footer
                const footerY2 = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY2, pageW - 10, footerY2);
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY2 + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY2 + 7);
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY2 + 12);
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('Page 2/2  |  ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY2 + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- FBE-2000 SERIES FLAP BARRIER CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'fbe2000') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Flap Barrier Pair - High Definition)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64('/assets/images/prod_fbe2000_tight.png');
                        const imgW = 60;
                        const imgH = 50;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 14, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        try {
                            const prodImgData = await loadImageAsBase64(product.images[0]);
                            doc.addImage(prodImgData, 'PNG', pageW - 74, 8, 60, 50, undefined, 'FAST');
                        } catch (e2) {
                            console.error("Failed to load FBE-2000 product image", e2);
                        }
                    }
                }

                // Subtitles & Title on Left
                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Flap Barrier', 10, 42);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('FB-E-2000', 10, 54);

                // Horizontal Divider Line (Strictly Below Image)
                const dividerY = 64;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, dividerY, pageW - 10, dividerY);

                // Section 1: Specification Header
                let currentY = dividerY + 7;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, currentY);
                currentY += 5;

                const leftColW = 98;
                const rightColX = 118;

                // Vertical Divider line between columns
                doc.setDrawColor(40, 50, 60);
                doc.setLineWidth(0.4);
                doc.line(112, 64, 112, 264);

                // Left Column: Specifications
                if (product.sections.col1 && product.sections.col1[0]) {
                    doc.setFontSize(5.8);
                    product.sections.col1[0].items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C').replace(/IPraƟng/g, 'IP rating');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, 10, currentY);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, leftColW - labelWidth);
                            doc.text(valLines, 10 + labelWidth, currentY);
                            currentY += Math.max(valLines.length * 2.8, 2.8) + 0.6;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(cleanItem, leftColW);
                            doc.text(lines, 10, currentY);
                            currentY += lines.length * 2.8 + 0.6;
                        }
                    });
                }

                // Right Column: Dimensions Schematic Diagram
                try {
                    const dimImgData = await loadImageAsBase64('/assets/images/prod_fbe2000_dimensions.png');
                    const dimW = 78;
                    const dimH = 110;
                    doc.addImage(dimImgData, 'PNG', rightColX - 2, 78, dimW, dimH, undefined, 'FAST');
                } catch (e) {
                    console.error("Failed to load FBE-2000 dimensions schematic", e);
                }

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- D4006 WALK-THROUGH METAL DETECTOR CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'd4006') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Archway Gate - Slim Proportions)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64('/assets/images/prod_d4006_tight.png');
                        const imgW = 24;
                        const imgH = 55;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 16, 6, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        try {
                            const prodImgData = await loadImageAsBase64(product.images[0]);
                            doc.addImage(prodImgData, 'PNG', pageW - 40, 6, 24, 55, undefined, 'FAST');
                        } catch (e2) {
                            console.error("Failed to load D4006 product image", e2);
                        }
                    }
                }

                // Subtitles & Title on Left
                doc.setFontSize(14.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('DFMD with LCD Display', 10, 38);
                doc.text('(Metal Detector)', 10, 44);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 54);

                // Horizontal Divider Line (Below Device Photo)
                const dividerY = 64;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, dividerY, pageW - 10, dividerY);

                // Section 1: Specification Header
                let currentY = dividerY + 7;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, currentY);
                currentY += 5;

                const leftColW = 98;
                const rightColX = 118;
                const rightColW = 80;

                // Vertical Divider line between columns
                doc.setDrawColor(40, 50, 60);
                doc.setLineWidth(0.4);
                doc.line(112, 64, 112, 264);

                // Left Column: Specifications
                const specItems = product.sections.col1?.[0]?.items || product.sections.specifications || [];
                if (specItems.length > 0) {
                    doc.setFontSize(5.6);
                    specItems.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`•  ${label} :`, 10, currentY);
                            const labelWidth = doc.getTextWidth(`•  ${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, leftColW - labelWidth);
                            doc.text(valLines, 10 + labelWidth, currentY);
                            currentY += Math.max(valLines.length * 2.7, 2.7) + 0.6;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(`•  ${cleanItem}`, leftColW);
                            doc.text(lines, 10, currentY);
                            currentY += lines.length * 2.7 + 0.6;
                        }
                    });
                }

                currentY += 2.5;

                // Left Column: Features Header
                doc.setFontSize(9.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Features:', 10, currentY);
                currentY += 4.5;

                // Left Column: Features Items
                const featItems = product.sections.col2?.[0]?.items || product.sections.features || [];
                if (featItems.length > 0) {
                    doc.setFontSize(5.6);
                    featItems.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const lines = doc.splitTextToSize(`•  ${cleanItem}`, leftColW);
                        doc.text(lines, 10, currentY);
                        currentY += lines.length * 2.7 + 0.6;
                    });
                }

                // Right Column: Dimensions Header & Enhanced Schematic Box
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Dimensions', rightColX + 16, 76);

                try {
                    const dimImgData = await loadImageAsBase64('/assets/images/prod_d4006_dimensions.png');
                    const dimW = 78;
                    const dimH = 120;
                    doc.addImage(dimImgData, 'PNG', rightColX, 82, dimW, dimH, undefined, 'FAST');
                } catch (e) {
                    console.error("Failed to load D4006 dimensions schematic", e);
                }

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- ESS-05 SHOE SCANNER CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'ess05') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Shoe Scanner Platform)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64('/assets/images/prod_ess05_tight.png');
                        const imgW = 66;
                        const imgH = 42;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 12, 10, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        try {
                            const prodImgData = await loadImageAsBase64(product.images[0]);
                            doc.addImage(prodImgData, 'PNG', pageW - 74, 10, 64, 42, undefined, 'FAST');
                        } catch (e2) {
                            console.error("Failed to load ESS-05 product image", e2);
                        }
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Shoes Scanner', 10, 40);

                doc.setFontSize(18);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Model no ESS-05', 10, 49);

                // Horizontal Divider Line
                const dividerY = 56;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, dividerY, pageW - 10, dividerY);

                let currentY = dividerY + 7;

                // Section 1: Specification
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, currentY);
                currentY += 5;

                product.sections.col1.forEach(sec => {
                    doc.setFontSize(6.6);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/₹/g, 'Rs.');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`•  ${label} :`, 10, currentY);
                            const labelWidth = doc.getTextWidth(`•  ${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, pageW - 20 - labelWidth);
                            doc.text(valLines, 10 + labelWidth, currentY);
                            currentY += Math.max(valLines.length * 3.0, 3.0) + 0.6;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(`•  ${cleanItem}`, pageW - 20);
                            doc.text(lines, 10, currentY);
                            currentY += lines.length * 3.0 + 0.6;
                        }
                    });
                });

                currentY += 3;

                // Section 2: Function
                const funcSec = product.sections.col2.find(s => s.title === 'Function');
                if (funcSec) {
                    doc.setFontSize(11);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text('Function', 10, currentY);
                    currentY += 5;

                    doc.setFontSize(6.6);
                    funcSec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/₹/g, 'Rs.');
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const lines = doc.splitTextToSize(`•  ${cleanItem}`, pageW - 20);
                        doc.text(lines, 10, currentY);
                        currentY += lines.length * 3.0 + 0.6;
                    });
                }

                currentY += 3;

                // Section 3: Alarm Function
                const alarmSec = product.sections.col2.find(s => s.title === 'Alarm Function');
                if (alarmSec) {
                    doc.setFontSize(10.5);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text('Alarm Function:', 10, currentY);
                    currentY += 4.5;

                    doc.setFontSize(6.4);
                    alarmSec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/₹/g, 'Rs.');
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const lines = doc.splitTextToSize(cleanItem, pageW - 20);
                        doc.text(lines, 10, currentY);
                        currentY += lines.length * 3.0 + 0.6;
                    });
                }

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- HM-300 HAND HELD METAL DETECTOR CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'hm300') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Left: Product Device Image (Angled Hand Wand)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        doc.addImage(prodImgData, 'PNG', 18, 32, 44, 65, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load HM-300 product image", e);
                    }
                }

                // Left: Model label under image
                doc.setFontSize(16);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text(product.name, 40, 104, { align: 'center' });

                // Right: Titles
                const rightX = 98;
                doc.setFontSize(15);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Hand Held Metal detector', rightX, 26);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, rightX, 36);

                // Right: Detection Range Section
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Detection Range :', rightX, 48);

                if (product.sections.detectionRange) {
                    let rangeY = 56;
                    doc.setFontSize(8.0);
                    doc.setFont('helvetica', 'normal');
                    doc.setTextColor(30, 35, 45);
                    product.sections.detectionRange.forEach(item => {
                        const cleanItem = String(item).replace(/₹/g, 'Rs.').replace(/—/g, '-');
                        doc.text(cleanItem, rightX, rangeY);
                        rangeY += 5.2;
                    });
                }

                // Middle: Two Solid Blue Header Boxes
                const headerBoxY = 114;
                const headerBoxH = 7.5;
                const col1X = 10;
                const col2X = 108;
                const colW = 92;

                // Left Header Box: Specifications
                doc.setFillColor(27, 108, 168);
                doc.rect(col1X, headerBoxY, colW, headerBoxH, 'F');
                doc.setFontSize(9.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(255, 255, 255);
                doc.text('Specifications', col1X + 4, headerBoxY + 5.2);

                // Right Header Box: Main Features
                doc.setFillColor(27, 108, 168);
                doc.rect(col2X, headerBoxY, colW, headerBoxH, 'F');
                doc.setFontSize(9.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(255, 255, 255);
                doc.text('Main Features', col2X + 4, headerBoxY + 5.2);

                let currentY1 = headerBoxY + 12;
                let currentY2 = headerBoxY + 12;

                // Render Left Column (Specifications)
                product.sections.col1.forEach(sec => {
                    doc.setFontSize(5.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, colW - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 2.7, 2.7) + 0.8;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(cleanItem, colW);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 2.7 + 0.8;
                        }
                    });
                });

                // Render Right Column (Main Features)
                product.sections.col2.forEach(sec => {
                    doc.setFontSize(5.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const lines = doc.splitTextToSize(`•  ${cleanItem}`, colW);
                        doc.text(lines, col2X, currentY2);
                        currentY2 += lines.length * 2.7 + 1.2;
                    });
                });

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- PSA-02 LOOP DETECTOR CATALOG LAYOUT (MATCHING OFFICIAL LOOP DETECTOR DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'psa02') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 52;
                        const imgH = 56;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 12, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load PSA02 product image", e);
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Single channel  Loop Detector : PSA02', 10, 38);
                doc.text('Double Channel Loop Detector : PSA02-2', 10, 48);

                // Right Title below image
                doc.setFontSize(19);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Loop Detector', pageW - 12, 70, { align: 'right' });

                // Section Header: Specification
                const specHeaderY = 70;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, specHeaderY);

                // Line under header
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, specHeaderY + 3.5, pageW - 10, specHeaderY + 3.5);

                // Two Columns Setup
                const col1X = 10;
                const col2X = 108;
                const dividerX = 103;
                let currentY1 = specHeaderY + 9;
                let currentY2 = specHeaderY + 9;

                // Render Left Column (PSA02)
                product.sections.col1.forEach(sec => {
                    if (sec.title) {
                        doc.setFontSize(9.5);
                        doc.setFont('helvetica', 'bold');
                        doc.setTextColor(0, 119, 182);
                        doc.text(sec.title, col1X, currentY1);
                        currentY1 += 5.2;
                    }

                    doc.setFontSize(5.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 2.7, 2.7) + 0.9;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(cleanItem, 88);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 2.7 + 0.9;
                        }
                    });
                });

                // Render Right Column (PSA02-2)
                product.sections.col2.forEach(sec => {
                    if (sec.title) {
                        doc.setFontSize(9.5);
                        doc.setFont('helvetica', 'bold');
                        doc.setTextColor(0, 119, 182);
                        doc.text(sec.title, col2X, currentY2);
                        currentY2 += 5.2;
                    }

                    doc.setFontSize(5.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~').replace(/℃/g, '°C');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col2X, currentY2);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 90 - labelWidth);
                            doc.text(valLines, col2X + labelWidth, currentY2);
                            currentY2 += Math.max(valLines.length * 2.7, 2.7) + 0.9;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(cleanItem, 90);
                            doc.text(lines, col2X, currentY2);
                            currentY2 += lines.length * 2.7 + 0.9;
                        }
                    });
                });

                // Center Vertical Divider Line
                const maxBottomY = Math.max(currentY1, currentY2, 268);
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(dividerX, specHeaderY + 5, dividerX, maxBottomY);

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- BG-CM-300 CATALOG LAYOUT (MATCHING OFFICIAL BG-CM-300 DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'bgcm300') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo_horizontal.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 48, 12);
                } catch (e) {
                    try {
                        const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                        doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                    } catch (e2) {
                        doc.setTextColor(0, 119, 182);
                        doc.setFontSize(20);
                        doc.setFont('helvetica', 'bold');
                        doc.text('WMWave', 10, 18);
                    }
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Smart Workforce Solutions', 10, 24);

                // Top-Right: Product Device Image
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 68;
                        const imgH = 48;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 10, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load BG-CM-300 product image", e);
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Parking Slim Boom Barrier', 10, 36);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 48);

                // Horizontal Divider Line below header
                const dividerY = 64;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, dividerY, pageW - 10, dividerY);

                // Two Columns Setup
                const col1X = 10;
                const col2X = 108;
                const centerDividerX = 103;
                let currentY1 = dividerY + 6;
                let currentY2 = dividerY + 6;

                // LEFT COLUMN: FEATURES
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Features', col1X, currentY1);
                currentY1 += 6;

                product.sections.col1.forEach(sec => {
                    doc.setFontSize(5.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~');
                        const colonIdx = cleanItem.indexOf(': ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 2);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`•  ${label}:`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`•  ${label}: `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(40, 45, 55);
                            const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 2.6, 2.6) + 1.8;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(40, 45, 55);
                            const lines = doc.splitTextToSize(`•  ${cleanItem}`, 88);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 2.6 + 1.8;
                        }
                    });
                });

                // RIGHT COLUMN: SPECIFICATIONS
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', col2X, currentY2);
                currentY2 += 6;

                product.sections.col2.forEach(sec => {
                    doc.setFontSize(5.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/±/g, '+-').replace(/～/g, '~');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`•  ${label} :`, col2X, currentY2);
                            const labelWidth = doc.getTextWidth(`•  ${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(40, 45, 55);
                            const valLines = doc.splitTextToSize(val, 90 - labelWidth);
                            doc.text(valLines, col2X + labelWidth, currentY2);
                            currentY2 += Math.max(valLines.length * 2.6, 2.6) + 2.0;
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(40, 45, 55);
                            const lines = doc.splitTextToSize(`•  ${cleanItem}`, 90);
                            doc.text(lines, col2X, currentY2);
                            currentY2 += lines.length * 2.6 + 2.0;
                        }
                    });
                });

                // Center Vertical Divider Line
                const maxBottomY = Math.max(currentY1, currentY2, 268);
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(centerDividerX, dividerY + 2, centerDividerX, maxBottomY);

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- BGL-100 CATALOG LAYOUT (MATCHING OFFICIAL BGL-100 DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'bgl100') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 54;
                        const imgH = 52;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 12, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load BGL-100 product image", e);
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Parking Barrier Automated', 10, 35);
                doc.text('Boom Gate with', 10, 40);
                doc.text('LED Indicator', 10, 45);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 56);

                // Section Header: Specification
                const specHeaderY = 66;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, specHeaderY);

                // Line under header
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, specHeaderY + 2.5, pageW - 10, specHeaderY + 2.5);

                // Two Columns Setup
                const col1X = 10;
                const col2X = 108;
                const dividerX = 103;
                let currentY1 = specHeaderY + 8;
                let currentY2 = specHeaderY + 8;

                // Render Left Column (Technical Specifications)
                product.sections.col1.forEach(sec => {
                    doc.setFontSize(6.8);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 3.2, 3.8);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(cleanItem, 88);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 3.6;
                        }
                    });
                });

                // Render Right Column (Power Supply)
                product.sections.col2.forEach(sec => {
                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(15, 25, 45);
                    doc.text(`${sec.title} :`, col2X, currentY2);
                    currentY2 += 5.5;

                    doc.setFontSize(7.2);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col2X, currentY2);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 90 - labelWidth);
                            doc.text(valLines, col2X + labelWidth, currentY2);
                            currentY2 += Math.max(valLines.length * 3.4, 4.2);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(cleanItem, 90);
                            doc.text(lines, col2X, currentY2);
                            currentY2 += lines.length * 4.0;
                        }
                    });
                    currentY2 += 3;
                });

                // Center Vertical Divider Line
                const maxBottomY = Math.max(currentY1, currentY2, 268);
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(dividerX, specHeaderY + 4, dividerX, maxBottomY);

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- AIFACE MAGNUM LITE CATALOG LAYOUT (MATCHING OFFICIAL DATASHEET TABLE IMAGE) ---
            if (product.sections.catalogStyle === 'aiface_magnum_lite') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Vertical format, crystal clear)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 28;
                        const imgH = 55;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 12, 6, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load Aiface Magnum Lite product image", e);
                    }
                }

                // Title on Left
                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 46);

                // Section Header: Specification
                const specHeaderY = 58;
                doc.setFontSize(11.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Specification', 10, specHeaderY);

                // Structured Table Grid Layout
                const tableX = 10;
                let tableY = 62;
                const colLabelW = 75;
                const colValW = pageW - tableX * 2 - colLabelW;
                const totalTableW = colLabelW + colValW;

                const specRows = Object.entries(product.specs || {});

                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.3);

                specRows.forEach(([key, val]) => {
                    doc.setFontSize(6.8);
                    const cleanKey = String(key).replace(/≤/g, '<=').replace(/≥/g, '>=');
                    const cleanVal = String(val).replace(/≤/g, '<=').replace(/≥/g, '>=');
                    const valLines = doc.splitTextToSize(cleanVal, colValW - 6);
                    const rowHeight = Math.max(valLines.length * 3.4 + 2.6, 7.2);

                    // Row outline box
                    doc.rect(tableX, tableY, totalTableW, rowHeight, 'S');
                    // Vertical dividing column line
                    doc.line(tableX + colLabelW, tableY, tableX + colLabelW, tableY + rowHeight);

                    // Left cell: Label
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(20, 25, 35);
                    doc.text(cleanKey, tableX + 3, tableY + 4.8);

                    // Right cell: Value
                    doc.setFont('helvetica', 'normal');
                    doc.setTextColor(45, 50, 60);
                    doc.text(valLines, tableX + colLabelW + 3, tableY + 4.8);

                    tableY += rowHeight;
                });

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- AIFACE MAGNUM CATALOG LAYOUT (MATCHING AIFACE MAGNUM DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'aiface_magnum') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Vertical format)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 23;
                        const imgH = 56;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 18, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load Aiface Magnum product image", e);
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(10.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Multi-Biometric Time Attendance &', 10, 36);
                doc.text('Access Control System', 10, 42);

                doc.setFontSize(20);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 52);

                // 4-Badge Feature Box on Left below Title
                const badgeBoxX = 10;
                const badgeBoxY = 56;
                const badgeBoxW = 120;
                const badgeBoxH = 15;
                const segW = badgeBoxW / 4;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.roundedRect(badgeBoxX, badgeBoxY, badgeBoxW, badgeBoxH, 1, 1, 'S');
                doc.line(badgeBoxX + segW, badgeBoxY, badgeBoxX + segW, badgeBoxY + badgeBoxH);
                doc.line(badgeBoxX + segW * 2, badgeBoxY, badgeBoxX + segW * 2, badgeBoxY + badgeBoxH);
                doc.line(badgeBoxX + segW * 3, badgeBoxY, badgeBoxX + segW * 3, badgeBoxY + badgeBoxH);

                doc.setFontSize(7.5);
                doc.text('Face', badgeBoxX + segW * 0.5, badgeBoxY + 6.5, { align: 'center' });
                doc.text('RFID', badgeBoxX + segW * 1.5, badgeBoxY + 6.5, { align: 'center' });
                doc.text('Fingerprint', badgeBoxX + segW * 2.5, badgeBoxY + 6.5, { align: 'center' });
                doc.text('IP65', badgeBoxX + segW * 3.5, badgeBoxY + 6.5, { align: 'center' });

                doc.setFontSize(4.8);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(20, 50, 90);
                doc.text('Recognition', badgeBoxX + segW * 0.5, badgeBoxY + 12, { align: 'center' });
                doc.text('Smart Card', badgeBoxX + segW * 1.5, badgeBoxY + 12, { align: 'center' });
                doc.text('Optical 500DPI', badgeBoxX + segW * 2.5, badgeBoxY + 12, { align: 'center' });
                doc.text('Waterproof', badgeBoxX + segW * 3.5, badgeBoxY + 12, { align: 'center' });

                // Section Header: Specification
                const specHeaderY = 76;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, specHeaderY);

                // Line under header
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, specHeaderY + 2.5, pageW - 10, specHeaderY + 2.5);

                // Two Columns Setup
                const col1X = 10;
                const col2X = 108;
                const dividerX = 103;
                let currentY1 = specHeaderY + 7;
                let currentY2 = specHeaderY + 7;

                // Render Left Column (Technical Specifications)
                product.sections.col1.forEach(sec => {
                    doc.setFontSize(6.4);
                    sec.items.forEach(item => {
                        const colonIdx = item.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = item.substring(0, colonIdx);
                            const val = item.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 2.7, 2.9);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(item, 88);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 2.8;
                        }
                    });
                });

                // Render Right Column (Features & Configuration)
                product.sections.col2.forEach(sec => {
                    doc.setFontSize(8.5);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(15, 25, 45);
                    doc.text(sec.title, col2X, currentY2);
                    currentY2 += 4.5;

                    doc.setFontSize(6.5);
                    sec.items.forEach(item => {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(45, 50, 60);
                        const bulletText = `· ${item.replace(/^[·\-\•]\s*/, '')}`;
                        const lines = doc.splitTextToSize(bulletText, 90);
                        doc.text(lines, col2X, currentY2);
                        currentY2 += lines.length * 3.1 + 1.2;
                    });
                    currentY2 += 2.5;
                });

                // Center Vertical Divider Line
                const maxBottomY = Math.max(currentY1, currentY2, 268);
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(dividerX, specHeaderY + 4, dividerX, maxBottomY);

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- FQR-100, FQR-80, AIFACE VESTA+POE, HG-BDC-600, BG180-BDC & PHOTOCELL PSA26 CATALOG LAYOUT ---
            if (product.sections.catalogStyle === 'fqr100' || product.sections.catalogStyle === 'fqr80' || product.sections.catalogStyle === 'aiface_vesta' || product.sections.catalogStyle === 'hgbdc600' || product.sections.catalogStyle === 'bg180bdc' || product.sections.catalogStyle === 'photocell_psa26') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                const isHgbdc = product.sections.catalogStyle === 'hgbdc600';
                const isBg180 = product.sections.catalogStyle === 'bg180bdc';
                const isVesta = product.sections.catalogStyle === 'aiface_vesta';
                const isPhotocell = product.sections.catalogStyle === 'photocell_psa26';

                // Top-Right: Product Device Image
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = (isHgbdc || isBg180) ? 62 : (isPhotocell ? 58 : (isVesta ? 52 : 54));
                        const imgH = (isHgbdc || isBg180) ? 42 : (isPhotocell ? 50 : 54);
                        const imgY = 8;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 12, imgY, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load catalog product image", e);
                    }
                }

                // Title & Subtitle on Left
                let dividerY = 66;
                if (isHgbdc) {
                    doc.setFontSize(22);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text(product.name, 10, 42);

                    doc.setFontSize(12.5);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text('DC brushless sliding gate motor', 10, 49);

                    dividerY = 56;
                } else if (isBg180) {
                    doc.setFontSize(12);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text('Auto-barrier with DC brushless motor', 10, 40);

                    doc.setFontSize(22);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text(product.name, 10, 50);

                    dividerY = 56;
                } else if (isPhotocell) {
                    doc.setFontSize(22);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text('Photo Cell PSA26', 10, 48);
                    dividerY = 66;
                } else {
                    doc.setFontSize(22);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text(product.name, 10, 48);
                }

                // Line under header
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, dividerY, pageW - 10, dividerY);

                let currentY = dividerY + 7;

                // Render Technical Specification / Specification
                if (product.sections.col1 && product.sections.col1.length > 0) {
                    const sec = product.sections.col1[0];
                    doc.setFontSize(11);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text(sec.title, 10, currentY);
                    currentY += 5.5;

                    doc.setFontSize(7.4);
                    sec.items.forEach(item => {
                        const cleanItem = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=');
                        const colonIdx = cleanItem.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = cleanItem.substring(0, colonIdx);
                            const val = cleanItem.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`•  ${label} :`, 10, currentY);
                            const labelWidth = doc.getTextWidth(`•  ${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 185 - labelWidth);
                            doc.text(valLines, 10 + labelWidth, currentY);
                            currentY += Math.max(valLines.length * 3.4, 4.2);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(`•  ${cleanItem}`, 185);
                            doc.text(lines, 10, currentY);
                            currentY += lines.length * 4.2;
                        }
                    });
                }

                currentY += 4;

                // Render Features
                if (product.sections.col2 && product.sections.col2.length > 0) {
                    const sec = product.sections.col2[0];
                    doc.setFontSize(11);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0, 119, 182);
                    doc.text(sec.title, 10, currentY);
                    currentY += 5.5;

                    doc.setFontSize(7.4);
                    sec.items.forEach(item => {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const cleanText = String(item).replace(/≤/g, '<=').replace(/≥/g, '>=');
                        const bulletText = `•  ${cleanText.replace(/^[•\·\-]\s*/, '')}`;
                        const lines = doc.splitTextToSize(bulletText, 185);
                        doc.text(lines, 10, currentY);
                        currentY += lines.length * 4.4;
                    });
                }


                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- F18 CATALOG LAYOUT (MATCHING F18 DATASHEET IMAGE) ---
            if (product.sections.catalogStyle === 'f18') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image (Vertical format)
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 25;
                        const imgH = 48;
                        doc.addImage(prodImgData, 'PNG', pageW - imgW - 18, 8, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load F18 product image", e);
                    }
                }

                // Top-Right below image: 3-Badge Box (Fingerprint, RFID, Access)
                const badgeBoxX = pageW - 48;
                const badgeBoxY = 58;
                const badgeBoxW = 38;
                const badgeBoxH = 13;
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.roundedRect(badgeBoxX, badgeBoxY, badgeBoxW, badgeBoxH, 1, 1, 'S');
                doc.line(badgeBoxX + 12.6, badgeBoxY, badgeBoxX + 12.6, badgeBoxY + badgeBoxH);
                doc.line(badgeBoxX + 25.3, badgeBoxY, badgeBoxX + 25.3, badgeBoxY + badgeBoxH);

                doc.setFontSize(5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(20, 50, 90);
                doc.text('Fingerprint', badgeBoxX + 6.3, badgeBoxY + 11.5, { align: 'center' });
                doc.text('RFID', badgeBoxX + 19, badgeBoxY + 11.5, { align: 'center' });
                doc.text('Access', badgeBoxX + 31.6, badgeBoxY + 11.5, { align: 'center' });

                doc.setFontSize(7);
                doc.text('FP', badgeBoxX + 6.3, badgeBoxY + 6.5, { align: 'center' });
                doc.text('ID', badgeBoxX + 19, badgeBoxY + 6.5, { align: 'center' });
                doc.text('AC', badgeBoxX + 31.6, badgeBoxY + 6.5, { align: 'center' });

                // Subtitle & Title on Left
                doc.setFontSize(10.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                doc.text('Standalone Fingerprint Time Attendance', 10, 36);
                doc.text('& Access Control System', 10, 42);

                doc.setFontSize(22);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 55);

                // Section Header: Specification
                const specHeaderY = 74;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, specHeaderY);

                // Line under header
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, specHeaderY + 2.5, pageW - 10, specHeaderY + 2.5);

                // Two Columns Setup
                const col1X = 10;
                const col2X = 108;
                const dividerX = 103;
                let currentY1 = specHeaderY + 7;
                let currentY2 = specHeaderY + 7;

                // Render Left Column (Column 1)
                product.sections.col1.forEach(sec => {
                    doc.setFontSize(7.5);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(10, 15, 25);
                    doc.text(sec.title, col1X, currentY1);
                    currentY1 += 3.3;

                    doc.setFontSize(6.5);
                    sec.items.forEach(item => {
                        const colonIdx = item.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = item.substring(0, colonIdx);
                            const val = item.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 2.8, 3.0);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const lines = doc.splitTextToSize(item, 88);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 2.9;
                        }
                    });
                    currentY1 += 1.8;
                });

                // Render Right Column (Column 2)
                product.sections.col2.forEach(sec => {
                    doc.setFontSize(7.5);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(10, 15, 25);
                    doc.text(sec.title, col2X, currentY2);
                    currentY2 += 3.3;

                    doc.setFontSize(6.5);
                    sec.items.forEach(item => {
                        const colonIdx = item.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = item.substring(0, colonIdx);
                            const val = item.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col2X, currentY2);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 90 - labelWidth);
                            doc.text(valLines, col2X + labelWidth, currentY2);
                            currentY2 += Math.max(valLines.length * 2.8, 3.0);
                        } else {
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const bulletText = item.startsWith('-') ? item : `- ${item}`;
                            const lines = doc.splitTextToSize(bulletText, 90);
                            doc.text(lines, col2X, currentY2);
                            currentY2 += lines.length * 2.9;
                        }
                    });
                    currentY2 += 1.8;
                });

                // Center Vertical Divider Line
                const maxBottomY = Math.max(currentY1, currentY2, 268);
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(dividerX, specHeaderY + 4, dividerX, maxBottomY);

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // --- SF100 CATALOG LAYOUT (MATCHING SF100 IMAGE) ---
            if (product.sections.catalogStyle === 'sf100') {
                // Top-Left: WMWave Logo
                try {
                    const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                    doc.addImage(logoData, 'PNG', 10, 8, 46, 15);
                } catch (e) {
                    doc.setTextColor(0, 119, 182);
                    doc.setFontSize(20);
                    doc.setFont('helvetica', 'bold');
                    doc.text('WMWave', 10, 18);
                }
                doc.setFontSize(7.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Security at Fingertips', 10, 27);

                // Top-Right: Product Device Image
                if (hasImage) {
                    try {
                        const prodImgData = await loadImageAsBase64(product.images[0]);
                        const imgW = 56;
                        const imgH = 50;
                        doc.addImage(prodImgData, 'JPEG', pageW - imgW - 12, 10, imgW, imgH, undefined, 'FAST');
                    } catch (e) {
                        console.error("Failed to load SF100 product image", e);
                    }
                }

                // Subtitle & Title on Left
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 25, 45);
                const titleSub = product.type || 'IP based Fingerprint Time Attendance & Access Control System';
                const titleSubLines = doc.splitTextToSize(titleSub, 110);
                doc.text(titleSubLines, 10, 36);

                doc.setFontSize(20);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text(product.name, 10, 48);

                // Section Header: Specification
                const specHeaderY = 64;
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('Specification', 10, specHeaderY);

                // Line under header
                doc.setDrawColor(20, 50, 90);
                doc.setLineWidth(0.4);
                doc.line(10, specHeaderY + 2.5, pageW - 10, specHeaderY + 2.5);

                // Two Columns Setup
                const col1X = 10;
                const col2X = 108;
                const dividerX = 103;
                let currentY1 = specHeaderY + 8;
                let currentY2 = specHeaderY + 8;

                // Render Left Column (Technical Specifications)
                product.sections.col1.forEach(sec => {
                    doc.setFontSize(6.9);
                    sec.items.forEach(item => {
                        const colonIdx = item.indexOf(' : ');
                        if (colonIdx !== -1) {
                            const label = item.substring(0, colonIdx);
                            const val = item.substring(colonIdx + 3);
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            doc.text(`${label} :`, col1X, currentY1);
                            const labelWidth = doc.getTextWidth(`${label} : `);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(50, 55, 65);
                            const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                            doc.text(valLines, col1X + labelWidth, currentY1);
                            currentY1 += Math.max(valLines.length * 3.4, 4.0);
                        } else {
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(20, 25, 35);
                            const lines = doc.splitTextToSize(item, 88);
                            doc.text(lines, col1X, currentY1);
                            currentY1 += lines.length * 3.6;
                        }
                    });
                });

                // Render Right Column (Features)
                product.sections.col2.forEach(sec => {
                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(15, 25, 45);
                    doc.text(`${sec.title}:`, col2X, currentY2);
                    currentY2 += 5.5;

                    doc.setFontSize(7.2);
                    sec.items.forEach(item => {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(45, 50, 60);
                        const bulletText = `-- ${item.replace(/^-\s*/, '')}`;
                        const lines = doc.splitTextToSize(bulletText, 90);
                        doc.text(lines, col2X, currentY2);
                        currentY2 += lines.length * 3.6 + 2.5;
                    });
                });

                // Center Vertical Divider Line
                const maxBottomY = Math.max(currentY1, currentY2, 260);
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(dividerX, specHeaderY + 4, dividerX, maxBottomY);

                // Footer Section
                const footerY = 276;
                doc.setDrawColor(200, 205, 215);
                doc.setLineWidth(0.3);
                doc.line(10, footerY, pageW - 10, footerY);

                // Disclaimer
                doc.setFontSize(5.5);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 105, 115);
                doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
                doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

                // Contact Bar
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(0, 119, 182);
                doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

                // Right Certifications
                doc.setFontSize(6.5);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 55, 65);
                doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

                doc.save(`${product.name}_WMWave_Catalog.pdf`);
                return;
            }

            // Top-Left: WMWave Logo
            try {
                const logoData = await loadImageAsBase64('/assets/images/logo2.png');
                doc.addImage(logoData, 'PNG', 10, 8, 48, 16);
            } catch (e) {
                doc.setTextColor(0, 119, 182);
                doc.setFontSize(20);
                doc.setFont('helvetica', 'bold');
                doc.text('WMWave', 10, 18);
            }
            doc.setFontSize(7.5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 119, 182);
            doc.text('Security at Fingertips', 10, 28);

            // Top-Center: Product Image
            if (hasImage) {
                try {
                    const prodImgData = await loadImageAsBase64(product.images[0]);
                    const imgW = 56;
                    const imgH = 37;
                    const imgX = (pageW - imgW) / 2;
                    doc.addImage(prodImgData, 'JPEG', imgX, 6, imgW, imgH, undefined, 'FAST');
                } catch (e) {
                    console.error("Failed to load product image", e);
                }
            }

            // Product Name below image
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 25, 45);
            doc.text(product.name, pageW / 2, 48, { align: 'center' });

            // Top-Right: Feature badge box (Fingerprint, RFID, Access)
            const badgeBoxX = pageW - 42;
            const badgeBoxY = 10;
            const badgeBoxW = 32;
            const badgeBoxH = 16;
            doc.setDrawColor(20, 50, 90);
            doc.setLineWidth(0.4);
            doc.roundedRect(badgeBoxX, badgeBoxY, badgeBoxW, badgeBoxH, 1, 1, 'S');
            doc.line(badgeBoxX + 10.6, badgeBoxY, badgeBoxX + 10.6, badgeBoxY + badgeBoxH);
            doc.line(badgeBoxX + 21.3, badgeBoxY, badgeBoxX + 21.3, badgeBoxY + badgeBoxH);

            doc.setFontSize(5.5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(20, 50, 90);
            doc.text('Fingerprint', badgeBoxX + 5.3, badgeBoxY + 14, { align: 'center' });
            doc.text('RFID', badgeBoxX + 16, badgeBoxY + 14, { align: 'center' });
            doc.text('Access', badgeBoxX + 26.6, badgeBoxY + 14, { align: 'center' });

            // Simple vector symbols inside badge box
            doc.setFontSize(8);
            doc.text('FP', badgeBoxX + 5.3, badgeBoxY + 8, { align: 'center' });
            doc.text('ID', badgeBoxX + 16, badgeBoxY + 8, { align: 'center' });
            doc.text('AC', badgeBoxX + 26.6, badgeBoxY + 8, { align: 'center' });

            // Subtitle Banner with arrow
            let bannerY = 55;
            doc.setFontSize(9.5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 25, 45);
            doc.text('➤', 10, bannerY);
            doc.text(product.type || 'Standalone Fingerprint Time Attendance & Access Control System', 15, bannerY);

            // Horizontal Line under banner
            doc.setDrawColor(15, 25, 45);
            doc.setLineWidth(0.5);
            doc.line(10, bannerY + 2.5, pageW - 10, bannerY + 2.5);

            // 2 Columns Setup
            const col1X = 10;
            const col2X = 106;
            const dividerX = 103;
            let currentY1 = bannerY + 6.5;
            let currentY2 = bannerY + 6.5;

            // Render Column 1
            product.sections.col1.forEach(sec => {
                doc.setFontSize(7.8);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(10, 15, 25);
                doc.text(sec.title, col1X, currentY1);
                currentY1 += 3.6;

                doc.setFontSize(6.7);
                sec.items.forEach(item => {
                    const colonIdx = item.indexOf(' : ');
                    if (colonIdx !== -1) {
                        const label = item.substring(0, colonIdx);
                        const val = item.substring(colonIdx + 3);
                        doc.setFont('helvetica', 'bold');
                        doc.setTextColor(20, 25, 35);
                        doc.text(`${label} :`, col1X, currentY1);
                        const labelWidth = doc.getTextWidth(`${label} : `);
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(60, 65, 75);
                        const valLines = doc.splitTextToSize(val, 88 - labelWidth);
                        doc.text(valLines, col1X + labelWidth, currentY1);
                        currentY1 += Math.max(valLines.length * 3.0, 3.2);
                    } else {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const lines = doc.splitTextToSize(`- ${item.replace(/^-\s*/, '')}`, 88);
                        doc.text(lines, col1X, currentY1);
                        currentY1 += lines.length * 3.1;
                    }
                });
                currentY1 += 2.2;
            });

            // Render Column 2
            product.sections.col2.forEach(sec => {
                doc.setFontSize(7.8);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(10, 15, 25);
                doc.text(sec.title, col2X, currentY2);
                currentY2 += 3.6;

                doc.setFontSize(6.7);
                sec.items.forEach(item => {
                    const colonIdx = item.indexOf(' : ');
                    if (colonIdx !== -1) {
                        const label = item.substring(0, colonIdx);
                        const val = item.substring(colonIdx + 3);
                        doc.setFont('helvetica', 'bold');
                        doc.setTextColor(20, 25, 35);
                        doc.text(`${label} :`, col2X, currentY2);
                        const labelWidth = doc.getTextWidth(`${label} : `);
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(60, 65, 75);
                        const valLines = doc.splitTextToSize(val, 92 - labelWidth);
                        doc.text(valLines, col2X + labelWidth, currentY2);
                        currentY2 += Math.max(valLines.length * 3.0, 3.2);
                    } else {
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(50, 55, 65);
                        const lines = doc.splitTextToSize(`- ${item.replace(/^-\s*/, '')}`, 92);
                        doc.text(lines, col2X, currentY2);
                        currentY2 += lines.length * 3.1;
                    }
                });
                currentY2 += 2.2;
            });

            // Vertical Center Divider Line
            const maxBottomY = Math.max(currentY1, currentY2, 268);
            doc.setDrawColor(200, 205, 215);
            doc.setLineWidth(0.3);
            doc.line(dividerX, bannerY + 4, dividerX, maxBottomY);

            // Footer Section
            const footerY = 276;
            doc.setDrawColor(200, 205, 215);
            doc.setLineWidth(0.3);
            doc.line(10, footerY, pageW - 10, footerY);

            // Disclaimer
            doc.setFontSize(5.5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100, 105, 115);
            doc.text('Disclaimer: Brief specifications are mentioned here. Specifications may change without prior notice. Customers are advised to check with us before purchase.', 10, footerY + 4);
            doc.text('Actual product may differ slightly to that depicted for ongoing product development.', 10, footerY + 7);

            // Contact Bar
            doc.setFontSize(6.5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 119, 182);
            doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', 10, footerY + 12);

            // Right Certifications
            doc.setFontSize(6.5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(50, 55, 65);
            doc.text('ISO 9001:2015  |  CE  |  FCC  |  RoHS', pageW - 10, footerY + 12, { align: 'right' });

            doc.save(`${product.name}_WMWave_Catalog.pdf`);
            return;
        }

        // --- Standard Default PDF Layout for Other Products ---
        // --- Header Navy Bar ---
        doc.setFillColor(7, 26, 53);
        doc.rect(0, 0, pageW, 36, 'F');

        // Logo / Brand
        try {
            const logoData = await loadImageAsBase64('/assets/images/logo2.png');
            doc.addImage(logoData, 'PNG', 12, 6, 50, 24);
        } catch (e) {
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text('WMWave', 12, 20);
        }

        // Header Right Contact Details
        doc.setTextColor(0, 180, 216);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('OFFICIAL PRODUCT CATALOG', pageW - 12, 12, { align: 'right' });
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8.5);
        doc.setFont('helvetica', 'bold');
        doc.text('Email: enquiry@wmwave.com  |  Phone: +91 9483920190', pageW - 12, 19, { align: 'right' });
        doc.setTextColor(200, 215, 235);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text('Web: www.wmwave.com  |  Cloud Attendance & Security Systems', pageW - 12, 25, { align: 'right' });

        // --- Product Title & Subtitle Banner ---
        let yPos = 46;
        doc.setTextColor(7, 26, 53);
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text(product.name, 12, yPos);

        yPos += 6;
        doc.setFontSize(10.5);
        doc.setTextColor(0, 119, 182);
        doc.setFont('helvetica', 'bold');
        doc.text(product.type || `${product.name} Cloud Biometric & Security System`, 12, yPos);

        // Thin accent line
        yPos += 4;
        doc.setDrawColor(0, 180, 216);
        doc.setLineWidth(0.8);
        doc.line(12, yPos, pageW - 12, yPos);

        yPos += 8;

        // --- Description & Product Image Top Section ---
        const textWidth = hasImage ? 115 : pageW - 24;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 64, 75);
        const descLines = doc.splitTextToSize(product.desc || '', textWidth);
        doc.text(descLines, 12, yPos);

        let descBottom = yPos + descLines.length * 4.5 + 4;

        // Highlights in Top Left
        if (product.highlights && product.highlights.length > 0) {
            doc.setFontSize(9.5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(7, 26, 53);
            doc.text('Key Features:', 12, descBottom);
            descBottom += 5;

            doc.setFontSize(8.5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(70, 75, 85);
            product.highlights.slice(0, 4).forEach(h => {
                doc.setFillColor(0, 180, 216);
                doc.circle(14, descBottom - 1, 1, 'F');
                const hLines = doc.splitTextToSize(h, textWidth - 8);
                doc.text(hLines, 18, descBottom);
                descBottom += hLines.length * 4;
            });
        }

        let imgBottom = yPos;
        if (hasImage) {
            try {
                const prodImgData = await loadImageAsBase64(product.images[0]);
                const imgW = 65;
                const imgH = 50;
                doc.setFillColor(245, 248, 252);
                doc.roundedRect(pageW - imgW - 12, yPos - 3, imgW, imgH, 3, 3, 'F');
                doc.addImage(prodImgData, 'JPEG', pageW - imgW - 10, yPos - 1, imgW - 4, imgH - 4, undefined, 'FAST');
                imgBottom = yPos + imgH + 2;
            } catch (e) {
                console.error("Failed to load product image for PDF", e);
            }
        }

        yPos = Math.max(descBottom, imgBottom) + 6;

        // --- Specifications Header ---
        doc.setFillColor(7, 26, 53);
        doc.rect(12, yPos, pageW - 24, 7, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('TECHNICAL SPECIFICATIONS', 16, yPos + 5);

        yPos += 11;

        // --- 2-Column Specs Layout ---
        if (product.specs && Object.keys(product.specs).length > 0) {
            const entries = Object.entries(product.specs);
            const mid = Math.ceil(entries.length / 2);
            const col1 = entries.slice(0, mid);
            const col2 = entries.slice(mid);

            const colW = (pageW - 28) / 2;
            const startY = yPos;

            // Render Column 1
            let col1Y = startY;
            col1.forEach(([k, v], i) => {
                if (i % 2 === 0) {
                    doc.setFillColor(244, 247, 252);
                    doc.rect(12, col1Y - 3.5, colW, 6.5, 'F');
                }
                doc.setFontSize(8);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(7, 26, 53);
                doc.text(k, 14, col1Y + 1);

                doc.setFont('helvetica', 'normal');
                doc.setTextColor(70, 70, 70);
                const valLines = doc.splitTextToSize(String(v), colW - 42);
                doc.text(valLines, 14 + 40, col1Y + 1);
                col1Y += Math.max(valLines.length * 4, 6.5);
            });

            // Render Column 2
            let col2Y = startY;
            const col2X = 12 + colW + 4;
            col2.forEach(([k, v], i) => {
                if (i % 2 === 0) {
                    doc.setFillColor(244, 247, 252);
                    doc.rect(col2X, col2Y - 3.5, colW, 6.5, 'F');
                }
                doc.setFontSize(8);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(7, 26, 53);
                doc.text(k, col2X + 2, col2Y + 1);

                doc.setFont('helvetica', 'normal');
                doc.setTextColor(70, 70, 70);
                const valLines = doc.splitTextToSize(String(v), colW - 42);
                doc.text(valLines, col2X + 42, col2Y + 1);
                col2Y += Math.max(valLines.length * 4, 6.5);
            });

            yPos = Math.max(col1Y, col2Y) + 8;
        }

        // --- Certification / Standard Badges Bar ---
        if (yPos < pageH - 35) {
            doc.setFillColor(235, 243, 253);
            doc.roundedRect(12, yPos, pageW - 24, 10, 2, 2, 'F');
            doc.setFontSize(8);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 119, 182);
            doc.text('COMPLIANCE & INTEGRATION:  ISO 9001:2015  |  CE Certified  |  FCC  |  RoHS  |  WMWave Cloud API Verified', pageW / 2, yPos + 6.5, { align: 'center' });
            yPos += 14;
        }

        // --- Disclaimer & Footer ---
        doc.setTextColor(130, 135, 145);
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.text('Disclaimer: Specifications are subject to change without prior notice for ongoing product improvements.', 12, pageH - 16);

        // Bottom Bar
        doc.setFillColor(7, 26, 53);
        doc.rect(0, pageH - 12, pageW, 12, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7.5);
        doc.setFont('helvetica', 'normal');
        doc.text('WMWave Technologies Pvt. Ltd.  |  Email: enquiry@wmwave.com  |  Phone: +91 9483920190  |  www.wmwave.com', pageW / 2, pageH - 4.5, { align: 'center' });

        // Save PDF
        doc.save(`${product.name}_WMWave_Catalog.pdf`);
    };

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <button onClick={() => navigate(-1)} style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                    <i className="fas fa-arrow-left"></i> Back to Products
                </button>
                
                <div className="card product-detail-card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', padding: '40px', gap: '50px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <div className="product-detail-media" style={{ flex: '1.4', minWidth: '340px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Main Image */}
                        <div style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '30px', minHeight: '460px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)' }}>
                            {product.images && product.images.length > 0 ? (
                                <img src={product.images[activeImg]} style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', display: 'block', margin: '0 auto' }} alt={product.name} loading="eager" fetchPriority="high" decoding="async" />
                            ) : (
                                <i className="fas fa-box" style={{ fontSize: '8rem', color: '#ccc' }}></i>
                            )}
                        </div>
                        {/* Thumbnail Gallery */}
                        {product.images && product.images.length > 1 && (
                            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                                {product.images.map((img, idx) => (
                                    <div key={idx} onClick={() => setActiveImg(idx)} style={{ width: '80px', height: '80px', background: '#13213c', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: activeImg === idx ? '2px solid var(--accent)' : '2px solid transparent' }}>
                                        <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`${product.name} ${idx}`} loading="lazy" decoding="async" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="product-detail-info" style={{ flex: '1.5', minWidth: '280px' }}>
                        <span className="blog-category" style={{ position: 'relative', top: '0', left: '0', marginBottom: '15px', display: 'inline-block', textTransform: 'uppercase' }}>{product.category || 'Product'}</span>
                        <h1 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '2.5rem' }}>{product.name}</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#ffffff' }}>{product.desc}</p>
                        
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                            <button
                                onClick={handleDownloadPDF}
                                className="btn btn-primary"
                                style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                <i className="fas fa-file-pdf"></i> Download PDF Catalog
                            </button>
                        </div>

                        {product.highlights && product.highlights.length > 0 && (
                            <>
                                <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}><i className="fas fa-star"></i> Product Highlights</h3>
                                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '40px' }}>
                                    {product.highlights.map((highlight, idx) => (
                                        <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '1.1rem', color: '#ffffff' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--accent)', marginRight: '15px', fontSize: '1.2rem' }}></i>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>

                <div className="product-extra-grid" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Specifications Section */}
                    <div className="card product-specs-card" style={{ flex: '2', minWidth: '280px', padding: '40px' }}>
                        <h3 style={{ color: 'var(--accent)', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '30px' }}><i className="fas fa-cogs"></i> Technical Specifications</h3>
                        {product.sections && (product.sections.col1 || product.sections.col2) ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                                <div>
                                    {product.sections.col1 && product.sections.col1.map((sec, idx) => (
                                        <div key={idx} style={{ marginBottom: '25px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                            <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '15px', borderBottom: '1px solid rgba(0, 180, 216, 0.25)', paddingBottom: '8px', fontWeight: '700' }}>{sec.title}</h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {sec.items && sec.items.map((item, iIdx) => {
                                                    const colonIdx = item.indexOf(' : ');
                                                    if (colonIdx !== -1) {
                                                        const label = item.substring(0, colonIdx);
                                                        const val = item.substring(colonIdx + 3);
                                                        return (
                                                            <li key={iIdx} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.95rem', gap: '15px' }}>
                                                                <span style={{ color: '#ffffff', fontWeight: '600', flex: '1.2' }}>{label}</span>
                                                                <span style={{ color: '#ffffff', flex: '1.5', textAlign: 'right', fontWeight: '400', opacity: 0.9 }}>{val}</span>
                                                            </li>
                                                        );
                                                    } else {
                                                        return (
                                                            <li key={iIdx} style={{ color: '#ffffff', fontSize: '0.95rem', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'baseline', gap: '10px', lineHeight: '1.5' }}>
                                                                <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>▪</span>
                                                                <span>{item.replace(/^-\s*/, '')}</span>
                                                            </li>
                                                        );
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {product.sections.col2 && product.sections.col2.map((sec, idx) => (
                                        <div key={idx} style={{ marginBottom: '25px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                            <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '15px', borderBottom: '1px solid rgba(0, 180, 216, 0.25)', paddingBottom: '8px', fontWeight: '700' }}>{sec.title}</h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {sec.items && sec.items.map((item, iIdx) => {
                                                    const colonIdx = item.indexOf(' : ');
                                                    if (colonIdx !== -1) {
                                                        const label = item.substring(0, colonIdx);
                                                        const val = item.substring(colonIdx + 3);
                                                        return (
                                                            <li key={iIdx} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.95rem', gap: '15px' }}>
                                                                <span style={{ color: '#ffffff', fontWeight: '600', flex: '1.2' }}>{label}</span>
                                                                <span style={{ color: '#ffffff', flex: '1.5', textAlign: 'right', fontWeight: '400', opacity: 0.9 }}>{val}</span>
                                                            </li>
                                                        );
                                                    } else {
                                                        return (
                                                            <li key={iIdx} style={{ color: '#ffffff', fontSize: '0.95rem', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'baseline', gap: '10px', lineHeight: '1.5' }}>
                                                                <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>▪</span>
                                                                <span>{item.replace(/^-\s*/, '')}</span>
                                                            </li>
                                                        );
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : product.specs && Object.keys(product.specs).length > 0 ? (
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ffffff' }}>
                                <tbody>
                                    {Object.entries(product.specs).map(([key, val], idx) => (
                                        <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '15px 0', fontWeight: 'bold', width: '40%', color: '#ffffff' }}>{key}</td>
                                            <td style={{ padding: '15px 0', color: '#ffffff' }}>{val}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p style={{ color: '#ffffff' }}>Specifications not available.</p>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;

