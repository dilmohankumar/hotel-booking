
const tours = 
//   [{
//     id: "01",
//     title: "Westminister Bridge",
//     city: "London",
//     distance: 300,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 10,
//     desc: "this is the description",
//     reviews: [],
//     avgRating: 4.5,
//     photo: tourImg01,
//     featured: true,
//   },
//   {
//     id: "02",
//     title: "Bali, Indonesia",
//     city: "Indonesia",
//     distance: 400,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 5,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg02,
//     featured: true,
//   },
//   {
//     id: "03",
//     title: "Snowy Mountains, Thailand",
//     city: "Thailand",
//     distance: 500,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg03,
//     featured: true,
//   },
//   {
//     id: "04",
//     title: "Beautiful Sunrise, Thailand",
//     city: "Thailand",
//     distance: 500,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg04,
//     featured: true,
//   },
//   {
//     id: "05",
//     title: "Nusa Pendia Bali, Indonesia",
//     city: "Indonesia",
//     distance: 500,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg05,
//     featured: false,
//   },
//   {
//     id: "06",
//     title: "Cherry Blossoms Spring",
//     city: "Japan",
//     distance: 500,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg06,
//     featured: false,
//   },
//   {
//     id: "07",
//     title: "Holmen Lofoten",
//     city: "France",
//     distance: 500,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg07,
//     featured: false,
//   },
//   {
//     id: "08",
//     title: "Snowy Mountains, Thailand",
//     city: "Thailand",
//     distance: 500,
//     address:"somewhere",
//     price: 99,
//     maxGroupSize: 8,
//     desc: "this is the description",
//     reviews: [
//       {
//         name: "jhon doe",
//         rating: 4.6,
//       },
//     ],
//     avgRating: 4.5,
//     photo: tourImg03,
//     featured: false,
//   },
// ];
[
  {
    id: "01",
    title: "Taj Mahal Palace",
    city: "Mumbai",
    distance: 20,
    address: "Apollo Bunder, Mumbai, Maharashtra 400001",
    price: 150,
    maxGroupSize: 10,
    desc: "Luxurious stay overlooking the Gateway of India",
    reviews: [],
    avgRating: 4.5,
    photo: tour-img01,
    featured: true,
  },
  {
    id: "02",
    title: "Umaid Bhawan Palace",
    city: "Jodhpur",
    distance: 10,
    address: "Circuit House Rd, Cantt Area, Jodhpur, Rajasthan 342006",
    price: 200,
    maxGroupSize: 8,
    desc: "Experience royal hospitality in the heart of Jodhpur",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tour-img02,
    featured: true
  },
  {
    id: "03",
    title: "The Oberoi Amarvilas",
    city: "Agra",
    distance: 5,
    address: "Taj East Gate Rd, Paktola, Tajganj, Agra, Uttar Pradesh 282001",
    price: 180,
    maxGroupSize: 8,
    desc: "Luxury hotel offering stunning views of the Taj Mahal",
    reviews: [],
    avgRating: 4.5,
    photo: tour-img03,
    featured: true
  },
  {
    id: "04",
    title: "Leela Palace",
    city: "NewDelhi",
    distance: 15,
    address: "Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110023",
    price: 220,
    maxGroupSize: 8,
    desc: "A blend of luxury and Indian heritage in New Delhi",
    reviews: [],
    avgRating: 4.5,
    photo:tour-img04,
    featured: true
  },
  {
    id: "05",
    title: "The Taj Mahal Hotel",
    city: "New Delhi",
    distance: 15,
    address: "Number One Mansingh Road, New Delhi, Delhi 110011",
    price: 200,
    maxGroupSize: 8,
    desc: "Iconic luxury hotel offering a memorable experience",
    reviews: [],
    avgRating: 4.5,
    photo: tour-img05,
    featured: false
  },
  {
    id: "06",
    title: "Taj Falaknuma Palace",
    city: "Hyderabad",
    distance: 10,
    address: "Engine Bowli, Falaknuma, Hyderabad, Telangana 500053",
    price: 250,
    maxGroupSize: 8,
    desc: "Experience the grandeur of Nizami hospitality",
    reviews: [],
    avgRating: 4.5,
    photo: tour-img06,
    featured: false
  },
  {
    id: "07",
    title: "Wildflower Hall, An Oberoi Resort",
    city: "Shimla",
    distance: 20,
    address: "Chharabra, Shimla, Himachal Pradesh 171012",
    price: 180,
    maxGroupSize: 8,
    desc: "Luxury resort amidst the scenic beauty of Shimla",
    reviews: [],
    avgRating: 4.5,
    photo: tour-img07,
    featured: false
  },
  {
    id: "08",
    title: "The Leela Palace",
    city: "Udaipur",
    distance: 15,
    address: "Lake Pichola, Udaipur, Rajasthan 313001",
    price: 220,
    maxGroupSize: 8,
    desc: "A luxurious retreat on the banks of Lake Pichola",
    reviews: [],
    avgRating: 4.5,
    photo: tour-img08,
    featured: false
  },
];


export default tours;


