import React from 'react';

const SingleSpaceX = ({spaceX}) => {
    const {mission_name,flight_number,mission_id,launch_year,launch_success,links} = spaceX;
    return (
        <div className="col-md-3 col-sm-6">
            <div className="p-2  mb-3">
                <img className="mb-3 spaceXImg p-1 rounded" src={links.mission_patch_small} alt="" />
                <p className="mb-2 pb-0 fw-bold spaceX_name">{mission_name} #{flight_number}</p>
                <p className="mb-1 pb-0 fw-bold">Mission Ids: <span className="text-secondary">{mission_id[0]}</span></p>
                <p className="mb-1 pb-0 fw-bold">Launch Year: <span className="text-secondary">{launch_year}</span></p>
                <p className="mb-1 pb-0 fw-bold">Launch Success: <span className="text-secondary">{`${launch_success}`}</span></p>
                <p className="mb-1 pb-0 fw-bold">Land Success: <span className="text-secondary">{`Data Missing`}</span></p>
            </div>
        </div>
    );
};

export default SingleSpaceX;