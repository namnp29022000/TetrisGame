class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);

        //create board
        this.board = new board(this);

        //get keyboard
        this.listenKeyBoard();

        //create the brick
        this.brick = new brick(this)

        //start the game
        this.startGame();
        //start game loop
        this.loop()
    }
    startGame() {
        setInterval(() => {
            this.brick.fall();
        }, 1000);
    }
    listenKeyBoard() {
        document.addEventListener('keydown', (event) => {
            console.log(event.code);

            switch (event.code) {
                case 'ArrowLeft':
                    this.d.moveLeft();
                    break;
                case 'ArrowRight':
                    this.d.moveRight();
                    break;
                case 'ArrowUp':

                    break;
                case 'ArrowDown':

                    break;

                default:
                    break;
            }
        });
    }
    loop() {
        console.log("loop");
        this.update();
        this.draw();
        setTimeout(() => {
            this.loop();
        }, 30);
    }
    update() {

    }
    clearScreen() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
    draw() {
        this.clearScreen();
        this.board.draw();
        this.brick.draw();
    }

}
var g = new game();