const users = [
    {
        id: 0,
        fisrt_name: "Luca",
        last_name: "Calvo",
        address: {
            city: "Siracusa",
        },
    },
    {
        id: 1,
        fisrt_name: "Rachele",
        last_name: "Fiandra",
        address: {
            city: "Roma",
        },
    },
    {
        id: 2,
        fisrt_name: "Jahvanté",
        last_name: "Tota",
        address: {
            city: "Napoli",
        },
    },
    {
        id: 3,
        fisrt_name: "Mirko",
        last_name: "Prisciano",
        address: {
            city: "Lecce",
        },
    },
    {
        id: 4,
        fisrt_name: "Alessandro",
        last_name: "D'Antoni",
        address: {
            city: "Palermo",
        },
    },
];

console.log(users[1].address.city);
users[1].address["cap"] = "00040";
console.log(users[1].address.cap);