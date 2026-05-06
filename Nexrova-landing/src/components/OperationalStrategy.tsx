import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const PhaseCard = styled.div`
  background: white;
  padding: 50px;
  border-radius: 32px;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #667eea;
  }

  h3 {
    font-size: 1.5rem;
    color: #0f172a;
    margin-bottom: 8px;
    font-weight: 800;
  }

  .subtitle {
    color: #667eea;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 12px 0;
      color: #475569;
      border-bottom: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      gap: 12px;

      &:last-child {
        border-bottom: none;
      }

      &::before {
        content: '→';
        color: #667eea;
        font-weight: 800;
      }
    }
  }
`;

function OperationalStrategy() {
  return (
    <Section id="strategy">
      <SectionTitle data-aos="fade-up">Operational Strategy</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        A phased, systematic rollout designed to ensure quality control and operational excellence.
      </SectionSubtitle>

      <StrategyGrid>
        <PhaseCard data-aos="fade-right">
          <span className="subtitle">Core Services Launch</span>
          <h3>Phase 1: Foundation</h3>
          <ul>
            <li>Home Cleaning Services</li>
            <li>Professional Electrician Services</li>
            <li>Operational Logistics Setup</li>
            <li>Hyperlocal Supply Aggregation</li>
          </ul>
        </PhaseCard>

        <PhaseCard data-aos="fade-left">
          <span className="subtitle">Vertical Expansion</span>
          <h3>Phase 2: Growth</h3>
          <ul>
            <li>Plumbing Solutions</li>
            <li>Salon & Wellness Services</li>
            <li>Appliance Repair Verticals</li>
            <li>Regional Market Expansion</li>
          </ul>
        </PhaseCard>
      </StrategyGrid>
    </Section>
  );
}

export default OperationalStrategy;
