import { Content, GlobalStyle } from './Layout.style'
import React, { FC, ReactNode } from 'react'

import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import Navigation from '~/components/Navigation'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '~/styles/theme'
import withFlipAnimation from '~/components/withFlipAnimation'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

const Layout: FC<Props> = ({ isDarkMode, setIsDarkMode, children }: Props) => {
    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />
            <GlobalStyle />
            <Container>
                <Navigation />
                {children}
                <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </Container>
        </ThemeProvider>
    )
}

export default withFlipAnimation(Layout)
