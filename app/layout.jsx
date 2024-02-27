import "../assets/styles/globals.css";

export const metadata = {
  title: "Quest",
  description:
    "Quest is an app made with nextjs & tailwind css for helping travellers travel acrosss the beautiful landcapes of the world",
  keywords: "quest , travel , holiday",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
