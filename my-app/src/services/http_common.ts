import axios from "axios";
import { APP_ENV } from "../env";

const http = axios.create({
  baseURL: APP_ENV.REMOTE_HOST_NAME,
    headers: {
        "Content-type": "application/json"
    }
});

export default http;