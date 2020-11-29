import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './Button';
import SingleMachine from './SingleMachine';

const URL = '/machines/all';

async function fetchData(url) {
  const response = await fetch(url, { Accept: 'application/json' });
  return response.json();
}

function Machines(props) {
  const [machines, setMachines] = React.useState(fetchData(URL).then(response));

  function handleClick() {
    fetchData(URL).then((response) => setMachines(response));
  }

  return (
    <div>
      <h5>Filtros</h5>
      <Button onClick={handleClick} />
      <ul className="machine">
        <SingleMachine machine={machines} />
      </ul>
    </div>
  );
}

export default hot(module)(Machines);
