class brick {
    constructor(game) {
        this.game = game;
        this.dots = [];
        this.data = [];
        this.col = 0;
        this.row = 0;

        //create data

        this.createData();
        this.createDots();

    }
    createData() {
        let baseData = [
            [
                [x, x, x, x]
            ],
            [
                [x, x],
                [x, x]
            ],
            [
                [x, x, x],
                [_, x, _]
            ],
            [
                [x, x, _],
                [_, x, x]
            ],
            [
                [_, x, x],
                [x, x, _]
            ],
            [
                [x, _],
                [x, _],
                [x, x]
            ],
            [
                [_, x],
                [_, x],
                [x, x]
            ]
        ];
        let r = Math.floor(Math.random() * 6);
        this.data = baseData[r];
    }
    canFall() {
        let thisBrickCanFall = true;
        this.dots.forEach((dot) => {
            console.log("dot:", dot);
            if (!dot.canFall()) {
                thisBrickCanFall = false;
            }
        });
        return thisBrickCanFall;
    }
    fall() {
        this.canFall();
        if (this.canFall()) {
            this.row++;
            this.dots.forEach((dot) => {
                dot.fall();
            });
        }
    }
    createDots() {
        this.dots = [];
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[0].length; col++) {
                if (this.data[row][col] == x) {
                    let newDot = new dot(this.game, row, col);
                    this.dots.push(newDot);
                }
            }
        }
    }
    draw() {
        this.dots.forEach((dot) => dot.draw());
    }
}