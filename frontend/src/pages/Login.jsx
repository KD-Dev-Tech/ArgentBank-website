import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyLogin from '../container/BodyLogin';

const login = () => {
    return (
        <div className='body'>
            <Header />
            <BodyLogin />  
            <Footer />
        </div>
    );
}
export default login;