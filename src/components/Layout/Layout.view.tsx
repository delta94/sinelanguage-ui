import 'font-awesome/css/font-awesome.css'
import 'ie-string-startswith-polyfill'

import { AppContainer, GlobalStyle } from './Layout.style'
import React, { ReactNode } from 'react'

import AudioProvider from '~/components/AudioProvider'
import CartProvider from '~/components/CartProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import Dashboard from '~/components/Dashboard'
import { Location } from '@reach/router'
import MailchimpPopup from '~/components/MailchimpPopup'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Navigation from '~/components/Navigation'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import useTheme from '~/hooks/useTheme'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    const theme = useTheme()

    return (
        <MuiThemeProvider theme={theme}>
            <ScThemeProvider theme={theme}>
                <CartProvider>
                    <AudioProvider>
                        <CssBaseline />
                        <GlobalStyle />
                        <AppContainer>
                            <Location>
                                {({ location }) => <Navigation location={location} />}
                            </Location>
                            <main>
                                {children}
                                <Dashboard />
                            </main>
                            <MailchimpPopup />
                        </AppContainer>
                    </AudioProvider>
                </CartProvider>
            </ScThemeProvider>
        </MuiThemeProvider>
    )
}
