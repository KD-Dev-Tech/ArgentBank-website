import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setEditUserName } from "../app/userSlice";
import PropTypes from "prop-types";


const ModalEditUser = ({ onClose }) => {
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
            dispatch(setEditUserName(data.body));
            onClose()
        }
        console.log(reponseEdit);
  }
  return (
    <div className="modal-edit">
      <form onSubmit={uptdateUser}>
        <div className="input-wrapper">
          User Name :
          <input 
          type="text"
          value={userName} 
          onChange={e => handleChange (e)}
          />
        </div>      
        <div className="input-wrapper">
          First Name : 
          <input 
          type="text"
          placeholder={user.firstName}
          disabled
          />
        </div>
        <div className="input-wrapper">
          Last Name :
          <input 
          type="text"
          placeholder={user.lastName}
          disabled
          />
        </div>
        <div className="form-edit">
          <button className="sign-in-button" type="submit">save</button>
          <button className="sign-in-button" type="button"onClick={onClose}>cancel </button>
        </div>
          <p></p>
      </form>
    </div>
  )
}

ModalEditUser.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ModalEditUser;