import Head from '../components/Head'
import React from 'react'
import SquareImage from '../components/SquareImage'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const { name, image } = data.prismicPodcast.data

    return (
        <div>
            <Head title={name} />
            <h1>{name}</h1>
            <SquareImage image={image} />
        </div>
    )
}

export const query = graphql`
    query($uid: String!) {
        prismicPodcast(uid: { eq: $uid }) {
            ...podcastFragment
        }
    }
`
