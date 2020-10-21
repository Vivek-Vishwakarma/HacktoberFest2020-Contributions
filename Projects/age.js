function ageIndays(){
    let by = prompt("Enter your Birth Year");
    let days = (2020-by)*365;
    let h2= document.createElement('h2');
    let answer = document.createTextNode("You are " + days + " days old");
    h2.setAttribute('id', 'days');
    h2.appendChild(answer);
    document.getElementById('ResultBox').appendChild(h2);
    console.log(days);
}
function reset(){
    document.getElementById('days').remove();
}

