import styled from "styled-components";

import staking from "../../assets/staking.png";
import swap from "../../assets/swap.png";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SoonSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background:var(--yellow);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 10rem;
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 5rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    flex-direction:column;
    margin: 5rem 5rem;
  }
`;
const StakingContent = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column ;
  img{
    width: 50px;
    height: 50px;
    opacity: .8 ;
    margin-bottom: 1rem;
}
margin-right: 2rem;
`;

const SwipContent = styled(StakingContent)`
@media only Screen and (max-width: 48em) {
img{
    margin-top: 3rem;
}
}

`;

const Title = styled.h1`
  font-size: calc(1.5rem + 1vw);
  line-height: 1.2;
  padding: 0 2rem;
  color: var(--black);
text-align: center;
`;




const Soon = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <SoonSection id="soon">
      <Content >
        <StakingContent data-aos="fade-right">
          <img src={staking} alt="icone staking" />
          <Title  >STAKING <br /> SOON</Title>
        </StakingContent>
        <SwipContent data-aos="fade-left">
          <img src={swap} alt="icone swap" />
          <Title >SWAP<br /> SOON</Title>
        </SwipContent>
      </Content>
    </SoonSection>
  );
};

export default Soon;
