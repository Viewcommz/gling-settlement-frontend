// 한 페이지 단위로 적용되는 컴포넌트들
import React, { Children } from "react";
import styled from "styled-components";

function SectionLayout({ children }: { children: React.ReactNode }) {
    return <SectionContainer>{children}</SectionContainer>;
}

const SectionContainer = styled.div`
    width: 1200px;
    height: auto;
    margin: 0 auto;
    padding: 30px 0;
`;

export default SectionLayout;
