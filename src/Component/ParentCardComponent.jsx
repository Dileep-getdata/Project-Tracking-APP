import React, { useState, useEffect } from 'react'
import CardComponent from './CardComponent';
import { employeeDetails,employeeDetails1 } from "../Data";


function ParentCardComponent() {
    const [cards, setCards] = useState([
        { id: 1, title: "New Project", employees: employeeDetails },
        { id: 2, title: "New Project1", employees: employeeDetails1 }

    ]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");

    const addNewCard = () => {
        const newCard = { id: cards.length + 1, title: title||`New Project${cards.length}`, employees: [] };
        setCards([...cards, newCard])
        setTitle("");
        setShowForm(false);
    };

    return (
        <div className="parentContainer">
            <h1>PROJECTS</h1>
            {/* <button className="team-btn" onClick={()=>{setShowForm(true)}}> + New Team</button> */}
            <div style={{
                marginTop: "10px", display: "flex",
                gap: "10px",
                alignItems: "center"
            }}>
                <input
                    type="text"
                    placeholder={`+ New Project Title`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="add-btn" onClick={addNewCard}>CREATE</button>

            </div>

            <div className="cards-wrapper">
                {cards.map((card) => {
                    return (<div key={card.id} style={{ marginTop: "20px" }}>
                        {console.log('Line1', card.title)}
                        <div key={card.id} className="card-item">
                            <CardComponent teamTitle={card.title} employeeDetails={card.employees} />
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>

    )
}
export default ParentCardComponent;

