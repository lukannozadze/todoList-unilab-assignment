import landingImgPath from "../../assets/upload-image.png";
const UploadArea = () => {
  return (
    <form className="mt-[40px]">
      <label htmlFor="img">
        add a photo
        <div className="w-[100px] h-[100px] rounded-[50%] bg-[#e6ebff] flex justify-center items-center mt-[10px] mb-[63px] ">
          <img
            className="w-[36px] h-[32px]"
            src={landingImgPath}
            alt="black camera icon"
          />
        </div>
      </label>
      <input
        className="hidden"
        type="file"
        id="img"
        name="img"
        accept="image/*"
      ></input>
    </form>
  );
};

export default UploadArea;
