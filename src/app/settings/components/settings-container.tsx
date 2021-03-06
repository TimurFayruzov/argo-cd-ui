import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { ClustersList } from './clusters-list/clusters-list';
import { ReposList } from './repos-list/repos-list';
import { SettingsOverview } from './settings-overview/settings-overview';

export const SettingsContainer = (props: RouteComponentProps<any>) => (
    <Switch>
        <Route exact={true} path={`${props.match.path}`} component={SettingsOverview}/>
        <Route exact={true} path={`${props.match.path}/repos`} component={ReposList}/>
        <Route exact={true} path={`${props.match.path}/clusters`} component={ClustersList}/>
        <Redirect path='*' to={`${props.match.path}`}/>
    </Switch>
);
