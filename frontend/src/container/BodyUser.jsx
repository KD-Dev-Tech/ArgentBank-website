import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from '../app/userSlice'; 
import { setToken } from '../app/authSlice';
import AccountCard from "../components/AccountCard";
import Modal from "../components/Modal_Edit_User";
import accountData from '../data/accountBalance.json'

const BodyUser = () => {
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user.user)
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken)); 
    }else {
      navigate('/error'); 
    }
    const userProfile = async() => {
      const reponse = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        if (reponse.status === 200) {
          const data = await reponse.json();
          dispatch(setUserProfile(data.body))         
        }
      }
      if (token) {
        userProfile();
      }
    },[token, dispatch, navigate]);  
    
    const handleButtonClick = () => {
      setIsEdit(true);
    };
  
    const handleCloseModal = () => {
      setIsEdit(false);
    };

    return (
      <div className="body">
      <div className="header">  
        <h1>
        {isEdit ? 'Edit User Info' : `Welcome back\n${user?.firstName ?? ''} ${user?.userName ?? ''}`} 
        </h1>
        {isEdit && <Modal onClose={handleCloseModal} />}
        {!isEdit && (
        <button className="edit-button" onClick={handleButtonClick}> 
        Edit Name
        </button>
        )}
      </div>
       {accountData?.map((account, index) => ( 
        <AccountCard
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />  
      ))}
    </div>
  )
};
export default BodyUser;