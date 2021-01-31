// Madlibs is a simple game where you create a story template with "blanks" for
// words. You, or another player, then construct a list of words and place them
// into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb,
//and an adjective, and injects them into a story that you create.

let noun = prompt(`Enter a noun:`);
let verb = prompt(`Enter a verb:`);
let adj = prompt(`Enter an adjective:`);
let adverb = prompt(`Enter an adverb:`);

console.log(`You have a nice ${adj} ${noun}. It ${verb}s ${adverb}. The frog likes your
${noun} ${adverb}.`);