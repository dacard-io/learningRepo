/**
 * Created by davidcardoso on 5/6/16.
 */

/* So apparently, to use Phaser.js, you only need basic JS skills. Ah yeah. */

// Start by initiating a game object with parameters to set the global game view in the browser
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
/* Parameters are as follows:
   800 = width of screen
   600 = height of screen
   Phaser.AUTO = The rendering context. You can choose Phaser.WEBGL, or CANVAS. Auto uses a fallback model, so use auto
   '' = The empty parameter is the id of the DOM element in which we'll append the game object, if left blank
        its automatically applied to the body
   The final parameter is an object containing three references to Phaser's main functions.
*/

// Preload is used to load the resources to be used in the game
function preload() {
    game.load.image('sky', 'sprites/sky.png');
    game.load.image('ground', 'sprites/ground.png');
    game.load.image('coin', 'sprites/coin.png');
    game.load.spritesheet('player', 'sprites/player.png', 32, 48); // The last parameters are the size of the frame!
    // First argument is the asset key, its what you'll use to load the resource through code. Second is the path. Easy!
}

var player;
var platforms;
var cursors;
var score = 0;
var scoreText; // Declare variable to hold score text!

// Create is used to create all entities and place them in the world
function create() {
    //game.add.sprite(0, 0, 'coin'); // Parameters are x, y, and asset key. This is too easy!

    // Start by declaring the physics system to use. Contains functions for collisions etc.
    game.physics.startSystem(Phaser.Physics.ARCADE); // Arcade is the common one and the default to use.

    game.add.sprite(0,0, 'sky'); // Add the background

    // Now lets create a group that contains the ground, called platforms
    platforms = game.add.group();
    // Now enable any physics for any object in this group
    platforms.enableBody = true;

    // Now lets create the ground!
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    // Now scale sprites to fit to the width of the game
    ground.scale.setTo(2,2);

    // Now make the ground immovable so it doesn't fall when the player lands on it
    ground.body.immovable = true;

    // Now lets create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    // Now lets add the player
    player = game.add.sprite(32, game.world.height - 150, 'player');
    // Enable physics on the player
    game.physics.arcade.enable(player);
    // Add player physics properties
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true; // Pretty self explanatory

    // Notice that the player sprite is a spritesheet, so adding animations is really easy!
    player.animations.add('left', [0,1,2,3], 10, true);
    player.animations.add('right', [5,6,7,8], 10, true);
    /* Arguments are as follows:
        'left' - 1st argument is the name of the animation
        [array] - 2nd argument is the frames of the animation
        10 - 3rd argument is the speed of the animation (in frames per second)
        true - 4th argument determines whether the animation is a loop
     */

    // Now load up the keyboard manager. Its called cursor, so whatever just call the variable cursor
    cursors = game.input.keyboard.createCursorKeys();

    // Add coins to be collected by player
    coins = game.add.group();
    coins.enableBody = true; // Enable physics for any object in this group
    // Create 12 coins with even spacing
    for (var i = 0; i < 12; i++) {
        // Create a coin inside of the coins group
        var coin = coins.create(i * 70, 0, 'coin');
        // Let gravity work its magic
        coin.body.gravity.y = 6;
        // Give each coin a slightly random bounce
        coin.body.bounce.y = 0.7 + Math.random() * 0.2;
        coin.scale.setTo(2,2);
    }

    // Kind of odd, but you have to manually set the score text.
    scoreText = game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#000'});
    /* Params are pretty simple, first two are the x and y coordinate, the third 'Score: 0' is the default text
       to show, and the last is any formatting options
     */
}

// Update is where the game loop occurs! Any animations and events between entities go in here!
function update() {
    // Collide the player with the platform
    game.physics.arcade.collide(player, platforms);
    // Collide coins with platforms
    game.physics.arcade.collide(coins, platforms);
    // Check for an overlap between coins group and player
    game.physics.arcade.overlap(player, coins, collectCoin, null, this);
    /* Syntax is as follows:
        "player" = Check if player overlaps with second object defined in the second argument
        "coins" = check if coins group overlaps
        "collectCoin" = function to perform on collision
        "null" = the process callback, (I guess while its happening. Leave null)
        "this" = The context to run the callbacks, leave it "this"
     */

    // So Phaser comes with its own keyboard manager, so don't worry about adding event listeners

    // SO first things first, set players horizontal velocity to 0;
    player.body.velocity.x = 0;

    // Check for key presses
    if (cursors.left.isDown)
    {
        // Move left
        player.body.velocity.x = -150;
        // Play animation (this is unbelievably easy!)
        player.animations.play('left');
    } else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;
        player.animations.play('right');
    } else {
        // Stand still
        player.animations.stop();
        player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down) // What. thats easy! Holy hell
    {
        player.body.velocity.y = -350;
    }
}

function collectCoin(player, coin) {
    // Callback used for player and coin collision

    // Remove the coin from the screen
    coin.kill();

    // Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;
}

/* Extra notes below:
    - add.sprite adds a sprite to the game world where all objects are. The gameworld is infinite in size, and 0,0
    is the center of it. From our point of view since there is no camera added, it looks like the sprite is in the
    top left corner. The world can be accessed via the game.world and has many methods.
    - Groups are incredibly powerful and can help cut down massive amounts of code. As you can see you can create
    multiple objects like ground that are all part of the platforms group, and you can apply specific events to those
    groups
    - There are multiple powerful physics systems which are Ninja Physics and P2.Js full body physics, but arcade
    physics is the default, lightweight, simple to use, and works great on mobile browsers :o
    - Remeber, when declaring variables in JS, if you don't use the var statement, the variable becomes global automatically,
    use it when declaring groups
 */