import styled from "styled-components";

import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

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
  background-color: rgb(238,174,202);
  background: linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 5rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    flex-direction:column;
  margin: 5rem 5rem;

    &:last-child {
      margin-bottom: 2rem;
    }
  }
  
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
    top: 120%;
  }
`;

const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ServiceSection id="services">
      <Title data-aos="fade" className="title">What We Do</Title>
      <Line data-aos="fade" id="line" />
      <Triangle data-aos="fade" id="triangle" />

      <Content data-aos="zoom-in-up">
        <TextBlock
          topic="Safe & Secure"
          title={<h1>Liquidity will be fully locked</h1>}
          subText={
            <h5>
              1% of every buy will go to the Liquidity
            </h5>
          }
        />
        <OBJ data-aos="flip-right">
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" />
      </Content>

      <Content data-aos="zoom-in-up">
        <TextBlock
          topic="Passive Income"
          title={<h1>1% Reflection Rewards will be distributed</h1>}
          subText={
            <h5>
              on each transaction fee based on the share of the BBJUL
            </h5>
          }
        />
        <OBJ>
          <img data-aos="flip-left" src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content data-aos="zoom-in-up">
        <TextBlock
          topic="Marketing"
          title={<h1>1% is devoted towards marketing.</h1>}
          subText={
            <h5>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi incidunt nulla obcaecati, ducimus excepturi officiis impedit error eveniet tempora esse.
            </h5>
          }
        />
        <OBJ>
          <img data-aos="flip-right" src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
