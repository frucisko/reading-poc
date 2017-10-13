/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[React]" }] */
import {h, render, React} from 'preact';
import {Provider} from 'preact-redux';
import configureStore, {sagaMiddleware} from "./store/configureStore";
import sagas from './sagas';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
sagaMiddleware.run(sagas);

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
