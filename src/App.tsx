import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import AddExpenses from "./dashboard/AddExpenses"
import Dashboardcard from "./dashboard/Dashboardcard"
import FilterExpenses from "./dashboard/FilterExpenses"
import YourExpenses from "./dashboard/YourExpenses"


function App() {

  return (
    <div>
      <Navbar/>
      <Dashboardcard/>
      <AddExpenses/>
      <FilterExpenses/>
      <YourExpenses/>
      <Footer/>
    </div>
  )
}

export default App
