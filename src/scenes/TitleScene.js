import Prefab from "../prefabs/Prefab";
import JSONLevelScene from "./JSONLevelScene";
import PlayerData from "../prefabs/playerData";

class TitleScene extends JSONLevelScene {
  constructor() {
    super("TitleScene");

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
    };
  }

  preload() {
    this.load.json("default_data", "assets/default_data.json");
  }

  create() {
    super.create();


    this.default_data = this.cache.json.get("default_data");

    this.input.on(
      "pointerdown",
      function () {
        this.login();
      },
      this
    );
  }

  start_game() {
    this.scene.start("BootScene", { scene: "game" });
  }

  login() {
    this.cache.game.player_data = new PlayerData(this.default_data.player_data);
    this.start_game();
  }

  handle_error(error) {
    console.log(error);
  }
}

export default TitleScene;
