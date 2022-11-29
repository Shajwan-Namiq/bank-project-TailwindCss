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
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
