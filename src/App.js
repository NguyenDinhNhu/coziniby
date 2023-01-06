import './App.css';
import {Link, Outlet} from 'react-router-dom';
import Header from './components/page/common/header';
import Footer from './components/page/common/footer';
import Hotline from './components/page/layout/scrollAndHotline/hotline';
import ScrollToTopButton from './components/page/layout/scrollAndHotline/scrollToTop';

function App() {
  return (
    <div className="reactProject">
      <div className="headerProject">
        <Header />
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div>
        <Hotline />
        <ScrollToTopButton />
      </div>
      {/* <div class="back-top">
        <img src="../../Assets/icon/back-top.png" alt=""/>
      </div> */}
      <div className="footerProject">
        <Footer />
      </div>
    </div>
  );
}

export default App;
