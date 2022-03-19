import Facebook from "../../assets/fb.png";
import Telegram from "../../assets/telegram.png";
import Twitter from "../../assets/twit.png";
import Instagram from "../../assets/insta.png";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: 5rem 1rem 2rem 1rem;
  background-color: var(--black-op);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--yellow);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--yellow);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(75%) sepia(100%) saturate(500%) hue-rotate(212deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;


const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>FOLLOW US AND JOIN REVOLUTION ARMY OF CATS</Title>
      <Icons>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={Facebook} alt="Facebook icon" />
        </a>
        <a href="https://t.me/CheCatCoin" target="_blank" rel="noreferrer">
          <img src={Telegram} alt="Telegram icon" />
        </a>
        <a href="https://twitter.com/ChecatCoin" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="Twitter icon" />
        </a>
        <a href="https://www.instagram.com/checatcoin/" target="_blank" rel="noreferrer" >
          <img src={Instagram} alt="Instagram icon" />
        </a>
      </Icons>
    </ContactSection>
  );
};

export default Contact;
