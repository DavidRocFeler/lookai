
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import SphericalWaveBigger from '../SphericalWaveBigger';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useRouter();

  const handleRedirectComeBack = () => {
    navigation.push('/')
  }

  return (
    <div className="justify-center bg-gradient-to-br from-[#2BAFD9] to-[#1a6a85] h-screen flex items-center p-4 relative">
      <SphericalWaveBigger/>
       <Button 
            className="text-white bg-[#2BAFD9] hover:bg-lokai-blue-dark absolute top-4 right-4"
            onClick={handleRedirectComeBack}
            aria-label="Toggle menu"
            >
            <X className="h-6 w-6" />
        </Button>
      <Card className="w-full max-w-md shadow-xl bg-card border-0 wallet-shadow">
        {isLogin ? (
          <LoginForm onToggleRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggleLogin={() => setIsLogin(true)} />
        )}
      </Card>
    </div>
  );
};

export default AuthPage;
