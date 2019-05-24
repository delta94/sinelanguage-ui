import React, { Component } from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'
import getFirebase, { FirebaseContext } from '../Firebase'
import withAuthentication from '../Session/withAuthentication'
import '../../styles/index.scss'
import layoutStyles from './index.module.scss'

class Layout extends Component {
    state = {
        firebase: null,
    }

    componentDidMount() {
        const app = import('firebase/app')
        const auth = import('firebase/auth')
        const database = import('firebase/database')

        Promise.all([app, auth, database]).then(values => {
            const firebase = getFirebase(values[0])

            this.setState({ firebase })
        })
    }

    render() {
        return (
            <FirebaseContext.Provider value={this.state.firebase}>
                <AppWithAuthentication {...this.props} />
            </FirebaseContext.Provider>
        )
    }
}

const AppWithAuthentication = withAuthentication(({ children }) => (
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
            <Navigation />
            <hr />
            {children}
        </div>
        <Footer />
    </div>
))

export default Layout
