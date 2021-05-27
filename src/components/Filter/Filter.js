import React from 'react';

const Filter = ({handelClick,handelClickLaunch,handelClickLand,classChange,launchClassChange,landClassChange}) => {
    return (
        <div className="bg-white p-2 rounded">
            <h4 className="fw-bold mb-2">Filters</h4>
            <p className="text-center border-bottom text-capitalize mb-2 pb-2">launch year</p>
            <div  onClick={classChange} className="year">
                
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2006)} type="button" value="2006" />
                <input className="year_toggle"  onClick={() => handelClick(2007)} type="button" value="2007" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2008)} type="button" value="2008" />
                <input className="year_toggle"  onClick={() => handelClick(2009)} type="button" value="2009" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2010)} type="button" value="2010" />
                <input className="year_toggle"  onClick={() => handelClick(2011)} type="button" value="2011" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2012)} type="button" value="2012" />
                <input className="year_toggle"  onClick={() => handelClick(2013)} type="button" value="2013" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2014)} type="button" value="2014" />
                <input className="year_toggle"  onClick={() => handelClick(2015)} type="button" value="2015" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2016)} type="button" value="2016" />
                <input className="year_toggle"  onClick={() => handelClick(2017)} type="button" value="2017" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2018)} type="button" value="2018" />
                <input className="year_toggle"  onClick={() => handelClick(2019)} type="button" value="2019" />
            </div>
            <div className="d-flex mb-2 filter-btn justify-content-between">
                <input className="year_toggle"  onClick={() => handelClick(2020)} type="button" value="2020" />
            </div>
            
            </div>
            <div className="launch-f-t">
                <p className="text-center border-bottom text-capitalize mb-2 pb-2">successful launch</p>
                <div onClick={launchClassChange} className="d-flex mb-2 filter-btn justify-content-between">
                    <input className="launch_toggle active"  onClick={() => handelClickLaunch(true)} type="button" value="True" />
                    <input className="launch_toggle"  onClick={() => handelClickLaunch(false)} type="button" value="False" />
                </div>
            </div>
            <div className="launch-f-t">
                <p className="text-center border-bottom text-capitalize mb-2 pb-2">successful land</p>
                <div onClick={landClassChange} className="d-flex mb-2 filter-btn justify-content-between">
                    <input className="land_toggle active"  onClick={() => handelClickLand(true)} type="button" value="True" />
                    <input className="land_toggle"  onClick={() => handelClickLand(false)} type="button" value="False" />
                </div>
            </div>
        </div>
    );
};

export default Filter;