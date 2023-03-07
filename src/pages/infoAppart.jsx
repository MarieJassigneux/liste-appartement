import React from 'react';

class InfoAppart extends React.Component {
    render() {
        return (
            <div className='flex flex-col items-center h-1/3 p-2 overflow-auto'>
                <div className='text-2xl flex p-3'>
                    <div>{this.props.nom}</div>
                    <div className='pl-2'> - </div>
                    <div className='font-bold pl-2'> {this.props.prix}</div>
                    <div className='pl-2'>€</div>
                </div>
                <div>{this.props.description}</div>
            </div>
        );
      }
}

export default InfoAppart;