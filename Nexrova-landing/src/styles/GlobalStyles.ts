import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Outfit', 'Inter', sans-serif;
    background-color: #ffffff;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: rgba(102, 126, 234, 0.2);
    color: #667eea;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  width: 100%;
  padding: 120px 60px;
  margin: 0;

  @media (max-width: 968px) {
    padding: 80px 24px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 24px;
  color: #0f172a;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #64748b;
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  width: 100%;
`;

export const Card = styled.div`
  background: white;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.05);
    border-color: #667eea;
  }
`;

export const Button = styled.button`
  background: #0f172a;
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 1rem;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
