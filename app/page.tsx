import { CarouselDemo } from "./components/CarouselDemo";
import SubHeader from "./components/Header/SubHeader";
import Header from "./components/Header/Header";
import { Navbar } from "./components/NavBarDemo";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row">
        <div id="content" className="w-full">
          <header>
            <SubHeader />
            <Header />
            <Navbar />
          </header>
          <div id="hero">
            <CarouselDemo />
          </div>
          <div className="h-[150vh]" />
        </div>
      </main>
    </>
  );
}
