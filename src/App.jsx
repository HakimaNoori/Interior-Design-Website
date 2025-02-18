import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import Brands from './Components/Brands/Brands';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

const App = () => {
    return (
      <main className="overflow-x-hidden">
            <Navbar />
        <Hero />
        <Brands />
        <Services />
        <Banner />
        <Banner2/>
      </main>
    );
}

export default App;