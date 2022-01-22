// NOTE: just did and checked three queries as examples: get all, get by id, and get some attribute (in this case address). 
// basically rinse and repeat for all the other existing types (book, publisher, etc.) so i didn't include if that's ok!!

const Author = require('../../models/Author')

const allAuthors = async() => {
    try {
        const authors = await Author.query()
        return authors
    }
    catch(err) {
            console.log(err)
            throw new Error ('failed to get authors')
    }
}

const authorById = async ({ id }) => {
    try {
        const author = await Author.query().findOne('id', id)
        return author
    }
    catch(err) {
            console.log(err)
            throw new Error ('failed to get author - try a diff ID!')
    }
}

const authorAddress = async ({ id }) => {
    try {
        const address = await Author.query().findOne('id', id).select('address')
        return address
    }
    catch(err) {
        console.log(err)
        throw new Error ('failed to get author address')
    }
}

const resolver = {
    Query: {
        allAuthors,
        authorById,
        authorAddress
    },
}
module.exports = resolver