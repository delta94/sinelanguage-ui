import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import Roboto from '../fonts/Roboto.woff'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

// @font-face {
//     font-family: Roboto;
//     font-display: block;
//     src: local('Roboto'), local('Roboto-Regular'), url('../fonts/Roboto.woff2') format('woff2'),
//         url('../fonts/Roboto.woff') format('woff');
//     unicode-range: U+000-5FF;
// }

const roboto = {
    fontFamily: 'Roboto',
    fontDisplay: 'block',
    src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${Roboto}) format('woff')
  `,
    unicodeRange: 'U+000-5FF',
}

export default (isDarkMode = false) =>
    responsiveFontSizes(
        createMuiTheme({
            palette: {
                type: isDarkMode ? 'dark' : 'light',
                primary: indigo,
                secondary: pink,
                error: red,
                contrastThreshold: 3,
                tonalOffset: 0.2,
            },
            typography: {
                fontFamily: 'Roboto',
            },
            overrides: {
                MuiCssBaseline: {
                    '@global': {
                        '@font-face': [roboto],
                    },
                },
            },
        })
    )
