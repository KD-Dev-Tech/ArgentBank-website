import { useEffect } from "react";
import AccountCard from "../components/AccountCard";
import Modal from "../components/Modal_Edit_User";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from '../app/userSlice'; 
import { setToken } from '../app/authSlice';

const BodyUser = () => {
    // const token = localStorage.getItem("token");
    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
      if (storedToken) {
          dispatch(setToken(storedToken)); 
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
  },[token, dispatch]);  

  return (
    <div className="body">
      <div className="header">  
        <h1>Welcome back<br /> {`${user.firstName} ${user.userName}`}</h1>
        <Modal/>
        <button className="edit-button">Edit Name</button>
      </div>
        <AccountCard 
        title="Argent Bank Checking (x8349)" 
        amount="$2,082.79" 
        description="Available Balance" />
        <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance" />
        <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance" /> 
    </div>
  )
};
export default BodyUser;