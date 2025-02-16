// import Layout from "@/";
import Hero from "@/app/components/Hero";
import Abstract from "@/app/components/Abstract";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import Layout from "@/app/components/Layout";
import Bibtex from "../components/Bibtex";
const gigsense = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Abstract Section */}
      <Abstract />

      {/* Carousel Section */}
      <Carousel />
      <Bibtex/>
      {/* Footer */}
      <Footer />
  </Layout>
  );
};

export default gigsense;
