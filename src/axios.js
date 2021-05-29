import axios from "axios"

const instance = axios.create({
	baseURL: "https://us-central1-challenge-22f78.cloudfunctions.net/api",
	// http://localhost:5001/challenge-22f78/us-central1/api
});
export default instance;

