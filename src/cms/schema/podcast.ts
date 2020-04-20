import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    IntegerField,
    LinkField,
    SymbolField,
    TextField,
} from '../../../cms/models'
import { imageFileSize, unique } from '../../../cms/validations'

import { FluidImageType } from '../../../cms/constants'
import Track from './track'

export default new ContentfulContentType({
    id: 'podcast',
    name: 'Podcast',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
            validations: [unique],
        }),
        new SymbolField({
            id: 'uid',
            name: 'Podcast Number',
            validations: [unique],
            widgetId: 'singleLine',
            helpText: 'Use format SLRXXX',
        }),
        new TextField({
            name: 'Description',
            widgetId: 'multipleLine',
            helpText: 'SEO friendly description used when linking to this podcast.',
        }),
        new FluidImageField({
            name: 'Image',
            validations: [imageFileSize],
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
        }),
        new DateField({
            name: 'Date',
            widgetId: 'datePicker',
            format: 'dateonly',
        }),
        new LinkField({
            name: 'Track',
            link: Track,
        }),
    ],
})
