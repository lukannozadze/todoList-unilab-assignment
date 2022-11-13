const Card = (props) => {
  return (
    <div className="bg-[#ffffff] w-screen m-[30px] rounded-[4px] flex flex-col items-center  font-poppins ">
      {props.children}
    </div>
  );
};
export default Card;
