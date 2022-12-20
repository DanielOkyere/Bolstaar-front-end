import React from "react";

function Modal({ visible, onClose }) {
    if (!visible) return null;
    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer")
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
                    <form className='mb-4 items-center' >
                        <div className="mb-4 w-1/2 md:w-full">
                            <label htmlFor="item_name" className="block text-xs mb-1">
                                Item Name
                            </label>
                            <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                                name="item_name" id="item_name" placeholder="Item Name" />
                        </div>
                        <div className="mb-4 md:w-full">
                            <label htmlFor="item_quantity" className="block text-xs mb-1">
                                Item Quantity
                            </label>
                            <input type="item_quantity" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                                name="item_quantity" id="item_quantity" placeholder="Item Quantity" />
                        </div>
                        <div className="mb-4 md:w-full">
                            <label htmlFor="contact_person" className="block text-xs mb-1">
                                Contact Person
                            </label>
                            <input type="contact_person" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                                name="contact_person" id="contact_person" placeholder="Contact Person" />
                        </div>
                        <div className="mb-4 md:w-full">
                            <label htmlFor="delivery_to" className="block text-xs mb-1">
                                Delivery To
                            </label>
                            <input type="delivery_to" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                                name="delivery_to" id="delivery_to" placeholder="Item Quantity" />
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <input type="submit" className='bg-green-700 w-24 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="Submit" />
                            <button onClick={onClose} className="bg-gray-400 w-24 rounded-full uppercase cursor-pointer shadow-md h-16 mt-10 text-white ">Close</button>
                        </div>

                    </form>
                </div>

            </div>
        </>)
}

export default Modal