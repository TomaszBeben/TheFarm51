import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.scss';

import CarSelect from './carSelect';

const App = () => {
  return (
    <>
      <div className='car-configurator'>
        <div className='car-select'>
          <CarSelect />
        </div>
      </div>
    </>
  );
};

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />, document.getElementById('app'))
})
export default App;