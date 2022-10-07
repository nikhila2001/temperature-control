
import React, { useState } from 'react';

const App = () => {
	const [temperatureValue, setTemperatureValue] = useState(10);
	const [temperatureColor, setTemperatureColor] = useState('cold');

	const increaseTemperature = () => {
		setTemperatureValue(temperatureValue + 1);
    if (temperatureValue === 30){
      return setTemperatureValue(temperatureValue);
    }

    if(temperatureValue >= 14){
      return setTemperatureColor('hot');
    }
  };

	const decreaseTemperature = () => {
	setTemperatureValue(temperatureValue - 1);
  if(temperatureValue === 0){
    return setTemperatureValue(temperatureValue);
  }

  if(temperatureValue <= 15) {
    return setTemperatureColor('cold')
  }
	};

	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseTemperature}>+</button>
				<button onClick={decreaseTemperature}>-</button>
			</div>
		</div>
	);
};

export default App;