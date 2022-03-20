import styled from "styled-components";


const FOOTER = styled.footer`
background-color: var(--black);
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
    color:var(--yellow);
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2022 -&nbsp;
        <a href="https://remychazelas.com" target="_blank" rel="noreferrer">
          Remy Chazelas
        </a>
        &nbsp;- designed w/ love
      </LeftText>

    </FOOTER>
  );
};

export default Footer;

