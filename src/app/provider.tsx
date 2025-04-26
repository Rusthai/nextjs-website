"use client";
import React from 'react'
import { AnimatePresence } from 'motion/react'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { PrimeReactProvider } from 'primereact/api';
import { LanguageProvider } from '@/context/language';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimeReactProvider>
        <LanguageProvider>
          <Header />
          <AnimatePresence presenceAffectsLayout>
              {children}
          </AnimatePresence>
          <Footer />
        </LanguageProvider>
      </PrimeReactProvider>
    </>
  )
}

export default Provider