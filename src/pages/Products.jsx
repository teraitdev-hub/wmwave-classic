import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, CheckCircle2, RefreshCw } from 'lucide-react';
import { getAllProducts, productCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allProducts = useMemo(() => getAllProducts(), []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || 'all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Group filter tabs
  const categoryFilters = [
    { id: 'all', label: 'All Products', count: allProducts.length },
    { id: 'fingerprint', label: 'Fingerprint Terminals' },
    { id: 'face-recognition', label: 'Face Recognition' },
    { id: 'qr-reader', label: 'QR Readers' },
    { id: 'boom-barrier', label: 'Boom Barriers' },
    { id: 'metal-detector', label: 'Metal Detectors' },
    { id: 'flap-barrier', label: 'Flap Barriers & Turnstiles' },
    { id: 'gates-automation', label: 'Gates & Automation' }
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catLower = (product.category || '').toLowerCase();
        const idLower = (product.id || '').toLowerCase();
        const typeLower = (product.type || '').toLowerCase();

        if (selectedCategory === 'fingerprint') {
          if (!catLower.includes('finger') && !typeLower.includes('fingerprint') && !idLower.startsWith('sf-') && !idLower.startsWith('f-') && !idLower.startsWith('k-') && !idLower.startsWith('x-') && !idLower.startsWith('i-') && !idLower.startsWith('p-')) return false;
        } else if (selectedCategory === 'face-recognition') {
          if (!catLower.includes('face') && !typeLower.includes('face') && !idLower.includes('face') && !idLower.includes('vesta') && !idLower.includes('magnum')) return false;
        } else if (selectedCategory === 'qr-reader') {
          if (!catLower.includes('qr') && !typeLower.includes('qr') && !idLower.includes('qr')) return false;
        } else if (selectedCategory === 'boom-barrier') {
          if (!catLower.includes('boom') && !catLower.includes('barrier') && !idLower.startsWith('bg') && !idLower.startsWith('psa-02') && !typeLower.includes('barrier')) return false;
        } else if (selectedCategory === 'metal-detector') {
          if (!catLower.includes('metal') && !idLower.startsWith('d4') && !idLower.startsWith('d1') && !idLower.startsWith('d3') && !idLower.startsWith('md-') && !idLower.startsWith('ess-') && !idLower.startsWith('hm-')) return false;
        } else if (selectedCategory === 'flap-barrier') {
          if (!catLower.includes('flap') && !idLower.startsWith('fb-') && !idLower.startsWith('tsg-') && !idLower.startsWith('sb-') && !idLower.startsWith('hg-') && !typeLower.includes('barrier') && !typeLower.includes('turnstile')) return false;
        } else if (selectedCategory === 'gates-automation') {
          if (!idLower.startsWith('hg-') && !idLower.startsWith('bg-') && !idLower.startsWith('psa-26')) return false;
        }
      }

      // Search term filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const inName = (product.name || '').toLowerCase().includes(query);
        const inId = (product.id || '').toLowerCase().includes(query);
        const inType = (product.type || '').toLowerCase().includes(query);
        const inDesc = (product.desc || '').toLowerCase().includes(query);
        const inHighlights = (product.highlights || []).some(h => h.toLowerCase().includes(query));
        const inSpecs = product.specs ? Object.values(product.specs).some(v => String(v).toLowerCase().includes(query)) : false;

        return inName || inId || inType || inDesc || inHighlights || inSpecs;
      }

      return true;
    });
  }, [allProducts, selectedCategory, searchTerm]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSearchParams({});
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0 36px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-eyebrow">Hardware Catalog</span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f2b48', marginTop: '8px', marginBottom: '12px' }}>
            Enterprise Products & Hardware Devices
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '850px', lineHeight: '1.6' }}>
            Browse our complete range of 46 certified biometric terminals, AI facial scanners, high-speed barrier gates, walk-through detectors, and pedestrian flap turnstiles.
          </p>

          {/* Search Bar */}
          <div style={{ marginTop: '24px', maxWidth: '640px', position: 'relative' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} 
            />
            <input 
              type="text"
              className="form-control"
              placeholder="Search by model (e.g. X-990, Magnum, BGL-100), feature, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '42px', height: '48px', fontSize: '0.95rem' }}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter Tabs & Product Grid */}
      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="container">
          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '24px', borderBottom: '1px solid #e2e8f0' }}>
            {categoryFilters.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: isSelected ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#0f2b48' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#334155',
                    fontWeight: isSelected ? '700' : '500',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Results Metadata Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '0.9375rem', color: '#475569' }}>
              Showing <strong>{filteredProducts.length}</strong> of <strong>{allProducts.length}</strong> products
              {searchTerm && <span> for &ldquo;{searchTerm}&rdquo;</span>}
            </div>

            {(searchTerm || selectedCategory !== 'all') && (
              <button 
                onClick={handleReset}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  color: '#0284c7',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                <RefreshCw size={14} /> Reset Filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelect={setActiveModalProduct} 
                />
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0f2b48', marginBottom: '8px' }}>No products match your criteria</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
                Try adjusting your search terms or selecting another category filter.
              </p>
              <button onClick={handleReset} className="btn btn-primary btn-sm">
                View All 46 Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductModal 
          product={activeModalProduct} 
          onClose={() => setActiveModalProduct(null)} 
        />
      )}
    </div>
  );
};

export default Products;
