import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Ccai5dpnsgRszpedmvmixZ5hfzXIcGWXZyhCLLf_0FsjdBYW2O-b5TqawO6-Fch52pfvve0ziwp_g7XYauY4fxnysGcYTmVdY6OAZ5J7KYXl-ihevJyAyW2AoBIYXnYx"
  }
});
