import './App.css';
import React from 'react';

function isStrongPassword(password) {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains both uppercase and lowercase letters
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }

  return true;
}

const App = () => {
  const [password, setPassword] = React.useState('');
  const [isStrong, setIsStrong] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsStrong(isStrongPassword(newPassword));
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };


  return (
    <>
    <div className='wrap'>
    <div className='pass'>
      
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
       

       <button className='animated-button'  onClick={handleShowPassword}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>


       {password && <p style={{ color: isStrong ? 'green' : 'red' }} >{isStrong ? 'Strong Password' : 'Weak Password'}</p>}
      
      </div>

    </div>
    </>
  );
};




export default App;
