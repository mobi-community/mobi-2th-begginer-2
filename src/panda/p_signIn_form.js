import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import P_PopUpButton from "./components/button";

const P_SignInForm = () => {
  return (
    <>
      sign in
      <h2>Hello, friend</h2>
      <div>
        You can sign up quickly and easily <br /> or please use the form on the
        right
      </div>
      <div>
        <P_PopUpButton>
          <img src={Facebook} />
        </P_PopUpButton>
        <P_PopUpButton>
          <img src={Instagram} />
        </P_PopUpButton>
        <P_PopUpButton>
          <img src={Twitter} />
        </P_PopUpButton>
      </div>
    </>
  );
};
export default P_SignInForm;
