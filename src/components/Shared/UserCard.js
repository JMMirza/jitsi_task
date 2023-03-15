import React from 'react'
import { Col, Card } from "react-bootstrap";

export default function UserCard() {
  return (
    <>
      <Col className="user-card">
        <Card className="text-white bg-dark">
          <Card.Img
            src="https://www.seekpng.com/png/detail/115-1150622_avatar-demo2x-man-avatar-icon-png.png"
            style={{}}
            alt="Card image"
            className="card-img"
          />
          <Card.ImgOverlay
            style={{ backgroundColor: "rgba(59, 64, 67, 0.7)" }}
          >
            <Card.Title className="card-title">Jhon Doe</Card.Title>
            {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
                    <Card.Text>Active 3 mins </Card.Text> */}
          </Card.ImgOverlay>
        </Card>

      </Col>
    </>
  )
}
