import './App.css';
import {Link, Outlet} from 'react-router-dom';
import Header from './components/page/common/header';
import Footer from './components/page/common/footer';

function App() {
  return (
    <div className="reactProject">
      <div className="headerProject">
        <Header />
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div className="footerProject">
        <Footer />
      </div>
    </div>
  );
}

export default App;
