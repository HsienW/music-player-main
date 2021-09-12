import React from 'react';
import ReactDOM from 'react-dom';
import 'music-player-common/src/containers/loading-spin/loading-spin';
import 'music-player-common/src/containers/side-bar/side-bar';
import 'music-player-common/src/containers/header-bar/header-bar';
import 'music-player-common/src/containers/player-bar/player-bar';
import './style/main.scss';

function SubAppViewport(props) {
    const {loading} = props;

    return (
        <>
            {loading ? <h4>Loading...</h4> : null}
            <div id='sub-app-viewport' className={'sub-app-display-container'}/>
        </>
    );
}

function configSubAppRender({loading}) {
    const container = document.getElementById('sub-app-container');
    ReactDOM.render(<SubAppViewport loading={loading}/>, container);
}

export {
    configSubAppRender,
};
