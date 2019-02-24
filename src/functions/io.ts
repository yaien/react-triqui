import { connect } from "socket.io-client";

export function io(playerId: string) {
  let options = { query: { playerId } };
  let socket = connect(
    process.env.SOCKET_URL,
    options
  );
  return socket;
}
