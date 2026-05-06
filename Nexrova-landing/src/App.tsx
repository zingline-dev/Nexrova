import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GlobalStyle, AppContainer } from './styles/GlobalStyles';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MarketOpportunity from './components/MarketOpportunity';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import ProductOverview from './components/ProductOverview';
import BusinessModel from './components/BusinessModel';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import TechStack from './components/TechStack';
import OperationalStrategy from './components/OperationalStrategy';
import Investment from './components/Investment';
import WhyNexrova from './components/WhyNexrova';
import Appendix from './components/Appendix';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <Hero />
        <MarketOpportunity />
        <ProblemStatement />
        <Solution />
        <ProductOverview />
        <BusinessModel />
        <CompetitiveAdvantage />
        <TechStack />
        <OperationalStrategy />
        <Investment />
        <WhyNexrova />
        <Appendix />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
