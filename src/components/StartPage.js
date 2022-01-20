import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";
import Logotype from "./Logotype";

const StartPage = () => {

     return (
        <div className="start">
            <div className="site-branding">
                <Logotype />
            </div>
            <Link to="/LogInPage">
                <ReusableButton>Login</ReusableButton>
            </Link>
            <Link to="/CreateAccontPage">
                <h2 className="headline pt-4">Create an account</h2>
            </Link>
        </div>
     )
}
    
export default StartPage;