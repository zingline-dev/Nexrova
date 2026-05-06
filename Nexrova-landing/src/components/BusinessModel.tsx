import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const CommissionBox = styled.div`
  background: #f8fafc;
  padding: 60px;
  border-radius: 32px;
  border: 1px solid #e2e8f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .percentage {
    font-size: 5rem;
    font-weight: 900;
    color: #667eea;
    line-height: 1;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    color: #0f172a;
    margin-bottom: 16px;
  }

  p {
    color: #64748b;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const RevenueStreams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StreamCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  background: white;
  border-radius: 20px;
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.05);
  }

  .icon {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.1rem;
    color: #0f172a;
    margin-bottom: 4px;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
  }
`;

function BusinessModel() {
  const streams = [
    { title: "Membership Plans", desc: "Subscription-based priority booking and discounts.", icon: "💎" },
    { title: "Surge Pricing", desc: "Dynamic pricing during peak demand windows.", icon: "📈" },
    { title: "Enterprise Partnerships", desc: "B2B contracts with apartment societies & housing.", icon: "🏢" },
    { title: "Promotional Advertising", desc: "Featured placement for service professionals.", icon: "📣" }
  ];

  return (
    <Section id="business">
      <SectionTitle data-aos="fade-up">Business Model</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        A sustainable revenue engine built on volume and high-margin future streams.
      </SectionSubtitle>

      <ModelGrid>
        <CommissionBox data-aos="fade-right">
          <div className="percentage">20–30%</div>
          <h3>Platform Commission</h3>
          <p>Revenue generated per completed booking across all categories.</p>
        </CommissionBox>

        <RevenueStreams>
          <h3 style={{ color: '#0f172a', marginBottom: '8px' }}>Future Opportunities</h3>
          {streams.map((stream, idx) => (
            <StreamCard key={idx} data-aos="fade-left" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="icon">{stream.icon}</div>
              <div>
                <h4>{stream.title}</h4>
                <p>{stream.desc}</p>
              </div>
            </StreamCard>
          ))}
        </RevenueStreams>
      </ModelGrid>
    </Section>
  );
}

export default BusinessModel;
