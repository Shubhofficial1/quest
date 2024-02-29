import Image from "next/image";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-auto bg-gray-200">
      <div className="container flex flex-col items-center justify-between px-4 mx-24 md:flex-row">
        <div className="mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" className="w-auto h-8" />
        </div>

        <div>
          <p className="mt-2 text-sm text-gray-500 md:mt-0">
            &copy; {currentYear} Quest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
