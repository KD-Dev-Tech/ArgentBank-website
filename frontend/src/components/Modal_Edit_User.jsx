import { useSelector } from "react-redux";
import { useState } from "react";

const Modal = () => {
  const token = useSelector((state) => state.auth.token)
  const [userName, setUsername] = useState("")

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const uptdateUser = async( ) => {
    console.log(userName)
    const reponseEdit = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + token,
          },
          body: JSON.stringify({userName : userName}),
        }
      );
      console.log(reponseEdit);
        if (reponseEdit.status === 200) {
            const data = await reponseEdit.json();
            console.log(data);
        }
  }

  return (
    <>
    <input type="text"
    value={userName} 
    onChange={handleChange} 
    />
    <button onClick={uptdateUser}>
      save
    </button>
    <p></p>
    </>
  )
}

export default Modal;