// import React  from 'react';
// import {useNavigate} from "react-router-dom";
// import { Link } from 'react-router-dom';
// import ProfileSetup from './Page-2.jsx';

// const SignupPage = () => {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     // Navigate to the desired page
//     navigate('./Page-2.jsx');
//   };
//   return (
//     <div className="flex flex-col lg:flex-row items-center h-screen bg-white">
//       <div className="lg:w-2/5 h-72 lg:h-full bg-cover bg-center" style={{backgroundImage: `url('/image.png')`}} />
//       <div className="lg:w-3/5 h-full flex items-center justify-center">
//         <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//           <h1 className="text-2xl font-bold mb-4">Sign up to Dribbble</h1>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="name" className="block font-medium mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="border rounded-md px-3 py-2 w-full"
//                 placeholder="John"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="border rounded-md px-3 py-2 w-full"
//                 placeholder="account@refero.design"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block font-medium mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="border rounded-md px-3 py-2 w-full"
//                 placeholder="6+ characters"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2 text-sm">
//                   Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
//                 </span>
//               </label>
//             </div>
//             <Link to={'/Page-2.jsx'} >
//             <button
//             type="button" // Make sure to use type="button" to prevent form submission
//             className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md w-full"
//             // Handle click event to navigate
//           >
//            Create Account
//           </button>
//           </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleNavigation = () => {
    if (name && email && password && isChecked) {
      navigate('/Page-2');
    } else {
      // Show toast message indicating all fields are required
      toast.error('Please fill in all fields and accept the terms.');
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center h-screen bg-white">
      <ToastContainer /> {/* Container for displaying toast notifications */}
      <div className="lg:w-2/5 h-72 lg:h-full bg-cover bg-center" style={{backgroundImage: `url('/image.png')`}} />
      <div className="lg:w-3/5 h-full flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Sign up to Dribbble</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="John"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="account@refero.design"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="6+ characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm">
                  Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
                </span>
              </label>
            </div>
            <button
              type="button"
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md w-full"
              onClick={handleNavigation}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;


