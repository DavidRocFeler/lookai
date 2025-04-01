
'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StoredFile } from '@/interfaces/types';
import { useAuth } from './AuthContext';
import { useToast } from '@/components/ui/use-toast';

interface StorageContextType {
  files: StoredFile[];
  uploadFile: (file: File) => Promise<void>;
  deleteFile: (id: string) => void;
  downloadFile: (id: string) => void;
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [files, setFiles] = useState<StoredFile[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      const savedFiles = localStorage.getItem(`agent_files_${user.id}`);
      if (savedFiles) {
        setFiles(JSON.parse(savedFiles));
      } else {
        setFiles([]);
      }
    } else {
      setFiles([]);
    }
  }, [user]);

  const saveFiles = (newFiles: StoredFile[]) => {
    if (user) {
      localStorage.setItem(`agent_files_${user.id}`, JSON.stringify(newFiles));
      setFiles(newFiles);
    }
  };

  const uploadFile = async (file: File): Promise<void> => {
    try {
      if (!user) throw new Error("You must be logged in to upload files");
      
      // Check file type
      const allowedTypes = ['text/plain', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error("File type not supported. Please upload txt, pdf, doc, or docx files.");
      }
      
      // Read file as base64
      const reader = new FileReader();
      const fileContent = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      
      const newFile: StoredFile = {
        id: uuidv4(),
        name: file.name,
        type: file.type,
        size: file.size,
        content: fileContent,
        uploadDate: Date.now()
      };
      
      const newFiles = [...files, newFile];
      saveFiles(newFiles);
      
      toast({
        title: "File uploaded",
        description: `${file.name} has been added to your storage`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Failed to upload file",
      });
      console.error("File upload error:", error);
    }
  };

  const deleteFile = (id: string): void => {
    try {
      if (!user) throw new Error("You must be logged in to delete files");
      
      const newFiles = files.filter(file => file.id !== id);
      saveFiles(newFiles);
      
      toast({
        title: "File deleted",
        description: "The file has been removed from your storage",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Delete failed",
        description: error instanceof Error ? error.message : "Failed to delete file",
      });
      console.error("File delete error:", error);
    }
  };

  const downloadFile = (id: string): void => {
    try {
      if (!user) throw new Error("You must be logged in to download files");
      
      const file = files.find(f => f.id === id);
      if (!file) throw new Error("File not found");
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = file.content;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "File download",
        description: `${file.name} is being downloaded`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Download failed",
        description: error instanceof Error ? error.message : "Failed to download file",
      });
      console.error("File download error:", error);
    }
  };

  return (
    <StorageContext.Provider value={{ files, uploadFile, deleteFile, downloadFile }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context;
};
