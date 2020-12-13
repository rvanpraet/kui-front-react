import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import TopBar from './components/Menu/TopBar';
import AppRoutes from './AppRoutes';

const history = createBrowserHistory()

const App: React.FC = () => {
    return (
        <Router history={history}>
            <TopBar />
            <AppRoutes />
        </Router>
    );
}

export default App;
