import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll to top with instant behavior for faster perceived performance
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Use 'instant' instead of 'smooth' for no lag
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
