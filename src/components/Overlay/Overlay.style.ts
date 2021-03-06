import { darkShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    text-shadow: ${darkShadow};
    color: white;

    svg {
        filter: drop-shadow(${darkShadow});
    }

    background-color: white;

    @supports (filter: blur(12px)) {
        background: none;
    }
`
