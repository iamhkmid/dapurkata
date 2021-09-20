import { motion } from "framer-motion";
import styled, { css } from "styled-components";

type TMain = {
  isShowed: boolean;
  color: string;
  fixed: boolean;
};

export const Main = styled.div<TMain>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius};
  top: 4rem;
  left: 0;
  right: 0;
  padding: 0 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  max-width: 90%;
  max-height: 0;
  overflow: hidden;
  z-index: 101;
  ${({ fixed }) =>
    fixed &&
    css`
      top: 1rem;
      position: fixed;
    `}
  ${({ isShowed }) =>
    isShowed &&
    css`
      box-shadow: ${({ theme }) => theme.boxShadow};
      margin-top: 0.5rem;
      overflow: visible;
      padding: 0.3rem 1.5rem;
      max-height: 3rem;
    `}
  ${({ theme, color }) => css`
    background: ${theme.button[color || "success"].background};
    color: ${theme.button[color || "success"].color};
    > svg {
      color: ${theme.button[color || "success"].color};
    }
  `}
  transition: 0.4s all ease;
`;

export const Message = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: center;

  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  font-size: 0.9rem;
  padding: 0 1rem;
  font-weight: 500;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

type TBtnWrapper = {
  color: string;
};
export const BtnWrapper = styled.div<TBtnWrapper>`
  display: flex;
  position: absolute;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0.2rem;
  max-height: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1/1;
  right: 0;
  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover[color || "success"].background};
      color: ${theme.button.hover[color || "success"].color};
    `}
  }
  > svg {
    height: 1rem;
  }
`;
