import React from 'react'
import styled from 'styled-components';
import Eye from '../assets/img/logo.png'

const StyledLogo = styled.img`
  border-radius: 50%;
  border: 3px solid white;
`;


function Logo({width, height}) {
  return (
    <div className="logo" style={{display: "flex"}}>
      <StyledLogo src={Eye} width={width} height={height}></StyledLogo>
    </div>
  )
}

export default Logo