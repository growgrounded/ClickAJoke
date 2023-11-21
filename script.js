const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why was the math book sad? Because it had too many problems.",
    "I would tell you a chemistry joke, but I know I wouldn't get a reaction.",
    "Why don't programmers like nature? It has too many bugs.",
    "What do you call fake spaghetti? An impasta!",
    "Why couldn’t the bicycle stand up by itself? It was two-tired.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What do you call a belt made out of watches? A waist of time.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kat ads.",
    "Why don’t oysters donate to charity? Because they are shellfish.",
    "What do you call an alligator in a vest? An investigator.",
    "What did the janitor say when he jumped out of the closet? 'Supplies!'",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm terrified of elevators, so I’m going to start taking steps to avoid them.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
    "Why do bees have sticky hair? Because they use honeycombs.",
    "I'm on a seafood diet. I see food, and I eat it.",
    "What do you get from a pampered cow? Spoiled milk.",
    "I told my suitcases there will be no vacation this year. Now I’m dealing with emotional baggage.",
    "What do you call a sleeping bull? A bulldozer.",
    "How do you organize a space party? You planet.",
    "I would tell you a construction joke, but I'm still working on it.",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "I have a joke about time travel, but you didn't like it.",
    "Why was the computer cold? It left its Windows open.",
    "What do you call a dog that can do magic? A Labracadabrador.",
    "I’m reading a book on the history of glue. I just can’t seem to put it down.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "What did the fish say when it hit the wall? Dam.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why do bees hum? Because they don't know the words.",
    "Why do we tell actors to 'break a leg'? Because every play has a cast.",
    "How does a penguin build its house? Igloos it together.",
    "What has ears but cannot hear? A cornfield.",
    "Why did the coffee file a police report? It got mugged.",
    "What do you call a fish wearing a crown? A king salmon.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field!",
    "What do you call an elephant that doesn’t matter? An irrelephant.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Why was the belt arrested? For holding up a pair of pants!",
    "What’s a skeleton’s favorite musical instrument? The trom-bone.",
    "Why did the computer go to the doctor? It had a virus.",
    "What did one plate say to the other plate? Dinner is on me.",
    "Why was the broom late? It over-swept!",
    "What do you call a group of musical whales? An orca-stra.",
    "How do you catch a squirrel? Climb a tree and act like a nut.",
    "What did the zero say to the eight? Nice belt!",
    "What do you call a bear with no teeth? A gummy bear.",
    "What do you call a pile of cats? A meowtain.",
    "Why did the picture go to jail? Because it was framed.",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "What do you call a boomerang that doesn’t come back? A stick.",
    "Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    "What do you get when you cross a snowman and a dog? Frostbite.",
    "What's brown and sticky? A stick.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why don’t skeletons ever go trick or treating? Because they have no body to go with.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call fake spaghetti? An Impasta.",
    "Why don’t oysters donate to charity? Because they are shellfish.",
    "Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!",
    "What do you call an elephant that doesn’t matter? An irrelephant.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Why was the belt arrested? For holding up a pair of pants!",
    "What’s a skeleton’s favorite musical instrument? The trom-bone.",
    "Why did the computer go to the doctor? It had a virus.",
    "What did one plate say to the other plate? Dinner is on me.",
    "Why was the broom late? It over-swept!",
    "What do you call a group of musical whales? An orca-stra.",
    "How do you catch a squirrel? Climb a tree and act like a nut.",
    "What did the zero say to the eight? Nice belt!",
    "What do you call a bear with no teeth? A gummy bear.",
    "What do you call a pile of cats? A meowtain.",
    "Why did the picture go to jail? Because it was framed.",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "What do you call a boomerang that doesn’t come back? A stick.",
    "Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    "What do you get when you cross a snowman and a dog? Frostbite.",
    "What's brown and sticky? A stick.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why don’t skeletons ever go trick or treating? Because they have no body to go with.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call fake spaghetti? An Impasta.",
    "Why don’t oysters donate to charity? Because they are shellfish."

];

// Function to display a random joke
function displayJoke() {
    const jokeElement = document.getElementById('joke');
    const randomIndex = Math.floor(Math.random() * jokes.length); // Generate a random index
    jokeElement.innerText = jokes[randomIndex]; // Set the joke element's text
}

// Event listener for DOMContentLoaded for jokes
document.addEventListener('DOMContentLoaded', function () {
    displayJoke(); // Initially display a random joke

    document.getElementById('new-joke').addEventListener('click', function () {
        displayJoke(); // Display a new random joke on button click
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[name="emailSubscription"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Prepare the form data to send
        const formData = new FormData(form);
        formData.append('form-name', 'emailSubscription'); // Make sure to add this line

        fetch('/', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for subscribing!');
                    form.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(() => alert('There was a problem with the submission.'));
    });
});
