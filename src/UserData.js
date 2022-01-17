import './UserData.css';

function UserData(props) {
  console.log("Userdata Props", props);
  return (
    <>
      <h2>username : {props.userName}</h2>
      <h2>position : {props.userPosition}</h2>
    </>
  );
}
export default UserData;
