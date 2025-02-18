import { FiDownload } from "react-icons/fi";

type DownloadCardProps = {
  label: string;
  pdfPath: string;
};

function DownloadCard({ label, pdfPath }: DownloadCardProps) {
  return (
    <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
        <a
          href={pdfPath}
          download
          className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          <FiDownload className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default DownloadCard;
