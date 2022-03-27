/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 21:01:28
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-26 23:05:39
 * @Description:
 */
import React, { Component } from "react";
//-----关键代码--------start
import store from "../store/index";
//-----关键代码--------end
import { connect } from "react-redux"; //引入连接器
const TodoList = (props) => {
  let { inputValue, inputChange, clickButton, list } = props; // 粘贴过来后，此处要进行修改
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange} />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
// 映射关系
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
// DispatchToProps就是要传递的第二个参数，通过这个参数才能改变store中的值。
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: "change_input",
        value: e.target.value,
      };
      dispatch(action);
      console.log(e.target.value);
    },
    clickButton() {
      let action = { type: "add_item" };
      dispatch(action);
    },
  };
};
// export default TodoList;
export default connect(stateToProps, dispatchToProps)(TodoList);
// connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，
// 然后通过connect再链接到一起，让代码更加清晰和易于维护。这也是React - Redux最大的有点。
