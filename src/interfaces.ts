export interface Player {
  _id: string;
  name: string;
}

export interface Room {
  _id: string;
  players: Player[];
}

export interface RoomAccess {
  player: string;
  room?: string;
}

export interface RoomResponse {
  room: Room;
  player: Player;
}
