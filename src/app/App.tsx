import { useState } from 'react';
import { Header } from './components/Header';
import { DashboardPage } from './components/DashboardPage';
import { DetailPage } from './components/DetailPage';
import { SubmissionPage } from './components/SubmissionPage';
import { TrackingPage } from './components/TrackingPage';
import { ProfilePage } from './components/ProfilePage';
import { PDFExporter } from './components/PDFExporter';

type Page = 'dashboard' | 'detail' | 'submission' | 'tracking' | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isExporting, setIsExporting] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleStartExport = () => {
    setIsExporting(true);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* PDF Export Button */}
      <PDFExporter
        onStartExport={handleStartExport}
        onPageChange={handlePageChange}
      />

      {/* Mobile Frame */}
      <div className="w-full max-w-md h-[812px] border-4 border-black bg-white flex flex-col shadow-2xl">
        {/* App Title Bar */}
        <div className="bg-black text-white px-6 py-4 text-center">
          <h1 className="text-xl font-bold">INFO BEASISWA</h1>
        </div>

        {/* Header */}
        <Header />

        {/* Page Content */}
        <div id="current-page-content" className="flex-1 overflow-hidden bg-white">
          {currentPage === 'dashboard' && <DashboardPage onNavigate={handleNavigate} />}
          {currentPage === 'detail' && <DetailPage onNavigate={handleNavigate} />}
          {currentPage === 'submission' && <SubmissionPage onNavigate={handleNavigate} />}
          {currentPage === 'tracking' && <TrackingPage onNavigate={handleNavigate} />}
          {currentPage === 'profile' && <ProfilePage onNavigate={handleNavigate} />}
        </div>
      </div>
    </div>
  );
}