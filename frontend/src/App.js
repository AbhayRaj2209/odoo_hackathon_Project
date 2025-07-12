import React from 'react';
import AuthForm from './AuthForm';

const App = () => {
  const handleLogin = async (credentials) => {
    // Implement your login API call here
    console.log('Logging in with:', credentials);
	};
   return (
    <div className="app">
      <AuthForm onLogin={handleLogin} onSignup={handleSignup} />
    </div>
  );
};


export default App;

