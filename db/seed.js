'use strict'

const db = require('APP/db')
    , {Book, Thing, Author, Favorite, User, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    things: things(),
    authors: authors(),
    books: books()
  }

  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
})

const things = seed(Thing, {
  surfing: {name: 'surfing'},
  smiting: {name: 'smiting'},
  puppies: {name: 'puppies'},
})

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

const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, things}) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id,    // users.barack is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
    },
    'god is into smiting': {
      user_id: users.god.id,
      thing_id: things.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      thing_id: things.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      thing_id: things.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, books, authors, things, favorites})
