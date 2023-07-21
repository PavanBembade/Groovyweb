// const initialState={
//     favorites:[],
// };

// const favoriteReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case "ADD_TO_FAVORITES":
//             return{
//                 ...state,
//                 favorites:[...state.favorites,action.itemId],
//             };
//             case "REMOVE_FROM_FAVORITES":
//                 return{
//                     ...state,
//                     favorites: state.favorites.filter((id)=>id !== action.itemId)
//                 };
//     }
// }

const addFavorites = [];

const addFavoriteItem = (state = addFavorites, action) => {
    switch (action.type) {
        case "ADDFAVORITE" :
             return [
            ...state,
            action.payload
        ]
        break;

        case "DELFAVORITE" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addFavoriteItem;