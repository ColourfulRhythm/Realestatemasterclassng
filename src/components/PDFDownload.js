import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFDownload = ({ onDownload }) => {
  const downloadPDF = () => {
    try {
      // Create a new PDF document in landscape format
      const pdf = new jsPDF('l', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Title page with clean background
      pdf.setFillColor(240, 248, 255);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      
      // Header
      pdf.setFillColor(0, 0, 0);
      pdf.rect(0, 0, pageWidth, 60, 'F');
      
      // Title
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Real Estate', pageWidth / 2, 25, { align: 'center' });
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'normal');
      pdf.text('The Foundation of Wealth & Society', pageWidth / 2, 45, { align: 'center' });
      
      // Main content area
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('A Comprehensive Guide to Real Estate Investment', pageWidth / 2, 100, { align: 'center' });
      
      // Key concept
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Food. Clothing. Shelter → Shelter = Real Estate', pageWidth / 2, 130, { align: 'center' });
      
      // Content in 3 columns
      const titleContent = [
        'Land + everything attached',
        'Every sector depends on it',
        'Multiple entry pathways',
        'Location determines value',
        'Buy low, sell high strategy',
        'Shared ownership benefits'
      ];
      
      const columnWidth = (pageWidth - 60) / 3;
      const leftX = 20;
      const middleX = leftX + columnWidth + 20;
      const rightX = middleX + columnWidth + 20;
      
      let yPos = 160;
      titleContent.forEach((item, index) => {
        const column = index % 3;
        const x = column === 0 ? leftX : column === 1 ? middleX : rightX;
        pdf.setFontSize(14);
        pdf.text(`• ${item}`, x, yPos);
        if (column === 2) yPos += 25;
      });
      
      // Footer
      pdf.setFillColor(0, 0, 0);
      pdf.rect(0, pageHeight - 40, pageWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.text('Masterclass Presentation', pageWidth / 2, pageHeight - 25, { align: 'center' });
      pdf.text('Real Estate: The Foundation of Wealth & Society', pageWidth / 2, pageHeight - 10, { align: 'center' });
      
      // Create presentation slides
      const slides = [
        {
          title: 'What is Real Estate?',
          subtitle: 'Land + everything attached to it',
          content: [
            'Land - Raw land & natural resources',
            'Residential - Homes, apartments, condos', 
            'Commercial - Offices, retail, hotels',
            'Industrial - Warehouses, factories'
          ]
        },
        {
          title: 'Why Real Estate is Everything',
          subtitle: 'Every sector depends on real estate',
          content: [
            'Entertainment & Culture',
            'Food & Agriculture', 
            'Tourism & Hospitality',
            'Logistics & Trade',
            'Banking & Finance',
            'Technology'
          ]
        },
        {
          title: 'Gateways into Real Estate',
          subtitle: 'Multiple pathways to enter the industry',
          content: [
            'Development - Build from scratch',
            'Sales & Marketing - Sell properties',
            'Flipping - Buy, renovate, sell',
            'Off-plan Investing - Buy before completion',
            'Leasing - Rent out properties'
          ]
        },
        {
          title: 'Types of Buildings',
          subtitle: 'Understanding different property types',
          content: [
            'Duplex - Two-story house',
            'Bungalow - Single-story house',
            'Terraces - Row of connected houses',
            'Apartments - Multi-unit buildings',
            'Lofts - Converted industrial spaces',
            'Maisonette - Two-story apartment'
          ]
        },
        {
          title: 'Power of Location',
          subtitle: 'Location determines price & growth',
          content: [
            'Mature Areas - Established, stable prices',
            'Developing Areas - Growth potential, lower prices',
            'Watch Migration - Population movement patterns',
            'Government Projects - Infrastructure development'
          ]
        },
        {
          title: 'Investment Strategy',
          subtitle: 'Buy before development → sell at maturity',
          content: [
            'Buy Low - Purchase in developing areas',
            'Sell High - Sell when area matures',
            'Like Stocks: Buy Low, Sell High',
            'Development → Maturity → Peak Value'
          ]
        },
        {
          title: 'Co-Ownership & Sub-Ownership',
          subtitle: 'Shared sqm ownership lowers barriers',
          content: [
            'Lower Barriers - Shared ownership accessible',
            'Bigger Opportunities - More people = bigger projects',
            'Shared Risk - Risk distributed among investors',
            'Together we access impossible opportunities'
          ]
        },
        {
          title: 'Breadth of the Industry',
          subtitle: 'Real estate touches every profession',
          content: [
            'Landscaping',
            'Interior Design',
            'Architecture',
            'Structural Engineering',
            'Quantity Surveying',
            'Land Surveying',
            'Facility Management'
          ]
        },
        {
          title: 'Land Flipping & Due Diligence',
          subtitle: 'Always verify before you buy',
          content: [
            'Check Documents - Verify with government',
            'Check Zoning - Residential/Commercial/Agricultural',
            'Verify Everything - Always do proper verification',
            'Check → Verify → Buy. Never skip steps'
          ]
        },
        {
          title: 'Role of a Surveyor',
          subtitle: 'Different professionals, different responsibilities',
          content: [
            'Lawyers - Handle documents & legal matters',
            'Surveyors - Handle coordinates & measurements',
            'Confirm Land at Government Registry',
            'Take Your Own Survey - Never rely solely on existing'
          ]
        },
        {
          title: 'Buying Family Land',
          subtitle: 'Extra precautions for family transactions',
          content: [
            'Meet All Members - Confirm no disputes exist',
            'Take Photos & Videos - Document signing process',
            'Register Deed - File immediately with authorities',
            'Family Land = Higher Risk - Take extra care'
          ]
        },
        {
          title: 'Key Documents',
          subtitle: 'Essential paperwork for every transaction',
          content: [
            'Registered Survey - Official land measurements',
            'Deed of Assignment - Transfer of ownership',
            'C of O - Certificate of Occupancy',
            'Governor\'s Consent - State approval for transfer',
            'Layout Plan Approval - Development plan approval'
          ]
        },
        {
          title: 'Specialized Land',
          subtitle: 'Different land types require different verification',
          content: [
            'Beachfront - Coastal office verification',
            'Agricultural - Agricultural zoning check',
            'Urban - Planning & zoning verification',
            'Each land type has specific regulations'
          ]
        }
      ];

      // Create slides with 3-column layout
      slides.forEach((slide, index) => {
        if (index > 0) {
          pdf.addPage();
        }
        
        // Clean background
        pdf.setFillColor(240, 248, 255);
        pdf.rect(0, 0, pageWidth, pageHeight, 'F');
        
        // Calculate column widths
        const columnWidth = (pageWidth - 60) / 3; // 3 columns with margins
        const leftX = 20;
        const middleX = leftX + columnWidth + 20;
        const rightX = middleX + columnWidth + 20;
        
        // Header (spans all 3 columns)
        pdf.setFillColor(0, 0, 0);
        pdf.rect(0, 0, pageWidth, 60, 'F');
        
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        pdf.setFont('helvetica', 'bold');
        pdf.text(slide.title, pageWidth / 2, 25, { align: 'center' });
        
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'normal');
        pdf.text(slide.subtitle, pageWidth / 2, 45, { align: 'center' });
        
        // Content in 3 columns
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'normal');
        
        // Distribute content across 3 columns
        const itemsPerColumn = Math.ceil(slide.content.length / 3);
        const leftItems = slide.content.slice(0, itemsPerColumn);
        const middleItems = slide.content.slice(itemsPerColumn, itemsPerColumn * 2);
        const rightItems = slide.content.slice(itemsPerColumn * 2);
        
        // Left column
        let yPos = 80;
        leftItems.forEach((item, itemIndex) => {
          pdf.text(`• ${item}`, leftX, yPos);
          yPos += 20;
        });
        
        // Middle column
        yPos = 80;
        middleItems.forEach((item, itemIndex) => {
          pdf.text(`• ${item}`, middleX, yPos);
          yPos += 20;
        });
        
        // Right column
        yPos = 80;
        rightItems.forEach((item, itemIndex) => {
          pdf.text(`• ${item}`, rightX, yPos);
          yPos += 20;
        });
        
        // Footer (spans all 3 columns)
        pdf.setFillColor(0, 0, 0);
        pdf.rect(0, pageHeight - 40, pageWidth, 40, 'F');
        
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(12);
        pdf.text(`Slide ${index + 1} of ${slides.length}`, pageWidth / 2, pageHeight - 25, { align: 'center' });
        pdf.text('Real Estate: The Foundation of Wealth & Society', pageWidth / 2, pageHeight - 10, { align: 'center' });
      });
      
      // Save the PDF
      pdf.save('Real-Estate-Masterclass.pdf');
      
      if (onDownload) {
        onDownload();
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-green-500/30"
    >
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-green-500/20 rounded-full">
            <FileText className="w-12 h-12 text-green-300" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Download Your Real Estate Guide
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Get a comprehensive PDF guide covering all the key concepts from this presentation
        </p>
        
        <motion.button
          onClick={downloadPDF}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <Download className="w-6 h-6" />
          Download PDF Guide
        </motion.button>
        
        <div className="mt-6 flex items-center justify-center gap-2 text-green-300">
          <CheckCircle className="w-5 h-5" />
          <span className="text-lg">Complete presentation summary included</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PDFDownload;
