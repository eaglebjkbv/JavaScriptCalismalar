var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mz','./assets/alevtp.png');
    this.load.image('gemi','/assets/gemitp.png')
    
    
}

function create ()
{
    //this.add.image(400, 300, 'sky');

    var particles = this.add.particles('mz');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
       blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'gemi');

    logo.setVelocity(200, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}