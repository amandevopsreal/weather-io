import React from "react";
import "./Loc.css"
const Loc = ({ setloc, search, status, search2 }) => {
    function doo() {
        search2();
        status("weather");



    }
    return (
        <div >
            <p className="b tc f3 ">Enter the location below!</p>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pa4 br3 shadow-5 form">
                    <input onKeyPress={search} onChange={e => setloc(e.target.value)} className=" tex pa2 f4 w-70 flex items-center justify-center" type={"text"}></input>
                    <button onClick={doo} className="grow f4 link ph3 pv2 dib  bg w-30 ">Get</button>
                </div>
            </div>
        </div>

    );
}
export default Loc;