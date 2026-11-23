import React, { useState } from 'react';

const ImageWithFallback = ({ 
    src, 
    alt, 
    className = '', 
    style = {}, 
    loading = 'lazy',
    decoding = 'async',
    fetchPriority = 'auto',
    fallbackSrc = 'https://via.placeholder.com/600x400?text=WM+Wave+Image+Not+Found' 
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleError = () => {
        if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <img 
            src={imgSrc} 
            alt={alt || 'WMWave'} 
            className={className} 
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            style={{
                ...style,
                transition: 'opacity 0.3s ease-in-out',
                opacity: isLoaded ? 1 : 0.85
            }} 
        />
    );
};

export default ImageWithFallback;

