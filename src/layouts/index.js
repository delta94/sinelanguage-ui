import '../styles/index.scss'

import React, { useEffect, useState } from 'react'

import App from '../app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import withFlipAnimation from '../hocs/withFlipAnimation'

const Layout = props => {
    const isUserPreferenceDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferenceDarkMode)
    const AppWithFlipAnimation = withFlipAnimation(App)

    useEffect(() => {
        setIsDarkMode(isUserPreferenceDarkMode)
    }, [isUserPreferenceDarkMode])

    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />

            <AppWithFlipAnimation
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                children={props.children}
            ></AppWithFlipAnimation>
        </ThemeProvider>
    )
}

export default Layout
