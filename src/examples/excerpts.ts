export const examples = [
`
// Ancient rhythms - Bubobubobubo
mod(1)::snd('kick').out();
mod(2)::snd('sd').room(0.9).size(0.9).out();
mod(0.25)::snd('hh').out();
mod(2)::snd('square')
  .cutoff(500).note(50-12).resonance(20).sustain(0.2).out()
mod(1/4)::snd(divseq(1, 'sawtooth', 'triangle', 'pulse'))
  .note(divseq(4, 50, 53, 55, 50, 50, 52, 58, 50+12, 50+15) + divseq(0.5, 0, 12, 24))
  .cutoff(usine(.5)*10000).resonance(divseq(2, 10,20))
  .fmi($(1) % 10).fmh($(2) % 5)
  .room(0.8).size(0.9)
  .delay(0.5).delaytime(0.25)
  .delayfb(0.6)
  .sustain(0.01 + usine(.25) / 10).out()
mod(4)::snd('amencutup').n($(19)).cut(1).orbit(2).pan(rand(0.0,1.0)).out()
log(bar(), beat(), pulse())`,
`
// Crazy arpeggios - Bubobubobubo
bpm(110)
mod(0.125) && sound('sawtooth')
  .note([60, 62, 63, 67, 70].div(.125) + 
        [-12,0,12].beat() + [0, 0, 5, 7].bar())
  .sustain(0.1).fmi(0.25).fmh(2).room(0.9)
  .gain(0.75).cutoff(500 + usine(8) * [500, 1000, 2000].bar())
  .delay(0.5).delayt(0.25).delayfb(0.25)
  .out();
mod(1) && snd('kick').out();
mod(2) && snd('snare').out();
mod(.5) && snd('hat').out();
`, `
// Obscure Shenanigans - Bubobubobubo
mod([1/4,1/8,1/16].div(8)):: sound('sine')
	.freq([100,50].div(16) + 50 * ($(1)%10))
	.gain(0.5).room(0.9).size(0.9)
	.sustain(0.1).out()
mod(1) :: sound('kick').out()
mod(2) :: sound('dr').n(5).out()
div(3) :: mod([.25,.5].div(.5)) :: sound('dr')
  .n([8,9].pick()).gain([.8,.5,.25,.1,.0].div(.25)).out()
`, `
// Resonance bliss - Bubobubobubo
mod(.25)::snd('arpy')
  .note(30 + [0,3,7,10].beat())
  .cutoff(usine(.5) * 5000).resonance(10).gain(0.3)
  .end(0.8).room(0.9).size(0.9).n(0).out();
mod([.25,.125].div(2))::snd('arpy')
  .note(30 + [0,3,7,10].beat())
  .cutoff(usine(.5) * 5000).resonance(20).gain(0.3)
  .end(0.8).room(0.9).size(0.9).n(3).out();
mod(.5) :: snd('arpy').note(
  [30, 33, 35].repeatAll(4).div(1) - [12,0].div(0.5)).out()
`
]