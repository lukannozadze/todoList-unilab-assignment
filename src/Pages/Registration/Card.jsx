const Card = (props) => {
  return (
    <div className="bg-[#ffffff] w-screen m-[30px] rounded-[4px] flex flex-col items-center font-poppins sm:w-[450px] lg:w-[500px] def:w-[588px] def:h-[688px]">
      {props.children}
    </div>
  );
};
export default Card;
