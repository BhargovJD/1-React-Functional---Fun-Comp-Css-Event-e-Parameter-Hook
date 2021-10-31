import React from 'react'
import { useState } from 'react';

export default function Content() {

    const [name, setName] = useState('Bhargov');

    const changeName = () => {
        const newName = "BHARGOV JYOTI DAS";
        setName(newName);
    }


    const contantStyle = {

        backgroundColor: 'red',
        color: '#fff'

    }


    const handleClick = () => {
        console.log("Hello");
    }

    const handleClick2 = (name) => {
        // console.log(name);
        console.log(`${name} was clicked!`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }



    return (
        <main>
            <h3 style={contantStyle}>Content</h3>

            <button onClick={handleClick}>Click</button>

            <button onClick={() => { handleClick2('Bhargov') }}>Click</button>

            <button onClick={(e) => { handleClick3(e) }}>Click</button>

            <h4 onDoubleClick={handleClick}>Hello.. Double click me!</h4>

            <h3><button onClick={changeName}>Click</button> Here Change Name State's default value: {name}</h3>

        </main>
    )
}
