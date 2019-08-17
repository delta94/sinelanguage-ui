import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <Layout>
        <div>
            <Head title="Artists" />
            <Dashboard edges={data.allArtistJson.edges} />
        </div>
    </Layout>
)

export const query = graphql`
    {
        allArtistJson {
            edges {
                node {
                    title
                    thumbnail
                }
            }
        }
    }
`
