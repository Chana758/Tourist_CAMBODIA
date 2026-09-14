import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Home
import Banner from '../features/home/Banner';
import PopularDestinations from '../features/home/PopularDestinations';
import FunStats from '../features/home/FunStats';
import WhyVisitCambodia from '../features/home/WhyVisitCambodia';

// Provinces
import ProvinceOverview from '../features/provinces/ProvinceOverview';
import ProvinceList from '../features/provinces/ProvinceList';
import ProvinceDetail from '../features/provinces/ProvinceDetail';
import PhnomPenhExplore from '../features/provinces/PhnomPenhExplore';
import PhnomPenhDetail from '../features/provinces/PhnomPenhDetail';

// About / Contact / Auth
import AboutCambodia from '../features/about/AboutCambodia';
import TeamSection from '../features/about/TeamSection';
import ContactUs from '../features/contact/ContactUs';
import Login from '../features/auth/Login';
import SignUp from '../features/auth/SignUp';

const HomePage = () => (
  <>
    <Banner />
    <PopularDestinations />
    <FunStats />
    <WhyVisitCambodia />
  </>
);

const AboutPage = () => (
  <>
    <AboutCambodia />
    <TeamSection />
  </>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />

      <Route path="/phnompenh" element={<PhnomPenhExplore />} />

      <Route path="/phnompenh/:id" element={<PhnomPenhDetail />} />
      <Route path="/PhnomPenhExplore/:id" element={<PhnomPenhDetail />} />
      <Route path="/:slug/:id" element={<PhnomPenhDetail />} />

      <Route path="/province" element={<ProvinceOverview />} />
      <Route path="/provinces" element={<ProvinceOverview />} />

      <Route path="/provinces/:slug" element={<ProvinceList />} />
      <Route path="/provinces/:slug/:id" element={<ProvinceDetail />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/contact" element={<ContactUs />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;