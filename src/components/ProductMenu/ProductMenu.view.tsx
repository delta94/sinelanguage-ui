import { Grow, Typography } from '@material-ui/core'
import { Product, Release } from '~/cms/types'
import React, { useEffect, useRef, useState } from 'react'
import { getDescription, getImage, getPrice, isPhysicalFormat } from '~/utils/product'

import GlassPanel from '~/components/GlassPanel'
import IconButton from '~/components/IconButton'
import { Popup } from './ProductMenu.style'
import ReleaseProducts from '~/components/ReleaseProducts'
import { Unicode } from '~/constants/unicode'
import { getUrl } from '~/utils/content'
import useCartContext from '~/hooks/useCartContext'

type Props = {
    release: Release
    products: Product[]
    isLarge: boolean
    isLight: boolean
    text?: string
    indicateWhenInBag: boolean
}

export default ({ release, products, isLarge, isLight, text, indicateWhenInBag }: Props) => {
    const { cart } = useCartContext()
    const timeout = 200
    const transformOrigin = '0 0 0'
    const [popoverTrigger, setPopoverTrigger] = useState<HTMLButtonElement>()
    const popoverTriggerRef = useRef<HTMLButtonElement>(null)
    const isAnyProductAvailable = products.find(
        (product) => isPhysicalFormat(product) || product.fileGUID
    )
    const isInBag =
        products &&
        cart.items.find((cartItem) => products.map((x) => x.title).includes(cartItem.id)) !==
            undefined

    useEffect(() => {
        return enableScroll
    }, [])

    const blockScroll = () => {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        document.ontouchmove = function (e) {
            e.preventDefault()
        }
    }

    const enableScroll = () => {
        document.getElementsByTagName('html')[0].style.overflow = 'scroll'
        document.ontouchmove = function (e) {
            return true
        }
    }

    const handleClick = () => {
        if (popoverTriggerRef.current) {
            setPopoverTrigger(popoverTriggerRef.current)
            blockScroll()
        }
    }

    const handleClose = () => {
        setPopoverTrigger(undefined)
        enableScroll()
    }

    if (!isAnyProductAvailable) {
        return <></>
    }

    return (
        <>
            <IconButton
                buttonRef={popoverTriggerRef}
                label={
                    <Typography
                        variant={isLarge ? 'h3' : 'body1'}
                        color={isInBag && indicateWhenInBag ? 'secondary' : 'inherit'}
                    >{`${Unicode.CART_LEFT_ALIGN} ${text ? text : ''}`}</Typography>
                }
                onClick={handleClick}
                isLight={isLight}
                isDisabled={!products}
            />
            {products.map((product, index) => (
                <button
                    key={index}
                    hidden
                    className="snipcart-add-item"
                    data-item-id={product.title}
                    data-item-price={getPrice(product)}
                    data-item-url={getUrl(release)}
                    data-item-name={product.title}
                    data-item-description={getDescription(product)}
                    data-item-image={getImage(release, product)}
                    data-item-file-guid={product.fileGUID}
                    data-item-shippable={isPhysicalFormat(product)}
                >
                    {product.format}
                </button>
            ))}

            <Popup>
                <GlassPanel elevation={3} borderRadius={4}>
                    <ReleaseProducts
                        release={release}
                        products={products}
                        isLarge={isLarge}
                        isLight={false}
                        isDescription={false}
                        onCheckoutClick={handleClose}
                    />
                </GlassPanel>
            </Popup>
        </>
    )
}
