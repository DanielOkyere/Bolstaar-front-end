import React from "react";
import { Fragment, useRef, useState } from "react";

import NavBar from "../components/rebuild/NavBar";
import Footer from "../Components/rebuild/Footer/Footer"
function Dashboard() {
    const [open, setOpen] = useState(false);

    return (<>
        {/* <NavBar /> */}
        <div className="container mt-3">
          <h1 className="h1 mx-auto mb-9">Welcome,</h1>
          <h4 className="h4 mb-5">Kindly select what you would want from us</h4>
          <ul className="grid lg:grid-cols-3 gap-10 mb-5">
            <li  className=" w-full h-60 rounded-lg farm_tools shadow-lg"><a>Farm Tool</a></li>
            <li className=" w-full h-60 rounded-lg farm_machinery shadow-lg"><a>Farm Machinery</a></li>
            <li className=" w-full h-60 rounded-lg accessories shadow-lg"><a>Other Tools & Accessories</a></li>
          </ul>
        </div>



        {/* <Footer/> */}
    </>)
}

export default Dashboard;