# Hi, I'm bones

I'm a happy little skeleton. You can clone me to use as a starter on your projects!
I have React, Redux, Sequelize, and Express all just rattling around in here ready
to go.

## I need node >= 6.7.0

If you don't have it, I'll complain and tell you how to install it.

## 1. Make me into something!

We recommend that you **clone**, not fork, this repo – unless your intention is
to develop Bones proper instead of using Bones as the starting point for your
own application.

Start by doing either of the following:

* Create a GitHub repo and clone it, or
* `git init` in an empty directory on your machine.

After you have a repo on your machine:

```sh
git remote add bones https://github.com/FullstackAcademy/bones.git
git fetch bones
git merge bones/master
```

And then you'll have me! If I change – which I probably will – you can get the most recent
version by doing this again:

```sh
git fetch bones
git merge bones/master
```

## 2. I need a name.

I don't have a name. I think I used to have one, but it turned to dust right along with my
heart and liver and pituitary gland and all that stuff.

Anyway, I'll need one. Give me a name in `package.json`.

## 3. Start my dusty heart

Short and sweet:

```sh
npm install
npm run dev
```

The `dev` script sets `NODE_ENV` to "development", runs the build script in watch mode, and
starts the server with `nodemon`. Build vs server logs are separated by a prefix. If you prefer
to run the server and build processes separately, you can instead do:

```sh
npm run start-dev
```

```sh
npm run build-dev
```

In two separate terminals. The vanilla `npm start` is for production — you won't use it in development!

## My anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)

## Conventions

I use `require` and `module.exports` in `.js` files.

I use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.

I use two spaces, no semi-colons, and trailing commas where possible. I'll
have a linter someday soon.

## Quick Heroku deployment

1. Set up the [Heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli) and install [Yarn](https://yarnpkg.com/en/) if you haven't already (`npm install -g yarn`)
2. `heroku login`
3. Add a git remote for heroku:
  - **If you're creating a new app...**
    1. `heroku create` or `heroku create your-app-name` if you have a name in mind.
    2. `heroku addons:create heroku-postgresql:hobby-dev` to add postgres
    3. `npm run deploy-heroku`. This will create a new branch and compile and commit your frontend JS to it, then push that branch to Heroku.
    4. `heroku run npm run seed` to seed the database

  - **If you already have a Heroku app...**
    1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

Afterwards,
  - *To deploy:* `npm run deploy-heroku`
  - *To re-seed:* `heroku run npm run seed`





  ERD Link!

  https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.xml#R7Vxbc9o6EP41nmkf8FiWr48hl7Yz7WmnPZ1z%2BqhgATo1FrVFEvrrj2RL%2BAqYxDguwEOCV5eVtKtvtas1GrxePL2L0XL%2BiQY41EwjeNLgjWaarm%2Fwv4KwzgiWCzLCLCZBRioQvpHfWBJlu9mKBDgpVWSUhowsy8QJjSI8YSUaimP6WK42pWGZ6xLNJEcjJ3yboBDXqv1DAjbPqJ7p5PT3mMzmijNw%2FKzkHk1%2BzmK6iiQ%2FzYTT9JMVL5DqS%2FJN5iigjwUSvNXgdUwpy74tnq5xKJZWLZtqx9ZqrBocz9ki5A%2BAf02L77Y0Bm0a89nFOGJFdlv7A06tRxzwlZSPNGZzOqMRCm9z6jhdHiy6MMrsOdd4%2Fa%2Bkpw8%2FxINu2vw5YShmV0K2nHb7lUb4b%2FoJRWtVdEfCcNM0aK7ICwrV%2FsOMraXuoRWjnJQP%2BCOly62rotaRruKJnLYSDB%2FKDMtqplQKsSSFhnIt32G6wHyOvEKMQ8TIQ1n5kNTh2aZeLgn%2BRQqjWTBqNA8oXClJm07IxzVelsTl%2FFoJVRsv%2BLBJpMErXmosn%2FjfdOJGRh8xsRiizCqUMfzERigkM9luwtcHx%2BXiAE9ozOdGZR0h%2BTgkEc5Z828z%2BT8d4L0iXK24MGJF5lO%2Br1bltGWVNo%2BrlGfNOMRTlhV6orA62Agt8K5RHIPnPaF9s9zIpLao5RFUMOABx4xwNL3KlOMmVZ%2BxVJWbjOeY8lrTMN2l03RTjqc0YnI%2FAlM%2B36EFCYUVeY%2FDByx6LWNGwmL6E1%2FTkGuK4A2N9CNKFLSKaoJDodJd%2BpEsmhpv3fNiavhp526WpdCVm1DaQGi72fNjblGA2qjzgjXxYQcAYJ4AAHyb0%2BWSRDPe7Joj%2FDCRYJXg%2BEPQOxZQ%2BjPhixIk%2FfNeovVCbAuubdGUW827Cya0xQTP9XW%2F%2BCkhhAWNOkI4hm4UPqCOF8AzOgAMeAKA8Q5HMXcbBokTMzE2Xvjm9q%2Fvn96mFfvdtjFdoIgfV81r0fmEjKYk%2Bz5FEUPJuvfxYK4JCd%2B92Sgwm%2Bi6foGStlBi%2B0A3vBwY7PJhw3R1xyqU2k3I0oAlRhdY4pwAlnyOAzxQ5%2BN1jhzcy2arpG%2BuAWKYClHg3icsWGvCOZ9g7pv3zp5RhsSuWsZk0ruveXH8no%2FMAFQ8P8drPNc1oK%2FbBfq6J4C%2B35Ohgu%2BUxInwfV4jAhSiV2O9REnyyIG4b754gYjQ7jeriPxa4bd980dBwF2K3s3eZxH85IUfdnnYx2NPkqtgwZv3zvbL6p47BXOx%2Be%2F4ILII8CXC8ALjY4FKyMFqZ4vMLjwBPppOL4ieCEvvh3TXlo8%2FtMJ1UcPdkdt8d6QN5NbIr98aQbvrW6O0KZ8bWhcqLCmJWFLo%2BYsg5IrkAlDWI7dyF1ip75nGi%2BpDGYHKNSsbca5nm6m3Owb5J3AMGlP6s%2B0xiBEWbo4FAXnYuDE4mcRkmQ4gb1ao0NCm6nPsro1SmC55pHu6Vyh%2FQBsSPfDFpUKjYXtGc8p3qGl8%2F%2FpxW5uLEdkfW4KlnWpDoPtOXtpwrXU0gwLBCezqNLT0geHFMD0ccbf0CrdKGeQYSNiIJTeRc5T07uX8WqGI42jvsfA0wrVtzS8I1XSRVgmx%2BIZuFQ65LTHJtzuAJPsEIOkrfiD4caBXZ693xd4%2FVyHJvnkKpUmzLN4A7dbUPEPzob0l0nIBozoY%2BUYZjIBXvrM3%2FJbhX7%2BDE5LlNcBR1QXf4eoWxbIv51LVtbQGd3qvm6%2B8eeXZF5I9d6SIFn3xZ%2FvYak32%2BtjKGXZ8Hdpb8zbsHXLb4l0f1mE2H9nHDqfaNw%2FqNluSWrfP8Laturdt6HpU07wYJ%2BQ3uk8fjTpSNMNJiO5xON5kVqtdHGVxnCKWGM04AaHj7MGJG%2BsW3Nk7cGJnmrTadDIfXU5Qy%2FNwW2PJSGrwYcGdenRF90GuBV7Fg4O6AfNS4Lrl7ul0muCXaoTStYJG1NPPt6lDnIHiRR%2FMbtRhBIxjiLjJGR%2BkqXmhBYENFqRtbr%2FKBvYqyOyUd%2BThJuTQHtvaENvaZUNq3XZnQ2zzrG2I2k0DtSG2dwwEqWedHtlI5C9knZrUuxE6qErdLG3%2FkVmO%2FTqWdQy1aEph6cywDMKkuA0mxTnMpABTOBFl1N%2BZC75F4m26aWs8gGXu76xDk1F3ds%2FKZLgDMxnHOWbWfcvz8SS6E3E3Eq7c2o%2FMY0jcbQqp78H%2FP8ulUPeYL8J%2Fw61hre0cjv9tummN%2Fybc31l3%2BO%2FW3zQ4J%2FxX%2B2RA%2BN8Y%2BN6AhVm6pPNB5fqtG%2FCoHx7Px1x0pxHdmotOJewdNe7UvXnYZC3WkxY7cRxaZwxuckRBHaStww1Hm27aG44GK1TtbIvhODS1EWyC0yqoJfMAtl6reDvrvzhXUTnZZ2rGvKFFvkAfh1yv99jXSYp8yHbKOtxO%2FdEBLPNAO5ReYVSCRfBwO9Smm9Z2KL3%2B2NNZdw6MV%2Fd0zwr5rYEh%2F6gq6m6AoO6mnhHUdybjo0SwTN3lQ%2FQsYNgQeK5nOXgE4BGUgJ%2BW6%2Bj%2F8nehytlTqYex5VWoQb8JBYDXYFBe7Qf0NsP5o7N6C29TDjGv9zXeY96sUW2GQxtBBSoumbZa%2FTf1HAXmR%2FhNPf6Y%2Fw5rhvf5b93C2%2F8B
