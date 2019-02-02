import { useGame } from "../core/hook";

describe("Core", () => {
  it("Core hook should change on play", () => {
    let game = useGame();
    let state = game.state;
    game.play([0, 1]);
    expect(state).not.toEqual(game.state);
  });
});
