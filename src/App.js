import Header from './components/Header'
import Statistics from './components/Statistics'
import { Boost } from './components/Boost';
import { Footer } from './components/Footer';
import { Shorten } from './components/Shorten';

function App() {
  return (
    <>
    <Header />
    <Shorten />
    <Statistics />
    <Boost />
    <Footer />
    </>
  );
}
export default App;
