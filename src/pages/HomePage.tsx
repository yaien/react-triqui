import * as React from "react";
import { Create } from "../components/room/";
import { Container } from "../components/shared";
import axios from "axios";
import { Player, RoomAccess } from "../interfaces";
import { SessionContext } from "../components/session";
import { RouteComponentProps } from "react-router";
import { addRoomToCache } from "../functions";

export function HomePage(props: RouteComponentProps) {
  let [errors, setErrors] = React.useState(null);
  let session = React.useContext(SessionContext);

  async function create(payload: RoomAccess) {
    try {
      let data = (await axios.post("/rooms/create", payload)).data;
      session.login(data.player, data.room);
      props.history.push("/room/" + data.room._id);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  }

  return (
    <Container>
      <Create onSubmit={create} />
    </Container>
  );
}
