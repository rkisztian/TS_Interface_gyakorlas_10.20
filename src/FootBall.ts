import { Results } from "./result";

export class football implements Results{
    winner: string;
    date : Date;
    #egyikCsapatGolok : number;
    #masikCsapatGolok : number;
    

    constructor(winner : string, date : Date, egyikCsapatGolo : number, masikCsapatGolok : number){
        this.winner = winner;
        this.date = date;
        this.#egyikCsapatGolok = egyikCsapatGolo;
        this.#masikCsapatGolok = masikCsapatGolok;
    }

    getWinner(): string {
        return this.winner;
    }

    setWinner(winner: string): void {
        this.winner = winner;
    }

    getDate(): Date {
        return this.date;
    }
    setDate(date: Date): void {
        this.setDate = Date;
    }

    result(): string {
        return "Football match" + this.#egyikCsapatGolok + "-" + this.#masikCsapatGolok;
    }
}