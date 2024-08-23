import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setEditUserName } from "../app/userSlice";


const ModalEditUser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user.user) //
  const [userName, setUsername] = useState("")
  
  console.log("ModalEditUser rendu", user);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const uptdateUser = async(e) => {
    e.preventDefault();
    const reponseEdit = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + token,
          },
          body: JSON.stringify({userName}), 
        }
    )
        if (reponseEdit.status === 200) {
            const data = await reponseEdit.json();
            dispatch(setEditUserName(data.body))
        }
        console.log(reponseEdit);
  }
  return (
    <div className="modal-edit">
      <form onSubmit={uptdateUser}>
        <div className="input-wrapper">
          <input type="text"
          placeholder={user.firstName}
          disabled
          />
          <input type="text"
          placeholder={user.lastName}
          disabled
          />
          <input type="text"
          value={userName} 
          onChange={e => handleChange (e)}
          />
        </div>
        <button type="submit">save</button>
        <button type="button">cancel </button>
          <p></p>
      </form>
    </div>
  )
}

export default ModalEditUser;