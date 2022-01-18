import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";


const StartPage = () => {
    return (
        <div>
            <Link to="/HomePage">
                <ReusableButton>Login</ReusableButton>
            </Link>
        </div>
    )

    

}

export default StartPage;