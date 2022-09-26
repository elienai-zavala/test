import { useRef, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg();
  }, [ user, pass ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pass);
    // console.log(JSON.stringify({user, pass}));
    setUser('');
    setPass('');
    setSuccess(true);
  }

  return (
    <>
    {
      success ? (
        // <div className="container-form">You're Login.</div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      ) : (
        <div className="container-form">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>      
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form className="login" onSubmit={handleSubmit}>
            <label className="label" htmlFor='username'>Username:</label>
            <input 
              className="input"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required 
            />
    
            
            <label className="label" htmlFor='password'>Password:</label>
            <input 
              className="input"
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required 
            />
    
            <button className="button btn-login">Sign In</button>
          </form>
        </div>
      )
    }
    </>
  )
}
 export default Login;