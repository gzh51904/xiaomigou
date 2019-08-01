/* 将所有的redux结合在一起 */
import {combineReducers} from 'redux';

import CarReducer from './CarReducer.js';
import InfoReducer from './InfoReducer.js'

export default combineReducers({CarReducer,InfoReducer})