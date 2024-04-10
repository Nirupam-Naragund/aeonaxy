

// import React, { useState } from 'react';
// import "./Page-3.css"
// import { Link } from 'react-router-dom';



// const DribbleForm = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const options = [
//     {
//       image: '/image-1.png',
//       text: "I'm a designer looking to share my work",
//     },
//     {
//       image: '/image-2.png',
//       text: "I'm looking to hire a designer",
//     },
//     {
//       image: '/image-3.png',
//       text: "I'm looking for design inspiration",
//     },
//   ];

//   return (
//     <div className="dribble-form">
//       <div className="dribble-header">
//         <span className="dribble-logo">< img src='/dribble.png'/></span>
//       </div>
//       <h2 className="dribble-title">What brings you to Dribbble?</h2>
//       <p className="dribble-description">
//         Select the options that best describe you. Don't worry, you can explore other options later.
//       </p>
//       <div className="dribble-options">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`option ${selectedOption === option ? 'selected' : ''}`}
//             onClick={() => handleOptionClick(option)}
//           >
//             <div
//               className="option-image"
//               style={{ backgroundImage: `url(${option.image})` }}
//             ></div>
//             <p className="option-text">{option.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="dribble-actions">
//       <Link to={'/Page-4.jsx'}>   <button className="dribble-button">Finish </button></Link>
//         <br />
//       </div>
//       <p id='last'>Or press return</p>
//     </div>
    
//   );
// };

// export default DribbleForm;

import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Page-3.css"

const DribbleForm = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      // Move to next page
      navigate('/Page-4')
      console.log('Moving to next page');
    } else {
      // Show toast message indicating that an option must be selected
      toast.error('Please select an option before proceeding.');
    }
  };

  const options = [
    {
      image: '/image-1.png',
      text: "I'm a designer looking to share my work",
    },
    {
      image: '/image-2.png',
      text: "I'm looking to hire a designer",
    },
    {
      image: '/image-3.png',
      text: "I'm looking for design inspiration",
    },
  ];

  return (
    <div className="dribble-form">
      <ToastContainer />
      <div className="dribble-header">
        <span className="dribble-logo"><img src='/dribble.png' alt="Dribble Logo"/></span>
      </div>
      <h2 className="dribble-title">What brings you to Dribbble?</h2>
      <p className="dribble-description">
        Select the options that best describe you. Don't worry, you can explore other options later.
      </p>
      <div className="dribble-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            <div
              className="option-image"
              style={{ backgroundImage: `url(${option.image})` }}
            ></div>
            <p className="option-text">{option.text}</p>
          </div>
        ))}
      </div>
      <div className="dribble-actions">
        <button className="dribble-button" onClick={handleSubmit}>Finish</button>
        <br />
      </div>
      <p id='last'>Or press return</p>
    </div>
  );
};

export default DribbleForm;

