import React, {  useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import SpaceXProgram from '../SpaceXProgram/SpaceXProgram';

const Home = () => {
    const [filterYear,setFilterYear] = useState(null);
    const [filterLaunch,setFilterLaunch] = useState(true); 
    const [filterLand,setFilterLand] = useState(true);
    const [spaceXData,setSpaceXData] = useState([]);

    useEffect(() => {
        const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${filterLaunch}&land_success=${filterLand}&launch_year=${filterYear}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setSpaceXData([]);
            setSpaceXData(data)
        })
    },[filterYear,filterLaunch,filterLand])

    useEffect(() => {
        const url = `https://api.spacexdata.com/v3/launches?limit=12`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setSpaceXData([]);
            setSpaceXData(data)
        })
    },[])

    const handelClick = (year) => {
        setFilterYear(year)
    }

    const handelClickLaunch = (launchCondition) => {
        if(filterYear === null){
            alert('Please select one Year')
        }
        setFilterLaunch(launchCondition)
    }
    const handelClickLand = (landCondition) => {
        if(filterYear === null){
            alert('Please select one Year')
        }
        setFilterLand(landCondition)
    }
    const classChange = (e) => {
        const newClass = e.target;
        const removeClass = document.getElementsByClassName('year_toggle');
        for (let i = 0; i < removeClass.length; i++) {
            const removeClassList = removeClass[i];
            removeClassList.classList.remove('active')
        }
        newClass.classList.add('active')
    }
    const launchClassChange = (e) => {
        const newClass = e.target;
        const removeClass = document.getElementsByClassName('launch_toggle');
        for (let i = 0; i < removeClass.length; i++) {
            const removeClassList = removeClass[i];
            removeClassList.classList.remove('active')
        }
        newClass.classList.add('active')
    }
    const landClassChange = (e) => {
        const newClass = e.target;
        const removeClass = document.getElementsByClassName('land_toggle');
        for (let i = 0; i < removeClass.length; i++) {
            const removeClassList = removeClass[i];
            removeClassList.classList.remove('active')
        }
        newClass.classList.add('active')
    }

    return (
        <div className="container">
            <h3 className="fw-bold title">SpaceX Launch Program</h3>
            <div className="row">
                <div className="col-md-2 mb-5">
                    <Filter classChange={classChange} handelClickLand={handelClickLand} handelClickLaunch={handelClickLaunch} handelClick={handelClick} launchClassChange={launchClassChange} landClassChange={landClassChange} > </Filter>
                </div>
                <div className="col-md-10">
                    <SpaceXProgram SpaceXData={spaceXData}></SpaceXProgram>
                    <h5 className="text-center fw-bold pb-2">Developed By Jahid Hasan</h5>
                </div>
            </div>
        </div>
    );
};

export default Home;