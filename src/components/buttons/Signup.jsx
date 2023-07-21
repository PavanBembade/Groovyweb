import React, { useState } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions/authRegisterAction";


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errors, setErrors] = useState({});
  const [conPassWord, setConPassWord] = useState("");


  const validateForm = () => {
        const errors = {};
    
        // Validate username
        if (!userName.trim()) {
          errors.userName = 'Username is required';
        }
    
        // Validate email
        if (!email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email address';
        }
    
        // Validate birthdate
        if (!birthDate) {
          errors.birthDate = 'Birthdate is required';
        }
    
        // Validate password
        if (!passWord) {
          errors.passWord = 'Password is required';
        } else if (passWord.length < 6) {
          errors.passWord = 'Password must be at least 6 characters long';
        }
    
        // Validate confirm password
        if (!conPassWord) {
          errors.conPassWord = 'Confirm Password is required';
        } else if (conPassWord !== passWord) {
          errors.conPassWord = 'Passwords do not match';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          const newUser = {
            userName,
            email,
            birthDate,
            passWord,
          };
    
          dispatch(registerAction(newUser));
        }
      };
    


  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-6">
          <div className="cards">
            <form>
              <div className="mb-2">
                <label for="exampleInputPassword2" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="exampleInputPassword2"
                  // onChange={handleChange}
                onChange={(e) => setUserName(e.target.value)}
                />
        {errors.userName && <span className="text-danger">{errors.userName}</span>}

              </div>
              <div className="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  // onChange={handleChange}
                onChange={(e) => setEmail(e.target.value)}
                />
              {errors.email && <span className="text-danger">{errors.email}</span>}

              </div>
              <div className="mb-2">
                <label for="exampleInputPassword3" className="form-label">
                  Birthdate
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword3"
                  // onChange={handleChange}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
        {errors.birthDate && <span className="text-danger">{errors.birthDate}</span>}

              </div>
              <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  // onChange={handleChange}
                  onChange={(e) => setPassWord(e.target.value)}
                />
           {errors.passWord && <span className="text-danger">{errors.passWord}</span>}

              </div>
              <div className="mb-2">
                <label for="exampleInputPassword4" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="form-control"
                  id="exampleInputPassword4"
                  onChange={(e) => setConPassWord(e.target.value)}
                />
               {errors.conPassWord && (
          <span className="text-danger">{errors.conPassWord}</span>
         )}
              </div>
              <div className="mb-2 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-4 w-100 mx-auto"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <div>
                <p className="text-center">
                  Don't have Account{" "}
                  <NavLink to="/login">
                    <span>Create account</span>
                  </NavLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;









// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerAction } from '../redux/actions';

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [birthdate, setBirthdate] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     // Validate username
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }

//     // Validate email
//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Invalid email address';
//     }

//     // Validate birthdate
//     if (!birthdate) {
//       errors.birthdate = 'Birthdate is required';
//     }

//     // Validate password
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     // Validate confirm password
//     if (!confirmPassword) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (confirmPassword !== password) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const newUser = {
//         username,
//         email,
//         birthdate,
//         password,
//       };

//       dispatch(registerAction(newUser));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         {errors.username && <span className="error">{errors.username}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
//       <div>
//         <label>Birthdate:</label>
//         <input
//           type="date"
//           value={birthdate}
//           onChange={(e) => setBirthdate(e.target.value)}
//         />
//         {errors.birthdate && <span className="error">{errors.birthdate}</span>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         {errors.confirmPassword && (
//           <span className="error">{errors.confirmPassword}</span>
//         )}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;
