import styled from "styled-components";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:white;
  @media only Screen and (max-width: 48em) {
    font-size: 0.8rem;
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        /* margin-bottom: 1rem; */
      }
    }
  }
`;


const LeftText = styled.div`
  text-align: left;
  a{
    color:black;
  }
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2021 -&nbsp;
        <a href="https://remychazelas.com">
          Remy Chazelas
        </a>
        &nbsp;| designed w/ love
      </LeftText>

    </FOOTER>
  );
};

export default Footer;

