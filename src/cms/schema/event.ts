import {
    ContentfulContentType,
    DateField,
    FluidImageField,
    RichTextField,
    SymbolArrayField,
    SymbolField,
    TextField,
    VideoField,
} from '../../../cms/models'
import { imageFileSize, marks, nodeTypes, unique, videoFileSize } from '../../../cms/validations'

import { FluidImageType } from '../../../cms/constants'

export default new ContentfulContentType({
    id: 'event',
    name: 'Event',
    description: '',
    displayField: 'title',
    fields: [
        new SymbolField({
            name: 'Title',
            validations: [unique],
        }),
        new SymbolField({
            id: 'uid',
            name: 'Unique ID',
            validations: [unique],
            widgetId: 'slugEditor',
        }),
        new SymbolField({
            name: 'Location',
        }),
        new TextField({
            name: 'Description',
            widgetId: 'multipleLine',
            helpText: 'SEO friendly description used when linking to this event.',
        }),
        new RichTextField({
            name: 'Details',
            validations: [nodeTypes(['hyperlink']), marks(['italic'])],
            widgetId: 'richTextEditor',
        }),
        new SymbolArrayField({
            name: 'Artists',
            itemType: 'Symbol',
            widgetId: 'tagEditor',
        }),
        new FluidImageField({
            name: 'Image',
            validations: [imageFileSize],
            maxWidth: 2400,
            quality: 90,
            fluidImageType: FluidImageType.WEBP_BLUR_UP,
        }),
        new VideoField({
            name: 'Teaser Video',
            validations: [videoFileSize],
            required: false,
        }),
        new DateField({
            name: 'Date',
            widgetId: 'datePicker',
            format: 'dateonly',
        }),
    ],
})
