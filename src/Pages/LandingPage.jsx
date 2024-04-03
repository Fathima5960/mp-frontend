import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigateByUrl = useNavigate();
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ textAlign: "justify", fontSize: "30px" }}>
            Welcome to <span className="text-warning">Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            inventore aliquid natus necessitatibus quidem voluptatum, odio
            delectus, nesciunt veniam assumenda, corporis mollitia iusto fugit?
            Harum, temporibus! Ducimus nulla obcaecati culpa?
          </p>
          <button
            className="btn btn-info mt-4"
            onClick={() => navigateByUrl("./home")}
          >
            Get Started
          </button>
        </Col>
        <Col lg={5}>
          <img
            src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248"
            alt=""
          />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column ">
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: "22rem" }} className="p-5 bg-primary ">
            <Card.Img
              variant="top"
              src="https://media2.giphy.com/media/Wxc9iA6vBWMP9jbMjn/giphy.gif"
              height={"300px"}
              width={"300px"}
            />
            <Card.Body>
              <Card.Title className="text-light">Managing Videos</Card.Title>
              <Card.Text className="text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }} className="p-5 bg-primary ">
            <Card.Img
              variant="top"
              src="https://tse3.mm.bing.net/th?id=OIP.AY17N7kt6d45qDtnGy41ZAHaHa&pid=Api&P=0&h=180"
              height={"300px"}
              width={"300px"}
            />
            <Card.Body>
              <Card.Title className="text-light">Managing Videos</Card.Title>
              <Card.Text className="text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }} className="p-5 bg-primary ">
            <Card.Img
              variant="top"
              src="https://tse3.mm.bing.net/th?id=OIP.CB_eJnZmFIrlqXj37nZLfwHaFj&pid=Api&P=0&h=180"
              height={"300px"}
              width={"300px"}
            />
            <Card.Body>
              <Card.Title className="text-light">Managing Videos</Card.Title>
              <Card.Text className="text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className="text-warning">Simple,Powerful & Fast</h4>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Play Everything</span>
            :Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet modi
            dolorem eaque omnis sit vero, accusantium non! Sequi earum a itaque
            odio quaerat! Commodi quaerat obcaecati culpa excepturi tempore
            blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eos odio in cum nihil reprehenderit amet, vel cumque, qui officia
            aut, tempore consequuntur! Libero sint tenetur similique praesentium
            ut deserunt voluptate.
          </h6>

          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Managing Videos</span>
            :Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet modi
            dolorem eaque omnis sit vero, accusantium non! Sequi earum a itaque
            odio quaerat! Commodi quaerat obcaecati culpa excepturi tempore
            blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sapiente quasi illum dolorem facere autem quibusdam vitae optio
            consequuntur quae! Vel recusandae dolorum iure laborum, tempore
            earum quisquam officia non consequuntur!
          </h6>

          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Play Everything</span>
            :Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet modi
            dolorem eaque omnis sit vero, accusantium non! Sequi earum a itaque
            odio quaerat! Commodi quaerat obcaecati culpa excepturi tempore
            blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis facere dolorum ratione error vel animi quod illo odio est
            temporibus esse, dolore placeat magni laboriosam porro magnam
            provident consequatur possimus.
          </h6>
        </div>

        <div className="video col-lg-5">
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/9AizchSQURA?si=UxpAlpUl8yQBCVQh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
