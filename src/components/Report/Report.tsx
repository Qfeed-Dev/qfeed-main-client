"use client";
import { useEffect } from "react";
import useBottomSheet from "src/hooks/useBottomSheet";
import { useAppDispatch, useAppSelector } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";
import { Text } from "../common/Text";

interface Props {}

const Report = ({ type = "report" }: any) => {
    const dispatch = useAppDispatch();

    const handleClickReport = () => {
        dispatch(
            changeVisibleType({
                type: "bottomSheet",
                value: [1, type === "report" ? "report" : "reportFriend", -1]
            })
        );
    };

    return (
        <ReportWrapper onClick={handleClickReport}>
            <Text typo="Caption1b" color="primary_qred">
                신고
            </Text>
        </ReportWrapper>
    );
};

const ReportWrapper = styled.div``;

export default Report;
