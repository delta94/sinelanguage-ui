import { largeRowPadding, marginSide, smallRowPadding } from '~/styles/sizes'

import { Box } from '@material-ui/core'
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

export const ItemRow = styled(Row)<{ isLargePaddingOnMobile: boolean }>`
    cursor: pointer;

    ${({ theme, isLargePaddingOnMobile }) => `
        padding: ${theme.spacing(isLargePaddingOnMobile ? largeRowPadding : smallRowPadding)} 0;

        ${theme.breakpoints.up('md')} {
            padding: ${theme.spacing(smallRowPadding)} 0;
        }
    `}
`

export const HoverImage = styled(Box)`
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
`

export const Fade = styled.div<{ isVisible: boolean }>`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 400ms;
`
