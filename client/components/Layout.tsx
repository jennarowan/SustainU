import React, { ReactNode } from "react";
import Navigation from "./Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
