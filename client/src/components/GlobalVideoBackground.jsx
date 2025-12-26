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
            <source src="https://videos.pexels.com/video-files/4439425/4439425-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default GlobalVideoBackground;
