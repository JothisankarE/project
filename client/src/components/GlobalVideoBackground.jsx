import React from 'react';

const GlobalVideoBackground = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="global-video-bg"
        >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-floating-in-the-ocean-34531-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default GlobalVideoBackground;
