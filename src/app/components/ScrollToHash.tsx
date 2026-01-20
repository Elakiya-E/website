import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        } else {
            const scrollToElement = (retryCount = 0) => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (retryCount < 10) {
                    setTimeout(() => scrollToElement(retryCount + 1), 100);
                }
            };

            setTimeout(() => scrollToElement(), 0);
        }
    }, [pathname, hash, key]);

    return null;
}
