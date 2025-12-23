import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FileDown, Loader2 } from 'lucide-react';

interface PDFExporterProps {
  onStartExport: () => void;
  onPageChange: (page: string) => void;
}

export function PDFExporter({ onStartExport, onPageChange }: PDFExporterProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentExportPage, setCurrentExportPage] = useState('');

  const pages = [
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'detail', name: 'Detail Beasiswa' },
    { id: 'submission', name: 'Form Pengajuan' },
    { id: 'tracking', name: 'Status Tracking' },
    { id: 'profile', name: 'Berkas Pribadi' }
  ];

  const captureScreenshot = async (elementId: string): Promise<string> => {
    // Wait for page to render
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = document.getElementById(elementId);
    if (!element) throw new Error(`Element ${elementId} not found`);

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });

    return canvas.toDataURL('image/png');
  };

  const exportToPDF = async () => {
    setIsExporting(true);
    setProgress(0);
    onStartExport();

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        setCurrentExportPage(pages[i].name);
        setProgress(((i) / pages.length) * 100);

        // Navigate to the page
        onPageChange(pages[i].id);
        
        // Capture screenshot
        const imgData = await captureScreenshot('current-page-content');

        if (i > 0) {
          pdf.addPage();
        }

        // Add page title
        pdf.setFontSize(10);
        pdf.setTextColor(100);
        pdf.text(pages[i].name, pageWidth / 2, 10, { align: 'center' });

        // Add image
        const imgWidth = pageWidth - 20;
        const imgHeight = (pageHeight - 30);
        
        pdf.addImage(imgData, 'PNG', 10, 15, imgWidth, imgHeight);

        // Add page number
        pdf.setFontSize(8);
        pdf.text(
          `Page ${i + 1} of ${pages.length}`,
          pageWidth / 2,
          pageHeight - 5,
          { align: 'center' }
        );
      }

      setProgress(100);
      
      // Save PDF
      pdf.save('INFO_BEASISWA_Wireframe.pdf');
      
      // Wait a bit before returning to dashboard
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Return to dashboard
      onPageChange('dashboard');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Terjadi kesalahan saat membuat PDF. Silakan coba lagi.');
      onPageChange('dashboard');
    } finally {
      setIsExporting(false);
      setProgress(0);
      setCurrentExportPage('');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={exportToPDF}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        {isExporting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <div className="flex flex-col items-start">
              <span className="text-xs">Exporting...</span>
              <span className="text-xs">{currentExportPage} ({Math.round(progress)}%)</span>
            </div>
          </>
        ) : (
          <>
            <FileDown className="w-5 h-5" />
            <span>Export to PDF</span>
          </>
        )}
      </button>
    </div>
  );
}