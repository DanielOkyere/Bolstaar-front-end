import React from "react";

function Modal({ visible, onClose }) {
    if (!visible) return null;
    const handleOnClose = (e) => {
        if(e.target.id === "modalContainer")
            onClose();
    };
    return (
        <>
            <div id="modalContainer"
            onClick={handleOnClose} className="
            fixed inset-0 bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center
            ">
                <div className="bg-white p-2 rounded">
                    
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </>)
}

export default Modal;