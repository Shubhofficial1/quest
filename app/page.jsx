import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      Home Page
      <Link href={"/properties/add"}>Add Property</Link>
    </div>
  );
};

export default HomePage;
