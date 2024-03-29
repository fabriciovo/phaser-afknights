import {Scene} from "phaser";

class BootScene extends Scene {
    constructor(){
        super({key:'BootScene'});

        this.levels = {
            title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'},
            game: {key: 'GameScene', path: 'assets/levels/game_scene.json'}
        }
    }

    preload(){
        for(let level_name in this.levels){
            let level = this.levels[level_name];
            this.load.json(level_name,level.path);
        }
        
    }

    create(data){
        let level_data = this.cache.json.get(data.scene);
        this.scene.start('LoadingScene',{level_data:level_data, 
            scene: this.levels[data.scene].key,
            extra_parameters: data.extra_parameters});
    }

} 

export default BootScene;