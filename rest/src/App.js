
import './App.css';
import Google from './components/Google';
import MultipleSelect from './components/Restaurant';
import Login from './components/Login'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <MultipleSelect/>
      <Google/> */}
      <Login />
      <Routes>
        <Route path={"/res"} element={<MultipleSelect />}></Route>
        <Route path={"/gog"} element={<Google />}></Route>
      </Routes>
    </div>
  );
}

export default App;
