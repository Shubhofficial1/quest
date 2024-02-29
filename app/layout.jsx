import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/styles/globals.css";

export const metadata = {
  title: "Quest | Enjoy your Stay",
  description:
    "Quest is a platform that helps users find rental spaces in popular locations",
  keywords: "Holiday , India ,Quest",
};

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default HomeLayout;
