import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import './Navbar/index';
import Routes from './Rountes';

function App() {
  return (
    <>
    <Routes/>
    <ToastContainer />
    </>
  );
}

export default App;
