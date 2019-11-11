import React from 'react';
import './myStyle.css'
export default function ListComponent() {
    const PersonList = [
        {
            name: 'Aman Sultan Baig',
            position: 'Full Stack JS Developer',
            Skill: 'Mean / Mern Stack'
        },
        {
            name: 'Nabeel Jameel',
            position: 'Web Developer',
            Skill: 'Lamp Stact '
        },
        {
            name: 'Kashan',
            position: '.Net Engineer',
            Skill: 'C# / ASP.Net'
        }
    ]

    const Persons = PersonList.map(person => (
        <p className='tag'>{`My name is ${person.name}, I work as a ${person.position} & I have extensive knowledge about ${person.Skill}` }</p>
    ))

    return (
        <div>
            {Persons}
        </div>
    );
}