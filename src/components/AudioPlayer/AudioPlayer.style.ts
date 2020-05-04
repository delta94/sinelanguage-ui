import { Box, Grid, Theme } from '@material-ui/core'
import { marginSide, marginTop } from '~/styles/sizes'

import styled from 'styled-components'

type AudioPlayerProps = {
    theme: Theme
}

export const AudioPlayer = styled(Box)`
    ${({ theme }: AudioPlayerProps) => `    
        color: white;  
        position: fixed;
        z-index: 1000;
        left: 0;
        bottom: 0;
        width: 100%;
        padding-top: ${theme.spacing(marginTop)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
        background-color: rgba(255, 255, 255, 0.13);
        backdrop-filter: blur(12px);
    `}
`
export const TimeControl = styled(Grid)`
    ${({ theme }) => `
        height: 100%;
        padding-bottom: ${theme.spacing(1)};
    `}
`
