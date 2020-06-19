import { Box, Slide, Typography } from '@material-ui/core'
import { EmailInput, EmailInputContainer, PopupContainer } from './MailchimpPopup.style'
import React, { useEffect, useRef, useState } from 'react'

import Cookies from 'universal-cookie'
import IconButton from '~/components/IconButton'
import { Unicode } from '~/constants/unicode'
import moment from 'moment'
import useMailchimp from '~/hooks/useMailchimp'

export default () => {
    const cookieResult = new Cookies().get('mailinglist')
    const [isActive, setIsActive] = useState(cookieResult === undefined)
    const {
        isSuccess,
        isInvalid,
        emailInput,
        email,
        onEmailChanged,
        onKeyDown,
        onSubmit,
    } = useMailchimp()

    useEffect(() => {
        if (isSuccess) {
            const hideOnSuccess = setTimeout(() => {
                setIsActive(false)
                saveResponse(true)
            }, 2000)

            return () => clearTimeout(hideOnSuccess)
        }
    }, [isSuccess])

    function saveResponse(response: boolean) {
        new Cookies().set('mailinglist', response, {
            path: '/',
            expires: moment().add(1, 'years').toDate(),
        })
    }

    function dismissPopup() {
        setIsActive(false)
        saveResponse(false)
    }

    return (
        <Slide
            direction="left"
            in={isActive}
            style={{ transitionDelay: isActive ? '3000ms' : '0ms' }}
        >
            <PopupContainer elevation={3}>
                <Box display="flex">
                    <Typography variant="h3" gutterBottom>
                        Want to hear from us about new releases, mixes and live events?
                    </Typography>
                    <Box marginLeft="20px">
                        <IconButton
                            label={<Typography variant="h3">{Unicode.CLOSE}</Typography>}
                            isLight={false}
                            onClick={dismissPopup}
                        />
                    </Box>
                </Box>
                <br />
                {!isSuccess && (
                    <>
                        <Typography variant="h3">
                            <EmailInputContainer isInvalid={isInvalid}>
                                <EmailInput
                                    inputRef={emailInput}
                                    type="email"
                                    value={email}
                                    error={isInvalid}
                                    onChange={onEmailChanged}
                                    onKeyDown={onKeyDown}
                                    spellCheck={false}
                                    InputProps={{
                                        color: 'primary',
                                        style: {
                                            fontSize: 'inherit',
                                            fontWeight: 'inherit',
                                            lineHeight: 'inherit',
                                        },
                                    }}
                                    placeholder="EMAIL"
                                />
                            </EmailInputContainer>
                        </Typography>
                        <Box display="flex" justifyContent="flex-end" width="100%" paddingTop={2}>
                            <IconButton
                                label={<Typography variant="h3">Join the mailing list</Typography>}
                                isLight={false}
                                isDisabled={isInvalid || !email}
                                onClick={onSubmit}
                            />
                        </Box>
                    </>
                )}
                {isSuccess && (
                    <Typography variant="h3" gutterBottom>
                        Thanks for subscribing!
                    </Typography>
                )}
            </PopupContainer>
        </Slide>
    )
}
