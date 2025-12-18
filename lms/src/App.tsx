import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./components/pages/Login";
import ManageBooks from "./components/pages/ManageBooks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manage-books" element={<ManageBooks />} />
      </Routes>
    </Router>
  )
}
  

export default App;
