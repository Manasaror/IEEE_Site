import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from '@/modules/about/page';
import ActivitiesPage from '@/modules/activities/page';
import ContactPage from '@/modules/contact/page';
import HomePage from '@/modules/home/page';
import { TeamsPage } from '@/modules/teams/page';
import { NotFoundPage } from '@/pages/NotFoundPage';
import MainLayout from './layout/Layout';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
