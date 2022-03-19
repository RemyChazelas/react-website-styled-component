import styled from "styled-components";


const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  background:var(--yellow);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const Main = styled.div`
  margin: 8rem 10rem;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 8rem calc(5rem + 5vw);
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 5rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
  letter-spacing:-.5px;
  color: var(--black);
  font-weight: 700;
  @media only Screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  margin-top: 3rem;
  border: solid 5px var(--red);
  border-color: var(--red) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Main>
        <Title>"Sometimes I feel like I'm making love to the revolution."</Title>
        <CurvedLine />
        <Title>Fidel Catstro, 2022.</Title>
      </Main>
    </AboutSection>
  );
};

export default About;
