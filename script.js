// Hide cards when website is first loaded
document.querySelector('#output').style.visibility = 'hidden';

// Grab lbs input, add event that listens for 'input' and run a function
document.querySelector('#lbsInput').addEventListener('input', function(e){
    // Cards appear when there is an input
    document.querySelector('#output').style.visibility = 'visible';
    // gets the number input
    let lbs = e.target.value;
    // Target the outputs (g, kg, oz) and output the equivalent
    document.querySelector('#gramsOutput').innerHTML = lbs / 0.0022046; // set the inner content of #gramsOutput to convert lbs into g
    document.querySelector('#kgOutput').innerHTML = lbs / 2.2046; 
    document.querySelector('#ozOutput').innerHTML = lbs * 16; 
});