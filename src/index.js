import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./views/App";
import {TracksProvider} from './state/TracksProvider';
import {PlaylistsProvider} from './state/PlaylistsProvider';

ReactDOM.render(
    <PlaylistsProvider>
        <TracksProvider>
            <App />
        </TracksProvider>
    </PlaylistsProvider>, 
    document.getElementById("root")
);
