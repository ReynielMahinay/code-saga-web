import "./App.css";
import { Nav, Hero, Story, Features } from "./sections";
function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l bg-dark_blue">
        <Hero />
      </section>
      <section className="  xl:padding-l sm:py-5 py-10 sm:px-16 px-8">
        <Story />
      </section>
      <section className=" xl:padding-l ">
        <Features />
      </section>
    </main>
  );
}

export default App;
