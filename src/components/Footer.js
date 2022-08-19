import React from "react";
import styled from "styled-components";
import {
  small,
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: #7f7c82;
  display: flex;
  width: 85vw;
  height: 30vh;
  color: #fdefef;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  ${tabletPo({
    width: "100%",
    height: "15vh",
    flexDirection: "row",
    marginBottom: "0px",
  })};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Heading = styled.h3`
  text-align: center;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 2px;
  font-weight: 500;
  color: #f29191;
`;
const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 2;
  ${desktop({ gap: "30px" })}
`;
const MailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 2;
`;

const Text = styled.p`
  font-size: 14px;
  font-family: "Barlow Condensed";
  letter-spacing: 1px;
  text-align: center;
  ${desktop({ fontSize: "16px" })}
`;

const Footer = () => {
  return (
    <>
      <Container id="contact">
        <Wrapper>
          <Top>
            <Heading>Follow Us</Heading>
          </Top>

          <IconsWrap>
            <i style={{ cursor: "pointer" }} class="fa-brands fa-facebook"></i>
            <i style={{ cursor: "pointer" }} class="fa-brands fa-instagram"></i>
            <i style={{ cursor: "pointer" }} class="fa-brands fa-linkedin"></i>
            <i style={{ cursor: "pointer" }} class="fa-brands fa-twitter"></i>
          </IconsWrap>
          <MailWrap>
            <i style={{ cursor: "pointer" }} class="fa-solid fa-envelope"></i>
            <Text>support@rentabike.com</Text>
          </MailWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
