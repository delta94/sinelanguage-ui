import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class RichTextField extends Field {
    constructor({
        id,
        name,
        localized,
        required,
        validations,
        disabled,
        omitted,
        widgetId,
        helpText,
        format,
    }: SubFieldProps) {
        super({
            id,
            name,
            type: 'RichText',
            localized,
            required,
            validations,
            disabled,
            omitted,
            widgetId,
            helpText,
            format,
        })
    }

    getTyping = () =>
        `{
            json: Document
        }`

    getNode = (schemaName: string) =>
        `${this.contentFields.id}: contentful${schemaName}${this.getNameNoSpace()}RichTextNode`

    getLinkedNode = (
        schemaName: string
    ) => `type contentful${schemaName}${this.getNameNoSpace()}RichTextNode implements Node {
        nodeType: String
        json: JSON
    }`

    getFragment = () =>
        `${this.contentFields.id} {
            json
        }`
}
