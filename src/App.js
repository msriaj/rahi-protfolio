import Brands from "./Commponents/Brands/Brands";
import Contact from "./Commponents/Contact/Contact";
import Hero from "./Commponents/Hero/Hero";

import Steps from "./Commponents/Steps/Steps";
import Testimonial from "./Commponents/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Hero />
      <Steps />
      <Testimonial />
      <Brands />
      <Contact />
    </div>
  );
}

export default App;
