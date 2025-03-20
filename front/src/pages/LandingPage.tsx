'use client'
import React from 'react';
import Navbar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ModulesSection from '@/components/ModulesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import FaqSection from '@/components/FaqQuestions';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useThemeStore, Theme } from '@/store/useThemeStore';
import { useEffect } from 'react';
import "../app/globals.css"
import SphericalWaveBigger from '@/components/SphericalWaveBigger';

const LandingPage = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, [setTheme]);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[3.4rem] xl:pt-[4.5rem]">
        <SphericalWaveBigger/>
        <HeroSection />
        <BenefitsSection />
        <ModulesSection />
        {/* <CaseStudiesSection /> */}
        <ProcessSection />
        <TrustSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;