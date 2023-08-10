import styled from 'styled-components';

const WaveBgSvg = styled.svg`
    fill: #F1F5F7;
    position: absolute;
    z-index: -1;
    top: 0;
`;

const WaveBg = () => {
    return (
        <WaveBgSvg viewBox="0 0 1440 320">
            <path fillOpacity="1" d="M0,64L34.3,53.3C68.6,43,137,21,206,16C274.3,11,343,21,411,69.3C480,117,549,203,617,213.3C685.7,224,754,160,823,138.7C891.4,117,960,139,1029,154.7C1097.1,171,1166,181,1234,170.7C1302.9,160,1371,128,1406,112L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </WaveBgSvg>
    );
}

export default WaveBg;