import React from 'react'
import { Link } from 'gatsby'
import { Flipped } from 'react-flip-toolkit'
import styles from './index.module.scss'
import SquareImage from '../SquareImage'

export default ({ type, name, uid, published_date, image }) => {
    // const isVisible = !filter || filter === layout
    const isVisible = true

    return (
        <Flipped flipId={uid} stagger opacity translate={false}>
            <Link to={`/${type}s/${uid}`} className={isVisible ? styles.show : styles.hide}>
                <SquareImage image={image} />
                <h4>{name}</h4>
            </Link>
        </Flipped>
    )
}
