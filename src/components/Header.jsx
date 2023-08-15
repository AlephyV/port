import styled from 'styled-components';

import { useState } from 'react';
import { useEffect } from 'react';

import Logo from './Logo';
import WaveBg from '../assets/svg/wavebg';  
import GradientLine from './GradientLine';
import { useLocation } from 'react-router-dom';
import Circle from './icons/circle';

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

const ItemListStyled = styled.li`
    display: ${({ active }) => active === 'true' ? 'flex' : ''};
    flex-direction: ${({ active }) => active === 'true' ? 'column' : ''};
    position: ${({ active }) => active === 'true' ? 'relative' : ''};
    top: ${({ active }) => active === 'true' ? '-25px' : ''};
    align-items: ${({ active }) => active === 'true' ? 'center' : ''};
`;

const LinkStyled = styled.a`
    color: #D80B77;
    text-decoration: none;
    position: ${({ active }) => active === 'true' ? 'relative' : ''};
    top: ${({ active }) => active === 'true' ? '5px' : ''};
    &:hover {
        text-decoration: underline;
    }
`;

const CircleWrapper = styled.span`
    display: ${({ active }) => active === 'true' ? 'block' : 'none'};
    svg {
        circle {
            fill: #D80B77;
        }
    }
`

const CircleStyled = ({activeFlag}) => {
    return (
        <CircleWrapper active={activeFlag}>
            <Circle />
        </CircleWrapper>
    )
}

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
                        <ItemListStyled active={(path === '/').toString()}>
                            <CircleStyled activeFlag={(path === '/').toString()} />
                            <LinkStyled active={(path === '/').toString()} href="/">Home</LinkStyled>
                        </ItemListStyled>
                        <ItemListStyled active={(path === '/projects').toString()}>
                            <CircleStyled activeFlag={(path === '/projects').toString()} />
                            <LinkStyled active={(path === '/projects').toString()} href="/projects">Projects</LinkStyled>
                        </ItemListStyled>
                        <ItemListStyled active={(path === '/about').toString()}>
                            <CircleStyled activeFlag={(path === '/about').toString()} />
                            <LinkStyled active={(path === '/about').toString()} href="/about">About</LinkStyled>
                        </ItemListStyled>
                    </ItensListStyled>
                </NavItemsStyled>
            </HeaderStyled>
        </div>
    );
}

export default Header