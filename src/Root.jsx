import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import All_Figma from "./components/Services/Figma/All_Figma";
import Figma_Details from "./components/Services/Figma/Figma_Details";
import All_Graphic from "./components/Services/Graphic/All_Graphic";
import Graphic_Details from "./components/Services/Graphic/Graphic_Details";
import All_Video from "./components/Services/Video/All_Video";
import Video_Details from "./components/Services/Video/Video_Details";
import All_Website from "./components/Services/Website/All_Website";
import Website_Details from "./components/Services/Website/Website_Details";
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
        <Route path="/video_Details/:id" element={<Video_Details />} />
        <Route path="/allWebsite" element={<All_Website />} />
        <Route path="/website_details/:id" element={<Website_Details />} />
        <Route path="/allGraphic" element={<All_Graphic />} />
        <Route path="/graphic_Details/:id" element={<Graphic_Details />} />
        <Route path="/allFigma" element={<All_Figma />} />
        <Route path="/figma_Details/:id" element={<Figma_Details />} />
      </Routes>
    </>
  );
}
