"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _football_egyikCsapatGolok, _football_masikCsapatGolok;
Object.defineProperty(exports, "__esModule", { value: true });
exports.football = void 0;
class football {
    constructor(winner, date, egyikCsapatGolo, masikCsapatGolok) {
        _football_egyikCsapatGolok.set(this, void 0);
        _football_masikCsapatGolok.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _football_egyikCsapatGolok, egyikCsapatGolo, "f");
        __classPrivateFieldSet(this, _football_masikCsapatGolok, masikCsapatGolok, "f");
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
        return "Football match" + __classPrivateFieldGet(this, _football_egyikCsapatGolok, "f") + "-" + __classPrivateFieldGet(this, _football_masikCsapatGolok, "f");
    }
}
exports.football = football;
_football_egyikCsapatGolok = new WeakMap(), _football_masikCsapatGolok = new WeakMap();
