
import { Outlet } from "react-router";
import Navbar from "./components/navbar/navbar";

function App() {


  return (
    <div className='mt-20 mx-20 p-4'>
      <h2 className="text-2xl">Create Flashcard</h2>
      <Navbar />
      <Outlet />
    </div>
      
    
  )
}

export default App
