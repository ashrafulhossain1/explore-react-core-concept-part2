import { useState } from "react"

export default function Team(){
    const [team, setTeam]= useState(11);

    const handleAdd =()=>{
        const newTeam = team +1;
        setTeam(newTeam)
    }
    const handleRemove = ()=>{
        setTeam(team-1);
    }

    const teamStyle={
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
        
    }
 return(
    <div style={teamStyle}>
        <h2>Players: {team} </h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>remove</button>
    </div>
 )
}