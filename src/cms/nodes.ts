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

	type contentfulPodcastDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulPodcast implements Node {
		title: String
		uid: String
		description: contentfulPodcastDescriptionTextNode
		image: ContentfulAsset
		date: Date @dateformat
		track: ContentfulTrack
	}

	type contentfulReleaseDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulRelease implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		format: String
		description: contentfulReleaseDescriptionTextNode
		image: ContentfulAsset
		video: ContentfulAsset
		date: Date @dateformat
		tracks: [ContentfulTrack]
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

	type contentfulTrackMetadataJsonNode implements Node {
        title: String
        streamUrl: String
        duration: Int
        samples: [Float]
    }

	type ContentfulTrack implements Node {
		title: String
		metadata: contentfulTrackMetadataJsonNode
	}

`
