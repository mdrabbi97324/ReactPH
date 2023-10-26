import { useState } from "react"

export default function Players(){
    const [teamMember, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeamMember = teamMember + 1;
        setTeam(newTeamMember);
    }
    const handleReduce = () => {
        const newTeamMember = teamMember - 1;
        setTeam(newTeamMember)
    }
    const playerStyle = {
        border: '4px solid tomato',
        borderRadius: '8px',
        background: 'lightgrey',
        color: 'black',
        padding: '20px'

    }

    return (
        <div style={playerStyle}>
            <h3>Players : {teamMember}</h3>
            <button style={{marginRight: '10px'}} onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}