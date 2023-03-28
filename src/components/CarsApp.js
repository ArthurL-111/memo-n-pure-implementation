import React from 'react'
import Car from './Car';
import SellButton from './SellButton';

class CarsApp extends React.Component {
    state = {
        cars: [
          {
            make: "Toyota",
            quantity: 10,
            id: 1
          },
          {
            make: "Honda",
            quantity: 5,
            id: 2,
          },
          {
            make: "Nissan",
            quantity: 7,
            id: 3,
          },
        ],
      };

    handleSell = (index) => {
        this.setState((prev) => {
            const newCars = prev.cars.map((car, idx) => {
                if (idx === index) {
                    return { ...car, quantity: car.quantity - 1}
                } else {
                    return car;
                }
            })
            const nextState = {...prev, cars: newCars};

            // const nextState = {
            //     ...prev,
            //     cars: [
            //       ...prev.cars.slice(0, index),
            //       {
            //         ...prev.cars[index],
            //         quantity: prev.cars[index].quantity - 1,
            //       },
            //       ...prev.cars.slice(index + 1),
            //     ],
            //   };
            
            return nextState;
        })
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    {this.state.cars.map((car) => (
                        <Car 
                            key={car.id}
                            make={car.make}
                            quantity={car.quantity}
                        />
                    ))}
                </div>
                <div>
                    {this.state.cars.map((car, index) => (
                        <SellButton 
                            key={car.id}
                            make={car.make}
                            handleSell={() => this.handleSell(index)}
                        />
                    ))}
                </div>
                
            </React.Fragment>
        );
    }
}

export default CarsApp;