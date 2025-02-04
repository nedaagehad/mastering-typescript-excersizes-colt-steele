class Player {
    #score = 0;
    lives = 10;

    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    greet() {
        return `Welcome, ${this.first}!`;
    }

    get Score() {
        return this.#score;
    }

    setScore(score) {
        this.#score = score
    }
}

const playerOne = new Player("Fredrick", "Collins")

console.dir(playerOne)
playerOne.setScore(50)
console.log(playerOne.Score)
console.log(playerOne.greet())

class NPC extends Player {
    constructor(first, last, rank) {
        super(first, last)
        this.rank = rank
    }

    attack() {
        return "Off with your head!"
    }
}

const npcOne = new NPC("Teddy", "Oswald", "General")

console.log(npcOne)