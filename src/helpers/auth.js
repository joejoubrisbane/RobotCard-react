

import {Loader} from "semantic-ui-react";

import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';


const locationHelper = locationHelperBuilder({});

export const UserIsAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsAuthenticated',
    AuthenticatingComponent: Loader,
    allowRedirectBack: true,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || '/login',
    authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && !auth.isEmpty
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    AuthenticatingComponent: Loader,
    allowRedirectBack: false,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || '/',
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && auth.isEmpty
});