import React, { Children } from 'react';
import styled from 'styled-components';

function SectionLayout({ children }:{children: React.ReactNode}) {
  return <SectionContainer>
    {children}
  </SectionContainer>;
}

const SectionContainer = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: auto;
  margin: 0 auto;
`

export default SectionLayout;
