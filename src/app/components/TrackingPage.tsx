import { ChevronLeft, Circle, CheckCircle2 } from 'lucide-react';

interface TrackingPageProps {
  onNavigate: (page: string) => void;
}

export function TrackingPage({ onNavigate }: TrackingPageProps) {
  const steps = [
    { label: 'Ajukan', completed: true },
    { label: 'Upload', completed: true },
    { label: 'Vertifikasi', completed: false },
    { label: 'Seleksi', completed: false },
    { label: 'Cek Hasil', completed: false },
  ];

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
          <h1 className="text-2xl">Proses Pengajuan</h1>
        </div>

        {/* Submitted Scholarship Card */}
        <div className="border-2 border-black bg-white p-4 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Ruang Guru</h3>
              <p className="text-sm text-gray-600 mt-1">
                Diajukan: 20 Desember 2024
              </p>
            </div>
            <div className="px-3 py-1 border-2 border-black bg-white">
              <span className="text-sm font-medium">Pending</span>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="border-2 border-black bg-white p-6">
          <h3 className="font-medium mb-6">Status Proses</h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-start">
                <div className="flex flex-col items-center mr-4">
                  {step.completed ? (
                    <CheckCircle2 className="w-6 h-6 fill-black stroke-white" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                  {index < steps.length - 1 && (
                    <div
                      className={`w-0.5 h-12 mt-2 ${
                        step.completed ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 pt-0.5">
                  <p className={step.completed ? 'font-medium' : 'text-gray-600'}>
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Submitted Scholarships */}
        <div className="border-2 border-black bg-white p-4 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">LPDP</h3>
              <p className="text-sm text-gray-600 mt-1">
                Diajukan: 15 Desember 2024
              </p>
            </div>
            <div className="px-3 py-1 border-2 border-black bg-white">
              <span className="text-sm font-medium">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
