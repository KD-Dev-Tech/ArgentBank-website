import AccountCard from "../components/AccountCard";



const BodyUser = () => (
  <div className="body">
    <div className="header">  
       {/* modifier le tony jarvis par le user ID */}
      <h1>Welcome back<br />Tony Jarvis!</h1>
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
);

export default BodyUser;