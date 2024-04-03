import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import AboutUs from "./pages/AboutUs.jsx";

import ServicePage from "./pages/ServicePage.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Gallery from "./pages/Gallery.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <WhatsAppButton />
              <ScrollToTopButton />
              <MainPage />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <WhatsAppButton />
              <ScrollToTopButton />
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <WhatsAppButton />
              <ServicePage />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <WhatsAppButton />
              <ScrollToTopButton />
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <WhatsAppButton />
              <ContactPage />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
