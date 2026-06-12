// layouts/RootLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ 
        maxWidth: "80%", margin: "0 auto",
        }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}