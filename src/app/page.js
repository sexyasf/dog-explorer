import { Breeds } from "./components/breeds";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Breeds />
      <Gallery />
      <Footer />
    </main>
  );
}
