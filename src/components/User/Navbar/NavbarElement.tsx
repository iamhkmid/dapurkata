import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  background: ${({ theme }) => theme.background[1]};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.7rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v2.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v2.hover.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    ::-webkit-scrollbar {
      width: 5px;
    }
  }
  transition: 0.4s all ease;
  transition-property: background;
`;

type TNavbar = {
  showNav: boolean;
};
export const Nav = styled.nav<TNavbar>`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: -4rem;
  width: 100vw;
  z-index: 10;

  ${({ showNav }) =>
    showNav &&
    css`
      top: 0;
    `}

  transition: 0.4s all ease;
  transition-property: top, background-color, border-color;
`;

type TNavCon = {
  showColor: boolean;
};
export const NavbarContainer = styled.div<TNavCon>`
  ${({ showColor }) =>
    showColor &&
    css`
      background: ${({ theme }) => theme.background[2]};
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}

  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  gap: 1rem;
  padding: 0 calc(13vw - 2em);
  width: 100%;
  z-index: 12;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 0 3rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0 1rem;
  }
  transition: 0.4s all ease;
`;

export const LogoLink = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
`;

export const Logo = styled.div`
  display: flex;
  > svg {
    height: 2.4rem;

    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      height: 2.2rem;
    }

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      height: 1.8rem;
    }
  }
`;
type TLogo = {
  showLogo: boolean;
};
export const LogoText = styled.div<TLogo>`
  display: flex;
  min-width: 0;
  max-width: 0;
  padding-left: 0;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  color: ${({ theme }) => theme.color[1]};
  > h1 :nth-child(1) {
    font-size: 0.9rem;
    font-weight: 500;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  > h1 :nth-child(2) {
    font-size: 1.2rem;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1rem;
    }
  }
  ${({ showLogo }) =>
    showLogo &&
    css`
      max-width: 7rem;
      margin-left: 0.5rem;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        max-width: 6rem;
      }
    `}
  transition: 0.4s all ease;
  transition-property: margin-left, max-width, min-width;
  transition-delay: 0.2s;
`;

export const MobileWrapper = styled.div`
  display: flex;
  padding: 0 0.3rem;
  width: 100%;
`;

export const MenuWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;
