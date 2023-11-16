import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefullForm from './Components/StatefullForm/StatefullForm'

function App() {

  const handleSignUp = data => {
    console.log('Sign Up Data', data);
  }

  const handleProfileUpdate = data => {
    console.log('profile Update Data', data)
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"SignUp"} handleSubmit={handleSignUp}>
        <div>
          <h3>Sign Up Form</h3>
          <p>Create Your account here</p>
        </div>
      </ReusableForm>
      <ReusableForm 
       formTitle={"Update Form"}
       handleSubmit={handleProfileUpdate}
       handleBtnText={'Update'}
       >
        <div>
          <h3>Update Profile</h3>
          <p>You can update your profile any time</p>
        </div>
       </ReusableForm>
    </>
  )
}

export default App
