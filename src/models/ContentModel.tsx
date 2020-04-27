import { Artist, Event, Podcast, Release } from '../cms/types'
import { GridSize, Typography } from '@material-ui/core'

import Head from '~/components/Head'
import Image from 'gatsby-image'
import React from 'react'

export abstract class ContentModel {
    content: Artist | Event | Podcast | Release
    isPlayableFromDashboard = true
    hoverGridSize: GridSize = 5
    thumbnailGridSize: GridSize = 3
    dashboardWidth: number = 1
    constructor(content: Artist | Event | Podcast | Release) {
        this.content = content
    }
    getDateMs = () => new Date(this.content.date).getTime()
    getImage = () => this.content.image
    getImageCaption = () => this.content.title
    getDashboardComponent = () => (
        <Image
            title={this.getImageCaption()}
            alt={this.getImageCaption()}
            sizes={{ ...this.getImage().fluid }}
        />
    )
    getThumbnailInfoComponent = () => <Typography variant="body1">{this.content.title}</Typography>
    getSEOComponent = () => (
        <Head
            title={this.content.title}
            description={this.content.description.description}
            image={this.content.image.fluid.src}
        />
    )
    abstract getDashboardInfoComponent(): JSX.Element
    abstract getListComponent(): JSX.Element

    abstract getDetailComponent(): JSX.Element
    abstract getDetailUrl(): string
}
