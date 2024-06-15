function DiceRoll(){
    const numberOFdice = document.getElementById("text").value;
    const DiceValue = document.getElementById("DiceValue");
    const DiceImages = document.getElementById("DiceImages");
    const values = [];
    const images = [];

    for(let i = 0; i< numberOFdice; i++){
        const value = Math.floor(Math.random() * 6)+ 1;
        values.push(value);
        images.push(`<img src="images/${value}.svg">`);
    }

    DiceValue.textContent = `Dice: ${values.join(`, `)}`;
    DiceImages.innerHTML = images.join('');
}