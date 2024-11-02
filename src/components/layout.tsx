import React, { ReactNode } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="bg-primary">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
