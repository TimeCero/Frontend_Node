import { Suspense } from 'react';
import SuccessPage from './SuccessPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SuccessPage />
    </Suspense>
  );
}
