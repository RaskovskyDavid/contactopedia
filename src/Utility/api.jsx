import axios from "axios";

const getRandomUser = async () => {
    try {
    const response = await axios.get(
      "https://random-data-api.com/api/users/random_user",
      {
        headers: {},
        params: {
          size: 1,
        },
      }
    );
    return response;
    } catch(err) {
        console.log("error: ", err);
    }
  };
  
  export { getRandomUser };
