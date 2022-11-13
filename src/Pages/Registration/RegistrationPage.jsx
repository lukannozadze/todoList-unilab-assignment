import Card from "./Card";
import UploadArea from "./UploadArea";
import NameInput from "./NameInput";
import SignInBtn from "./SignInBtn";
const RegistrationPage = () => {
  return (
    <div className="w-screen h-screen bg-[#000000] flex justify-center">
      <Card>
        <h1 className="text-[36px] mt-[73px]">Get Started</h1>
        <UploadArea />
        <NameInput />
        <SignInBtn />
      </Card>
    </div>
  );
};

export default RegistrationPage;
