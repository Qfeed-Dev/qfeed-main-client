"use client";
import { styled } from "styled-components";
import { match } from "ts-pattern";

interface Props {
  src: any;
  type: string;
  size?: number;
}

const Image = ({ src, type = "profile", size }: Props) => {
  return (
    <ImageWrapper
      src={src}
      size={match(type)
        .with("profile", () => 40)
        .with("friend", () => 35)
        .with("default", () => size)
        .exhaustive()}
    />
  );
};

const ImageWrapper = styled.img<{ size: number }>`
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  margin: auto;

  border-radius: 50%;
`;

export default Image;
