import Link from "next/link";
import { Card, Image, Button } from "react-bootstrap";
Link;
const Cause = ({ cause }) => {
  return (
    <>
      <Card className="my-4 p-3">
        <Link href={`/causes/${cause._id}/${cause.name}`}>
          <a>
            {" "}
            <Card.Img
              style={{
                height: "120px",
                borderRadius: "2px",
                background: "none",
                objectFit: "cover",
              }}
              src={cause.image}
              variant="top"
              rounded="true"
              loading="lazy"
              alt={cause.name}
            />
          </a>
        </Link>
        <Card.Body>
          <Link href={`/causes/${cause.id}/${cause.title}`}>
            <a>
              <Card.Title as="div">
                <h6>
                  <strong>{cause.title}</strong>
                </h6>
              </Card.Title>
            </a>
          </Link>

          <Card.Text style={{ fontSize: "0.9rem", color: "black" }}>
            <div>
              {`${cause.description.substring(0, 70)} `}
              <br />
              <a>Read more ...</a>
            </div>

            <Button className="my-2 btn btn-donate">Donate</Button>
          </Card.Text>
        </Card.Body>
      </Card>

      <style jsx>
        {`
          .content {
            text-align: left;
            font-size: 0.9rem;
          }
        `}
      </style>
    </>
  );
};

export default Cause;
