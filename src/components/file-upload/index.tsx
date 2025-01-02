import React, { useState, useEffect } from 'react';
import { Uppy, UppyFile } from '@uppy/core';
import type { Meta, Body } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import ContractForm from '../contract-form';
import { ContractData } from '../../types/contract';

// Import required CSS
import '@uppy/core/dist/style.min.css';
import '@uppy/drag-drop/dist/style.min.css';

const FileUpload = () => {
  const [extractedData, setExtractedData] = useState<Partial<ContractData> | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);

  // Use useState hook with initializer function to prevent re-instantiation
  const [uppy] = useState(() => new Uppy({
    restrictions: {
      maxNumberOfFiles: 1,
      allowedFileTypes: ['.pdf', '.docx'],
    },
    autoProceed: true,
  }));

  useEffect(() => {
    // Configure file upload handling
    uppy.on('file-added', (file: UppyFile<Meta, Body>) => {
      console.log('File added:', file);
      mockExtractedData(file);
    });
  }, [uppy])

  // Mock data processing/extraction
  const mockExtractedData = async (file: UppyFile<Meta, Body>) => {
    setIsExtracting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockData: Partial<ContractData> = {
      type: "Record",
      artist: "Sarah Chen",
      fee_amount: 100000,
      start_date: "2024-03-20",
      work_for_hire: true,
      original_final_name: file.name
    };

    setExtractedData(mockData);
    setIsExtracting(false);
  };

  // Set the locale for the Uppy instance
  uppy.setOptions({
    locale: {
      strings: {
        dropHereOr: 'Drop your file(s) here or %{browse}',
        browse: 'browse',
      }
    }
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <h1 className="text-7xl text-white text-center mb-4">
        The operation platform for
        <br />
        the <span className="text-[#0c51ff]">new music business</span>
      </h1>
      <p className="text-lg text-center text-gray-300 mb-8">
        Gain insights into your music contracts with the power of AI
      </p>

      {!extractedData && (
        <div className="flex items-center justify-center h-64">
          <DragDrop uppy={uppy} />
        </div>
      )}

      {isExtracting && (
        <div className="text-white mt-4">
          Extracting contact details...
        </div>
      )}

      {extractedData && !isExtracting && (
        <ContractForm />
      )}
    </div>
  );
};

export default FileUpload;
