
import './App.css'


const names = ["Enmanuel", "Juan", "Luis", "Jorge"];

function App() {



  return (
    <>

      <ul>
        {
        names.map( (name) =>{
          
          return <li key={name}>{name}</li>
        })
      }
      </ul>

      
    </>
  )
}

export default App
