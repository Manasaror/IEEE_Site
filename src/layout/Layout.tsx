import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black text-white">
      <Header />
      {/* --------------------------- */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* ------------------------------ */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
