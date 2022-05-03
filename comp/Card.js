import { Button, Card as BsCard } from "react-bootstrap";
const Card = ({ Titel, udfortaget }) => {
  console.log(Titel);
  return (
    <BsCard>
      <div className="p-2"></div>
      <BsCard.Body>
        {/* <BsCard.Title>{Navn}</BsCard.Title> */}
        <BsCard.Text>{Titel}</BsCard.Text>
        <BsCard.Text>{udfortaget}</BsCard.Text>
      </BsCard.Body>
    </BsCard>
  );
};

export default Card;
