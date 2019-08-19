import React from 'react'
import styles from './index.module.scss'
import { Flipped } from 'react-flip-toolkit'

const DashboardItem = ({ id, title, thumbnail }) => (
    <Flipped flipId={id}>
        <div>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <h4>{title}</h4>
        </div>
    </Flipped>
)

export default DashboardItem
