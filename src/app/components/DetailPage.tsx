import { ChevronLeft } from 'lucide-react';

interface DetailPageProps {
  onNavigate: (page: string) => void;
}

export function DetailPage({ onNavigate }: DetailPageProps) {
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

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Provider Name */}
        <div>
          <h1 className="text-3xl">Ruang Guru</h1>
        </div>

        {/* Deskripsi Section */}
        <div className="space-y-3">
          <h3 className="font-medium">Deskrpisi</h3>
          <div className="border-2 border-black bg-white p-4">
            <p className="text-sm">
              Program beasiswa Ruang Guru memberikan kesempatan kepada mahasiswa
              berprestasi untuk mengembangkan potensi akademik mereka dengan
              dukungan finansial dan mentoring.
            </p>
          </div>
        </div>

        {/* Persyaratan Section */}
        <div className="space-y-3">
          <h3 className="font-medium">Persyaratan</h3>
          <div className="border-2 border-black bg-white p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>D3/S1</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>IPK 3.00</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Aktif kuliah semester 3-7</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Melampirkan transkrip nilai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefit Section */}
        <div className="space-y-3">
          <h3 className="font-medium">Benefit</h3>
          <div className="border-2 border-black bg-white p-4">
            <p className="text-sm">Rp 1.000.000</p>
            <p className="text-sm mt-2">Dana pendidikan per semester</p>
          </div>
        </div>

        {/* Spacer for button */}
        <div className="h-20"></div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-6 border-t-2 border-black bg-white">
        <button
          onClick={() => onNavigate('submission')}
          className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors"
        >
          Ajukan
        </button>
      </div>
    </div>
  );
}
