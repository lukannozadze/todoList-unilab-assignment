import React, { useState, useEffect } from "react";
import landingImgPath from "../../assets/upload-image.png";
const UploadArea = () => {
  const [isImage, setIsImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (preview !== null) {
      localStorage.setItem("imgPath", preview);
    }
  }, [preview]);

  useEffect(() => {
    if (isImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(isImage);
    } else {
      setPreview(null);
    }
  }, [isImage]);

  const uploadHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setIsImage(e.target.files[0]);
    } else {
      setIsImage(null);
    }
  };

  return (
    <form className="mt-[40px]">
      <label
        className="sm:text-[18px] lg:text-[20px] def:text-[22px] flex flex-col items-center"
        htmlFor="img"
      >
        add a photo
        <div className="w-[100px] h-[100px] rounded-[50%] bg-[#e6ebff] flex justify-center items-center mt-[10px] mb-[63px] lg:w-[110px] lg:h-[110px] def:w-[122px] def:h-[122px] ">
          {preview ? (
            <img
              className="w-[100%] h-[100%] rounded-[50%]"
              src={preview}
              alt="uploaded img"
            />
          ) : (
            <img
              className="w-[36px] h-[32px]"
              src={landingImgPath}
              alt="black camera icon"
            />
          )}
        </div>
      </label>
      <input
        onChange={uploadHandler}
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
