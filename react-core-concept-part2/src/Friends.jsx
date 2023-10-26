import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './friend'



export default function Friends(){
    const [friend, setFriend] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div className='box'>
            <h3>Friends : {friend.length}</h3>

            {
                friend.map(f => <Friend props = {f}></Friend>)
            }
        </div>
    )
}