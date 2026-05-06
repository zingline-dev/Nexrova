import styled, { keyframes } from 'styled-components';
import { Section, Button } from '../styles/GlobalStyles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 140px;
  gap: 60px;
  position: relative;
  overflow: hidden;

  @media (max-width: 968px) {
    flex-direction: column;
    min-height: auto;
    padding-top: 100px;
    text-align: center;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  flex: 1.2;
  z-index: 2;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 100px;
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
  gap: 8px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #667eea;
    border-radius: 50%;
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
  color: #0f172a;
  
  span {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  color: #475569;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 900px;

  @media (max-width: 968px) {
    margin: 0 auto 40px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 968px) {
    width: 100%;
    max-width: 500px;
  }
`;

const VisualCard = styled.div`
  width: 420px;
  aspect-ratio: 0.85;
  background: white;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px;
  animation: ${float} 6s infinite ease-in-out;
  border: 1px solid rgba(102, 126, 234, 0.1);

  @media (max-width: 480px) {
    width: 100%;
  }

  .app-preview {
    flex: 1;
    background: #f8fafc;
    border-radius: 20px;
    border: 1px dashed #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
`;

const StatsStrip = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;

  @media (max-width: 968px) {
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const Stat = styled.div`
  div:first-child {
    font-size: 1.5rem;
    font-weight: 800;
    color: #0f172a;
  }
  div:last-child {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent data-aos="fade-right">
        <Badge>Investor Pitch Deck · 2025</Badge>
        <HeroTitle>
          The Future of<br />
          <span>Home Services</span><br />
          is Here.
        </HeroTitle>
        <HeroSubtitle>
          Nexrova is a hyperlocal on-demand marketplace connecting urban customers 
          with <strong>verified service professionals</strong> — fast, transparent, and trusted.
        </HeroSubtitle>
        <HeroButtons>
          <Button>Explore the Pitch</Button>
          <Button style={{ background: 'transparent', color: '#667eea', border: '1px solid #667eea', boxShadow: 'none' }}>
            Investment Details
          </Button>
        </HeroButtons>
        
        <StatsStrip>
          <Stat>
            <div>200+</div>
            <div>Screens Designed</div>
          </Stat>
          <Stat>
            <div>5+</div>
            <div>Categories</div>
          </Stat>
          <Stat>
            <div>30%</div>
            <div>Commission</div>
          </Stat>
        </StatsStrip>
      </HeroContent>

      <HeroVisual data-aos="fade-left">
        <VisualCard>
          <div className="app-preview">⚡</div>
          <div style={{ marginTop: '20px' }}>
            <div style={{ width: '60%', height: '12px', background: '#e2e8f0', borderRadius: '6px', marginBottom: '10px' }}></div>
            <div style={{ width: '40%', height: '12px', background: '#f1f5f9', borderRadius: '6px' }}></div>
          </div>
        </VisualCard>
      </HeroVisual>
    </HeroSection>
  );
}

export default Hero;
