import { artist, event, podcast, release, siteMetadata, track } from './src/cms/schema'

import { generateTypes } from './cms/cicd/generate-types'

generateTypes('./src/cms/types.d.ts', [artist, event, podcast, release, siteMetadata, track])
