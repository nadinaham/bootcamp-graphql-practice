// NOTE: just did and checked two mutations as examples - add and then delete!
// the other types are basically rinse & repeat so i only did it for this type

const Book = require('../../models/Book')

const addBook = async ( {input} ) => {
    try {
        return Book.query().insert({ 
            title: input.title,
            language: input.language,
            numPages: input.numPages,
            datePublished: input.datePublished,
            bestseller: input.bestseller,
            authorId: input.authorId,
            publisherId: input.publisherId,
        })
    }
    catch (err) {
        console.log(err)
        throw new Error('failed to add book :/')
    }
}

const deleteBook = async ( {id} ) => {
    try {
        return Book.query().delete().where('id', id)
    }
    catch (err) {
        console.log(err)
        throw new Error('failed to delete book :/')
    }
}

const resolver = {
    Mutation: { 
      addBook,
      deleteBook,
     },
  }
  
  module.exports = resolver