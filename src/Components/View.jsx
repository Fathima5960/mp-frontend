import React, { useEffect, useState } from "react";
import VideoCard from "../Components/VideoCard";
import { Col, Row } from "react-bootstrap";
import {
  getAllCategoryAPI,
  getAllUploadedVideosAPI,
  updateCategoryAPI,
} from "../../services/allAPI";

function View({ uploadVideoResponse, setVideoResponse }) {
  const [allVideo, setAllVideo] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false);
  useEffect(() => {
    getAllUploadedVideo();
    setDeleteVideoResponse(false);
  }, [uploadVideoResponse, deleteVideoResponse]);

  const getAllUploadedVideo = async () => {
    const result = await getAllUploadedVideosAPI();
    if (result.status === 200) {
      console.log(result);
      setAllVideo(result.data);
    } else {
      console.log("API Failed");
      setAllVideo([]);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDropped = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"));
    console.log(videoId, categoryId);
    const { data } = await getAllCategoryAPI();
    const selectedCategory = data.find((item) => item.id == categoryId);
    let result = selectedCategory.allVideo.filter(
      (video) => video.id !== videoId
    );
    console.log(result);
    let { id, categoryName } = selectedCategory;
    let newCategory = { id, categoryName, allVideo: result };
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId, newCategory);
    setVideoResponse(res);
  };

  return (
    <>
      <Row
        droppable="true"
        onDragOver={(e) => dragOver(e)}
        onDrop={(e) => videoDropped(e)}
      >
        {allVideo?.length > 0 ? (
          allVideo.map((video) => (
            <Col sm={12} md={4} lg={3} className="mx-3">
              <VideoCard
                video={video}
                setDeleteVideoResponse={setDeleteVideoResponse}
              />
            </Col>
          ))
        ) : (
          <p className="text-danger fw-bolder">nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
