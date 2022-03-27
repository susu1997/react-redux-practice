/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 20:56:51
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-26 21:08:27
 * @Description:
 */
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./pages/TodoList";
//---------关键代码--------start
import { Provider } from "react-redux";
import store from "./store";
//声明一个App组件，然后这个组件用Provider进行包裹。
function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
