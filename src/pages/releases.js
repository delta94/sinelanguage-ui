import React from 'react'
import Head from '../components/Head'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <div>
        <Head title="Releases" />
        <Dashboard data={data} />
    </div>
)

export const query = graphql`
    {
        allDataJson(filter: { layout: { eq: "release" } }, sort: { fields: [date], order: DESC }) {
            edges {
                node {
                    id
                    layout
                    title
                    thumbnail
                }
            }
        }
    }
`
