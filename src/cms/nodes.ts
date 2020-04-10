export const typeDefs = `
	type contentfulArtistDescriptionTextNode implements Node {
        description: String
    }

	type contentfulArtistBioRichTextNode implements Node {
        nodeType: String
        json: JSON
    }

	type ContentfulArtist implements Node {
		title: String
		uid: String
		description: contentfulArtistDescriptionTextNode
		image: ContentfulAsset
		bio: contentfulArtistBioRichTextNode
		date: Date @dateformat
		socials: [String]
	}

	type contentfulReleaseDescriptionTextNode implements Node {
        description: String
    }

	type contentfulReleaseEmbeddedPlayerTextNode implements Node {
        embeddedPlayer: String
    }

	type ContentfulRelease implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		format: String
		description: contentfulReleaseDescriptionTextNode
		image: ContentfulAsset
		date: Date @dateformat
		embeddedPlayer: contentfulReleaseEmbeddedPlayerTextNode
	}

	type contentfulSiteMetadataDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulSiteMetadata implements Node {
		title: String
		url: String
		description: contentfulSiteMetadataDescriptionTextNode
		image: ContentfulAsset
	}

`
