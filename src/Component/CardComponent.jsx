import React from "react";
import { useState, useEffect } from "react";

function CardComponent({ teamTitle, employeeDetails }) {
    const [employes, setEmployes] = useState(employeeDetails);
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [showCard, setShowCard] = useState(true);

    const [showForm, setShowForm] = useState(false);


    const handleAddEmployee = () => {
        const newEmployee = {
            id: employes.length + 1,
            Name: name,
            Image: image || "https://cdn-icons-png.flaticon.com/512/1869/1869679.png",
            level: level,
            Role: role
        };

        setEmployes([...employes, newEmployee]);
        setName("");
        setLevel("");
        setImage("");
        setRole("");
        setShowForm(false);
    };


    return (

        /* {employes
                            .filter(emp => emp.level == lvl)
                            .map(emp => (
                                <div className="card" key={emp.id}>
                                    <img src={emp.Image} alt={emp.Name} />
                                    <h4>
                                        {emp.Name} <span>({emp.Role})</span>
                                    </h4>
                                </div>
                            ))} */


        <div className="container">
            {console.log('Line2', teamTitle)}
            <h3>{teamTitle}</h3>
            <button className="btn" onClick={() => setShowCard(!showCard)}>
                {showCard ? "-" : "\u2193"}
            </button>
            {showCard && (<div className={`tree-view ${showCard ? "open" : "closed"}`}>
                {[...employes]
                    .sort((a, b) => a.level - b.level)
                    .map((emp) => (
                        <div
                            key={emp.id}
                            className="tree-item"
                            style={{ marginLeft: `${(emp.level - 1) * 50}px` }}
                        >
                            {emp.level > 1 && <span className="branch"> --</span>}

                            {emp.Image && (
                                <img src={emp.Image} alt={emp.Name} />
                            )}

                            <span className="text">
                                {emp.Name} ({emp.Role})
                            </span>
                        </div>
                    ))}
                <button className="add-btn" onClick={() => setShowForm(true)}>
                    +
                </button>
            </div>)}

            {
                showForm && (<div style={{ marginTop: "10px" }}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Enter Level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <button onClick={handleAddEmployee}>Add</button>

                </div>)

            }
            {/* <button onClick={() => setShowForm(true)}>+Add Employee</button> */}

        </div>


    )
}

export default CardComponent;