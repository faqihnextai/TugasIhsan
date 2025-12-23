import { ChevronLeft, Download, Upload } from 'lucide-react';

interface SubmissionPageProps {
  onNavigate: (page: string) => void;
}

export function SubmissionPage({ onNavigate }: SubmissionPageProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header with Back Button */}
      <div className="p-4 border-b-2 border-black">
        <button
          onClick={() => onNavigate('detail')}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-6 h-6" />
          <span>Kembali</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        <div>
          <h1 className="text-2xl">Pengajuan Beasiswa</h1>
          <p className="text-gray-600 mt-2">Ruang Guru</p>
        </div>

        {/* Download Formulir */}
        <div className="space-y-3">
          <h3 className="font-medium">Download Formulir</h3>
          <button className="w-full border-2 border-black bg-white p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
            <span>Formulir_Beasiswa_RuangGuru.pdf</span>
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Upload File */}
        <div className="space-y-3">
          <h3 className="font-medium">Upload File</h3>
          <div className="border-2 border-black bg-white p-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center">
                <Upload className="w-8 h-8" />
              </div>
              <button className="px-6 py-2 border-2 border-black bg-white hover:bg-gray-50 transition-colors">
                Pilih File
              </button>
              <p className="text-sm text-gray-600 text-center">
                Format: PDF, maksimal 5MB
              </p>
            </div>
          </div>
        </div>

        {/* Spacer for button */}
        <div className="h-20"></div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-6 border-t-2 border-black bg-white">
        <button
          onClick={() => onNavigate('tracking')}
          className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
