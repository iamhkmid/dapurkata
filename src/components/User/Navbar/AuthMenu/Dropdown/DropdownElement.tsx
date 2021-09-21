import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  border: 1px solid ${({ theme }) => theme.border[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  top: 95%;
  right: -29%;
  padding: 0.5rem 1rem 1rem 1rem;
  min-width: 17rem;
  width: max-content;
  cursor: default;
  ::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: -9px;
    z-index: 10;
    right: 17px;

    border-top: 1px solid ${({ theme }) => theme.border[2]};
    border-bottom: 0px solid ${({ theme }) => theme.border[2]};
    border-left: 1px solid ${({ theme }) => theme.border[2]};
    border-right: 0px solid ${({ theme }) => theme.border[2]};
    transform: rotate(45deg);
    background: ${({ theme }) => theme.background[2]};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 80px;
  aspect-ratio: 1/1;
  margin: 0.5rem;
  border: 1px solid ${({ theme }) => theme.button.primary.background};
`;
export const FullName = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
`;
export const Email = styled.h1`
  font-size: 0.8rem;
  font-weight: 400;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;

export const Li = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: start;
  :hover {
    color: ${({ theme }) => theme.button.hover.list.color};
    background: ${({ theme }) => theme.button.hover.list.background};
  }
  transition: 0.4s all ease;
`;
export const Item = styled.h1`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
`;

export const NLink = styled(NextLink)``;
export const Anchor = styled.a`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
`;
