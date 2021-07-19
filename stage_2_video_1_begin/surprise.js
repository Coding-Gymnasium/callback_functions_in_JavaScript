const surpriseSection = document.getElementById('surprise');

//function showSurprise() {
//    surpriseSection.textContent = '🎉 Surprise! 🎉';
//}

const randomTime = Math.random() * 4000;

//setTimeout(showSurprise,  randomTime);

//// with an anonymous function

//setTimeout(() => {
//  surpriseSection.textContent = '🎉 Surprise! 🎉';
//}, randomTime);

// As a one liner
setTimeout(() => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime);
