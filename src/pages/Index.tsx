import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformFeatures from "@/components/PlatformFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <PlatformFeatures />
      <Footer />
    </div>
  );
};

export default Index;
