// export const addToFavorite=(itemId)=>({
//     type:"ADD_TO_FAVORITES",
//     itemId
// });
// export const removeFromFAvorites=(itemId)=>({
//     type:"REMOVE_FROM_FAVORITES",
//     itemId
// });

export const addItem = (product1) => {
    return {
        type : "ADDFAVORITE",
        payload : product1
    }
}

export const delItem = (product1) => {
    return {
        type : "DELFAVORITE",
        payload : product1
    }
}