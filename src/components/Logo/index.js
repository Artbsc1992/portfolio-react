import './index.scss';
import LogoS from '../../assets/images/default-monochrome.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="logo" />
    </div>
  )
}

export default Logo;