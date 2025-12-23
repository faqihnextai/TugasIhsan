import { ChevronLeft, FileText, Upload } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header with Back Button */}
      <div className="p-4 border-b-2 border-black">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-6 h-6" />
          <span>Kembali</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl">Berkas Saya</h1>
        </div>

        {/* User Information */}
        <div className="border-2 border-black bg-white p-4 space-y-3">
          <h3 className="font-medium">Informasi Pribadi</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">Nama</p>
              <p className="font-medium">Muhamad Arrafi Ramadhan</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-medium">Single</p>
            </div>
          </div>
        </div>

        {/* Document Section */}
        <div className="space-y-3">
          <h3 className="font-medium">Upload Transkip Nilai</h3>
          
          {/* Upload Area */}
          <div className="border-2 border-black bg-white p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center">
                <Upload className="w-8 h-8" />
              </div>
              <button className="px-6 py-2 border-2 border-black bg-white hover:bg-gray-50 transition-colors">
                Upload File
              </button>
            </div>
          </div>

          {/* Uploaded File */}
          <div className="border-2 border-black bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <p className="font-medium text-sm">Transkip_nilai_rafi.pdf</p>
                  <p className="text-xs text-gray-600">2.4 MB</p>
                </div>
              </div>
              <button className="text-sm underline">Lihat</button>
            </div>
          </div>
        </div>

        {/* Other Documents */}
        <div className="space-y-3">
          <h3 className="font-medium">Dokumen Lainnya</h3>
          
          {/* KTP */}
          <div className="border-2 border-black bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <p className="font-medium text-sm">KTP.pdf</p>
                  <p className="text-xs text-gray-600">1.1 MB</p>
                </div>
              </div>
              <button className="text-sm underline">Lihat</button>
            </div>
          </div>

          {/* Surat Keterangan Aktif */}
          <div className="border-2 border-black bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <p className="font-medium text-sm">Surat_Aktif_Kuliah.pdf</p>
                  <p className="text-xs text-gray-600">890 KB</p>
                </div>
              </div>
              <button className="text-sm underline">Lihat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
