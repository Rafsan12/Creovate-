import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import All_Figma from "./components/Services/Figma/All_Figma";
import All_Graphic from "./components/Services/Graphic/All_Graphic";
import Product_Details from "./components/Services/Product_Details/Product_Details";
import All_Video from "./components/Services/Video/All_Video";
import All_Website from "./components/Services/Website/All_Website";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

export default function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/allVideo" element={<All_Video />} />

        <Route path="/allWebsite" element={<All_Website />} />

        <Route path="/allGraphic" element={<All_Graphic />} />

        <Route path="/allFigma" element={<All_Figma />} />

        <Route path="/product_details/:id" element={<Product_Details />} />
      </Routes>
    </>
  );
}
