import "./style.css";
import {
   Billing,
   Business,
   CardDeal,
   Clients,
   CTA,
   Footer,
   Navbar,
   Stats,
   Testimonials,
   Hero,
 } from "./components";
 
 
function App() {
  return (
    <div className=" body-color">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <Footer />
    </div>
  );
}

export default App;
