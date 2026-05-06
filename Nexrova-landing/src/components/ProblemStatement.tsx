import styled from 'styled-components';
import { Section, SectionTitle } from '../styles/GlobalStyles';

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ProblemCard = styled.div<{ isCustomer?: boolean }>`
  padding: 50px;
  background: ${props => props.isCustomer ? '#fef2f2' : '#f8fafc'};
  border-radius: 32px;
  border: 1px solid ${props => props.isCustomer ? '#fee2e2' : '#e2e8f0'};
  
  .badge {
    display: inline-block;
    padding: 6px 12px;
    background: ${props => props.isCustomer ? '#ef4444' : '#64748b'};
    color: white;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h3 {
    font-size: 1.8rem;
    color: #0f172a;
    margin-bottom: 24px;
    line-height: 1.3;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 16px;
      color: #475569;
      line-height: 1.5;

      &::before {
        content: '✕';
        position: absolute;
        left: 0;
        color: #ef4444;
        font-weight: 800;
      }
    }
  }
`;

function ProblemStatement() {
  return (
    <Section id="problem">
      <SectionTitle data-aos="fade-up">Problem Statement</SectionTitle>
      
      <ProblemGrid>
        <ProblemCard isCustomer data-aos="fade-right">
          <div className="badge">Customer Pain Points</div>
          <h3>Unreliable services and zero transparency.</h3>
          <ul>
            <li>Unreliable professionals & no-shows</li>
            <li>Inconsistent and opaque pricing</li>
            <li>Poor service quality & lack of accountability</li>
            <li>Difficulty finding trusted help in new areas</li>
          </ul>
        </ProblemCard>

        <ProblemCard data-aos="fade-left">
          <div className="badge">Professional Pain Points</div>
          <h3>Irregular work and limited digital reach.</h3>
          <ul>
            <li>Irregular demand and unpredictable income</li>
            <li>Significant payment delays from local vendors</li>
            <li>Limited digital visibility and marketing tools</li>
            <li>Operational friction in managing bookings</li>
          </ul>
        </ProblemCard>
      </ProblemGrid>
    </Section>
  );
}

export default ProblemStatement;
