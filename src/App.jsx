import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import AboutUs from "./pages/AboutUs.jsx";

import ServicePage from "./pages/ServicePage.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
