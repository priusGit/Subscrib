import axiosBase from "axios";
import { BACKEND_API } from "../config";

export const axios = axiosBase.create({ baseURL: BACKEND_API });
