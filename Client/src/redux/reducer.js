import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

const initialState = {
    myFavorites: [],
    allCharecters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharecters, payload],
                allCharecters: [...state.allCharecters, payload]
            }

        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const allCharectersFiltered = state.allCharecters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters' 
                    ? [...state.allCharecters]
                    : allCharectersFiltered
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharecters]
            return {
                ...state,
                myFavorites: payload === 'A' ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}


export default reducer;