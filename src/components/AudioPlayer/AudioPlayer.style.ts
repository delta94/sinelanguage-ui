import { marginTop } from '~/styles/sizes'
import styled from 'styled-components'

export const AudioPlayer = styled.div<{ isMinimised: boolean }>`
    @keyframes slidein {
        from {
            bottom: -200px;
        }

        to {
            bottom: 0;
        }
    }

    position: fixed;
    display: block;
    z-index: 1000;
    left: 0;
    bottom: ${({ isMinimised }) => (isMinimised ? -100 : 0)}px;
    width: 100%;
    transition: bottom 0.1s ease;
    animation-name: slidein;
    animation-duration: 0.2s;
`

export const PlayerBody = styled.div`
    ${({ theme }) => `    
        color: white;  
        background-color: rgba(255, 255, 255, 0.13);
        backdrop-filter: blur(12px);

        svg {
            filter: drop-shadow( 2px 2px 2px #000000);
        }
        text-shadow: 1px 2px 4px #000000;
        padding-top: ${theme.spacing(marginTop)};
        padding-left: ${theme.spacing(6)};
        padding-right: ${theme.spacing(6)};
    `}
`

export const AnalyserContainer = styled.div`
    ${({ theme }) => `    
        position: relative;
        height: 100%;
        margin-left: ${theme.spacing(6)};
    `}
`
