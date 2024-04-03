import { commonAPI } from "./commonApi";
import { SERVER_URL } from "./serverurl";

// upload new video
export const uploadVideoAPI = async (video) => {
  return await commonAPI("POST", `${SERVER_URL}/allVideos`, video);
};

// get allUploadedVideos

export const getAllUploadedVideosAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/allVideos`, "");
};

// get A Video
export const getAVideoAPI = async (id) => {
  return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "");
};

// add video history
export const addVideoHistoryAPI = async (video) => {
  return await commonAPI("POST", `${SERVER_URL}/history`, video);
};

// get history
export const getHistoryAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/history`, "");
};

// delete history
export const deleteHistoryAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`, {});
};
//   delete Video

export const deleteAVideoAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`, {});
};

// add category
export const addCategoryAPI = async (category) => {
  return await commonAPI("POST", `${SERVER_URL}/category`, category);
};

// get category
export const getAllCategoryAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/category`, "");
};
// delete category
export const deleteCategoryAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`, {});
};

// update video to category
export const updateCategoryAPI = async (id, categoryDetails) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/category/${id}`,
    categoryDetails
  );
};
