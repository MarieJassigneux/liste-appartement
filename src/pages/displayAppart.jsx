import React from 'react';
import Appartement from './appartement';

class DisplayAppart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data};

        this.sort = this.sort.bind(this);
        this.unsort = this.unsort.bind(this);
    }

    sort() {
        this.setState((state) => ({
            data: state.data.sort((a, b) => a.prix - b.prix)
        }))
    }

    unsort() {
        this.setState((state) => ({
            data: state.data.sort((a, b) => b.prix - a.prix)
        }))
    }

    render() {
        return (
        <div className="bg-stone-100 flex flex-col grow p-2 pb-0 overflow-hidden">
            <div className='flex justify-center items-center p-3'>
                <button className='bg-indigo-400 text-white w-48 rounded-lg p-2 hover:bg-violet-400' onClick={this.sort}> 
                    Trier par prix croissant 
                </button>
                <div className='w-20'></div>
                <button className='bg-indigo-400 text-white w-48 rounded-lg p-2 hover:bg-violet-400' onClick={this.unsort}>
                    Trier par prix décroissant 
                </button>
            </div>
            <div className='flex flex-wrap h-full overflow-auto'>
                {this.state.data.map((appart, index) => 
                    (
                        <Appartement key={index} 
                                    nom={appart.nom}
                                    description={appart.description}
                                    prix={appart.prix}
                                    photo={appart.photo}
                        />
                    ))
                }
            </div>
        </div>)
    }
}

export default DisplayAppart;