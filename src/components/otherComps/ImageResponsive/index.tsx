import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import IconsControl from "../../IconsControl";
import LoadingImage from "../Loading/LoadingImage";

type TBookCover = {
  src: string;
  quality: number;
  height: number;
  width: number;
  defaultIcon?: string;
  alt?: string;
};

const ImageResponsive: FC<TBookCover> = (props) => {
  const { width, height, quality, src, defaultIcon, alt } = props;
  const defIcon = defaultIcon || "dapurkata";
  const [noImg, setNoImg] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Main>
      <LoadingWrapper>
        <LoadingImage dotSize={15} />
      </LoadingWrapper>
      {src && (
        <ImgWrapper>
          <Image
            src={`${
              src[0] === "/" ? process.env.NEXT_PUBLIC_GQL_HTTP_URL : ""
            }${src}`}
            alt={alt || "images"}
            layout="responsive"
            objectFit="fill"
            width={width}
            height={height}
            quality={quality}
            onLoad={() => {
              setIsLoading(false);
              setNoImg(false);
            }}
            onError={() => setNoImg(true)}
          />
        </ImgWrapper>
      )}
    </Main>
  );
};

export default ImageResponsive;

const Main = styled.div`
  display: block;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 0.4s all ease;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
`;

const LoadingWrapper = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ImgWrapper = styled.div`
  display: block;
  position: relative;
  z-index: 3;
`;

const DefImg = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
  z-index: 3;
  > svg {
    height: 100%;
    width: 100%;
    fill: ${({ theme }) => (theme.name === "light" ? "#adbdd3" : "#e8efff2e")};
  }
`;
