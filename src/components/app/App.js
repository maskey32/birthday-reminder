import React, { useState } from 'react';
import '../app/App.css';

import Header from '../header/Header';
import { Button } from '../button/Button';
import { List } from '../list/List'
import data from '../Data'

function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  }

  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <Button onClick={handleClick}>Clear All</Button>
      </section>
    </main>
  );
}

export default App;
