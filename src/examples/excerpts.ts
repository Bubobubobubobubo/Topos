export const examples = [
  `// Entering the secret room - Bubobubobubo
let frequencies = [200,400,600,800,1000,2000].beat(2);
beat(2) :: sound('sine').freq(frequencies)
  .delay(0.5).delayt(usine(.5)).delayfb(0.8).size(0.9).room(0.9).out()
beat(2) :: app.hydra.osc(frequencies/100, 0.25, 0.5)
  .posterize([32,4,8,16].beat(2)).rotate(pulse())
  .kaleid([1,2,3].beat()).out()`,
  `// The real internet of things - Bubobubobubo
beat(.5) :: sound('STA6').cut(1).vel(0.4)
  .orbit(2).room(0.5).size(0.5).n(irand(1,4))
  .speed([0.15, 0.30].beat()).out()
binrhythm(.5, 50) :: sound('shaker').out()
binrhythm(.5, 52) :: sound('808bd').n(3).out()
rhythm(.25, 6, 8) :: sound('808sd').out()`,
  `// Numerology - Bubobubobubo
let mel = [
  "0.125 _ (0 3 7 0 3 5 0 3 9)+(0 2)", "0.125 (0 7 0 10 0 5)+(0 3)",
  "0.125 (0 3 7 0 3 5 0 3 9)+(0 2)", "0.125 (0 2 4 5 9 10)+(0 2)",
].beat(4);
z0(mel)
  .scale('minor').sound('square').cutoff(800 + usine(.5) * 5000)
  .fmi([2, 4, 8].beat(2)).fmh(flip(2) ? 2 : 4)
  .delay(bpm() / 60 / 9).delayt(0.25).delayfb(0.5)
  .fmsus(0.3).fmrel(0.3).rel(rand(0.5,0.8))
  .sus(rand(0.05, 0.1)).out();
beat(1) :: sound(flip(2) ? 'kick' : ['sd', 'cp'].beat(3)).out();
beat([.25, .5].beat(4)) :: flip(6) && sound('dr')
  .room(0.85).size(0.85).vel($(1) % 10 / 8)
  .n([1, 2, 7].pick()).out();`,
  `// Harmonic Leaps and Gaps -- Bubobubobubo
let oscillation = quant(usine(.25) * 20, [35, 40, 38, 50, 55]);
let tonal = [0, 5, 0, 0, 7].palindrome().bar() + 40 - 24;
[tonal, tonal + 7, tonal + [12,3].bar()].forEach((e) => {
  flip(2) :: beat(.5) :: sound('square').fmi(2)
  .cutoff(500 + usine(1/2)).n(irand(1,10))
  .note(e + oscillation + [0, 5].beat(.5)).out()
  !flip(2) :: beat(.5) :: sound('sawtooth').fmi(2)
  .cutoff(500 + usine(1/2) * 5000).n(irand(1,10))
  .note(e + oscillation + [0, 5].beat(.5)).out()
});
oncount([2, 3.5, [5,0].pick()], 6) :: sound('snare').out()
  `,
  `// Computer Music Classroom, Monday (8AM) -- Bubobubobubo
let ur = [0, 12, 7].beat(24),
    fundamental = [0, 5, 10, 8, 6].repeatAll(4).bar();
beat(.25) :: sound('square')
  .note(ur + fundamental + 40).n(1 + $(1) % 8)
  .atk(0.05).sustain(0.1).release(0.1)
  .room(0.9).size(0.9)
  .out()
beat(.25) :: sound('sawtooth')
  .note(ur + fundamental + 47).n(1 + $(2) % 8)
  .atk(0.05).sustain(0.1).release(0.1)
  .room(0.9).size(0.9)
  .out()
beat(.25) :: sound(['sawtooth', 'square'].bar())
  .note(ur + fundamental + 40+[10,12].bar()).n(1 + $(3) % 8)
  .atk(0.05).sustain(0.1).release(0.1)
  .room(0.9).size(0.9).out()
  `,
  `// Lamento for Digital Harpists -- Bubobubobubo
beat(4) :: sound('triangle')
  .note(60).fmwave('triangle').fmi(3.95)
  .fmh(0.25).release(1.5).sustain(0.5)
  .decay(1.125).vel(0.35).room(1.5)
  .size(1.9).out()
beat([.5,.25].beat(1)) :: sound('triangle')
  .note([67,72,75,77,79].shuffle().beat(.25) - [12, 24].pick())
  .fmwave('triangle').fmi(3.99).fmh([1.001].pick() + usine() / 100)
  .release(.125).sustain(0.125)
  .room(1.5).size(1.9).out()
beat([4, 2, 8].pick() / [2,1].bar()) :: sound('triangle')
  .note([67,72,75,77,79].shuffle().loop($('lezgo')))
  .fmwave('triangle').fmi(3.99).fmh([1.001].pick() + usine() / 100)
  .release(2).sustain(0.125).gain(1.5)
  .delay(0.5).delaytime(.75).delayfb(0.25)
  .room(1.5).size(1.9).out()
  `,
  `// Super gentle computing - Bubobubobubo
let melody = [30,30,34,35,37].palindrome()
  .beat() + [0, -12].repeatAll(2).beat(2)
if (flip(8, 75)) {
  log('first section')
  rhythm(.5, 4, 8) :: sound('ST12').n([0,1,2].beat(0.5)).speed(0.5).out()
  rhythm(.5, 6, 8) :: sound('ST20').n([0,1,2].beat(0.5) + 20)
    .speed(0.25).end(0.1).orbit(2).room(0.5).size(0.5).out()
  beat(.5) :: sound('ST01').note(melody)
    .n($(1)).speed(0.5).room(0.5).size(0.5).out()  
} else {
  log('second section')
  rhythm(.5, 2, 8) :: sound('ST20')
    .n([0,1,2].beat(0.5)).speed(0.5)
    .end(0.1).out()
  beat(.5) :: sound('ST01').note(melody).n($(1)).speed(0.5).end(0.1).out()  
  beat(1) :: sound('ST02').note(melody).n($(1)).speed(0.5).end(0.1).out() 
}
  `,
  `// Race day - Bubobubobubo
bpm(125);
beat(.5) :: sound('STB6')
  .n(irand(1,10)).speed(0.5).rel(1)
  .sus(0.1).out()
rhythm(flip(4) ? 1 : .5, 5, 8) :: sound('kick').out()
rhythm(flip(2) ? .5 : .25, 7, 8) :: sound('click')
  .vel(0.1 + utriangle(.25)).n(irand(1,5)).out()
rhythm(.5, 2, 8) :: sound('snare').out()
`,
  `// Structure et approximation - Bubobubobubo
beat(.25) :: sound('zzfx').zzfx(
  // Randomized chaos :)
  [
    rand(1,5),,rand(500,1000),rand(.01, 0.02),,
    rand(.01, .05),irand(1,12),rand(0,8),,
    irand(0,200),-411,rand(0, 1),,,irand(-20, 40),,
    .43,irand(1,20)
  ]).room(0.4).size(0.15).cutoff(500 + usine() * 8000)
  .vel(0.1).gain(toss() ? .5 : .125)
  .delay(toss() ? 0.5 : 0).delayt(0.045).delayfb(0.1).out()
rhythm(.5, toss() ? 5 : 7, 12) :: sound('kick').n(13).out()
rhythm(toss() ? .25 : .5, flip(2) ? 3 : 5, 12) :: sound(
  toss() ? 'snare' : 'cp').n(5).out()
rhythm(flip(2) ? .5 : .25, flip(4) ? 8 : 11, 12) :: sound('hat')
  .orbit(3).room(0.5).size(0.5).n(0).out()
`,
  `// Part-Dieu - Bubobubobubo
bpm(90);
beat(rarely(12) ? .5 : .25) :: sound('ST22')
  .note([30, 30, 30, 31].repeatAll(8).beat(.5))
  .cut(1).n([19, 21].beat(.75))
  .cutoff(irand(200, 5000))
  .resonance(rand(0.2,0.8))
  .room(0.9).size(1).orbit(2)
  .speed(0.25).vel(0.3).end(0.5)
  .out()
beat(.5) :: snd('dr')
  .n([0, 0, 0, 0, 2, 8].beat())
  .gain(1).out()
beat(flip(2) ? 1 : 0.75) :: snd('bd').n(2).out()
beat(4) :: snd('snare').n(5)
  .delay(0.5).delayt(bpm() / 60 / 8)
  .delayfb(0.25).out()
`,
  `// Atarism - Bubobubobubo
bpm(85);
let modifier = [.5, 1, 2].beat(8);
let othermod = [1, .5, 4].beat(4);
beat(modifier / 2):: sound('STA9').n([0,2].beat(.5)).speed(0.5).vel(0.5).out()
beat(.5)::sound('STA9').n([0, 20].beat(.5)).speed([1,1.5].repeatAll(4).beat() / 4)
  .cutoff(500 + usine(.25) * 3000).vel(0.5).out()
beat(modifier / 2):: sound('STA9')
  .n([0,7].beat(.5)).speed(flip(othermod) ? 2 :4).vel(0.45).out()
rhythm(.25, 3, 8, 1) :: sound('STA9')
  .note([30, 33].pick()).n(32).speed(0.5).out()
rhythm(othermod, 5, 8) :: sound('dr').n([0,1,2].beat()).out()
beat(1) :: sound('kick').vel(1).out()
`,
  `// Ancient rhythms - Bubobubobubo
beat(1) :: snd('kick').out();
beat(2) :: snd('sd').room(0.9).size(0.9).out();
beat(0.25) :: snd('hh').out();
beat(2) :: snd('square')
  .cutoff(500).note(50-12).resonance(20).sustain(0.2).out()
beat(1/4)::snd(['sawtooth', 'triangle', 'square'].beat(1))
  .note([50, 53, 55, 50, 50, 52, 58, 50+12, 50+15].beat(4) + [0, 12, 24].beat(0.5)))
  .cutoff(usine(.5)*10000).resonance([10,20].beat(2))
  .fmi($(1) % 10).fmh($(2) % 5)
  .room(0.8).size(0.9)
  .delay(0.5).delaytime(0.25)
  .delayfb(0.6)
  .sustain(0.01 + usine(.25) / 10).out()
beat(4)::snd('amencutup').n($(19)).cut(1).orbit(2).pan(rand(0.0,1.0)).out()`,
  `// Crazy arpeggios - Bubobubobubo
bpm(110)
beat(0.125) && sound('sawtooth')
  .note([60, 62, 63, 67, 70].beat(.125) + 
        [-12,0,12].beat() + [0, 0, 5, 7].bar())
  .sustain(0.1).fmi(0.25).fmh(2).room(0.9)
  .gain(0.75).cutoff(500 + usine(8) * [500, 1000, 2000].bar())
  .delay(0.5).delayt(0.25).delayfb(0.25)
  .out();
beat(1) && snd('kick').out();
beat(2) && snd('snare').out();
beat(.5) && snd('hat').out();
`,
  `// Obscure Shenanigans - Bubobubobubo
beat([1/4,1/8,1/16].beat(8)):: sound('sine')
	.freq([100,50].beat(16) + 50 * ($(1)%10))
	.gain(0.5).room(0.9).size(0.9)
	.sustain(0.1).out()
beat(1) :: sound('kick').out()
beat(2) :: sound('dr').n(5).out()
flip(3) :: beat([.25,.5].beat(.5)) :: sound('dr')
  .n([8,9].pick()).gain([.8,.5,.25,.1,.0].beat(.25)).out()
`,
  `// Resonance bliss - Bubobubobubo
beat(.25)::snd('arpy')
  .note(30 + [0,3,7,10].beat())
  .cutoff(usine(.5) * 5000).resonance(10).gain(0.3)
  .end(0.8).room(0.9).size(0.9).n(0).out();
beat([.25,.125].beat(2))::snd('arpy')
  .note(30 + [0,3,7,10].beat())
  .cutoff(usine(.5) * 5000).resonance(20).gain(0.3)
  .end(0.8).room(0.9).size(0.9).n(3).out();
beat(.5) :: snd('arpy').note(
  [30, 33, 35].repeatAll(4).beat(1) - [12,0].beat(0.5)).out()
`,
];
