import React from 'react'
import styled from 'styled-components';

const StyledSvg = styled.svg`
  max-height: 30px;
  fill: ${({ theme }) => theme.textColor };
`

export default function SearchIcon() {
  return (
    <StyledSvg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/">
      <path d="M39.1 77.3c9.3 0 17.8-3.3 24.4-8.9L93.1 98c.7.7 1.5 1 2.5 1 .9 0 1.8-.3 2.5-1 1.4-1.4 1.4-3.6 0-4.9L68.4 63.5c5.5-6.6 8.9-15.1 8.9-24.4C77.3 18.1 60.2 1 39.1 1 18.2 1 1 18.2 1 39.1c0 21.1 17.2 38.2 38.1 38.2zm0-69.4c17.2 0 31.2 14 31.2 31.2s-14 31.2-31.2 31.2-31.2-14-31.2-31.2C7.9 22 22 7.9 39.1 7.9z"/>
    </StyledSvg>
  )
}
