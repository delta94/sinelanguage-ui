import React, { Fragment } from 'react'

interface Props {
    email: string
    result: string
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    updateEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default ({ email, result, handleSubmit, updateEmail }: Props) => (
    <form onSubmit={handleSubmit}>
        {result === 'success' && <span>Thanks for subscribing!</span>}
        {result === 'success' || (
            <Fragment>
                <input type="text" value={email} onChange={updateEmail} />
                <button type="submit">Subscribe</button>
            </Fragment>
        )}
        {result === 'error' && (
            <p>
                <span>Please enter a valid email address</span>
            </p>
        )}
    </form>
)
