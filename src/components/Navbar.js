import React, { useState, useEffect, useContext } from "react";
import Scroll from "react-scroll";
import cookie from "js-cookie";
import styled from "styled-components";
import {
  mobile,
  mobileLand,
  tabletPo,
  smallTablet,
  desktop,
  large,
} from "../resp";
import { Link } from "react-router-dom";
import moto from "./../Images/moto-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import man from "./../Images/man.png";
import woman from "./../Images/woman.png";
import { signout } from "./../utils/auth";
import { UserContext } from "./context/UserContext";
const Outer = styled.div`
  height: 18vh;
  width: 100vw;

  ${desktop({ height: "16vh" })};
  ${large({ height: "17vh" })}
`;
const Container = styled.div`
  position: fixed;
  padding: 0 10px;
  z-index: 12;
  // background: #4e413b;
  background: #434343;
  // background: #3a3535;
  // background: #1b1a17;

  height: 18vh;
  width: 96vw;
  // background: transparent;

  ${mobileLand({ height: "20vh", width: "100vw" })};
  ${tabletPo({ height: "21vh", width: "100vw", padding: "0 5px" })};
  ${desktop({
    height: "16vh",
    width: "100vw",
    padding: "0 8px 2px 0",
  })};
  ${large({ height: "17vh", width: "100vw", padding: "0 6px 0 0" })}
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })};
  ${tabletPo({ padding: "10px 20px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobileLand({ marginLeft: "10px" })}
  ${smallTablet({
    marginLeft: "10px",
    justifyContent: "flex-start",
  })}
  ${tabletPo({
    marginLeft: "10px",
    justifyContent: "flex-start",
  })}
`;

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  // background-color: #efd9d1;
  background-color: #f1e9e3;
  padding: 5px;
  margin-left: 10px;
  ${mobile({ width: "40px", height: "40px" })};
  ${mobileLand({ width: "40px", height: "40px" })};
  ${smallTablet({
    marginLeft: 0,
    alignItems: "center",
  })};
  ${desktop({ width: "40px", height: "40px", padding: "5px" })}
`;

const LogoImg = styled.img`
  width: 70%;
  cursor: pointer;
  ${desktop({ width: "80%" })}
`;
const Logo = styled.p`
  font-weight: 300;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 3px;
  cursor: pointer;
  color: #ff9300;
  font-size: 12px;
  margin: 2px;

  ${mobile({
    fontSize: "12px",
    margin: "4px",
    letterSpacing: "2px",
    marginLeft: "5px",
  })};
  ${tabletPo({ fontSize: "12px", margin: "4px" })};
  ${desktop({ fontSize: "12px" })};
  ${large({ fontSize: "12px", margin: "6px" })}
`;
const Center = styled.div`
  text-align: center;
  display: none;
  ${tabletPo({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20px",
    flex: 3,
    gap: "8px",
    justifyContent: "flex-end",
  })};
  ${desktop({
    gap: "10px",
    display: "flex",
    flex: 2,
    justifyContent: "center",
  })};
  ${large({
    flex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  })}
`;

const MenuItem = styled.div`
  font-size: ${(props) => (props.selected ? "18px" : "16px")};
  cursor: pointer;
  padding: 5px;

  color: ${(props) => (props.selected ? "#FF9300" : "white")};
  font-family: "Bebas Neue", cursive;
  &:hover {
    color: #f55c47;
    font-size: 19px;
    transition: all 0.3s ease-in-out;
  }

  ${tabletPo({
    padding: "3px",
    fontSize: `${(props) => (props.selected ? "12px" : "10px")};`,
  })}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tabletPo({
    letterSpacing: "2px",
  })}
`;
const ModifiedAnchor = styled.a`
  text-decoration: none;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tabletPo({
    letterSpacing: "2px",
  })}
`;
const Right = styled.div`
  display: none;

  ${tabletPo({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    gap: "8px",
    justifyContent: "flex-end",
  })};
  ${desktop({
    gap: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  })};
  ${large({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "15px",
  })}
`;

const ButtonItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding: 12px 18px;
  border: 1px solid #5d534a;
  border-radius: 30px;
  color: black;
  background-color: white;
  font-family: "Bebas Neue", cursive;
  &:hover {
    color: white;
    background-color: #826f66;
  }

  ${tabletPo({ padding: "10px 12px", fontSize: "11px" })}
  ${desktop({ padding: "12px 14px", fontSize: "12px" })}
`;

const ModifidedBtn = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding: 12px 18px;
  border: 1px solid #5d534a;
  border-radius: 30px;
  color: white;
  // background-color: #443737;
  background-color: #e88a1a;
  font-family: "Bebas Neue", cursive;
  &:hover {
    color: black;
    background-color: #d6d2c4;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const NavSmallScreen = styled.div`
  display: flex;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
  ${tabletPo({ display: "none" })};
  ${desktop({ display: "none" })};
  ${large({ display: "none" })};
`;
const NavSmallScreenOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 50%;
  height: 70%;
  background: #f1f7e7;
  transition: 0.5s ease;
  flex-direction: column;
  z-index: 50;
  padding-top: 30px;
  ${smallTablet({ top: "100px", width: "25%", height: "70%" })}
`;

const NavSmallScreenLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #191919;
  padding: 5px;
  ${smallTablet({ padding: "6px" })}
`;

const StyledList = styled.li`
  text-align: center;
  font-family: "Bebas Neue", cursive;
  font-weight: 400;
  margin: 1rem;
  cursor: pointer;
  font-size: 0.7rem;
  ${smallTablet({ fontSize: "0.9rem" })};
`;

const LineBreak = styled.hr`
  width: 40px;
  height: 2px;
  background-color: #3b0000;
`;

const CloseBtn = styled(IoIosCloseCircle)`
  font-size: 25px;
  color: #a4b494;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  transition: 0.5s ease-out;
`;

const Navbar = () => {
  const [active, setActive] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });

  const toggle = (btnName) => {
    setActive((prevState) => ({ [btnName]: !prevState[btnName] }));
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const [userVal, setUserVal] = useState("");
  const [user, setUser] = useContext(UserContext);
  // const [user, setUser] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    const initial = () => {
      setUserVal(localStorage.getItem("user"));
      if (userVal) {
        setUser(true);
      }
    };

    initial();
  }, [userVal]);
  const ScrollLink = Scroll.ScrollLink;

  const logOutModal = () => {
    cookie.remove("token", {
      expires: 1,
    });
    localStorage.removeItem("user");
    setUser(false);
  };

  return (
    <>
      <Outer>
        <Container
          style={{
            boxShadow: "3px 4px 4px #857671",
            border: "1px solid #696464",
          }}
        >
          <Wrapper>
            <Left>
              <LogoContainer>
                <NavLink to="/">
                  <LogoImg src={moto}></LogoImg>
                </NavLink>
              </LogoContainer>
              <Logo>Rent-A-Bike</Logo>
            </Left>
            <Center>
              <NavLink to="/">
                <MenuItem
                  selected={active.first}
                  onClick={() => toggle("first")}
                >
                  HOME
                </MenuItem>
              </NavLink>
              <NavLink to="/about">
                <MenuItem
                  selected={active.second}
                  onClick={() => toggle("second")}
                >
                  ABOUT US
                </MenuItem>
              </NavLink>

              <NavLink to="/services">
                <MenuItem
                  selected={active.third}
                  onClick={() => toggle("third")}
                >
                  SERVICES
                </MenuItem>
              </NavLink>

              <NavLink to="/contact">
                <MenuItem
                  selected={active.fourth}
                  onClick={() => toggle("fourth")}
                >
                  CONTACT US
                </MenuItem>
              </NavLink>
            </Center>
            <Right>
              {user == true ? (
                <>
                  <LogoContainer>
                    <LogoImg src={man}></LogoImg>
                  </LogoContainer>
                  <MenuItem onClick={logOutModal}>LOG OUT</MenuItem>
                </>
              ) : (
                <>
                  <NavLink to="/register">
                    <ButtonItem>Register</ButtonItem>
                  </NavLink>
                  <NavLink to="/signin">
                    <ModifidedBtn>Sign In</ModifidedBtn>
                  </NavLink>
                </>
              )}
            </Right>
            <NavSmallScreen>
              <GiHamburgerMenu
                color="white"
                fontSize={27}
                onClick={() => setToggleMenu(true)}
              />

              {toggleMenu && (
                <NavSmallScreenOverlay data-aos="zoom-in-right">
                  <CloseBtn onClick={() => setToggleMenu(false)} />
                  <NavSmallScreenLinks>
                    <StyledList>
                      <NavLink to="/" onClick={() => setToggleMenu(false)}>
                        Home
                      </NavLink>
                    </StyledList>

                    <StyledList>
                      <NavLink to="/about" onClick={() => setToggleMenu(false)}>
                        About Us
                      </NavLink>
                    </StyledList>

                    <StyledList>
                      <NavLink
                        to="/services"
                        onClick={() => setToggleMenu(false)}
                      >
                        Services
                      </NavLink>
                    </StyledList>

                    <StyledList>
                      <NavLink
                        to="/contact"
                        onClick={() => setToggleMenu(false)}
                      >
                        Contact Us
                      </NavLink>
                    </StyledList>

                    <LineBreak></LineBreak>
                    {user == true ? (
                      <>
                        <LogoContainer>
                          <LogoImg src={man}></LogoImg>
                        </LogoContainer>
                        <MenuItem
                          style={{ color: "blue", textAlign: "center" }}
                          onClick={logOutModal}
                        >
                          LOG OUT
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <StyledList>
                          <NavLink
                            to="/register"
                            onClick={() => setToggleMenu(false)}
                          >
                            REGISTER
                          </NavLink>
                        </StyledList>
                        <StyledList>
                          <NavLink
                            to="/signin"
                            onClick={() => setToggleMenu(false)}
                          >
                            SIGN IN
                          </NavLink>
                        </StyledList>
                      </>
                    )}
                  </NavSmallScreenLinks>
                </NavSmallScreenOverlay>
              )}
            </NavSmallScreen>
          </Wrapper>
        </Container>
      </Outer>
    </>
  );
};

export default Navbar;
