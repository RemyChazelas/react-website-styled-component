import styled from "styled-components";


import cat from "../../assets/catbg.png";
import grenade from "../../assets/grenade.png";
import cadenas from "../../assets/cadenas.png";


import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background:var(--black);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 5rem ;
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 5rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    flex-direction:column;
  margin: 5rem 5rem 0 5rem;

    &:last-child {
  margin-bottom: 5rem;

    }
  }
`;

const SubContent = styled(Content)`
@media only Screen and (max-width: 48em) {
    flex-direction:row;
  }
`

const CatImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  
  img {
    border-radius: 1rem;
    height:350px;
    /* z-index:2; */
    transform: scale(.9) ;

  }
  @media only Screen and (max-width: 48em) {
    margin-top: 5rem;
  img {
    height:250px;
  }
  }
`;

const GrenadeContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: 2rem;
img {
    border-radius: 1rem;
    height:50px;
    width:auto ;
  }
  @media only Screen and (max-width: 48em) {
  img {
    height:35px;
  }
  }
`;
const CadenasContainer = styled(GrenadeContainer)``;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--yellow);
  position: relative;

  @media only Screen and (max-width: 48em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  `;

const TextBlockLoch = styled(TextBlock)`
 width:auto ;
`;


const SubTitle = styled.div`
   font-size: calc(.5rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  @media only Screen and (max-width: 48em) {
    font-size: calc(.5rem + 1.5vw);
  }
`;

const Title = styled(SubTitle)`
font-size: calc(1rem + 1vw);
margin-bottom: 1rem;
`;

const TitleToken = styled(Title)`
&::after {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--red);
  }
`;

const SubText = styled.div`
  font-size: calc(0.6rem + 0.5vw);
  color: var(--yellow);
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }
`;




const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ServiceSection id="services">
      <Content data-aos="zoom-in-up">
        <TextBlock>
          <Title><h1>NEW REVOLUTION OF CATS</h1></Title>
          <SubText>
            <h5>
              Cute and kind kittens have never changed the world. The world is dominated by dogs and it can't go on.
              <br />
              <br />
              Cats must rule the world now.
            </h5>
          </SubText>
        </TextBlock>
        <CatImgContainer>
          <img src={cat} alt="cat with red eye" />
        </CatImgContainer>
      </Content>
      <SubContent data-aos="zoom-in-up">
        <TextBlock>
          <TitleToken><h1>TOKEN</h1></TitleToken>
          <SubTitle><h2>TOKENOMICS</h2></SubTitle>
          <SubText>
            <h5>
              1 000 000 000 $CCC <br />
              BUY TAX <br />
              5% LP <br />
              SELL TAX <br />
              10%LP <br />
              10%REVOLUTION <br />
              MAX WALLET 2% <br />
              MAX BUY 2%
            </h5>
          </SubText>
        </TextBlock>
        <GrenadeContainer>
          <img src={grenade} alt="grenade" />
        </GrenadeContainer>
      </SubContent>
      <SubContent data-aos="zoom-in-up">
        <TextBlockLoch>
          <SubTitle><h2>LP LOCK</h2></SubTitle>
          <SubText><h5>
            CONTRACT WILL BE RENOUNCED <br />
            DEVS HAVE 0 TOKENS
          </h5></SubText>
        </TextBlockLoch>
        <CadenasContainer>
          <img src={cadenas} alt="cadenas" />
        </CadenasContainer>
      </SubContent>
    </ServiceSection>
  );
};

export default Services;
