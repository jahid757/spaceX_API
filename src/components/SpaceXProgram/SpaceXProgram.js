import React from "react";
import SingleSpaceX from "../SingleSpaceX/SingleSpaceX";

const SpaceXProgram = ({ SpaceXData }) => {
  return (
    <div className="spaceXContainer">
      <div className="row">
        {SpaceXData.length === 0 ? (
          <h2 className="mb-5 text-center">No Data Yet</h2>
        ) : (
          SpaceXData.map((spaceX) => (
            <SingleSpaceX
              key={spaceX.launch_date_local}
              spaceX={spaceX}
            ></SingleSpaceX>
          ))
        )}
      </div>
    </div>
  );
};

export default SpaceXProgram;
