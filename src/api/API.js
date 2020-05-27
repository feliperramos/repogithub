import axios from "axios";
import url from "../url.json";

const API = async (type, name, api, numb, repo) => {
  let response;

  switch (numb) {
    case 1:
      response = await axios.get(api);
      break;

    case 2:
      response = await axios.get(url.githubAPI + type + "/" + name);
      break;

    case 3:
      response = await axios.get(
        url.githubAPI + type + repo + "/" + name + "/issues/events"
      );
      break;

    default:
      response = await axios.get(api);
      break;
  }

  return response;
};

export default API;
