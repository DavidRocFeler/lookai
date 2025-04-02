'use client'
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthPage from "@/components/auth/AuthPage";


const AuthWalletPage: React.FC = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter(); // Obtiene el objeto router

  useEffect(() => {
    // Redirige a /wallet cuando el usuario está autenticado y no está loading
    if (!isLoading && user) {
      router.push('/wallet');
    }
  }, [user, isLoading, router]); // Dependencias del efecto

  if (isLoading) {
    return (
      <div className='bg-gradient-to-br from-[#2BAFD9] to-[#1a6a85] h-screen flex items-center justify-center'>
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Si no hay usuario y no está cargando, muestra AuthPage
  return <AuthPage />;
};

export default AuthWalletPage;