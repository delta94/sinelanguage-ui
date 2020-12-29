import { Box, Collapse, Grid, Typography, withWidth } from '@material-ui/core'
import { Fade, HoverImage, ItemRow, TitleRow } from './ContentList.style'
import React, { useState } from 'react'

import ContentCardMedia from '~/components/ContentCardMedia'
import { ContentItem } from '~/types/cms'
import ContentRow from '~/components/ContentRow'
import { ContentType } from '~/constants/contentType'
import InvertOnHover from '~/components/InvertOnHover'
import { Link } from 'gatsby'
import Overlay from '~/components/Overlay'
import ResponsiveBox from '~/components/ResponsiveBox'
import Scrollable from '~/components/Scrollable'
import { getUrl } from '~/utils/content'

type ViewProps = {
    title: string
    items: ContentItem[]
    isLargePaddingOnMobile?: boolean
}

export default ({ title, items, isLargePaddingOnMobile = true }: ViewProps) => {
    const [activeItem, setActiveItem] = useState<ContentItem>()

    return (
        <Overlay>
            <Scrollable isWithMargin={false}>
                <Grid container>
                    <Grid item xs={12}>
                        <TitleRow>
                            <Typography variant="h3">
                                {title} ({items.length})
                            </Typography>
                        </TitleRow>
                    </Grid>
                    {items.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Link to={getUrl(item)}>
                                <InvertOnHover>
                                    <ItemRow
                                        onMouseEnter={() => setActiveItem(item)}
                                        onMouseLeave={() => setActiveItem(undefined)}
                                        isLargePaddingOnMobile={isLargePaddingOnMobile}
                                    >
                                        <ContentRow content={item} />
                                    </ItemRow>
                                </InvertOnHover>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Scrollable>
            <ResponsiveBox isDesktop={true}>
                {items.map((item, index) => (
                    <HoverImage
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        key={index}
                    >
                        <Box width={item.__typename === ContentType.VIDEO ? '160vh' : '80vh'}>
                            <Collapse
                                in={item === activeItem}
                                timeout={{
                                    enter: 400,
                                    exit: 200,
                                }}
                            >
                                <Fade isVisible={item === activeItem}>
                                    <ContentCardMedia content={item} />
                                </Fade>
                            </Collapse>
                        </Box>
                    </HoverImage>
                ))}
            </ResponsiveBox>
        </Overlay>
    )
}
