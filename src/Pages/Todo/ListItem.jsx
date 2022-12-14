import deleteMarkPath from "../../assets/delete-mark.png";
import doneMarkPath from "../../assets/done-mark.png";
const ListItem = (props) => {
  const deleteBtnHandler = (e) => {
    props.onDeleteTodo(props.data.id);
  };
  const doneBtnHandler = (e) => {
    props.onDoneTodo(props.data.id);
  };

  return (
    <div className="relative">
      <li
        key={props.data.id}
        className={`w-[350px]  bg-[#000000] text-[#ffffff] rounded-[4px] flex items-center pl-[15px] mb-[12px] pt-[10px] pb-[10px] sm:w-[390px] lg:w-[490px] lg:text-[20px] def:text-[22px]
        def:w-[595px] ${!props.data.active ? "bg-[#A0A0A0]" : ""}`}
      >
        {props.data.listItem}

        <button
          onClick={doneBtnHandler}
          className="absolute top-[15px] right-[38px] lg:top-[17px] def:right-[52px]"
        >
          <img src={doneMarkPath} alt="done mark" />
        </button>
        <button
          onClick={deleteBtnHandler}
          className="absolute top-[10px] right-[5px] lg:top-[13px] def:right-[11px]"
        >
          <img
            className="h-[24px] w-[22px]"
            src={deleteMarkPath}
            alt="delete mark"
          />
        </button>
      </li>
    </div>
  );
};
export default ListItem;
