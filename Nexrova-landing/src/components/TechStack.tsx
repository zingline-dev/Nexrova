import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';

const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const TechCategory = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.05);
  }

  h3 {
    color: #0f172a;
    font-size: 1.25rem;
    margin-bottom: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 12px 0;
      color: #64748b;
      border-bottom: 1px solid #f1f5f9;
      font-size: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:last-child {
        border-bottom: none;
      }

      .tech-name {
        font-weight: 500;
        color: #475569;
      }

      .tech-badge {
        font-size: 0.75rem;
        padding: 4px 8px;
        background: #f1f5f9;
        border-radius: 4px;
        color: #64748b;
      }
      
      &.highlight {
        .tech-name {
          color: #667eea;
        }
        .tech-badge {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
      }
    }
  }
`;

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      icon: "🎨",
      techs: [
        { name: "React Native", label: "Mobile", highlight: true },
        { name: "Next.js", label: "Web", highlight: true },
        { name: "TypeScript", label: "Language" },
        { name: "Tailwind CSS", label: "Styling" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      techs: [
        { name: "Node.js", label: "Runtime", highlight: true },
        { name: "NestJS", label: "Framework", highlight: true },
        { name: "PostgreSQL", label: "Database", highlight: true },
        { name: "Redis", label: "Caching", highlight: true }
      ]
    },
    {
      title: "Infrastructure",
      icon: "☁️",
      techs: [
        { name: "AWS", label: "Cloud", highlight: true },
        { name: "Docker", label: "Container", highlight: true },
        { name: "Cloudflare", label: "CDN/Security", highlight: true },
        { name: "GitHub Actions", label: "CI/CD" }
      ]
    }
  ];

  return (
    <Section id="tech">
      <SectionTitle data-aos="fade-up">Technology Stack</SectionTitle>
      <SectionSubtitle data-aos="fade-up">
        Enterprise-grade infrastructure built for performance, security, and global scale.
      </SectionSubtitle>

      <TechContainer>
        {categories.map((cat, idx) => (
          <TechCategory key={idx} data-aos="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <h3><span>{cat.icon}</span> {cat.title}</h3>
            <ul>
              {cat.techs.map((tech, tIdx) => (
                <li key={tIdx} className={tech.highlight ? 'highlight' : ''}>
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-badge">{tech.label}</span>
                </li>
              ))}
            </ul>
          </TechCategory>
        ))}
      </TechContainer>
    </Section>
  );
}

export default TechStack;
