import styled from 'styled-components';
import { Section, SectionTitle, GridContainer, Card } from '../styles/GlobalStyles';

const AdvCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: white;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: #667eea;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.1);
    
    &::before {
      opacity: 1;
    }
  }

  .num {
    font-size: 0.9rem;
    font-weight: 800;
    color: #667eea;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  h4 {
    font-size: 1.25rem;
    color: #0f172a;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }
`;

function CompetitiveAdvantage() {
  const advantages = [
    {
      title: "Faster Service Allocation",
      desc: "Smart matching algorithms reduce time-to-confirmation dramatically vs. manual coordination."
    },
    {
      title: "Hyperlocal Operational Model",
      desc: "City-first, neighborhood-deep strategy ensures service quality before scale."
    },
    {
      title: "Strong Professional Verification",
      desc: "Background checks and skill assessments build a trusted supply-side marketplace."
    },
    {
      title: "WhatsApp-First Customer Support",
      desc: "Customer support over the channel users already trust and use daily in India."
    },
    {
      title: "Scalable Operational Architecture",
      desc: "Cloud-native, microservices-ready infrastructure built for rapid city expansion."
    },
    {
      title: "Modern Trust-First UX",
      desc: "200+ screens of high-fidelity design prioritizing customer confidence at every step."
    }
  ];

  return (
    <Section id="advantage">
      <SectionTitle data-aos="fade-up">Competitive Advantage</SectionTitle>
      <GridContainer>
        {advantages.map((adv, index) => (
          <AdvCard key={index} data-aos="fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="num">0{index + 1}</div>
            <h4>{adv.title}</h4>
            <p>{adv.desc}</p>
          </AdvCard>
        ))}
      </GridContainer>
    </Section>
  );
}

export default CompetitiveAdvantage;
