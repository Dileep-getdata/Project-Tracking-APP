import React, {useState,useEffect} from 'react'
import CardComponent from './CardComponent';
import { employeeDetails } from "../Data";


function ParentCardComponent() {
    const [cards, setCards] = useState([
    { id: 1, title: "New Project", employees: employeeDetails }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");

    const addNewCard = ()=>{
        const newCard = {id:cards.length+1, title: title, employees: [] };
        setCards([...cards,newCard])
        setTitle("");
        setShowForm(false);
    };

  return (
    <div className="parentContainer">
        <h1>ParentCardComponent</h1>
            <button className="team-btn" onClick={()=>{setShowForm(true)}}> + New Team</button>
            {
                showForm && (<div style={{ marginTop: "10px" }}>
                    <input
                        type="text"
                        placeholder={`Enter Team-${cards.length+1} Title`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={addNewCard}>Create</button>

                    </div>)
            }
            <div className="cards-wrapper">
                {cards.map((card) => {
                    return (<div key={card.id} style={{ marginTop: "20px" }}>
                        {console.log('Line1',card.title)}
                    <CardComponent teamTitle = {card.title} employeeDetails = {card.employees}/>
                    </div>
                )})}
            </div>
    </div>
    
  )
}
export default ParentCardComponent;

