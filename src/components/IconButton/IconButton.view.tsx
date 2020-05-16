import { Box, Grid } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { Button } from './IconButton.style'
import { CartItem } from '~/types/snipcart'

type ViewProps = {
    label?: ReactNode
    icon: ReactNode
    onClick(): void
    isLight: boolean
    isDisabled?: boolean
    cartItem?: CartItem
}

export default ({ label, icon, onClick, isLight, isDisabled = false, cartItem }: ViewProps) => (
    <Button
        onClick={() => !isDisabled && onClick()}
        isLight={isLight}
        isDisabled={isDisabled}
        className={cartItem !== undefined ? 'buy-button snipcart-add-item' : ''}
        data-item-id={cartItem?.id}
        data-item-price={cartItem?.price}
        data-item-url={cartItem?.url}
        data-item-name={cartItem?.name}
        data-item-description={cartItem?.description}
        data-item-image={cartItem?.imageUrl}
        data-item-custom1-name="Format"
        data-item-custom1-options={cartItem?.formats}
    >
        <Box display="inline-flex">
            <Box>{icon}</Box>
            {label && <Box>{label}</Box>}
        </Box>
    </Button>
)
