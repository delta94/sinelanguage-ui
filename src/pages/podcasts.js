import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <Layout>
        <div>
            <Head title="Podcasts" />
            <Dashboard data={data} />
        </div>
    </Layout>
)

export const query = graphql`
    {
        allDataJson(filter: { layout: { eq: "podcast" } }) {
            edges {
                node {
                    title
                    thumbnail
                }
            }
        }
    }
`