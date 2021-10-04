import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']  // this property contains the string names of the reducers that we wanna store
    // (user reducer is persisted by Firebase so we're not passing that in here)
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });

export default persistReducer(persistConfig, rootReducer);
