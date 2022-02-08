import React, { Children } from 'react';
import styled from 'styled-components';

function SectionLayout({ children }:{children: React.ReactNode}) {
  return <SectionContainer>
    {children}
  </SectionContainer>;
}

const SectionContainer = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`

export default SectionLayout;
