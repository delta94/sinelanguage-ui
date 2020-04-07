import { ImageField, SymbolField, TextField } from '../../../cms/models'
import { assetFileSize, unique } from '../../../cms/validations'

import { Control } from '../../../cms/types/control'

const fields = [
    new SymbolField({
        name: 'Title',
    }),
    new SymbolField({
        name: 'Url',
        validations: [
            unique,
            {
                in: ['https://sinelanguage.netlify.com', 'https://sinelanguage.net'],
            },
        ],
    }),
    new TextField({
        name: 'Description',
        validations: [
            {
                size: {
                    min: 0,
                    max: 256,
                },
                message: 'Description should be no more than 256 characters',
            },
        ],
        widgetId: 'multipleLine',
        helpText:
            'A short description of Sine Language will be used when sharing on social media, and to improve SEO',
    }),
    new ImageField({
        name: 'Image',
        validations: [assetFileSize],
    }),
]

export default {
    id: 'siteMetadata',
    name: 'Site Metadata',
    description: 'Metadata used for SEO and when linking to the site.',
    displayField: 'title',
    fields: fields,
    controls: fields.map(x => x.control).filter(control => control !== undefined) as Control[],
}
