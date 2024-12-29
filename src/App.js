import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요");
    console.log("uuu", userName);

    // emit 이라는 함수를 이용하여 말한다
    // emit(대화의 제목, 보낼내용, 콜백함수)
    socket.emit("login", userName, (res) => {
      // 소통이 다 끝나고 잘 처리가 되었는지 response를 알려주는 함수
      // console.log("Res", res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };
  return (
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
