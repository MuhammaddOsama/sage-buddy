import Header from "@/components/Header";
import Home from "./home/page";
import Topnav from "@/components/Topnav";
import Footer from "@/components/Footer";

export default function Entrypoint() {
  return (
    <>
      <Topnav />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
