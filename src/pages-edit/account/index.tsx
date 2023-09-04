"use client";
import styled from "styled-components";
import Link from "next/link";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

import KakaoLogo from "src/components/Icon/icons/KakaoLogo";

const Login = () => {
    return (
        <Background direction="column" justify="center" height="100%">
            <LoginWrapper direction="column" height="100%" gap={32}>
                <Flex height="80%" direction="column" justify="space-between">
                    <Flex height="50%" direction="column" gap={15}>
                        <Text typo="Subtitle2r">QUESTION FEED</Text>
                        <Text typo="Headline0b">LOG IN</Text>
                    </Flex>
                    <Flex direction="column" gap={16}>
                        <LoginButton
                            href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
                            background="#FEE500"
                        >
                            <KakaoLogo />
                            <LoginText>카카오 로그인</LoginText>
                        </LoginButton>
                    </Flex>
                </Flex>
                <UnderText justify="space-around">
                    <Text
                        typo="Caption1r"
                        style={{
                            textDecoration: "underline"
                        }}
                    >
                        이용약관
                    </Text>
                    <Text
                        typo="Caption1r"
                        style={{
                            textDecoration: "underline"
                        }}
                    >
                        개인정보 처리방침
                    </Text>
                </UnderText>
            </LoginWrapper>
        </Background>
    );
};

const Background = styled(Flex)`
    background-image: url(${process.env.PUBLIC_URL}/img/background.png);
    background-size: cover;
    background-position: center;
`;

const LoginWrapper = styled(Flex)`
    padding: 0 1rem;

    background: ${colors.line_black_50};
    -webkit-backdrop-filter: blur(7.5px);
    backdrop-filter: blur(7.5px);
`;

const LoginButton = styled(Link)<{ background: string }>`
    width: 100%;
    min-height: 52px;
    padding: 0.88rem 1rem;

    background: ${(props) => props.background};
    text-align: center;
    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LoginText = styled.div`
    width: 100%;
    padding-right: 1rem;
    font-size: 1rem;
    color: black;
`;

const UnderText = styled(Flex)``;

export default Login;
