const Items = [
  {
    Id: 1,
    Name: "Bath towels",
    Price: 25,
    Category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    dateCreated: "05/07/2022",
    prodLocation: "North York",
    school: "Seneca College",
    description:
      "Produced from sustainably sourced 100% certified Egyptian cotton, our plush terry towels are made with the planet in mind.",
    userId: 11111,
    userName: "Reza Poursafa",
    userPhone: "647 111 1111",
    userImg:
      "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    Id: 2,
    Name: "Desk Lamp",
    Price: 40,
    Category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1601642964568-1917224f4e4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    dateCreated: "05/06/2022",
    prodLocation: "North York",
    school: "Seneca College",
    description:
      "Bought 3 years ago. Works really well, I just wanted an upgrade. Can be picked up at Seneca Newnham",
    userId: 22222,
    userName: "John Conner",
    userPhone: "647 222 2222",
    userImg:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    Id: 3,
    Name: "Pencil Cup",
    Price: 3.5,
    Category: "Study Material",
    prodLocation: "Toronto",
    image:
      "https://images.unsplash.com/photo-1616706161242-f1d591350d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80",
    dateCreated: "12/02/2021",
    school: "Ryerson University",
    description:
      "We call it a pencil cup but this metal mesh container can be useful for many other things like holding make-up, hair supplies, hobby accessories and other small-sized items that need a home.",
    userId: 33333,
    userName: "Barry Allen",
    userPhone: "647 333 3333",
    userImg:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    Id: 4,
    Name: "Study Desk",
    Price: 68.5,
    Category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    dateCreated: "03/03/2022",
    prodLocation: "Montreal",
    school: "McGill University",
    description:
      "Perfect desk set up to work or study at home with:\n" +
      "Antique original steel Singer Sewing desk (refurbished white with gold accent and fully working foot pedals - great as foot rest for those long times sitting down)\n" +
      "AND\n" +
      "Ikea Markus Leather Executive Office Chair",
    userId: 44444,
    userName: "David Haller",
    userPhone: "647 444 4444",
    userImg:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    Id: 5,
    Name: "Study Chair",
    Price: 52,
    Category: "Study Material",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    dateCreated: "15/08/2022",
    prodLocation: "Montreal",
    school: "McGill University",
    description:
      "This mesh task chair provides exceptional support to the hard-working professionals in your office. The office chair transparent mesh across the back allows air to circulate. Adjustable chair raise and lower the seat using the adjustment lever, conveniently located under the seat. And this ergonomic chair padded armrests take pressure off your shoulders and neckas needed.",
    userId: 55555,
    userName: "Jean Grey",
    userPhone: "647 555 5555",
    userImg:
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    Id: 6,
    Name: "Foundation Design Project 2018",
    Price: 23,
    Category: "Books",
    image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/18e57169160275.5b76ad12750e7.jpg",
    dateCreated: "15/09/2022",
    prodLocation: "Montreal",
    school: "McGill University",
    description:
        "In Foundation Design: Theory and Practice, Professor N. S. V. Kameswara Rao covers the key aspects of the subject, including principles of testing, interpretation, analysis, soil-structure interaction modeling, construction guidelines, and applications to rational design",
    userId: 66666,
    userName: "Eobard Thawn",
    userPhone: "647 666 6666",
    userImg:
        "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export default Items;
