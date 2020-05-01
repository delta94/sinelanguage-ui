import ContentList from '~/components/ContentList'
import { Podcast } from '~/cms/types'
import React from 'react'
import { graphql } from 'gatsby'
import { sortByDate } from '~/utils/content'

type ViewProps = {
    data: {
        allContentfulPodcast: {
            nodes: Podcast[]
        }
    }
}

export default ({ data }: ViewProps) => {
    const items = sortByDate([...data.allContentfulPodcast.nodes])

    return <ContentList title="PODCASTS" items={items} />
}

export const query = graphql`
    {
        allContentfulPodcast {
            nodes {
                ...podcastFragment
            }
        }
    }
`
