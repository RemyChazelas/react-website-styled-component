// This is HeroSection component, Main top section of website

import styled from "styled-components";

import arrow from "../../assets/Arrow Right.svg";

const HomeSection = styled.section`
  width: 100vw;
  height: 90vh;
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items:center ;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
    padding-bottom: 10rem;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5rem;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
  margin-top: 0;
  padding-top: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;



const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  line-height: 1.5;
  color: var(--yellow);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
    
  }
`;


const Title = styled.h1`
  font-size: calc(2.5rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  letter-spacing:-.15rem;
`;


const CTA = styled.button`
  background:var(--black) ;
  box-shadow:  2px -2px 2px #131313,
             -2px 2px 2px #393939;
  color:var(--yellow);
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
    
  }
  &:active {
    background: var(--black);
    box-shadow: inset 2px -2px 2px #131313,
            inset -2px 2px 2px #393939;
  }
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <MainContent id="home">
        <Lb id="leftBlock">
          <Title>CheCat Coin</Title>
          <CTA>
            BUY NOW &nbsp;
            <img src={arrow} alt="cta" width="100" height="100" />
          </CTA>
        </Lb>
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
