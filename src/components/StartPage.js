import ReusableButton from "./ReusableButton";
import Logotype from "./Logotype";

const StartPage = () => {
     return (
        <div className="start">
            <Logotype />
            <ReusableButton>Login</ReusableButton>
            <h2 className="headline pt-5">Create an account</h2>
        </div>
     )
}
    
export default StartPage;