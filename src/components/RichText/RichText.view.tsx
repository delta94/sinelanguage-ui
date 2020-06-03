import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Document } from '@contentful/rich-text-types/dist/types/types'
import ExternalLink from '~/components/ExternalLink'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    json: Document
    variant: 'h3' | 'h5' | 'body1'
    align?: 'center' | 'left' | 'right'
}

type HyperLinkContent = {
    value: string
}

export default ({ json, variant, align = 'left' }: ViewProps) => {
    const options: Options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <>
                    <Typography variant={variant} align={align}>
                        {children}
                    </Typography>
                    <br />
                </>
            ),
            [INLINES.HYPERLINK]: (node) => (
                <ExternalLink
                    href={node.data.uri}
                    title={(node.content[0] as HyperLinkContent).value}
                    variant={variant}
                />
            ),
        },
    }

    return <>{documentToReactComponents(json, options)}</>
}
