import { BlurLayer, FocusImage, InvertBlurLayer, InvertLayer, List, Row } from './ContentList.style'
import { Grid, RootRef, Typography } from '@material-ui/core'
import React, { useCallback, useRef, useState } from 'react'

import { ContentModel } from '~/cms/models'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

type ViewProps = {
    models: ContentModel[]
}

export default ({ models }: ViewProps) => {
    const [activeModel, setActiveModel] = useState<ContentModel>()
    const [verticalBreakpoints, setVerticalBreakpoints] = useState<number[]>([0, 0])
    const rows = useRef<(Element | null)[]>([])

    const highlightRow = useCallback(
        (model?: ContentModel, index?: number) => {
            if (!model) {
                setVerticalBreakpoints([0, 0])
                setActiveModel(undefined)
            } else {
                const rowElement = rows.current[index!]

                if (rowElement) {
                    const rowRect = rowElement.getBoundingClientRect()
                    setVerticalBreakpoints([rowRect.top, rowRect.bottom])
                }

                setActiveModel(model)
            }
        },
        [setVerticalBreakpoints]
    )

    return (
        <>
            <BlurLayer height={verticalBreakpoints[0]} offset={0}></BlurLayer>
            <List>
                <Grid container direction="column" spacing={2}>
                    {models.map((model, index) => (
                        <Grid item xs={12} key={index}>
                            <RootRef
                                rootRef={(ref) => {
                                    rows.current.push(ref)
                                }}
                            >
                                <Link to={model.getDetailUrl()}>
                                    <Row
                                        onMouseEnter={() => highlightRow(model, index)}
                                        onMouseLeave={() => highlightRow()}
                                    >
                                        <Grid container>
                                            <InvertBlurLayer item>
                                                <Typography variant="h3">
                                                    {model.getListRowTitle()}
                                                </Typography>
                                            </InvertBlurLayer>
                                            <InvertLayer item></InvertLayer>
                                            <InvertBlurLayer item></InvertBlurLayer>
                                        </Grid>
                                    </Row>
                                </Link>
                            </RootRef>
                        </Grid>
                    ))}
                </Grid>
            </List>
            <BlurLayer
                height={window.innerHeight - verticalBreakpoints[1]}
                offset={verticalBreakpoints[1]}
            ></BlurLayer>
            {activeModel && (
                <FocusImage>
                    <Image
                        title={activeModel.getImageCaption()}
                        alt={activeModel.getImageCaption()}
                        sizes={{ ...activeModel.getImage().fluid, aspectRatio: 1 }}
                    />
                </FocusImage>
            )}
        </>
    )
}