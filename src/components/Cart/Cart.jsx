/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ selectedCard, remaining, totalCredit,totalPrice }) => {
    console.log(selectedCard)

    return (
        <div>
            <div className="card lg:w-80 md:flex md:justify-center md:items-center bg-white rounded-xl p-5 ">
                <div className="card-body my-3">
                    <p className='text-xl font-bold text-[#2F80ED]'>Credit Hour Remaining {remaining} hr</p>
                    <div className='border border-gray-300 mt-4 mb-4'>
                    </div>
                    <h1 className='text-xl font-bold'>Course Name</h1>
                    {
                        selectedCard.map((card) => (
                            <li className='text-[#1C1B1B99]' type='1' key={card.id}>{card.course_name}</li>
                        ))
                    }
                    <div className='border border-gray-300 mt-4 mb-4'>
                    </div>
                    <p className='text-xl font-semibold text-[#1C1B1BCC]'>Total Credit Hours: {totalCredit} hr</p>
                    <div className='border border-gray-300 mt-4 mb-4'>
                    </div>
                    <p className='text-xl font-semibold text-[#1C1B1BCC]'>Total Price: {totalPrice} USD</p>
                </div>
            </div>

            


        </div>
    );
};

export default Cart;