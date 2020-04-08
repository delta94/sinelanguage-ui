import Field from './field'
import { SubFieldProps } from '../types/subFieldProps'

export default class TextField extends Field {
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
            type: 'Text',
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

    getTyping = () => `{
        ${this.contentFields.id}: string
    }`

    getFragment = () =>
        `${this.contentFields.id} {
            ${this.contentFields.id}
        }`
}
