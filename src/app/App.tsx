"use client";
import StyledComponentsRegistry from "../lib/registry";
import Layout from "src/components/layout/Layout";
import "./App.scss";
import { useAppSelector } from "src/hooks/useReduxHooks";
import BottomSheet from "src/components/BottomSheet";

export default function App({ children }: { children: React.ReactNode }) {
  const { visible } = useAppSelector((state) => state.bottomSheet);

  return (
    <StyledComponentsRegistry>
      <Layout>
        {children}
        {visible && <BottomSheet />}
      </Layout>
    </StyledComponentsRegistry>
  );
}
