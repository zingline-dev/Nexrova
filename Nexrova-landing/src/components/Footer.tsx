import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 16px 60px;
  background: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 30px 24px;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  
  span {
    color: #667eea;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: white;
    text-decoration: none;
    opacity: 0.6;
    font-size: 0.85rem;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: #667eea;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  opacity: 0.5;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <span>Nexrova</span>
      </FooterLogo>
      
      <FooterLinks>
        <a href="#market">Market</a>
        <a href="#solution">Solution</a>
        <a href="#product">Product</a>
        <a href="#business">Business</a>
        <a href="#investment">Investment</a>
      </FooterLinks>

      <Copyright>
        © 2026 Nexrova. Confidential Investor Pitch Deck.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
