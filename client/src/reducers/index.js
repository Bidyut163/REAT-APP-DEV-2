import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import appeal from './appeal';
import errors from './errors';

export default combineReducers({
    auth: auth,
    user: user,
    appeal: appeal,
    errors: errors,
});
