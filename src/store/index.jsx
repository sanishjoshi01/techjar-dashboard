import {configureStore} from '@reduxjs/toolkit';
import {loginReducer} from './slices/loginSlice';
import {changeEmail, changePassword} from './slices/loginSlice';

const store = configureStore({
    reducer: {
        login: loginReducer
    }
});

export {store};
export {changeEmail, changePassword};