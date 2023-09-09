import "./App.css";
import { Nav, Hero, Story, Features } from "./sections";
import RedBook from "./components/RedBook";
import WhiteBook from "./components/WhiteBook";
import BlackBook from "./components/BlackBook";

function App() {
  return (
    <main className="relative">
      <Nav />

      <section className="md:padding-l md:padding-r  max-sm:px-8 max-md:px-10 bg-dark_blue relative overflow-hidden">
        <Hero />
        <RedBook />
      </section>
      <section className=" md:padding-r md:padding-l md:padding-t max-sm:px-8 max-md:px-10  relative overflow-hidden">
        <WhiteBook />
        <BlackBook />
        <Story />

        <Features />
      </section>
    </main>
  );
}

export default App;
