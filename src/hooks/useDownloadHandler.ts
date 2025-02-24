import { useState, useRef, useEffect } from "react";

function useDownloadHandler() {
    const [isDownloading, setIsDownloading] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleDownloadClick = () => {
        setIsDownloading(true);
        timeoutRef.current = setTimeout(() => setIsDownloading(false), 2000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return { isDownloading, handleDownloadClick };
}

export default useDownloadHandler