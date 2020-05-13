import { Grid, GridSpacing } from '@material-ui/core'

import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

const Row = styled.div`
    width: 100%;
    white-space: pre;
    text-align: left;

    ${({ theme }) => `
        padding-left: ${theme.spacing(marginSide)};
    `}
`

export const TitleRow = styled(Row)`
    ${({ theme }) => `
        margin-bottom: ${theme.spacing(5)};
    `}
`

export const ItemRow = styled(Row)<{ padding: GridSpacing }>`
    cursor: pointer;

    ${({ theme, padding }) => `    
        padding: ${theme.spacing(padding * 0.5)} ${theme.spacing(marginSide)};
    `}
`

export const HoverImage = styled(Grid)`
    position: fixed;
    pointer-events: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: auto;
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
`

export const BlackBackdrop = styled.div`
    position: fixed;
    pointer-events: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    margin: auto;
    width: 100vw;
    height: 100vh;

    background-color: white;

    @supports (filter: blur(12px)) {
        background-color: black;
    }
`
