import { createStore, combineReducers } from "redux";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
import cartItemsReducer from "../features/cartItemsSlice";
import productReducer from "../features/productsSlice";
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key49",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  cartItem: cartItemsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
