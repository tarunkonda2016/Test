import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../RootReducer/CombinedReducer';

export default function configureStore() {
  const root = rootReducer();
  const store = createStore(root, applyMiddleware(thunk));
  return store;
}
