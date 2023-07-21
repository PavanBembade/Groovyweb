// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

// export const registerSuccess =(registerData)=>({
//     type:REGISTER_SUCCESS,
//     payload:registerData,
// });



// export const setSignupData = (data) => {
//     return {
//       type: 'SET_SIGNUP_DATA',
//       payload: data,
//     };
//   };
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerAction = (newUser) => {
  return {
    type: REGISTER_SUCCESS,
    payload: newUser,
  };
};