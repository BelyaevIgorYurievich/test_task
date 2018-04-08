import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

function configureStore(initialState) {

  const store = createStore(rootReducer);

  return store;

}

const store = configureStore();

export default store;