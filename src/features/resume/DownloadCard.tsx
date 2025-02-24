import { FiDownload } from "react-icons/fi";
import useDownloadHandler from "@/hooks/useDownloadHandler";

type DownloadCardProps = {
  label: string;
  pdfPath: string;
};

function DownloadCard({ label, pdfPath }: DownloadCardProps) {
  const { isDownloading, handleDownloadClick } = useDownloadHandler();

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
