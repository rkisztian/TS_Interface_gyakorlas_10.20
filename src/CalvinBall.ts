import { Results } from "./result";

export class CalvinBall implements Results{
    winner: string;
    date : Date;
    pontok : number;

    constructor(winner: string, date : Date, pontok : number){
        this.winner = winner;
        this.date = date;
        this.pontok = pontok;
    }

    getWinner(): string {
        return this.winner;
    }

    setWinner(winner: string): void {
        if(this.winner == "Calvin" || this.winner == "Hobbes"){
            this.winner = winner;
        }
        else{
            console.log("Calvin vagy Hobbes lehet a nyertes.")
        }
    }

    getDate(): Date {
        return this.date;
     }

     setDate(date: Date): void {
         this.setDate = Date;
     }

     result(): string {
         return "CalvinBall:" + this.pontok;
     }


}