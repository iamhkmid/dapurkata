import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${({ theme }) => theme.background[1]};
  left: 0;
  top: 0;
  z-index: 200;
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  > div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 5px;
    background: ${({ theme }) => theme.button.primary.background};
    animation: ldsgrid 1.2s linear infinite;
  }
  > div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  > div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  > div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  > div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  > div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  > div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  > div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  > div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  > div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes ldsgrid {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
const AuthLoading = () => {
  return (
    <Wrapper>
      <Loading>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loading>
    </Wrapper>
  );
};

export default AuthLoading;
