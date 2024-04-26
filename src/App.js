import './App.css';
import React, {useState} from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  function getResult(firstName, lastName, gender) {
    return `${firstName} ${lastName} (${gender})`;
  }

 /* const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setResult(getResult(value, lastName, gender));
  };

const handleLastNameChange = (event) => {
  const value = event.target.value;
  setLastName(value);
  setResult(getResult(firstName, value, gender));
  };

const handleGenderChange = (event) => {
  const value = event.target.value;
  setGender(value);
  setResult(getResult(firstName, lastName, value));
  }; */
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    console.log('First Name Change:', value);
    setFirstName(value);
    setResult(getResult(value, lastName, gender));
  };
  
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    console.log('Last Name Change:', value);
    setLastName(value);
    setResult(getResult(firstName, value, gender));
  };
  
  const handleGenderChange = (event) => {
    const value = event.target.value;
    console.log('Gender Change:', value);
    setGender(value);
    setResult(getResult(firstName, lastName, value));
  };

  const handleButtonClick = () => {
    if (!firstName || !lastName || !gender) {
      alert('Please fill in all fields');
      return; }

  const firstFirstLetter = firstName[0].toUpperCase();
  const lastFirstLetter = lastName[0].toUpperCase();
  let newFirstName = '';
  let newLastName = '';
        if (firstFirstLetter === 'A' && gender === 'F') {
        newFirstName = 'Anne';
        } else if (firstFirstLetter === 'A' && gender === 'M') {
        newFirstName = 'Albus';
        } else if (firstFirstLetter === 'B' && gender === 'F') {
        newFirstName = 'Bellatrix';
        } else if (firstFirstLetter === 'B' && gender === 'M') {
        newFirstName = 'Bogrod';
        } else if (firstFirstLetter === 'C' && gender === 'F') {
        newFirstName = 'Clara';
        } else if (firstFirstLetter === 'C' && gender === 'M') {
        newFirstName = 'Colin';
        } else if (firstFirstLetter === 'D' && gender === 'F') {
        newFirstName = 'Daisy';
        } else if (firstFirstLetter === 'D' && gender === 'M') {
        newFirstName = 'Dennis';
        } else if (firstFirstLetter === 'E' && gender === 'F') {
        newFirstName = 'Elfrida';
        } else if (firstFirstLetter === 'E' && gender === 'M') {
        newFirstName = 'Evan';
        } else if (firstFirstLetter === 'F' && gender === 'F') {
        newFirstName = 'Fleur';
        } else if (firstFirstLetter === 'F' && gender === 'M') {
        newFirstName = 'Firenze';
        } else if (firstFirstLetter === 'G' && gender === 'F') {
        newFirstName = 'Gwen';
        } else if (firstFirstLetter === 'G' && gender === 'M') {
        newFirstName = 'George';
        } else if (firstFirstLetter === 'H' && gender === 'F') {
        newFirstName = 'Helga';
        } else if (firstFirstLetter === 'H' && gender === 'M') {
        newFirstName = 'Harry';
        } else if (firstFirstLetter === 'I' && gender === 'F') {
        newFirstName = 'Isadora';
        } else if (firstFirstLetter === 'I' && gender === 'M') {
        newFirstName = 'Igor';
        } else if (firstFirstLetter === 'J' && gender === 'F') {
        newFirstName = 'Jade';
        } else if (firstFirstLetter === 'J' && gender === 'M') {
        newFirstName = 'James';
        } else if (firstFirstLetter === 'K' && gender === 'F') {
        newFirstName = 'Katie';
        } else if (firstFirstLetter === 'K' && gender === 'M') {
        newFirstName = 'Kingsley';
        } else if (firstFirstLetter === 'L' && gender === 'F') {
        newFirstName = 'Luna';
        } else if (firstFirstLetter === 'L' && gender === 'M') {
        newFirstName = 'Leander';
        } else if (firstFirstLetter === 'M' && gender === 'F') {
        newFirstName = 'Minerva';
        } else if (firstFirstLetter === 'M' && gender === 'M') {
        newFirstName = 'Marvolo';
        } else if (firstFirstLetter === 'N' && gender === 'F') {
        newFirstName = 'Narcissa';
        } else if (firstFirstLetter === 'N' && gender === 'M') {
        newFirstName = 'Newt';
        } else if (firstFirstLetter === 'O' && gender === 'F') {
        newFirstName = 'Orla';
        } else if (firstFirstLetter === 'O' && gender === 'M') {
        newFirstName = 'Ominis';
        } else if (firstFirstLetter === 'P' && gender === 'F') {
        newFirstName = 'Poppy';
        } else if (firstFirstLetter === 'P' && gender === 'M') {
        newFirstName = 'Peter';
        } else if (firstFirstLetter === 'Q' && gender === 'F') {
        newFirstName = 'Queenie';
        } else if (firstFirstLetter === 'Q' && gender === 'M') {
        newFirstName = 'Quirinus';
        } else if (firstFirstLetter === 'R' && gender === 'F') {
        newFirstName = 'Romilda';
        } else if (firstFirstLetter === 'R' && gender === 'M') {
        newFirstName = 'Remus';
        } else if (firstFirstLetter === 'S' && gender === 'F') {
        newFirstName = 'Susan';
        } else if (firstFirstLetter === 'S' && gender === 'M') {
        newFirstName = 'Sebastian';
        } else if (firstFirstLetter === 'T' && gender === 'F') {
        newFirstName = 'Tasmin';
        } else if (firstFirstLetter === 'T' && gender === 'M') {
        newFirstName = 'Theodore';
        } else if (firstFirstLetter === 'U' && gender === 'F') {
        newFirstName = 'Ursula';
        } else if (firstFirstLetter === 'U' && gender === 'M') {
        newFirstName = 'Uric';
        } else if (firstFirstLetter === 'V' && gender === 'F') {
        newFirstName = 'Violet';
        } else if (firstFirstLetter === 'V' && gender === 'M') {
        newFirstName = 'Viktor';
        } else if (firstFirstLetter === 'W' && gender === 'F') {
        newFirstName = 'Wilhelmina';
        } else if (firstFirstLetter === 'W' && gender === 'M') {
        newFirstName = 'Wilkie';
        } else if (firstFirstLetter === 'X' && gender === 'F') {
        newFirstName = 'Cressida';
        } else if (firstFirstLetter === 'X' && gender === 'M') {
        newFirstName = 'Xenophilius';
        } else if (firstFirstLetter === 'Y' && gender === 'F') {
        newFirstName = 'Arabella';
        } else if (firstFirstLetter === 'Y' && gender === 'M') {
        newFirstName = 'Amos';
        } else if (firstFirstLetter === 'Z' && gender === 'F') {
        newFirstName = 'Zenobia';
        } else if (firstFirstLetter === 'Z' && gender === 'M') {
        newFirstName = 'Zacharias';
        } 
        
        if (lastFirstLetter === 'A') {
        newLastName = 'Abbott';
        } else if (lastFirstLetter === 'B') {
        newLastName = 'Black';
        } else if (lastFirstLetter === 'C') {
        newLastName = 'Crouch';
        } else if (lastFirstLetter === 'D') {
        newLastName = 'Delacour';
        } else if (lastFirstLetter === 'E') {
        newLastName = 'Edgecombe';
        } else if (lastFirstLetter === 'F') {
        newLastName = 'Finnigan';
        } else if (lastFirstLetter === 'G') {
        newLastName = 'Gaunt';
        } else if (lastFirstLetter === 'H') {
        newLastName = 'Hooch';
        } else if (lastFirstLetter === 'I') {
        newLastName = 'Ivanova';
        } else if (lastFirstLetter === 'J') {
        newLastName = 'Jorkins';
        } else if (lastFirstLetter === 'K') {
        newLastName = 'Krum';
        } else if (lastFirstLetter === 'L') {
        newLastName = 'Lockhart';
        } else if (lastFirstLetter === 'M') {
        newLastName = 'Malfoy';
        } else if (lastFirstLetter === 'N') {
        newLastName = 'Nott';
        } else if (lastFirstLetter === 'O') {
        newLastName = 'Oggspire';
        } else if (lastFirstLetter === 'P') {
        newLastName = 'Potter';
        } else if (lastFirstLetter === 'Q') {
        newLastName = 'Quirrell';
        } else if (lastFirstLetter === 'R') {
        newLastName = 'Riddle';
        } else if (lastFirstLetter === 'S') {
        newLastName = 'Sprout';
        } else if (lastFirstLetter === 'T') {
        newLastName = 'Tonks';
        } else if (lastFirstLetter === 'U') {
        newLastName = 'Umbridge';
        } else if (lastFirstLetter === 'V') {
        newLastName = 'Vane';
        } else if (lastFirstLetter === 'W') {
        newLastName = 'Weasley';
        } else if (lastFirstLetter === 'X') {
        newLastName = 'Sallow';
        } else if (lastFirstLetter === 'Y') {
        newLastName = 'Yaxley';
        } else if (lastFirstLetter === 'Z') {
        newLastName = 'Zabini';
        } else {
        return '';
        }

        setResult(`Your Harry Potter Name is: ${newFirstName} ${newLastName}`);
        setShowResult(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Magical Musings</h1>
        <h3>Welcome to Magical Musings! A place of fun activities, games, magic, and more!</h3>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="quizzes.html">Quizzes</a></li>
                <li><a href="games.html">Games</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <h2>Magical Musings: Harry Potter Name Generator</h2>
        <p>Become one with the wizarding world with a new ~magical~ wizard name!</p>
        <div id="generator">
          <h3>Enter your first name</h3>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
          <h3>Enter your last name</h3>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange}/>
          <h3>Enter your gender (M/F)</h3>
          <input type="text" id="gender" value={gender} onChange={handleGenderChange}/>
          <br></br>
          <button onClick={handleButtonClick}>Generate!</button>
          {showResult && <p id="result">{result}</p>}
        </div>
      </main>
    <footer>
    <p>Hope Cornette</p>
    <p>Final Project</p>
    <p>April 26th, 2024</p>
    </footer>
    </div>
  );
}

export default App; 

 /*import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Gender:', gender);
  };

  return (
    <div>
      <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
      <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
      <input type="text" value={gender} onChange={handleGenderChange} placeholder="Gender" />
      <button onClick={handleButtonClick}>Log Input</button>
    </div>
  );
}

export default App; */
