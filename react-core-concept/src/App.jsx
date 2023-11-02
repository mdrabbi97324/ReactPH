import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import ParentComponent from './ParentComponent'

function App() {
  const actors = ['Jasim', 'Alomgir', 'Rubel', 'Chikun Ali', ];
  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvra Dev', age: 38},
    {id: 4, name: 'Pritom Vai', age: 29}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <ParentComponent></ParentComponent>
      <Actor name='Bappa Raz'></Actor>
      {actors.map(actor => <Actor name={actor}></Actor>)}
      {
      singers.map(singer => <Singer props = {singer}></Singer>)
      }
      {/* <Todo task='Clean your desk' isTrue = {true}></Todo>
      <Todo task='Today public Holiday' isTrue = {false}></Todo> */}
      {/* <Device name = 'Laptop' price= '57000'></Device>
      <Device name= 'Mobile' price= '20000'></Device>
      <Device name= 'Computer' price='120000' ></Device>
      <Person></Person>
      <Student></Student>
      <Student2 name='Solaiman' grade= '7th'></Student2>
      <Student2 name='Apu' score = {20}></Student2>
      <Student2></Student2>
      <Student2 isAdult = {true}></Student2>
      <Developer></Developer> */}
      
    </>
  )
}

function Device(props){
  console.log(props)
  return <h3>This device is : <span style={{color: 'skyblue'}}>{props.name}</span> || Price will be : <span style={{color: 'skyblue'}}>{props.price}</span> TK</h3>
}


function Person(){
  const age = 25;
  const person = {name: 'sakib', city: 'Dhaka'}
  return <h4>I am {person.name}. I'm {age} years old. I live in {person.city}.</h4>
}

function Student(){
  const name = 'Khan';
  return <h3>{name} is a student</h3>
}

function Student2({isAdult= 'Unknown', name='Unknown',score = 0, grade='none'}){
  console.log(name, grade)
  return (
    <div className = 'student'>
      <h3>This is a student</h3>
      <p>Name : {name}</p>
      <p>Grade : {grade}</p>
      <p>Score : {score}</p>
      <p>isAdult : {isAdult}</p>
    </div>
  )
}

function Developer(){
  const name = 'Jaber';
  const age = '96'
  const nameStyle = {color: 'black', background: 'gold', borderRadius: '4px'}
  return (
    <div style={{color : 'grey', border:'4px solid gold', marginTop: '2rem', borderRadius: '8px'}}>
      <h2>Here are developers</h2>
      <p>Name : {name} , Age : {age}</p>
      <p style={nameStyle}>Name : {name} , Age : {age}</p>
      <p>Name : {name} , Age : {age}</p>
    </div>
  )
}


export default App
