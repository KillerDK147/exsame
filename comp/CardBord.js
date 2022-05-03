import React from "react";
import Card from "./Card";
import { CardGroup } from "react-bootstrap";
import Pagination from "./Pagination";
const CardBord = ({ cards }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const carsPerPage = 6;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  console.log("hej");
  console.log(cards);
  const currentCars = cards.splice(indexOfFirstCar, indexOfLastCar);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentCars[0].elementer);
  return (
    <div className="container mt-5">
      <h1>Produtker</h1>
      <CardGroup>
        {currentCars.map((card, key) => (
          <Card key={key} {...card.elementer} />
        ))}
      </CardGroup>
      <Pagination
        postPerPage={carsPerPage}
        totalPost={cards.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CardBord;
