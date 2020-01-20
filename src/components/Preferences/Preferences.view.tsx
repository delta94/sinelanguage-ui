import {
    AcceptButton,
    FinalRow,
    Message,
    PopupContainer,
    PopupContent,
    Row,
    Title,
    Toggle,
} from './Preferences.style'
import { Button, IconButton, Typography } from '@material-ui/core'

import BarChartIcon from '@material-ui/icons/BarChart'
import BuildIcon from '@material-ui/icons/Build'
import { Link } from 'gatsby'
import PersonIcon from '@material-ui/icons/Person'
import PolicyIcon from '@material-ui/icons/Policy'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings'

type ViewProps = {
    isConfigure: boolean
    setIsConfigure: (isConfigure: boolean) => void
    isPolicyAccepted: boolean
    onPolicyAccepted: () => void
    isPreferencesOpen: boolean
    setIsPreferencesOpen: (isPreferencesOpen: boolean) => void
    isAnalyticsEnabled: boolean
    setIsAnalyticsEnabled: (isAnalyticsEnabled: boolean) => void
}

const PrivacyMessage = () => (
    <Message>
        This website uses cookies to provide a better browsing experience. Find out more about how
        we use this data in our <Link to="/artists">privacy policy.</Link>
    </Message>
)

export default ({
    isConfigure,
    setIsConfigure,
    isPolicyAccepted,
    onPolicyAccepted,
    isPreferencesOpen,
    setIsPreferencesOpen,
    isAnalyticsEnabled,
    setIsAnalyticsEnabled,
}: ViewProps) => {
    return (
        <>
            <IconButton onClick={() => setIsPreferencesOpen(!isPreferencesOpen)}>
                <PolicyIcon />
            </IconButton>
            {isPreferencesOpen && !isConfigure && (
                <PopupContainer>
                    <PopupContent>
                        <Row>
                            <PrivacyMessage />
                        </Row>
                        <Row>
                            <Button onClick={() => setIsConfigure(true)}>
                                <SettingsIcon />
                                Configure
                            </Button>
                            <AcceptButton onClick={() => onPolicyAccepted()}>Accept</AcceptButton>
                        </Row>
                    </PopupContent>
                </PopupContainer>
            )}
            {isPreferencesOpen && isConfigure && (
                <PopupContainer>
                    <PopupContent>
                        <Title>Privacy Preferences</Title>
                        <Row>
                            <PrivacyMessage />
                        </Row>
                        <Row>
                            <BuildIcon />
                            <Typography>Necessary</Typography>
                            <Toggle checked={true} disabled />
                        </Row>
                        <Row>
                            <PersonIcon />
                            <Typography>Preferences</Typography>
                            <Toggle />
                        </Row>
                        <FinalRow>
                            <BarChartIcon />
                            <Typography>Statistics</Typography>
                            <Toggle
                                checked={isAnalyticsEnabled}
                                onChange={() => setIsAnalyticsEnabled(!isAnalyticsEnabled)}
                            />
                        </FinalRow>
                        <Row>
                            <Button onClick={() => setIsPreferencesOpen(false)}>Close</Button>
                            <AcceptButton onClick={() => onPolicyAccepted()}>Accept</AcceptButton>
                        </Row>
                    </PopupContent>
                </PopupContainer>
            )}
        </>
    )
}
