"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalvinBall = void 0;
class CalvinBall {
    constructor(winner, date, pontok) {
        this.winner = winner;
        this.date = date;
        this.pontok = pontok;
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.winner = winner;
        }
        else {
            console.log("Calvin vagy Hobbes lehet a nyertes.");
        }
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.setDate = Date;
    }
    result() {
        return "CalvinBall:" + this.pontok;
    }
}
exports.CalvinBall = CalvinBall;
