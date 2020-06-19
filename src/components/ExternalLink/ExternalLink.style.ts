import { lightShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const Link = styled.a`
    cursor: pointer;
    color: white;
    display: inline-block;
    width: auto;
    padding-left: 3px;

    &:hover {
        color: black;
        text-shadow: ${lightShadow};

        svg {
            filter: drop-shadow(${lightShadow});
        }
    }

    .MuiIcon-root {
        ${({ theme }) => `        
            width: ${theme.spacing(12)};
            height: ${theme.spacing(12)};
            padding-left: ${theme.spacing(1)};
        `}
    }

    svg {
        display: block;
    }
`
