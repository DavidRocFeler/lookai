
'use client'
import React, { useRef } from 'react';
import { useStorage } from '@/context/StorageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Download, Trash2, FileText, File, Code } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const StorageTab: React.FC = () => {
  const { files, uploadFile, deleteFile, downloadFile } = useStorage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await uploadFile(selectedFile);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) {
      return <File className="h-5 w-5  text-lokai-blue" />;
    } else if (type.includes('word') || type.includes('document')) {
      return <Code className="h-5 w-5  text-lokai-blue" />;
    } else {
      return <FileText className="h-5 w-5  text-lokai-blue" />;
    }
  };

  return (
    <Card className="p-6 wallet-shadow bg-[#414244] border-[#535456]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Secure File Storage</h3>
        
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".txt,.pdf,.doc,.docx"
            className="hidden"
          />
          <Button onClick={handleUploadClick} className='bg-lokai-blue hover:bg-lokai-blue-dark'>
            <Upload className="h-4 w-4 mr-2" />
            Upload File
          </Button>
        </div>
      </div>
      
      {files.length === 0 ? (
        <div className="text-center py-8">
          <div className="mx-auto w-12 h-12 border-solid border-[1px] border-lokai-blue bg-transparent rounded-full flex items-center justify-center mb-3">
            <FileText className="h-6 w-6 text-lokai-blue-light" />
          </div>
          <p className="text-lokai-blue">No files stored yet</p>
          <p className="text-sm mt-1 text-lokai-blue">
            Upload documents to store them securely
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table >
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead className='text-[#a6abb5]'>File</TableHead>
                <TableHead className='text-[#a6abb5]' > Type</TableHead>
                <TableHead className='text-[#a6abb5]' >Size</TableHead>
                <TableHead className='text-[#a6abb5]'>Date</TableHead>
                <TableHead className='text-[#a6abb5]'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            
            <TableBody className='hover:bg-transparent text-[#a6abb5]'>
              {files.map((file) => (
                <TableRow key={file.id} className='hover:bg-transparent'>
                  <TableCell>
                    <div className="flex items-center">
                      {getFileIcon(file.type)}
                      <span className="ml-2">{file.name}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    {file.type.split('/')[1].toUpperCase()}
                  </TableCell>
                  
                  <TableCell>
                    {formatBytes(file.size)}
                  </TableCell>
                  
                  <TableCell>
                    {formatDate(file.uploadDate)}
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => downloadFile(file.id)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteFile(file.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};

export default StorageTab;
