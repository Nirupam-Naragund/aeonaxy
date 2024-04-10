// import React from 'react';
// import { Link } from 'react-router-dom';
//  // Import the Dribbble logo image

// const ProfileSetup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       {/* Dribbble logo */}
//       <img src="/dribble.png" alt="Dribbble Logo" className="absolute top-0 left-0 m-4 h-10  w-auto sm:h-16 md:h-20 lg:h-24 xl:h-40" />

//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h1 className="text-2xl font-bold mb-4">Welcome! Let's create your profile</h1>
//         <p className="text-gray-500 mb-8">Let others get to know you better! You can do these later</p>

//         <div className="mb-8">
//           <h2 className="text-lg font-bold mb-2">Add an avatar</h2>
//           <div className="flex justify-center mb-4">
//             <img
//               src="https://via.placeholder.com/150"
//               alt="Avatar"
//               className="rounded-full h-24 w-24 object-cover"
//             />
//           </div>
//           <div className="flex justify-center">
//             <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
//               Choose image
//             </button>
//           </div>
//         </div>

//         <div className="mb-8">
//           <h2 className="text-lg font-bold mb-2">Add your location</h2>
//           <input
//             type="text"
//             placeholder="San Francisco"
//             className="border-gray-300 rounded-md py-2 px-4 w-full"
//           />
//         </div>

//         <div className="flex justify-end">
//         <Link to={'/Page-3.jsx'} >
//           <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
//           Next 
//           </button>
//           </Link> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSetup;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [location, setLocation] = useState('');
  
  const handleNextClick = () => {
    if (avatarSelected && location.trim() !== '') {
      navigate('/Page-3');
    } else {
      // Show toast message indicating that both fields are required
      toast.error('Please select an avatar and enter your location.');
    }
  };

  const handleAvatarChange = (event) => {
    if (event.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(event.target.files[0]);
      setAvatarImage(selectedImage);
      setAvatarSelected(true);
    } else {
      setAvatarSelected(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <ToastContainer />
      {/* Dribbble logo */}
      <img src="/dribble.png" alt="Dribbble Logo" className="absolute top-0 left-0 m-4 h-10  w-auto sm:h-16 md:h-20 lg:h-24 xl:h-40" />

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Welcome! Let's create your profile</h1>
        <p className="text-gray-500 mb-8">Let others get to know you better! You can do these later</p>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Add an avatar</h2>
          <div className="flex justify-center mb-4">
            <img
              src={avatarSelected ? avatarImage : "https://via.placeholder.com/150"}
              alt="Avatar"
              className="rounded-full h-24 w-24 object-cover"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
              id="avatarInput"
            />
            <label htmlFor="avatarInput" className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Choose image
            </label>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Add your location</h2>
          <input
            type="text"
            placeholder="San Francisco"
            className="border-gray-300 rounded-md py-2 px-4 w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;

