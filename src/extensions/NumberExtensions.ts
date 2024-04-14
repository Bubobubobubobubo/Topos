import { type UserAPI } from "../API/API";
import { MidiEvent } from "../Classes/MidiEvent";
import { Player } from "../Classes/ZPlayer";
import { SoundEvent } from "../Classes/SoundEvent";
import { SkipEvent } from "../Classes/SkipEvent";


declare global {
  interface Number {
    z(): Player;
    z0(): Player;
    z1(): Player;
    z2(): Player;
    z3(): Player;
    z4(): Player;
    z5(): Player;
    z6(): Player;
    z7(): Player;
    z8(): Player;
    z9(): Player;
    z10(): Player;
    z11(): Player;
    z12(): Player;
    z13(): Player;
    z14(): Player;
    z15(): Player;
    z16(): Player;
    midi(): MidiEvent;
    sound(name: string): SoundEvent | SkipEvent,
    linlin(a: number, b: number, c: number, d: number): number,
    linexp(a: number, b: number, c: number, d: number): number,
    explin(a: number, b: number, c: number, d: number): number,
    expexp(a: number, b: number, c: number, d: number): number,
    lincurve(inMin: number, inMax: number,
      outMin: number, outMax: number,
      curve: number): number;
  }
}

export const makeNumberExtensions = (api: UserAPI) => {

  Number.prototype.linlin = function(a: number, b: number, c: number, d: number) {
    if (this.valueOf() < a) return c;
    if (this.valueOf() > b) return d;
    return (this.valueOf() - a) / (b - a) * (d - c) + c;
  };

  Number.prototype.explin = function(a: number, b: number, c: number, d: number) {
    if (this.valueOf() <= a) return c;
    if (this.valueOf() >= b) return d;
    return (Math.log(this.valueOf() / a)) / (Math.log(b / a)) * (d - c) + c;
  };

  Number.prototype.expexp = function(a: number, b: number, c: number, d: number) {
    if (this.valueOf() <= a) return c;
    if (this.valueOf() >= b) return d;
    return Math.pow(d / c, Math.log(this.valueOf() / a) / Math.log(b / a)) * c;
  };

  Number.prototype.lincurve = function(
    inMin: number, inMax: number,
    outMin: number, outMax: number,
    curve: number) {
    if (this.valueOf() <= inMin) return outMin;
    if (this.valueOf() >= inMax) return outMax;
    if (Math.abs(curve) < 0.001) {
      return (this.valueOf() - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
    };
    let grow = Math.exp(curve);
    let a = outMax - outMin / (1.0 - grow);
    let b = outMin + a;
    let scaled = (this.valueOf() - inMin) / (inMax - inMin);
    return b - (a * Math.pow(grow, scaled))
  }

  Number.prototype.linexp = function(a: number, b: number, c: number, d: number) {
    if (this.valueOf() <= a) return c;
    if (this.valueOf() >= b) return d;
    return Math.pow(d / c, (this.valueOf() - a) / (b - a)) * c;
  };

  Number.prototype.z0 = function(options: { [key: string]: any } = {}) {
    return api.z0(this.valueOf().toString().split("").join(" "), options, "z0");
  };

  Number.prototype.z1 = function(options: { [key: string]: any } = {}) {
    return api.z1(this.valueOf().toString().split("").join(" "), options, "z1");
  };

  Number.prototype.z2 = function(options: { [key: string]: any } = {}) {
    return api.z2(this.valueOf().toString().split("").join(" "), options, "z2");
  };

  Number.prototype.z3 = function(options: { [key: string]: any } = {}) {
    return api.z3(this.valueOf().toString().split("").join(" "), options, "z3");
  };

  Number.prototype.z4 = function(options: { [key: string]: any } = {}) {
    return api.z4(this.valueOf().toString().split("").join(" "), options, "z4");
  };

  Number.prototype.z5 = function(options: { [key: string]: any } = {}) {
    return api.z5(this.valueOf().toString().split("").join(" "), options, "z5");
  };

  Number.prototype.z6 = function(options: { [key: string]: any } = {}) {
    return api.z6(this.valueOf().toString().split("").join(" "), options, "z6");
  };

  Number.prototype.z7 = function(options: { [key: string]: any } = {}) {
    return api.z7(this.valueOf().toString().split("").join(" "), options, "z7");
  };

  Number.prototype.z8 = function(options: { [key: string]: any } = {}) {
    return api.z8(this.valueOf().toString().split("").join(" "), options, "z8");
  };

  Number.prototype.z9 = function(options: { [key: string]: any } = {}) {
    return api.z9(this.valueOf().toString().split("").join(" "), options, "z9");
  };

  Number.prototype.z10 = function(options: { [key: string]: any } = {}) {
    return api.z10(this.valueOf().toString().split("").join(" "), options, "z10");
  };

  Number.prototype.z11 = function(options: { [key: string]: any } = {}) {
    return api.z11(this.valueOf().toString().split("").join(" "), options, "z11");
  };

  Number.prototype.z12 = function(options: { [key: string]: any } = {}) {
    return api.z12(this.valueOf().toString().split("").join(" "), options, "z12");
  };

  Number.prototype.z13 = function(options: { [key: string]: any } = {}) {
    return api.z13(this.valueOf().toString().split("").join(" "), options, "z13");
  };

  Number.prototype.z14 = function(options: { [key: string]: any } = {}) {
    return api.z14(this.valueOf().toString().split("").join(" "), options, "z14");
  };

  Number.prototype.z15 = function(options: { [key: string]: any } = {}) {
    return api.z15(this.valueOf().toString().split("").join(" "), options, "z15");
  };

  Number.prototype.z16 = function(options: { [key: string]: any } = {}) {
    return api.z16(this.valueOf().toString().split("").join(" "), options, "z16");
  };

  Number.prototype.sound = function(name: string): SoundEvent | SkipEvent {
    if (Number.isInteger(this.valueOf())) {
      return (api.sound(name) as SoundEvent).note(this.valueOf());
    } else {
      return (api.sound(name) as SoundEvent).freq(this.valueOf());
    }
  };
};
