import 'font-awesome/css/font-awesome.css'

import { AppContainer, GlobalStyle } from './Layout.style'
import { Artist, Event, Podcast, Release } from '~/cms/types'
import React, { ReactNode, useState } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Dashboard from '~/components/Dashboard'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import theme from '~/styles/theme'

type ViewProps = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
    location: Location
}

export default ({ isDarkMode, setIsDarkMode, children }: ViewProps) => {
    const [selectedMedia, setSelectedMedia] = useState<Artist | Event | Podcast | Release>()

    return (
        <MuiThemeProvider theme={theme(isDarkMode)}>
            <ScThemeProvider theme={theme(isDarkMode)}>
                <SelectedMediaContext.Provider value={{ selectedMedia, setSelectedMedia }}>
                    <>
                        <CssBaseline />
                        <GlobalStyle />
                        <AppContainer>
                            <Header />
                            <main>
                                {children}
                                <Dashboard />
                            </main>
                            <AudioPlayer />
                        </AppContainer>
                    </>
                </SelectedMediaContext.Provider>
            </ScThemeProvider>
        </MuiThemeProvider>
    )
}
