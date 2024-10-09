import Topnav from "@/components/Topnav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Topnav />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
