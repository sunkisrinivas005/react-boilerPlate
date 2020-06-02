import React from 'react';

import { Provider } from 'react-redux';
import { Switch, HashRouter } from 'react-router-dom';

import configureStore from './store';
import Route from './app/routes';

export const store = configureStore();

const App = () =>
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route />
            </Switch>
        </HashRouter>
    </Provider>;

export default App;