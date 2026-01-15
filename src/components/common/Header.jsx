import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'
 

const Header = () => {
    return (
        <header className='mx-10 mt-10'> 
            {/* topbar */}
            <Topbar />
            {/* navbar */}
            <Navbar/>
            {/* cart drawer */}
        </header>
    )
}

export default Header