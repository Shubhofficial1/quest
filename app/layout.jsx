import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Quest | Enjoy your Stay",
  description:
    "Quest is a platform that helps users find rental spaces in popular locations",
  keywords: "Holiday , India ,Quest",
};

const HomeLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default HomeLayout;
