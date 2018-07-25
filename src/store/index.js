import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga'


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;
