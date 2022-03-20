import styled from "styled-components";


const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  background:var(--black-op);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(96% 18%, 98% 24%, 96% 29%, 98% 36%, 95% 41%, 98% 46%, 96% 55%, 98% 64%, 96% 70%, 98% 76%, 97% 83%, 90% 82%, 83% 84%, 76% 85%, 69% 83%, 63% 85%, 60% 83%, 57% 87%, 48% 85%, 40% 87%, 34% 84%, 28% 87%, 20% 83%, 15% 87%, 7% 87%, 3% 79%, 5% 73%, 2% 64%, 5% 55%, 3% 47%, 4% 40%, 3% 34%, 2% 28%, 4% 23%, 3% 17%, 9% 18%, 15% 16%, 23% 18%, 28% 16%, 35% 16%, 41% 18%, 47% 17%, 54% 18%, 60% 16%, 67% 18%, 73% 16%, 79% 17%, 84% 15%, 90% 14%);
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
  color: var(--yellow);
  font-weight: 700;
  @media only Screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  margin-top: 2rem;
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
