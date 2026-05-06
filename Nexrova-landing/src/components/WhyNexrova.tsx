import styled from 'styled-components';
import { Section, SectionTitle, GridContainer, Card } from '../styles/GlobalStyles';

const StrengthCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }

  h3 {
    color: #667eea;
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const ValuePropositions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .value-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;

    .number {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .content {
      h4 {
        color: #333;
        margin: 0 0 8px 0;
        font-weight: 600;
        font-size: 1.1rem;
      }

      p {
        color: #666;
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.5;
      }
    }
  }
`;

function WhyNexrova() {
  return (
    <Section id="why-nexrova">
      <SectionTitle data-aos="fade-up">Why Nexrova Can Win</SectionTitle>

      <GridContainer style={{ marginBottom: '60px' }}>
        <StrengthCard data-aos="fade-up">
          <div className="icon">🎯</div>
          <h3>Strong Operational Focus</h3>
          <p>Hyperlocal execution with deep market understanding and quality control</p>
        </StrengthCard>

        <StrengthCard data-aos="fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="icon">🏗️</div>
          <h3>Scalable Architecture</h3>
          <p>Cloud-native platform built for multi-city, multi-category expansion</p>
        </StrengthCard>

        <StrengthCard data-aos="fade-up" style={{ transitionDelay: '0.2s' }}>
          <div className="icon">🎨</div>
          <h3>Modern Design System</h3>
          <p>Intuitive, trust-first interfaces that prioritize user safety and transparency</p>
        </StrengthCard>

        <StrengthCard data-aos="fade-up" style={{ transitionDelay: '0.3s' }}>
          <div className="icon">⚡</div>
          <h3>Execution Strategy</h3>
          <p>Clear phased roadmap with measurable milestones and realistic timelines</p>
        </StrengthCard>
      </GridContainer>

      <ValuePropositions data-aos="fade-up">
        <div>
          <h3 style={{ color: '#667eea', marginBottom: '30px' }}>For Customers</h3>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Transparent Pricing</h4>
              <p>No hidden charges - see exact cost before booking</p>
            </div>
          </div>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Verified Professionals</h4>
              <p>KYC verified, background checked, and rated professionals</p>
            </div>
          </div>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Fast & Reliable</h4>
              <p>Quick booking, real-time tracking, and timely completion</p>
            </div>
          </div>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Safe & Secure</h4>
              <p>Encrypted payments and dispute resolution mechanisms</p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ color: '#667eea', marginBottom: '30px' }}>For Professionals</h3>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Regular Work</h4>
              <p>Consistent bookings without dependent on local networking</p>
            </div>
          </div>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Fast Payouts</h4>
              <p>Weekly or daily settlements without payment delays</p>
            </div>
          </div>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Digital Tools</h4>
              <p>App-based job management, navigation, and earnings tracking</p>
            </div>
          </div>
          <div className="value-item">
            <div className="number">✓</div>
            <div className="content">
              <h4>Growth Potential</h4>
              <p>Build reputation, increase earnings, and access better opportunities</p>
            </div>
          </div>
        </div>
      </ValuePropositions>
    </Section>
  );
}

export default WhyNexrova;
