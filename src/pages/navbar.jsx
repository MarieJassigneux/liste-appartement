import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="bg-slate-700 p-5 flex justify-center items-center">
                <h1 className='text-white text-2xl'> Listes des appartements </h1> 
            </div>
        );
    }
}

export default Navbar;