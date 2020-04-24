import { contentOffset, marginSide } from '~/styles/sizes'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const ArtistDetail = styled(Grid)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    text-shadow: 1px 2px 4px #000000;
    color: white;
`

export const ArtistImage = styled(Grid)`
    width: 100%;
    height: 100%;
`

export const ArtistInfo = styled.div`
    ${({ theme }) => `    
        margin: 0 ${theme.spacing(marginSide)};
        padding-top: ${theme.spacing(contentOffset)};
        padding-bottom: ${theme.spacing(20)};
        height: 100vh;
        overflow: scroll;
    `}
`
