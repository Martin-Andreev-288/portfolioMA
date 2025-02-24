import { useState, useRef, useEffect } from "react";
import { FiDownload } from "react-icons/fi";

type DownloadCardProps = {
  label: string;
  pdfPath: string;
};

function DownloadCard({ label, pdfPath }: DownloadCardProps) {
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

  return (
    <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
        <a
          href={pdfPath}
          download
          onClick={handleDownloadClick}
          className="p-2 ml-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors flex items-center justify-center w-9 h-9"
        >
          {isDownloading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <FiDownload className="w-5 h-5" />
          )}
        </a>
      </div>
    </div>
  );
}

export default DownloadCard;
