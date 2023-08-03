import React from 'react'
import { useState } from 'react';
import './Login.css';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // window.alert(username + ' ' + password)
          
        // Show loading indicator while waiting for the response
        setLoading(true);
       
    
        try {
          // Fetch the login endpoint
          
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            
          });
          const json=await response.text();

          // window.alert(json)

          
    
          if (response.ok) {
            // Handle successful login here (e.g., store user data in state or local storage)
            console.log('Login successful');
            window.alert('Login Scuccessful')
          } else {
            // Handle login error here
            console.log('Login failed');
            window.alert('Login Failed')
          }
        } catch (error) {
          // Handle network or other errors here
          console.error('Error occurred:', error);

        } finally {
          // Hide loading indicator regardless of success or failure
          setLoading(false);
        }
      };

    return (
        <main>
            <div className='login-div'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <input
                        required
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>
                        Password:
                    </label>
                    <div className='password-login'>
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />


                        {/* Show Password button */}

                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className='login-warning'></div>
                    {/* <button type="submit">Login</button> */}
                    {/* <input  type="submit"   /> */}
                    {/* <button className='submit-button' type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button> */}
                     <button className='submit-button' type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>


            </div>
        </main>
    )
}

export default Login
