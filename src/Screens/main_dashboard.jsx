import React from "react";
import { Fragment, useRef, useState } from "react";
import Modal from "../Components/Modal";
function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false);
    return (<>

        <div className="container mt-3">
          <h1 className="h1 mx-auto mb-9">Welcome,</h1>
          <h4 className="h4 mb-5">Kindly select what you would want from us</h4>
          <ul className="grid lg:grid-cols-3 gap-10 mb-5">
            <li onClick={()=> setShowModal(true)} className="cursor-pointer w-full h-60 rounded-lg farm_tools shadow-lg"><a >Farm Tool</a></li>
            <li onClick={()=> setShowModal(true)} className=" w-full h-60 rounded-lg farm_machinery shadow-lg cursor-pointer"><a>Farm Machinery</a></li>
            <li onClick={()=> setShowModal(true)} className=" w-full h-60 rounded-lg accessories shadow-lg cursor-pointer"><a>Other Tools & Accessories</a></li>
          </ul>
        </div>

      <Modal onClose={handleOnClose} visible={showModal} />

    </>)
}

export default Dashboard;