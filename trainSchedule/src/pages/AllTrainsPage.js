import React from "react";
import TrainCard from "../components/TrainCard";

const AllTrainsPage = ({ trains }) => {
  return (
    <div>
      <h1>All Trains Page</h1>
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
