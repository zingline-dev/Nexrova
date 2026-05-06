import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle, GridContainer } from '../styles/GlobalStyles';

const SolutionGrid = styled(GridContainer)`
  margin-top: 60px;
  gap: 32px;
`;

const SolutionCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: #667eea;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.05);
  }

  .icon-box {
    width: 60px;
    height: 60px;
    background: #f8fafc;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 24px;
    border: 1px solid #f1f5f9;
  }

  h3 {
    font-size: 1.25rem;
    color: #0f172a;
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    color: #64748b;
    line-height: 1.6;
    font-size: 1rem;
    margin: 0;
  }
`;

function Solution() {
  const features = [
    {
      title: "Verified Professionals",
      desc: "Background-checked, rated, and verified service providers you can trust.",
      icon: "🛡️"
    },
    {
      title: "Digital Booking Flows",
      desc: "Seamless OTP login and instant booking management in a few taps.",
      icon: "📱"
    },
    {
      title: "Transparent Pricing",
      desc: "Fixed upfront pricing with no hidden charges or bargaining friction.",
      icon: "💰"
    },
    {
      title: "Real-Time Tracking",
      desc: "Live location and status tracking of your service professional.",
      icon: "📍"
    },
    {
      title: "Ratings & Reviews",
      desc: "Two-way accountability system ensuring quality and service excellence.",
      icon: "⭐"
    },
    {
      title: "Centralized Operations",
      desc: "Integrated management for quality control and operational efficiency.",
      icon: "⚙️"
    }
  ];

  return (
    <Section id="solution">
      <SectionTitle data-aos="fade-up">The Nexrova Solution</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        Nexrova standardizes the home services experience through verified professionals, 
        digital booking flows, transparent pricing, and scalable operational management.
      </SectionSubtitle>

      <SolutionGrid>
        {features.map((feature, idx) => (
          <SolutionCard key={idx} data-aos="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="icon-box">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </SolutionCard>
        ))}
      </SolutionGrid>
    </Section>
  );
}

export default Solution;
