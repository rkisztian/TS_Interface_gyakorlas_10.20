import { Results } from "./result";

export class Marathon implements Results{
    winner: string;
    date : Date;
    futottido : number
    
    constructor(winner: string, date : Date, futottido : number){
        this.winner = winner;
        this.date = date;
        this.futottido = futottido;
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
        return "Marathon: "
    } 
}