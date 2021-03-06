import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import Button from './Button';
import SingleMachine from './SingleMachine';

function buildMachinesPath() {
  return `/machines/all`;
}

const fetchMachines = () => (
  fetch(buildMachinesPath())
    .then(response => response.json())
);

function Machines(props) {
  const [machines, setMachines] = React.useState([]);
  const [allMachines, setAllMachines] = React.useState([]);

  useEffect(() => {
    fetchMachines()
      .then((machines) => {
        setAllMachines(machines);
      });
  }, []);

  useEffect(() => {
    fetchMachines()
      .then((machines) => {
        setMachines(machines);
      });
  }, []);

  const handleAllClick = () => {
    setMachines(allMachines);
  };

  const handleCardioClick = () => {
    const cardioMachines = allMachines.filter(machine => machine.tipo == 'Cardio');
    setMachines(cardioMachines);
  };

  const handleUpperClick = () => {
    const upperMachines = allMachines.filter(machine => machine.tipo == 'Tren Superior');
    setMachines(upperMachines);
  };

  const handleLowerClick = () => {
    const lowerMachines = allMachines.filter(machine => machine.tipo == 'Tren Inferior');
    setMachines(lowerMachines);
  };

  const handleNoneClick = () => {
    setMachines([]);
  };

  return (
    <div>
      <label > Buscar máquina de </label>
      <button className="editlink" onClick={handleAllClick}>Todas</button>
      <button className="editlink" onClick={handleCardioClick}>Cardio</button>
      <button className="editlink" onClick={handleUpperClick}>Tren Superior</button>
      <button className="editlink" onClick={handleLowerClick}>Tren Inferior</button>
      <button className="editlink" onClick={handleNoneClick}>Borrar todas</button>

      <div className="items">
        {machines.map((machine) => (
          < SingleMachine key={machine.id} machine={machine}/>
        ))}

      </div>
    </div>
  );
}

export default hot(module)(Machines);
