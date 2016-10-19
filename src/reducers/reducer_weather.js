import { FETCH_WETHER } from "../actions/index";

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_WETHER:
            // same as return state.concat([action.payload.data]);
            // never manipulate state
            return [ action.payload.data, ...state ];
    }
    return state;
}