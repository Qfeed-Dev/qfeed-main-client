"use client";
import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { typo, colors, repeatQuestionColor, KeyOfColor } from "styles/theme";
import { match } from "ts-pattern";
import Text from "../common/Text";
import Icon from "../Icon";

interface Props {
    idx: number;
    type: "primary" | "default";
    action?: boolean;
    children?: any;
}

const VoteButton = forwardRef(function Button(
    {
        children,
        onClick,
        idx,
        type = "primary",
        $typeNum = 0,
        action = null,
        ...props
    }: any,
    ref
) {
    const black: KeyOfColor = "light_qblack";
    const white: KeyOfColor = "light_qwhite";

    return (
        <VoteButtonWrapper
            onClick={onClick}
            color={match(type)
                .with("primary", () =>
                    $typeNum !== 0 && action === 0
                        ? colors.light_qwhite
                        : colors.light_qblack
                )
                .with("default", () => colors.light_qblack)
                .otherwise(() => colors.light_qblack)}
            $backgroundColor={match(type)
                .with("primary", () =>
                    $typeNum === 0
                        ? colors.line_white_70
                        : $typeNum === 1
                        ? action === 0
                            ? colors.line_black_50
                            : colors.line_white_70
                        : action === 2
                        ? colors.light_qwhite
                        : action === 1
                        ? repeatQuestionColor[idx % 6]
                        : colors.line_white_70
                )
                .with("default", () =>
                    $typeNum === 0
                        ? repeatQuestionColor[idx % 6]
                        : $typeNum === 1
                        ? action === 0
                            ? colors.light_gray2
                            : repeatQuestionColor[idx % 6]
                        : action === 2
                        ? colors.primary_qred
                        : action === 1
                        ? repeatQuestionColor[idx % 6]
                        : colors.light_gray2
                )
                .otherwise(() => colors.line_white_70)}
        >
            <VoteButtonInner>
                <TextWrapper $typeNum={$typeNum}>
                    <Text typo="Subtitle2b">{children}</Text>
                    {($typeNum === 2 && props.selected === idx) ||
                    ($typeNum === 2 && action === 1) ? (
                        <Icon
                            icon="Check"
                            fill="transparent"
                            color="transparent"
                        />
                    ) : null}
                </TextWrapper>
                {$typeNum === 1 && action === 1 ? (
                    <CheckWrapper>
                        <Icon
                            icon="QFeedImage"
                            fill={match(type)
                                .with("primary", () => black)
                                .with("default", () => white)
                                .otherwise(() => black)}
                            color={match(type)
                                .with("primary", () => black)
                                .with("default", () => white)
                                .otherwise(() => black)}
                        />
                    </CheckWrapper>
                ) : null}
                {$typeNum === 2 ? (
                    <NumberWrapper>
                        <Text typo="Headline2b" style={{ lineHeight: 2.8 }}>
                            {props.count}
                        </Text>
                    </NumberWrapper>
                ) : null}
            </VoteButtonInner>
        </VoteButtonWrapper>
    );
});

const VoteButtonWrapper = styled.div<{ color: any; $backgroundColor: any }>`
    width: 100%;
    height: 50px;

    display: flex;

    position: relative;
    color: ${({ color }) => color};
    border-radius: 10px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const VoteButtonInner = styled.div`
    margin: auto 0;
    display: flex;
`;

const CheckWrapper = styled.div`
    // 값 바꿔줌
    position: absolute;
    right: -10px;
    transform: translate(0, -50%);
`;

const TextWrapper = styled.div<{ $typeNum: number }>`
    display: flex;
    gap: 14px;

    // 값 바꿔줌
    position: absolute;
    left: ${({ $typeNum }) => ($typeNum === 2 ? "20px" : "50%")};
    transform: ${({ $typeNum }) =>
        $typeNum === 2 ? "translate(0%, -50%)" : "translate(-50%, -50%)"};
`;

const NumberWrapper = styled.div`
    width: 72px;
    height: 100%;
    line-height: 50px;

    text-align: center;
    position: absolute;
    right: 0;
    transform: translate(0, -50%);

    border-left: 1px solid ${colors.light_qblack};
`;

export default VoteButton;
