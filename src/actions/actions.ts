import * as Constants from "../constants/constants"
import axios from "axios"


export const fetchTasks = async (token:string) => {
  const {data} = await axios({
    url: Constants.GRAPHQL_API,
    method: "POST",
    headers: { authorization: token },
    data: {
      query: Constants.GET_TASKS,
    },
  });
  const queryResult = data.data;
  return queryResult
};

export const fetchLocation = async (token:string) => {
  const {data} = await axios({
    url: Constants.GRAPHQL_API,
    method: "POST",
    headers: { authorization: token },
    data: {
      query: Constants.GET_LOCATION
    },
  });
  const queryResult = data.data;
  return queryResult};