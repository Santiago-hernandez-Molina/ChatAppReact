import axios from "axios";
import { API_URL } from "../Shared/Constans/api.constants";

export const chatApi = axios.create({
	baseURL: API_URL
})
