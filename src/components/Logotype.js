import Logo from '../assets/logo.svg';

const Logotype = () => {
    return (
        <div className="site-branding">
            <img className="logo" src={Logo} alt="Logotype"/>
        </div>
    )
}

export default Logotype;