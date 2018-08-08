import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import resultReducer from './store/reducers/result'
import counterReducer from './store/reducers/counter'

const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
})

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
