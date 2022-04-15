import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home/Home/Home';
import Login from './Page/LoginRegisterRequireAuth/Login/Login';
import Register from './Page/LoginRegisterRequireAuth/Register/Register'
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import NotFound from './Page/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Login></Login>
      <Register></Register>
      <NotFound></NotFound>
      <Footer></Footer>
    </div>
  );
}

export default App;
