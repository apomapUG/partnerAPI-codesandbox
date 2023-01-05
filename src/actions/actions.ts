import * as Constants from "../constants/constants"
import axios from "axios"


export const fetchTasks = async (token:string) => {
  try {
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
  } catch (error) {
    return {
      message: "Something went wrong",
      error
    }
  }
};

export const fetchLocation = async (token:string) => {
  try {
    const {data} = await axios({
      url: Constants.GRAPHQL_API,
      method: "POST",
      headers: { authorization: token },
      data: {
        query: Constants.GET_LOCATION
      },
    });
    const queryResult = data.data;
    return queryResult
  } catch (error) {
    return {
      message: "Something went wrong",
      error
    }
  }
};