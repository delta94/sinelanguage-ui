import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

export const IconContainer = styled.span<{ isLarge: boolean; isTranslateY: boolean }>`
    svg {
        display: block;
        width: ${({ isLarge }) => (isLarge ? 1.4 : 0.9)}em;
        height: ${({ isLarge }) => (isLarge ? 1.4 : 0.9)}em;

        path {
            transform: translateX(-15px);
            transform: translateY(${({ isTranslateY }) => (isTranslateY ? 5 : 0)}px);
        }
    }
`
