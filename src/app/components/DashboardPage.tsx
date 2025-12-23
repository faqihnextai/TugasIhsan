import { Search, GraduationCap, FileText, Folder } from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-2xl">Hi, Kiwil</h2>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Cari Baesiswa"
          className="w-full pl-10 pr-4 py-3 border-2 border-black bg-white"
        />
      </div>

      {/* Main Cards */}
      <div className="space-y-4">
        {/* Beasiswa Terbaru Card */}
        <button
          onClick={() => onNavigate('detail')}
          className="w-full border-2 border-black bg-white p-6 hover:bg-gray-50 transition-colors"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className="font-medium">Beasiswa Terbaru</span>
          </div>
        </button>

        {/* Proses Pengajuan Card */}
        <button
          onClick={() => onNavigate('tracking')}
          className="w-full border-2 border-black bg-white p-6 hover:bg-gray-50 transition-colors"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
            <span className="font-medium">Proses Pengajuan</span>
          </div>
        </button>

        {/* Berkas Saya Card */}
        <button
          onClick={() => onNavigate('profile')}
          className="w-full border-2 border-black bg-white p-6 hover:bg-gray-50 transition-colors"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center">
              <Folder className="w-8 h-8" />
            </div>
            <span className="font-medium">Berkas Saya</span>
          </div>
        </button>
      </div>
    </div>
  );
}
