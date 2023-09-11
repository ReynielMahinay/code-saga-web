import "./App.css";
import {
  Nav,
  Hero,
  Story,
  Features,
  Trailer,
  Download,
  Footer,
} from "./sections";
import Book from "./components/Book";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="md:padding-l md:padding-r  max-sm:px-8 max-md:px-10 bg-dark_blue relative overflow-hidden bg-hero bg-contain max-sm:bg-right max-sm:bg-cover bg-no-repeat bg-right	">
        <Hero />
        <Book color="red" />
      </section>
      <div className="blue-v absolute left-[150px] top-[1300px] w-[33%] h-[10%] z-[0]" />
      <section className=" md:padding-r md:padding-l md:padding-t max-sm:px-8 max-md:px-10  relative overflow-hidden ">
        <Book color="black" />
        <Book color="white" />
        <div className="blue-v absolute right-[150px] w-[33%] h-[40%] z-[0]" />
        <Story />
        <Features />
      </section>

      <section className="md:padding-r md:padding-l max-sm:px8 max-md:px-10 relative bg-trailer_bg bg-fit bg-no-repeat bg-center">
        <div className="blue-v absolute top-[97px] left-[170px]  w-[70%] h-[75%] z-[0]" />
        <Trailer />
      </section>
      <section className="relative">
        <Download />
      </section>
      <section className="bg-dark_blue">
        <Footer />
      </section>
    </main>
  );
}

export default App;
