'use client'
import { useAuth } from "@/context/AuthContext";
import Dashboard from "@/components/wallet/Dashboard";
import AuthPage from "@/components/auth/AuthPage";

const AuthWalletPage: React.FC = () => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className='bg-gradient-to-br from-[#2BAFD9] to-[#1a6a85] h-screen flex items-center justify-center'>
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  return user ? <Dashboard /> : <AuthPage />;
};

export default AuthWalletPage;