import styled from 'styled-components';

import Logo from './Logo';
import WaveBg from '../assets/svg/wavebg';
import GradientLine from './GradientLine';

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
`;

const Header = () => {
    return (
        <div className="header">
            <GradientLine />
            <WaveBg/>
            <HeaderStyled>
                <Logo width="60px" height="60px" />
                <NavItemsStyled>
                    <ItensListStyled>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                    </ItensListStyled>
                </NavItemsStyled>
            </HeaderStyled>
        </div>
    );
}

export default Header