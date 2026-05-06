import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle, GridContainer } from '../styles/GlobalStyles';

const MarketGrid = styled(GridContainer)`
  margin-top: 60px;
`;

const MarketCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
  }

  .icon {
    width: 48px;
    height: 48px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    color: #0f172a;
    font-weight: 700;
    margin: 0;
  }

  p {
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }
`;

const MarketHighlight = styled.div`
  margin-top: 80px;
  padding: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 32px;
  color: white;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

function MarketOpportunity() {
  const drivers = [
    {
      title: "Rapid Urbanization",
      desc: "Expanding urban centers creating concentrated demand for professional home services.",
      icon: "🏙️"
    },
    {
      title: "Dual-Income Households",
      desc: "Working professionals with higher disposable income but limited time for home tasks.",
      icon: "👨‍👩‍👧"
    },
    {
      title: "App-Based Convenience",
      desc: "Growing preference for verified professionals over unorganized local vendors.",
      icon: "📱"
    }
  ];

  return (
    <Section id="market">
      <SectionTitle data-aos="fade-up">Market Opportunity</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        India’s home services market is rapidly expanding due to structural shifts in consumer behavior.
      </SectionSubtitle>

      <MarketGrid>
        {drivers.map((driver, idx) => (
          <MarketCard key={idx} data-aos="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="icon">{driver.icon}</div>
            <h4>{driver.title}</h4>
            <p>{driver.desc}</p>
          </MarketCard>
        ))}
      </MarketGrid>

      <MarketHighlight data-aos="zoom-in">
        <h3>Unorganized to Organized</h3>
        <p>
          The massive whitespace in the Indian market allows Nexrova to capture significant 
          market share by delivering trust and standardization where it's needed most.
        </p>
      </MarketHighlight>
    </Section>
  );
}

export default MarketOpportunity;
