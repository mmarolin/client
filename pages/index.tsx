import { useSockets } from "../context/socket.context";
import { useRef } from "react";
import RoomsContainer from "../containers/rooms";
import MessagesContainer from "../containers/messages";

export default function Home() {
  const { socket, setUsername, username } = useSockets();
  const usernameRef = useRef(null);

  function handleSetUsername() {
    const value = usernameRef.current.value;
    if (!value) {
      return;
    }

    setUsername(value);

    localStorage.setItem("username", value);
  }

  return (
    <div>
      {!username && (
        <div>
          <input placeholder="Username" ref={usernameRef} />
          <button onClick={handleSetUsername}>START</button>
        </div>
      )}
      {username && (
        <>
          <RoomsContainer />
          <MessagesContainer />
        </>
      )}
    </div>
  );
}
