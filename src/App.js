import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home/Home/Home';
import Login from './Page/LoginRegisterRequireAuth/Login/Login';
import Register from './Page/LoginRegisterRequireAuth/Register/Register'
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import NotFound from './Page/Shared/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Shop from './Page/Home/Shop/Shop';
import Favorite from './Page/Home/Favorite/Favorite';
import RequireAuth from './Page/LoginRegisterRequireAuth/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/favorite' element={
          <RequireAuth>
            <Favorite></Favorite>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
