const books = seed(Book, {
  'The Golden Compass': {
    title: 'The Golden Compass',
    description: "In The Golden Compass, Philip Pullman has written a masterpiece that transcends genre. It is a children's book that will appeal to adults, a fantasy novel that will charm even the most hardened realist. Best of all, the author doesn't speak down to his audience, nor does he pull his punches; there is genuine terror in this book, and heartbreak, betrayal, and loss.",
    price: '719',
    inventory: 12,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/51MyEYnpSFL.jpg',
    isbn: '0440418321'
  },
  'A Wrinkle in Time': {
    title: 'A Wrinkle in Time',
    description: 'One of the best fantasy novels of all time; winner of the Newbury Award. It is the first in Engles series of books about the Murry and OKeefe families.',
    price: '1234',
    inventory: 5,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/41pG-zMla3L.jpg',
    isbn: '1250004675'
  },
  'Twilight': {
    title: 'Twilight',
    description: "Isabella Swan's move to Forks, a small, perpetually rainy town in Washington, could have been the most boring move she ever made. But once she meets the mysterious and alluring Edward Cullen, Isabella's life takes a thrilling and terrifying turn. Up until now, Edward has managed to keep his vampire identity a secret in the small community he lives in, but now nobody is safe, especially Isabella, the person Edward holds most dear.",
    price: '1499',
    inventory: 14,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/41K99%2BcInvL.jpg',
    isbn: '0316015849'
  },
  'The Giver': {
    title: 'The Giver',
    description: "The Giver is a 1993 American Young-adult fiction-Dystopian novel by Lois Lowry. It is set in a society which at first appears as a utopian society but then later revealed to be a dystopian one as the story progresses.",
    price: '357',
    inventory: 4,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/51bLnbNy15L.jpg',
    isbn: '0544336267'
  },
  'Lord of the Flies': {
    title: 'Lord of the Flies',
    description: 'At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate. This far from civilization they can do anything they want. Anything. But as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far removed from reality as the hope of being rescued.',
    price: '1377',
    inventory: 7,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/81UVwYPBtrL.jpg',
    isbn: '0399501487'
  }
})


const authors = seed(Author, {
  'JK Rowling': {
    firstName: 'JK',
    lastName: "Rowling",
    bio: 'She wrote things on a napkin'
  }
})
