import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle, GridContainer } from '../styles/GlobalStyles';

const ProductGrid = styled(GridContainer)`
  margin-top: 60px;
`;

const ProductCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
  }

  .app-tag {
    display: inline-block;
    padding: 4px 12px;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.5rem;
    color: #0f172a;
    margin-bottom: 16px;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 8px 0;
      color: #64748b;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 10px;

      &::before {
        content: '●';
        color: #667eea;
        font-size: 0.6rem;
      }
    }
  }
`;

const BlueprintCallout = styled.div`
  margin-top: 60px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 40px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }

  .content {
    h3 {
      font-size: 1.8rem;
      color: #0f172a;
      margin-bottom: 12px;
    }
    p {
      color: #64748b;
      font-size: 1.1rem;
    }
  }

  .stat {
    text-align: center;
    .number {
      font-size: 3rem;
      font-weight: 900;
      color: #667eea;
      line-height: 1;
    }
    .label {
      font-size: 0.9rem;
      color: #64748b;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 8px;
    }
  }
`;

function ProductOverview() {
  const apps = [
    {
      name: "Customer App",
      tag: "iOS & Android",
      features: ["OTP-based Secure Login", "Category-wise Browsing", "Seamless Booking Flow", "Real-time Tracking"]
    },
    {
      name: "Professional App",
      tag: "iOS & Android",
      features: ["KYC Verification", "Availability Management", "Job Allocation Engine", "Earnings Analytics"]
    },
    {
      name: "Admin Dashboard",
      tag: "Web Console",
      features: ["Centralized Operations", "Dispute Resolution", "Revenue Tracking", "Service Verification"]
    }
  ];

  return (
    <Section id="product">
      <SectionTitle data-aos="fade-up">Product Ecosystem</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        A comprehensive three-tier application architecture designed for maximum reliability and ease of use.
      </SectionSubtitle>

      <ProductGrid>
        {apps.map((app, idx) => (
          <ProductCard key={idx} data-aos="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <span className="app-tag">{app.tag}</span>
            <h3>{app.name}</h3>
            <ul>
              {app.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </ProductCard>
        ))}
      </ProductGrid>

      <BlueprintCallout data-aos="zoom-in">
        <div className="content">
          <h3>Figma Blueprint & UI Kit</h3>
          <p>Extensive design system built for scalability and consistent UX across all platforms.</p>
        </div>
        <div className="stat">
          <div className="number">200+</div>
          <div className="label">High-Fidelity Screens</div>
        </div>
      </BlueprintCallout>
    </Section>
  );
}

export default ProductOverview;
