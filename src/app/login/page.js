// src/app/login/page.js
'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Importación dinámica del componente para evitar SSR
const LoginPage = dynamic(() => import('./LoginPage'), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-8">Cargando...</div>}>
      <LoginPage />
    </Suspense>
  );
}
