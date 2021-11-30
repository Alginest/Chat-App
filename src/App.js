import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="569c8cbc-b42f-4f2d-96aa-fe7a74be7d91"
      userName="ado durak"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
