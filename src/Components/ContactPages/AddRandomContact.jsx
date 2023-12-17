import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
  const responseFromAPI = await getRandomUser();
  console.log(responseFromAPI); 
  return props.handleAddRandomContact({
    name: responseFromAPI.data[0].first_name + " " + responseFromAPI.data[0].last_name,
    email: responseFromAPI.data[0].email,
    phone: responseFromAPI.data[0].phone_number,
  });}
;

const AddRandomContact = (props) => {
    return (
      <div>
        <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
        >
           Add Random Contact
      </button>
      </div>
    );
  };
  
  export default AddRandomContact;