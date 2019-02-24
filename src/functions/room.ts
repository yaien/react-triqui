import axios from "axios";
import { Room } from "../interfaces";

let cache = {};

/**
 * Fetch Room by Id
 * @param id
 * @param useCache
 */
export async function getRoom(id: string, useCache = true) {
  if (useCache && id in cache) return cache[id];
  try {
    let room = (await axios.get("/rooms/" + id)).data;
    addRoomToCache(room);
    return room;
  } catch {
    return null;
  }
}

/**
 *
 * @param room add rooom to cache stores
 */
export function addRoomToCache(room: Room) {
  cache[room._id] = room;
}
