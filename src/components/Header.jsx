import styled from 'styled-components';

import { useState } from 'react';
import { useEffect } from 'react';

import Logo from './Logo';
import WaveBg from '../assets/svg/wavebg';  
import GradientLine from './GradientLine';
import { Link, redirect, useLocation } from 'react-router-dom';

const HeaderStyled = styled.div`
    height: 65px;
    margin: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItemsStyled = styled.div`
    color: #D80B77;
`;

const ItensListStyled = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    gap: 40px;
    height: 100%;
    cursor: pointer;
`;

const LinkStyled = styled.a`
    color: #D80B77;
    text-decoration: none;
`;

const Header = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname.toLocaleLowerCase())

    useEffect(() => {
        setPath(location.pathname.toLocaleLowerCase());
    });

    return (
        <div className="header">
            <GradientLine />
            <WaveBg/>
            <HeaderStyled>
                <Logo width="60px" height="60px" />
                <NavItemsStyled>
                    <ItensListStyled>
                        <LinkStyled href="/">Home</LinkStyled>
                        <LinkStyled href="/projects">Projects</LinkStyled>
                        <LinkStyled href="/about">About</LinkStyled>
                    </ItensListStyled>
                </NavItemsStyled>
            </HeaderStyled>
        </div>
    );
}

export default Header