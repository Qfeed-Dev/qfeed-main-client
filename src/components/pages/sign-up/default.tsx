"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import ButtonFillSmall from "src/components/buttons/button-fill-small";
import Flex from "src/components/common/Flex";
import InputLine from "src/components/inputs/input-line";
import NavigationTop from "src/components/navigations/navigation-top";
import ButtonGenderSelect from "src/components/sign-up/button-gender-select";
import { useInput } from "src/hooks/common/useInput";

const SignIn = () => {
    const router = useRouter();

    const name = useInput();
    const birthday = useInput();
    const phone = useInput();
    const email = useInput();
    const nickname = useInput();

    return (
        <Flex direction="column" justify="start" gap={24}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <Flex direction="column" justify="start" gap={24}>
                <InputLine
                    value={name.value}
                    onChange={name.handleChangeInput}
                    label="이름"
                    placeholder="ex) 황채린"
                />
                <ButtonGenderSelect />
                <InputLine
                    value={birthday.value}
                    onChange={birthday.handleChangeInput}
                    label="생년월일"
                    placeholder="ex) 1997.04.02"
                />
                <InputLine
                    value={phone.value}
                    onChange={phone.handleChangeInput}
                    label="휴대폰 번호"
                    placeholder="ex) 010-5016-5886"
                />
                <InputLine
                    value={email.value}
                    onChange={email.handleChangeInput}
                    label="이메일"
                    placeholder="ex) ghkdcofls42@naver.com"
                />
                <Flex align="end" gap={12}>
                    <InputLine
                        value={nickname.value}
                        onChange={nickname.handleChangeInput}
                        label="닉네임"
                        placeholder="ex) qwerk11"
                    />
                    <ButtonFillSmall text="중복 확인" onClick={() => {}} />
                </Flex>
                <ButtonFillLarge
                    state="disabled"
                    text="다음"
                    onClick={() => router.push("/sign-up/organization")}
                />
            </Flex>
        </Flex>
    );
};

export default SignIn;