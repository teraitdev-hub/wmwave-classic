import { jsPDF } from 'jspdf';
import { servicesData } from '../data/services';

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

export const generateServicesCatalog = async () => {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();

    // COVER PAGE
    doc.setFillColor(7, 26, 53); // Dark navy
    doc.rect(0, 0, pageW, pageH, 'F');

    try {
        const logoData = await loadImageAsBase64('/assets/images/logo2.png');
        doc.addImage(logoData, 'PNG', pageW / 2 - 25, 40, 50, 27);
    } catch (e) {
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('WMWave', pageW / 2, 50, { align: 'center' });
    }

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('Cloud-Based Services', pageW / 2, 120, { align: 'center' });

    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(150, 180, 255);
    doc.text('Smart Technology. Connected Operations.', pageW / 2, 135, { align: 'center' });

    // CONTENT PAGES (One page per service)
    for (const service of servicesData) {
        doc.addPage();
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, pageW, pageH, 'F');

        // Header
        doc.setFillColor(7, 26, 53);
        doc.rect(0, 0, pageW, 30, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text(service.name, 15, 20);

        let yPos = 45;
        
        // Image
        try {
            const imgData = await loadImageAsBase64(service.img);
            // Draw image maintaining aspect ratio within bounds
            const maxW = pageW - 30;
            const maxH = 80;
            doc.addImage(imgData, 'PNG', 15, yPos, maxW, maxH, undefined, 'FAST');
        } catch (e) {
            console.error(e);
        }

        yPos += 90;

        // Description
        doc.setTextColor(50, 50, 50);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        const descLines = doc.splitTextToSize(service.fullDesc, pageW - 30);
        doc.text(descLines, 15, yPos);
        
        yPos += descLines.length * 7 + 10;

        // Features
        doc.setTextColor(45, 127, 249);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Key Features', 15, yPos);
        yPos += 10;
        
        doc.setTextColor(70, 70, 70);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        service.features.forEach(feature => {
            doc.setFillColor(45, 127, 249);
            doc.circle(18, yPos - 1.5, 1.5, 'F');
            doc.text(feature, 23, yPos);
            yPos += 8;
        });

        yPos += 5;

        // Benefits
        doc.setTextColor(45, 127, 249);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Benefits', 15, yPos);
        yPos += 10;
        doc.setTextColor(70, 70, 70);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        const benLines = doc.splitTextToSize(service.benefits, pageW - 30);
        doc.text(benLines, 15, yPos);
    }

    // FINAL PAGE
    doc.addPage();
    doc.setFillColor(7, 26, 53);
    doc.rect(0, 0, pageW, pageH, 'F');

    try {
        const logoData = await loadImageAsBase64('/assets/images/logo2.png');
        doc.addImage(logoData, 'PNG', pageW / 2 - 25, pageH / 2 - 60, 50, 27);
    } catch (e) {}

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    const finalLines = doc.splitTextToSize("Connect with WM Wave and transform the way your business operates.", pageW - 40);
    doc.text(finalLines, pageW / 2, pageH / 2 - 10, { align: 'center' });

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(200, 200, 200);
    doc.text('www.wmwave.com', pageW / 2, pageH / 2 + 30, { align: 'center' });
    doc.text('sales@wmwave.com', pageW / 2, pageH / 2 + 40, { align: 'center' });
    doc.text('+91 7348838833', pageW / 2, pageH / 2 + 50, { align: 'center' });
    
    // Add page numbers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 2; i < pageCount; i++) {
        doc.setPage(i);
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(10);
        doc.text(`Page ${i-1}`, pageW / 2, pageH - 10, { align: 'center' });
        doc.text('WMWave Technologies Pvt. Ltd.', 15, pageH - 10);
        doc.text('www.wmwave.com', pageW - 15, pageH - 10, { align: 'right' });
    }

    doc.save('WM-Wave-Cloud-Based-Services-Catalog.pdf');
};
