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


/* let i = 0;
while (i < 3) {
   chara.forEach((el) => console.log(el.about[i]));
   i++;
};
 */
chara.forEach((el) => {
    console.log(`${el.firstName} ${el.lastName}`);
    console.log(el.age);
    console.log(el.status);
    console.log(el.siblings);
    el.about.forEach((trait) => console.log(trait))
    console.log("\n")
}
)

const age = chara.filter((el) => el.age === 16)
console.log(age)
