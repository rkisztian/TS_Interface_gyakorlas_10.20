"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, date, futottido) {
        this.winner = winner;
        this.date = date;
        this.futottido = futottido;
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        this.winner = winner;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.setDate = Date;
    }
    result() {
        return "Marathon: ";
    }
}
exports.Marathon = Marathon;
