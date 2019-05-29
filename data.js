exports.performers = [
    { name: 'Natalie Portman', born: '06-09-1981' },
    { name: 'Kevin Bacon', born: '07-08-1958' },
    { name: 'Tom Cruise', born: '07-03-1962' },
    { name: 'Brad Pitt', born: '12-18-1963' },
    { name: 'Emma Watson', born: '04-15-1990' },
    { name: 'Carrie Fisher', born: '10-21-1956' },
    { name: 'Mark Hamill', born: '09-25-1951' },
    { name: 'Harrison Ford', born: '07-13-1942' },
    { name: 'Jodie Foster', born: '11-19-1962' },
    { name: 'Matthew McConaughey', born: '11-04-1969' },
    { name: 'James Woods', born: '04-18-1947' },
    { name: 'Anne Hathaway', born: '11-12-1982' },
    { name: 'Bill Murray', born: '09-21-1950' },
    { name: 'Chevy Chase', born: '10-08-1943' },
    { name: 'Rami Malek', born: '05-12-1981' }
];

exports.movies = [
    {
        title: 'Contact',
        releaseYear: 1997,
        mpaaRating: 'PG',
        nowShowing: false
    },
];
exports.recipes = [
    {
        name: 'Instant Pot Rice (Beef Plov)',
        description: 'Making beef plov in an instant pot is so quick and easy and using brown rice is genius. This Instant Pot Rice recipe is a healthier, juicier and flavor packed version of beef plov.',
        ingredients: [
            { qty: '2 1/2 cups', name: 'short grain brown rice', prep: 'rinsed and drained' },
            { qty: '1 lb', name: 'beef chuck or beef stew meat', prep: 'cut into 3/4″ pieces' },
            { qty: '4 Tbsp', name: 'olive oil' },
            { qty: '4 Tbsp', name: 'butter' },
            { qty: '1', name: 'large onion', prep: 'diced' },
            { qty: '3', name: 'large carrots', prep: 'thickly julienned' },
            { qty: '3 cups', name: 'very warm water' },
            { qty: '1 Tbsp', name: 'salt' },
            { qty: '1/2 tsp', name: 'black pepper' },
            { qty: '1/2 tsp', name: 'ground cumin' },
            { qty: '1/2 tsp', name: 'ground paprika' },
            { qty: '1/2 tsp', name: 'ground coriander' },
            { qty: '1', name: 'whole head garlic', prep: 'unpeeled, cut in half crosswise' },
            { qty: '1 Tbsp', name: 'freshly chopped parsley to garnish – optional' },
        ],
        instructions: [
            `Rinse and drain rice and set aside. Set Instant pot to sauté on high heat (push sauté twice to switch to high heat) and add 4 Tbsp olive oil. Once oil is hot (but not smoking), add beef in a single layer and sauté until lightly browned (5 min), stirring occasionally.`,
            `Add 4 Tbsp butter and chopped onion and stir 3 minutes until softened.`,
            `Add julienned carrots along with all seasonings (1 Tbsp salt, 1/2 tsp pepper, 1/2 tsp cumin, 1/2 tsp paprika, 1/2 tsp coriander) and sauté 5 minutes until softened, stirring occasionally.`,
            `pread rice evenly over the top (do not stir). Push garlic halves cut-side-down, halfway into the rice. Pour very warm (or hot) water directly over the garlic cloves so you don't disturb the rice. Use the back of a wooden spoon to poke 5-7 holes through the rice to the bottom of the pot (this helps disburse flavor).`,
            `Cover and cook on high pressure 30 min (I used the "Multigrain" setting). Let instant pot rest and naturally depressurize 10 min before switching to the venting position to release steam. Make sure the steam is fully released and the pressure valve has floated down before opening the pot.`,
            `Remove garlic and set aside. Stir rice well to combine ingredients. We squeeze the garlic cloves back into the pot because they are melt-in-your mouth delicious.`
        ],
        skillLevel: 'Easy',
        timePrep: 20,
        timeWait: null,
        timeCook: 30,
        servings: 8,
        categories: [
            'dinner',
            'main',
            'side',
            'lunch',
            'beef',
            'lamb',
            'meat',
            'entree',
            'rice',
        ],
        heroImageUrl: '',
        imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2018/01/Instant-Pot-Rice-Plov-3.jpg',
        stars: null,
        addedBy: 'Mike Feldberg',
        userId: '5ce73f716464302cd903f328',
        deletedAt: null,
    }
]
