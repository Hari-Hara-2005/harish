import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      Swal.fire({
        title: "Login Suceesfully!",

        icon: "success"
      });
      navigate("/");
    } catch (error) {
      console.log("Error signing up:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",

      });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url('/Asset/fower-1.jpg')` }}>
      <div className='backdrop-brightness-100 bg-white/30 w-96 p-10 rounded-2xl'>
        <h1 className='text-5xl text-center font-serif'>Sign In</h1>
        <form onSubmit={handleSignup}>

          <label htmlFor='email' className='block mt-3 text-2xl font-serif'>Email</label>
          <input
            id='email'
            className='border-2 mt-3 rounded-lg focus:border-b-blue-600 w-full py-2 focus:outline-none'
            type='email'
            placeholder='Enter Email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label htmlFor='password' className='block mt-3 text-2xl font-serif'>Password</label>
          <input
            id='password'
            className='rounded-lg border-2 mt-3 focus:border-b-blue-600 w-full py-2 focus:outline-none'
            type='password'
            placeholder='Enter Password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-xl font-serif mt-4">
            <p>Don't have an account? <Link to="/Register">SignUp</Link></p>
          </div>
          <button type='submit' className='bg-blue-600 text-white font-semibold w-full py-1 mt-5 rounded-md text-2xl '>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
