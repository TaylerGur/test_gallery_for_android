import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import dataReducer from './reducers/dataReducer.js';
import pageReducer from './reducers/pageReducer.js';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
        dataGallery : dataReducer,
        page: pageReducer
  });

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
