import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      ${props}
    }
  `;
};

export const mobileLand = (props) => {
  return css`
    @media only screen and (min-width: 480px) and (max-width: 595px) {
      ${props}
    }
  `;
};

export const smallTablet = (props) => {
  return css`
    @media only screen and (min-width: 595px) and (max-width: 690px) {
      ${props}
    }
  `;
};

export const tabletPo = (props) => {
  return css`
    @media only screen and (min-width: 690px) and (max-width: 800px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 800px) and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const large = (props) => {
  return css`
    @media only screen and (min-width: 1024px) and (max-width: 1224px) {
      ${props}
    }
  `;
};
