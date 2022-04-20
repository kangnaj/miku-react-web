import React, { useContext, useState } from "react";
import { Button } from 'antd';

interface IUser {
  username: string;
}
const AppContext = React.createContext({ username: "" });

const Navbar = () => {
  const { username } = useContext<IUser>(AppContext);

  return (
    <div className="navbar">
      <h1>子组件 username 001:{username}</h1>
    </div>
  );
};

const Messages = () => {
  const { username } = useContext(AppContext);

  return (
    <div className="messages">
      <h1>子组件 username 002:{username}</h1>
    </div>
  );
};

function ContextDemo() {
  const [user, setUser] = useState({ username: "miku" });
  return (
    <AppContext.Provider value={user}>
      <div className="porp-title">
        父组件传递了一个默认username：miku
        <div>
          <Button type="primary" onClick={() => setUser({ username: "泡泡茶壶" })}>
            点击修改公共值username 为 泡泡茶壶
          </Button>
          <Button type="default"onClick={() => setUser({ username: "miku" })} > 重置</Button>
        </div>
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}

export default ContextDemo;
