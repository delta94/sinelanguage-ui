import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Header, ToggleMobileMenu } from './Navigation.style'
import React, { useState } from 'react'

import IconButton from '~/components/IconButton'
import Links from './Links'
import NavItem from '~/components/NavItem'
import { Route } from '~/constants/route'
import { Unicode } from '~/constants/unicode'
import { navigate } from 'gatsby'

type ViewProps = {
    location: Location
}

export default ({ location }: ViewProps) => {
    const isMenuOpen = location.pathname === '/menu'
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
    const [previousLocation, setPreviousLocation] = useState<string>()

    function handleMenuClick() {
        if (isMenuOpen) {
            navigate(previousLocation || '/')
        } else {
            setPreviousLocation(location.pathname)
            navigate('/menu')
        }
    }

    return (
        <Header>
            <Grid container spacing={isMobile ? 10 : 0} justify="space-between">
                <Grid item xs={isMobile ? 9 : 6}>
                    <NavItem
                        to={Route.NEWS}
                        title={isMobile ? 'SINE LANGUAGE' : 'SINE LANGUAGE RECORDS'}
                    />
                </Grid>
                {isMobile && (
                    <Grid item>
                        <ToggleMobileMenu>
                            <IconButton
                                label={
                                    <Typography variant="h1" align="center">
                                        {isMenuOpen ? Unicode.CLOSE : '+'}
                                    </Typography>
                                }
                                onClick={handleMenuClick}
                                isLight={true}
                            />
                        </ToggleMobileMenu>
                    </Grid>
                )}
                {!isMobile && <Links isMobile={isMobile} />}
            </Grid>

            {/* {isAuthenticated() ? (
                <>
                    <li>
                        <NavItem to={ROUTES.ACCOUNT} title="Account" partiallyActive={true} />
                    </li>
                    <li>
                        <SignOutButton />
                    </li>
                </>
            ) : (
                <li>
                    <SignInButton />
                    <MenuIcon />
                </li>
            )} */}
        </Header>
    )
}
