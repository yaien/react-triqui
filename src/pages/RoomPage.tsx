import * as React from "react";
import { Container } from "../components/shared";
import { Join, PlayerList } from "../components/room";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { getRoom } from "../functions";
import axios from "axios";
import { SessionContext } from "../components/session";
import { Room } from "../interfaces";

export function RoomPage(props: RouteComponentProps) {
  let [state, setState] = React.useState({ loading: true, room: null as Room });
  let session = React.useContext(SessionContext);
  async function load() {
    try {
      let room = await getRoom(props.match.params["id"]);
      setState({ room, loading: false });
    } catch {
      setState({ room: null, loading: false });
    }
  }

  async function play() {
    if (!session.player) return;
    await axios.post("/rooms/init", { player: session.player._id });
    props.history.push("/game");
  }

  React.useEffect(() => {
    load();
  }, []);

  if (state.loading) {
    return null;
  }

  if (!state.room) {
    return <Redirect to="/" />;
  }

  let players = session.room ? session.room.players : state.room.players;

  return (
    <Container>
      <Join room={state.room} />
      <PlayerList players={players} onPlay={play} />
    </Container>
  );
}
