/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 21:03:30
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-26 21:04:36
 * @Description:
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
