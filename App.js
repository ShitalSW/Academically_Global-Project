import './App.css';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom';
import PrivateComponent from './Components/PrivateComponent';
import Navbar from './Components/Navbar';
import AddCourse from './Components/AddCourse';
import AllCourses from './Components/AllCourses';
import Update from './Components/Update';
import About from './Components/About';
import MainPage from './Components/MainPage';
import FirstPage from './Components/FirstPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar */}
      {location.pathname !== '/' && <Navbar />}
      
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/Home" element={<AllCourses />} />
          <Route path="/add" element={<AddCourse />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/delete" element={<h1>Delete Course</h1>} />
        </Route>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/" element={<FirstPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
