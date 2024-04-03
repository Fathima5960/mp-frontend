import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideoAPI } from "../../services/allAPI";

function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: "",
  });
  // console.log(uploadVideo);

  const getYoutubeEmbedLink = (e) => {
    const { value } = e.target;
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11);
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({
        ...uploadVideo,
        link: `https://www.youtube.com/embed/${vID}`,
      });
    } else {
      setUploadVideo({ ...uploadVideo, link: "" });
    }
  };
  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo;
    if (!id || !caption || !url || !link) {
      alert("please fill the missing field");
    } else {
      // store uploaded video to json server
      const result = await uploadVideoAPI(uploadVideo);
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        handleClose();
        setUploadVideo({ id: "", caption: "", url: "", link: "" });

        // after getting success response

        setUploadVideoResponse(result.data)
      } else {
        alert(result.message);
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h4>Upload-Videos</h4>
        <button className="btn" onClick={handleShow}>
          <i className="fa-solid fa-arrow-up-from-bracket fa-2x mb-4"></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInputId"
              label="Video Id"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Enter Video Id"
                onChange={(e) =>
                  setUploadVideo({ ...uploadVideo, id: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingName"
              label="Video Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter Video Name"
                onChange={(e) =>
                  setUploadVideo({ ...uploadVideo, caption: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Image URL"
                onChange={(e) =>
                  setUploadVideo({ ...uploadVideo, url: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingVideo" label="Video URL">
              <Form.Control
                type="text"
                placeholder="Enter Video URL"
                onChange={getYoutubeEmbedLink}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
