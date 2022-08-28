import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [highestBid, setHighestBid] = useState(10.00);
  return (
    <div className="App">
      <div className='container-fluid'>
        <h2>Testing SocketIO</h2>
        <div className='row'>
          <div className='col-3 m-auto mt-3'>
            <div className='mb-4'>
              <h6>Highest Bid</h6>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Amount</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button type="button" className="btn btn-primary btn-lg">Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
