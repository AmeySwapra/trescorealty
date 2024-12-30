import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import RealEstatePage from "./pages/RealEstatePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ListingPage from "./pages/ListingPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import ResidentialRent from "./pages/ResidentialRent";
import ResidentialSale from "./pages/ResidentialSale";
import CommericalRent from "./pages/CommericalRent";
import CommericalSale from "./pages/CommericalSale";
import IndustrialRent from "./pages/IndustrialRent";
import IndustrialSale from "./pages/IndustrialSale";
import Presale from "./pages/Presale";
import Goa from "./pages/Goa";
import DisStress from "./pages/DisStress";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us/blogs" element={<BlogPage />} />
          <Route path="/about-us/consultant" element={<RealEstatePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/residential/rent" element={<ResidentialRent />} />
          <Route path="/residential/sale" element={<ResidentialSale />} />
          <Route path="/commercial/rent" element={<CommericalRent />} />
          <Route path="/commercial/sale" element={<CommericalSale />} />
          <Route path="/industrial/rent" element={<IndustrialRent />} />
          <Route path="/industrial/sale" element={<IndustrialSale />} />
          <Route path="/pre-leased" element={<Presale />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/distress-sale" element={<DisStress />} />
          <Route path="/property-details" element={<PropertyDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
