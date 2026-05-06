import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  padding: 16px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);

  @media (max-width: 968px) {
    padding: 16px 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: #667eea;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: #475569;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }
`;

const CTA = styled.a`
  background: #0f172a;
  color: white;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
  }
`;

function Navigation() {
  return (
    <NavBar>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span>⚡</span> Nexrova
      </Logo>
      <NavLinks>
        <a href="#market">Market</a>
        <a href="#solution">Solution</a>
        <a href="#product">Product</a>
        <a href="#business">Business</a>
        <a href="#invest">Investment</a>
        <a href="#appendix">Documentation</a>
      </NavLinks>
      <CTA href="#invest">Contact Team</CTA>
    </NavBar>
  );
}

export default Navigation;
