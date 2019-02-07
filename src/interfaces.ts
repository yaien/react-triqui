export interface Player {
  _id: string;
  name: string;
}

export interface Room {
  _id: string;
  players: Player[];
}
