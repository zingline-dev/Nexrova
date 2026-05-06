import styled from 'styled-components';
import { Section, SectionTitle, GridContainer, Card } from '../styles/GlobalStyles';

const DocCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  border: 1px solid #e2e8f0;
  
  .icon {
    font-size: 2rem;
  }
  
  h4 {
    color: #1e293b;
    font-size: 1.1rem;
    margin: 0;
  }
  
  p {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
  }
  
  .status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: #10b981;
    font-weight: 600;
    
    &:before {
      content: '';
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
    }
  }
`;

function Appendix() {
  const docs = [
    {
      title: "Nexrova Product Requirements Document (PRD)",
      desc: "Complete feature specifications, user stories, and acceptance criteria.",
      icon: "📄"
    },
    {
      title: "TPR/TRD Guidance & Architecture Notes",
      desc: "Technical requirements and detailed system architecture documentation.",
      icon: "🏗️"
    },
    {
      title: "Complete Design System",
      desc: "Typography, color palette, spacing, and reusable components.",
      icon: "🎨"
    },
    {
      title: "Full UI/UX Wireframes (200+ Screens)",
      desc: "Comprehensive wireframes covering all user journeys.",
      icon: "🖼️"
    },
    {
      title: "High-Fidelity Figma & React Native Blueprint",
      desc: "Production-ready design files and component blueprints.",
      icon: "📱"
    }
  ];

  return (
    <Section id="appendix">
      <SectionTitle data-aos="fade-up">Available Documentation</SectionTitle>
      <GridContainer>
        {docs.map((doc, index) => (
          <DocCard key={index} data-aos="fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="icon">{doc.icon}</div>
            <h4>{doc.title}</h4>
            <p>{doc.desc}</p>
            <div className="status">Ready for Due Diligence</div>
          </DocCard>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Appendix;
