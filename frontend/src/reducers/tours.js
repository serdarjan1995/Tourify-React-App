import {ADD_TOUR, DELETE_TOUR, GET_TOURS} from "../actions/types"

const initialState = {
    tours: [],
    next: null,
    previous: null,
    count: 0,
}

export default function reduceTours(state = initialState, action) {
    switch (action.type) {
        case GET_TOURS: return {
            ...state,
            tours: action.payload.results,
            next: action.payload.next,
            previous: action.payload.previous,
            count: action.payload.count,
        }
        case DELETE_TOUR: return {
            ...state,
            tours: state.tours.filter((tour) => {return tour !== action.payload}),
            count: state.count - 1,
        }
        case ADD_TOUR: return {
            ...state,
            tours: [...state.tours, action.payload],
            count: state.count + 1,
        }
        default: return state;
    }
}