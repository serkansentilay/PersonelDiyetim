import React from 'react'
import { Provider } from "react-redux"
import store from './context/store';
import Router from './Router';

const Wrapper = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default Wrapper
