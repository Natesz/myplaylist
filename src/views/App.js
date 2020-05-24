import React from "react";
import "./App.css";
import Layout from './layout/Layout';
import Home from './home/Home';
import Playlists from './playlists/Playlists';
import Search from './search/Search';
import Tracks from './tracks/Tracks';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/home">
          <Home />
        </Route >
        <Route path="/playlists/:playlistId?/:trackId?">
          <Playlists />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/tracks">
          <Tracks />
        </Route>
        <Redirect to="/home"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}