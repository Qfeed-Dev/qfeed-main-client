"use client";
import Loading from "src/components/common/Loading";
import Text from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import Textarea from "src/components/Textarea";
import useFriendQuery from "src/hooks/account/useFriendQuery";
import { useAppSelector } from "src/hooks/useReduxHooks";
import styled from "styled-components";
import { colors, KeyOfColor, repeatBackgroundColor } from "styles/theme";

interface Props {}

const FriendModal = ({}: Props) => {
    const { type, visible, actionDelay, selectedIdx } = useAppSelector(
        (state) => state.bottomSheet
    );

    const { friend, isLoading } = useFriendQuery(selectedIdx);

    return (
        <FriendWrapper>
            <Spacing size={12} />
            <Menu>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Image type="default" src="" size={60} />
                        <Spacing size={10} />
                        <Name>{friend?.name}</Name>
                        <QfeedId>{friend?.nickname}</QfeedId>

                        <Spacing size={20} />
                        <TextareaWrapper>
                            <Textarea
                                placeholder="투표한 친구에게 한 마디 작성해보세요!"
                                size={82}
                            />
                        </TextareaWrapper>

                        <Spacing size={42} />
                        <ButtonBox
                            backgroundColor={
                                repeatBackgroundColor[selectedIdx % 12]
                            }
                        >
                            <Text typo="Subtitle1b" style={{ margin: "auto" }}>
                                보내기
                            </Text>
                        </ButtonBox>
                    </>
                )}
            </Menu>
        </FriendWrapper>
    );
};

const FriendWrapper = styled.div`
    width: 100%;
`;

const Menu = styled.div`
    text-align: center;
`;

const TextareaWrapper = styled.div`
    width: 100%;
`;

const Name = styled.div``;

const QfeedId = styled.div``;

const ButtonBox = styled.div<{ backgroundColor: KeyOfColor }>`
    width: 100%;
    height: 47px;
    display: flex;

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => colors[backgroundColor]};
`;

export default FriendModal;
