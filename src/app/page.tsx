import Header from "@/app/header";
import Services from "@/app/services";
import AboutUs from "@/app/aboutus";
import Footer from "@/app/footer";
import Process from "@/app/process";


export default function page() {
  return (
    <span className="bg-white flex flex-col">
      <Header />
      <Services />
      <AboutUs />
      <Process />
      <Footer />
    </span>
  );
}

