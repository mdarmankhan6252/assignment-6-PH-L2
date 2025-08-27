import logo from '@/assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
   return (
      <Link to='/'>
         <img src={logo} alt="" className='w-12' />
      </Link>
   );
};

export default Logo;