import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from '../reducers';

export const sagaMiddleware = createSagaMiddleware();

const commonMiddlewares = [sagaMiddleware];

const combinedMiddlewares = process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(
        applyMiddleware(...commonMiddlewares, logger)
    )
    : applyMiddleware(...commonMiddlewares);

const configureStore = initialState => createStore(
    reducers,
    initialState,
    combinedMiddlewares
);

export default configureStore;
