import React from "react";
import * as icons from "src/components/Icon/icons";
import styled, { css } from "styled-components";
import { KeyOfColor, TypeOfColor, colors } from "styles/theme";

interface Props {
    icon: keyof typeof icons;
    width?: number;
    height?: number;
    margin?: string;
    style?: any;

    rotate?: number;
    fill?: any;
    color?: any;

    onClick?: any;
    onTouchEnd?: any;
    selected?: boolean;
}

const Icon = ({
    icon,
    width,
    height,
    margin,
    style,

    rotate,
    fill,
    color,

    onClick,
    onTouchEnd,
    selected
}: Props) => {
    const IconComponent = icons[icon];

    return (
        <IconWrapper
            onClick={onClick}
            onTouchEnd={onTouchEnd}
            style={{ width: width, height: height, margin: margin }}
            rotate={rotate}
            fill={fill}
            color={color}
            styles={style}
        >
            <IconComponent selected={selected || false} />
        </IconWrapper>
    );
};

const IconWrapper = styled.div<{
    width?: number;
    height?: number;
    rotate?: number;
    fill?: KeyOfColor;
    color?: KeyOfColor;
    styles?: any;
}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    ${({ rotate }) =>
        rotate && {
            transform: `rotate(${rotate}deg)`
        }}
    svg {
        width: ${({ width }) => width}px;
        height: ${({ height }) => height}px;

        path {
            stroke: ${({ color }) => (color ? colors[color] : "transparent")};
            fill: ${({ fill }) => (fill ? colors[fill] : colors.light_qwhite)};
        }
    }

    ${({ styles }) => css`
        ${styles}
    `}
`;

export default Icon;
