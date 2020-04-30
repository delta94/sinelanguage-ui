import { Contact } from './Contact.style'
import Email from './Email'
import Overlay from '~/components/Overlay'
import React from 'react'
import Subscribe from './Subscribe'
import { Typography } from '@material-ui/core'

export default () => {
    return (
        <Overlay>
            <Contact>
                <Typography variant="h3">CONTACT</Typography>
                <br />
                <Email title="INQUIRIES" email="info@sinelanguage.net" />
                <Email title="BOOKINGS" email="bookings@sinelanguage.net" />
                <Email title="DEMOS" email="demos@sinelanguage.net" />
                <br />
                <br />
                <Subscribe />
            </Contact>
        </Overlay>
    )
}
