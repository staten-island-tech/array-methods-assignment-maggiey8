const chara = [
    {
    firstName: "Mari",
    lastName: "Suzuki",
    age: 15,
    status: "Deceased",
    siblings: ["Sunny"],
    about: ["Kind", "Gentle", "Older Sister"]

    },
    {
    firstName: "Sunny",
    lastName: "Suzuki",
    age: 16,
    status: "Alive",
    siblings: ["Mari"],
    about: ["Omori", "Good Listener", "Younger Brother"]
    },
    {
    firstName: "Kelsey",
    lastName: "Desoto",
    age: 16,
    status: "Alive",
    siblings: ["Henry"],
    about: ["Kel", "Competitive", "Loyal"]
    },
    {
    firstName: "Henry",
    lastName: "Desoto",
    age: 19,
    status: "Alive",
    siblings: ["Kelsey"],
    about: ["Hero", "Charismatic", "Friendly"]
    },
    {
    firstName: "Basil",
    lastName: "Fey",
    age: 16,
    status: "?",
    siblings: null,
    about: ["Sentimental", "Thoughtful", "Traumatized"]
    },
    {
    firstName: "Aubergine",
    lastName: "Williams",
    age: 16,
    status: "Alive",
    siblings: null,
    about: ["Aubrey", "Strong", "Moral Sense"]
    },  
];


chara.forEach((el) => console.log(`${el.firstName} ${el.lastName}`));
chara.forEach((el) => console.log(el.age));
chara.forEach((el) => console.log(el.status));
chara.forEach((el) => console.log(el.siblings));

let traits = chara.forEach((el) => el.about)
traits.forEach((el => console.log(el)))

const notalive = chara.filter((el) => el.status !== "Alive")
console.log(notalive)