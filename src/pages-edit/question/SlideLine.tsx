"use client";
import { colors } from "styles/theme";
import styled from "styled-components";

export default function SlideLine() {
    return <SlideLineWrapper></SlideLineWrapper>;
}

const SlideLineWrapper = styled.div`
    width: 100%;
    height: 4px;

    position: absolute;
    top: 50px;
    left: 0;
    background-color: ${colors.light_qwhite};
`;

const Menu = styled.div`
    //   width: 40px;
    margin: auto 0;
    text-align: center;
`;
