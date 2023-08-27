"use client";

import styled from "styled-components";
import StackGrid from "react-stack-grid";

import useDisplaySize from "src/hooks/useDisplaySize";
import useGetUsersQuery from "src/hooks/questions/useGetUserQuery";

import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import { globalValue } from "src/constants/globalValue";

import QfeedFrame from "src/pages-edit/home/components/QfeedFrame";

export default function MakeList({ id }: { id: number }) {
    const { questions, isLoading } = useGetUsersQuery(id, "personal");
    const { width } = useDisplaySize();

    return isLoading ? (
        <div>로딩중...</div>
    ) : (
        <GridWrapper>
            {questions.count ? (
                <StackGrid
                    columnWidth={Math.floor((width - 45) / 2)}
                    gutterWidth={12}
                    gutterHeight={14}
                >
                    {questions.data.map((data: any, idx: number) => {
                        return <QfeedFrame key={idx} idx={idx} data={data} />;
                    })}
                </StackGrid>
            ) : (
                <Text typo="Subtitle1r">아직 만든 큐피드가 없어요</Text>
            )}
        </GridWrapper>
    );
}

const GridWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
`;
