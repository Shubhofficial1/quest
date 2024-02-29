import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-800",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6  rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block px-4 py-2 text-white  rounded-lg hover:opacity-80`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
