import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import DialogContainer from '../components/DialogContainer';
import PageLayout from '../components/PageLayout';
import Dashboard from '../Pages/Dashboard';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/Login';
import Products from '../Pages/Products';
import SignUpPage from '../Pages/SignUp';

const Navigation: React.FC = (): JSX.Element => {
    const idToken = localStorage.getItem('isAuth') || '';
    return (
        <Router>
            {idToken === 'true' ? (
                <>
                    <DialogContainer />

                    <PageLayout>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route exact path="/home-app">
                                <HomePage />
                            </Route>
                            <Route exact path="/produtos">
                                <Products />
                            </Route>
                        </Switch>
                    </PageLayout>
                </>
            ) : (
                <Switch>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/cadastro">
                        <SignUpPage />
                    </Route>

                    <Redirect to="/login" />
                </Switch>
            )}
        </Router>
    );
};

export default Navigation;
