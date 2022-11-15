import deleteMarkPath from "../../assets/delete-mark.png";
import doneMarkPath from "../../assets/done-mark.png";
const ListItem = (props) => {
  const deleteBtnHandler = (e) => {
    props.onDeleteTodo(props.data.id);
  };
  return (
    <div className="relative">
      <li
        key={props.data.id}
        className="w-[350px]  bg-[#000000] text-[#ffffff] rounded-[4px] flex items-center pl-[15px] mb-[12px] pt-[10px] pb-[10px]"
      >
        {props.data.listItem}

        <button className="absolute top-[15px] right-[38px]">
          <img src={doneMarkPath} alt="done mark" />
        </button>
        <button
          onClick={deleteBtnHandler}
          className="absolute top-[10px] right-[5px]"
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
