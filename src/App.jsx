import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop"; // Import ScrollToTop
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import BPM from "./pages/BPM";
import ITConsultancy from "./pages/ITConsultancy";
import BI from "./pages/BI";
import Management from "./pages/Management";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> {/* Ensure scrolling to top on route change */}
      <Navbar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "bpm", element: <BPM /> },
      { path: "bi", element: <BI /> },
      { path: "it-consulting", element: <ITConsultancy /> },
      { path: "management", element: <Management /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
