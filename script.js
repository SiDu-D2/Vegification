const veganSubs = {
    'milk': 'almond milk',
    'butter': 'vegan butter',
    'cheese': 'nutritional yeast',
    'cream': 'coconut cream',
    'eggs': 'mashed banana',
    'honey': 'maple syrup',
    'gelatin': 'agar agar',
    'chicken': 'seitan'
    'beef': 'seitan'
    'fish': 'jackfruit'
};

function convertRecipe() {
    const inputText = document.getElementById('recipeInput').value;
    let outputText = inputText;

    Object.keys(veganSubs).forEach(nonVegan => {
        const regex = new RegExp(nonVegan, 'gi');
        outputText = outputText.replace(regex, veganSubs[nonVegan]);
    });

    document.getElementById('veganOutput').innerText = outputText;
}
