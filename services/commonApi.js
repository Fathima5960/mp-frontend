import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody) => {
  let reqConfig = {
    method: httpRequest,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: reqBody,
  };
  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
