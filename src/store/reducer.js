/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 21:03:56
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-27 12:03:01
 * @Description:
 */
const defalutState = {
  inputValue: "code shu",
  list: [],
};

export default (state = defalutState, action) => {
  if (action.type === "change_input") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  //----关键代码------start---------
  if (action.type === "add_item") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  //----关键代码------end---------
  return state;
};
