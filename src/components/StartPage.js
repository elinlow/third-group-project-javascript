import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";
import Logotype from "./Logotype";
import { useNavigate } from 'react-router-dom';

const StartPage = () => {

     return (
        <div className="start">
            <div className="site-branding">
                <Logotype />
            </div>
            <Link to="/HomePage">
                <ReusableButton>Login</ReusableButton>
            </Link>
            <h2 className="headline pt-4">Create an account</h2>
        </div>
     )
}
    
export default StartPage;