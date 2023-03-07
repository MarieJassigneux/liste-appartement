import React from 'react';
import InfoAppart from './infoAppart';

class Appartement extends React.Component {
    render() {
        return (
            <div className='h-3/4 w-1/2 p-3'>
                <div className='rounded-lg shadow-xl flex flex-col h-full transition hover:-translate-y-1'>
                    <div className='bg-cover bg-center rounded-t-lg h-2/3 w-full' style={{backgroundImage: `url(${this.props.photo})`}}></div>
                    <InfoAppart nom={this.props.nom} prix={this.props.prix} description={this.props.description}/>
                </div> 
            </div>
        );
      }
}

export default Appartement;