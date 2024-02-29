import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Contact from "./Component/Contact/Contact";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Program from "./Component/Program/Program";
import Testimonial from "./Component/Testimonial/Testimonial";
import Title from "./Component/Title/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle='Our Program' title='What We Offer'/>
        <Program />
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
      </div>
     
    </>
  );
};

export default App;
