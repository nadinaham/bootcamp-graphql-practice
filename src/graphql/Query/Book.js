// NOTE: just did and checked three queries as examples: get all, get by id, and get some attribute (in this case address).
// basically rinse and repeat for all the other existing types (book, publisher, etc.) so i didn't include if that's ok!!

const Book = require('../../models/Book')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch (err) {
    console.log(err)
    throw new Error('failed to get books')
  }
}

const bookById = async ({ id }) => {
  try {
    const book = await Book.query().findOne('id', id)
    return book
  } catch (err) {
    console.log(err)
    throw new Error('failed to get book - try a diff ID!')
  }
}

const resolver = {
  Query: {
    allBooks,
    bookById,
  },
}
module.exports = resolver
