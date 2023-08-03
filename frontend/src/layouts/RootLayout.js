import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
//Outlet -- renders nested child routes within it

const RootLayout = () =>{

    return(
        <div className="root-main">
          <Header></Header>  
            <Outlet />
            
          <Footer></Footer>
        </div>
    )
}

export default RootLayout
