


const Dashboard = () => {


  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  console.log(user.name, user.role);



  return (
    <div>
      
      Dashboard Page


      <h1>{user.name} - {user.role}</h1>
      <h2>Your token is: {token}</h2>
  
    </div>


  )
}
export default Dashboard;