import { useState } from "react";
import { login } from "./api/users"
import { useNavigate } from "react-router-dom";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {

    if (username == '' || password == '') {
      setErrorMessage("Username and Password is required");
      setShowMessage(true);
    }

    else {
      const response = await login(username, password);

      if (response) {
        navigate('/inventory');
      }

      else {
        setErrorMessage("Invalid username and password");
      }
      setShowMessage(true);
    }
  }

  return (
    <>
      {/* <div className="grid grid-cols-[50%,50%] w-screen h-screen"> */} {/* flex flex-col justify-center align-top, w-[800px], cols-column */}
      {/*  <h1 className ="rounded-xl shadow-black mx-5 text-5xl text-white bg-black text-center">Inventory System</h1> */} {/*margin-outside jy element m-all side,ml-margin left,mr-margin-right my-ngato kn baba nga margin .. rounded-full,s to xl - agbalin nga round jy sides na*/}
      {/*  <h1 className ="p-5 text-5xl text-white bg-black text-center">Inventory System</h1> */} {/* padding-inside the element p ( error ? "bg-red-200 text-red-700": "bg-green-200 text-green-700")  */}

      <div className="w-screen h-screen text-white bg-black p-5 flex justify-center">
        <div className="rounded border border-blue-700 m-5 p-5 w-[500px] h-[400px]">

          <h1 className="text-5xl text-center hover:bg-red-500">LOGIN</h1>
          {
            showMessage &&
            (
              <div className="m-2 text-center rounded bg-red-200 text-red-700" >
                { errorMessage }
              </div>
        )
          }

        <div className="flex gap-5 m-10">
          <div className="text-3xl">Username: </div>
          <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded border border-grey-400 text-black" type="text" />
        </div>

        <div className="flex gap-7 m-10">
          <div className="text-3xl">Password: </div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded border border-grey-400 text-black" type="password" />
        </div>

        <div className="flex justify-center">
          <button onClick={handleLogin} className="bg-blue-700 text-white p-3 rounded hover:bg-blue-500 hover:text-black">LOGIN</button>
        </div>
      </div>
    </div >

    </>
  )
}

export default App
