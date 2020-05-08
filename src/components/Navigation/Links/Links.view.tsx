import { Grid } from '@material-ui/core'
import NavItem from '~/components/NavItem'
import React from 'react'
import { Route } from '~/constants/route'
import { Row } from './Links.style'

// todo: replace row style with grid spacing

type ViewProps = {
    isMobile: boolean
}

export default ({ isMobile }: ViewProps) => (
    <>
        <Grid item xs={isMobile ? 12 : 3}>
            <Grid container direction="column">
                <Row item>
                    <NavItem to={Route.ARTISTS} title="ARTISTS" partiallyActive={true} />
                </Row>
                <Row item>
                    <NavItem to={Route.PODCASTS} title="PODCASTS" partiallyActive={true} />
                </Row>
                <Row item>
                    <NavItem to={Route.RELEASES} title="RELEASES" partiallyActive={true} />
                </Row>
            </Grid>
        </Grid>
        <Grid item xs={isMobile ? 12 : 3}>
            <Grid container direction="column">
                <Row item>
                    <NavItem to={Route.EVENTS} title="EVENTS" partiallyActive={true} />
                </Row>
                <Row item>
                    <NavItem to={Route.CONTACT} title="CONTACT" partiallyActive={true} />
                </Row>
                <Row item>
                    <NavItem to={Route.BAG} title="BAG" partiallyActive={true} />
                </Row>
            </Grid>
        </Grid>
    </>
)
