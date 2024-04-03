import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Modal, Form, Col, Row } from "react-bootstrap";
import {
  addCategoryAPI,
  deleteCategoryAPI,
  getAVideoAPI,
  getAllCategoryAPI,
  updateCategoryAPI,
} from "../../services/allAPI";
import VideoCard from "./VideoCard";

function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategories, setAllCategories] = useState([]);
  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideo: [] });
      if (result.status >= 200 && result.status <= 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("please fill the category field");
    }
  };
  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  const getCategories = async () => {
    const { data } = await getAllCategoryAPI();
    setAllCategories(data);
    // console.log(allCategories)
  };

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };
  const dragOver = (e) => {
    console.log("video dragged over the category");
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("VideoId");
    console.log("Video Id " + videoId, "dropped inside category:" + categoryId);
    const { data } = await getAVideoAPI(videoId);
    // console.log(data);
    const selectedCategory = allCategories.find(
      (item) => item.id === categoryId
    );
    selectedCategory.allVideo.push(data);
    // console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory);
    getCategories();
  };
  // console.log(allCategories);

  const videoDragStarted = (e, videoId, categoryId) => {
    let datashare = { videoId, categoryId };
    e.dataTransfer.setData("data", JSON.stringify(datashare));
  };

  return (
    <>
      <div className="d-grid">
        <button className="btn btn-info" onClick={handleShow}>
          Add category
        </button>
      </div>
      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div
            className="border rounded p-3 my-3"
            droppable="true"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, category?.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6>{category?.categoryName}</h6>
              <button
                className="btn"
                onClick={() => removeCategory(category?.id)}
              >
                <i class="fa-solid fa-trash text-danger fa-xl"></i>
              </button>
            </div>
            <Row>
              {category?.allVideo?.length > 0
                ? category?.allVideo.map((card) => (
                    <Col
                      sm={12}
                      className="mb-3"
                      draggable
                      onDragStart={(e) =>
                        videoDragStarted(e, card.id, category.id)
                      }
                    >
                      <VideoCard video={card}  insideCategory={true}/>
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger fw-bolder">no category yet!!</p>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInputId"
              label=" Category Name"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
