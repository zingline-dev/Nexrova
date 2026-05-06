import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle, Button } from '../styles/GlobalStyles';

const InvestmentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 60px;
`;

const PillarCard = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    background: #f8fafc;
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 1rem;
    color: #0f172a;
    font-weight: 700;
    margin: 0;
  }
`;

const WhyWinBox = styled.div`
  margin-top: 60px;
  padding: 50px;
  background: #0f172a;
  border-radius: 24px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    max-width: 1000px;
    margin: 0 auto 40px;
    opacity: 0.9;
    
    strong {
      color: #667eea;
    }
  }
`;

const CTAContainer = styled.div`
  margin-top: 80px;
  text-align: center;
`;

function Investment() {
  const pillars = [
    { title: "Product Development", icon: "🛠️" },
    { title: "Operational Setup", icon: "⚙️" },
    { title: "Professional Onboarding", icon: "👥" },
    { title: "Customer Acquisition", icon: "📣" },
    { title: "City-Level Expansion", icon: "🗺️" }
  ];

  return (
    <Section id="invest">
      <SectionTitle data-aos="fade-up">Investment Opportunity</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        Nexrova is seeking strategic investment support across five critical growth pillars.
      </SectionSubtitle>

      <InvestmentContainer>
        {pillars.map((pillar, idx) => (
          <PillarCard key={idx} data-aos="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="icon">{pillar.icon}</div>
            <h4>{pillar.title}</h4>
          </PillarCard>
        ))}
      </InvestmentContainer>

      <WhyWinBox data-aos="zoom-in">
        <h3>Why Nexrova Can Win</h3>
        <p>
          Nexrova combines <strong>strong operational focus</strong>, scalable technology architecture, 
          <strong>modern design systems</strong>, and hyperlocal execution strategy to build 
          a trusted and repeatable services ecosystem.
        </p>
        <Button>Join the Vision</Button>
      </WhyWinBox>
      
      <CTAContainer data-aos="fade-up">
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Interested in learning more about our roadmap?</p>
        <a href="mailto:invest@nexrova.in" style={{ color: '#667eea', fontWeight: '700', textDecoration: 'none', fontSize: '1.2rem' }}>
          Connect with Our Team →
        </a>
      </CTAContainer>
    </Section>
  );
}

export default Investment;
