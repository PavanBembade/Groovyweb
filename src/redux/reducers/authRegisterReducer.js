// const initialState = [{
//   isAuthenticated: false,
//   registerData: [
//     {
//       username: "Ram Bade",
//       email: "ram@gmail.com",
//       birthdate: "01/01/2002",
//       password: "Ram123",
//     },
//   ],
// }];
// const authRegisterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "REGISTER_SUCCESS":
//       return {
//         ...state,
//         isAuthenticated: true,
//         registerData: [...state.registerData, action.payload],
//       };


    
//     default:
//      return state;
//   }
// };

// export default authRegisterReducer;

// const initialState = {
//   signupData: null,
// };

// // Reducer to handle signup actions
// export const signupReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_SIGNUP_DATA':
//       return {
//         ...state,
//         signupData: action.payload,
//       };
//     default:
//       return state;
//   }
// };


import { REGISTER_SUCCESS } from "../actions/authRegisterAction";

const initialState = {
  users: [],
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default registrationReducer;

