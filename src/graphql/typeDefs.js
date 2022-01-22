const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    allBooks: [Book!]
    allAuthors: [Author!]
    allPublishers: [Publisher!]
    bookById(id: ID!): Book!
    authorById(id: ID!): Author!
    publisherById(id: ID!): Publisher!
    booksByAuthor(authorId: ID!): [Book!]
    authorAddress(id: ID!): ID!
    publisherAddress(id: ID!): ID!
  }

  type Mutation {
    addBook(input: addBookInput!): Book!
    addPublisher(input: addPublisherInput!): Publisher!
    addAuthor(input: addAuthorInput!): Author!
    addAddress(input: addAddressInput!): Address!
    deleteBook(input: ID!): Boolean
    deletePublisher(input: ID!): Boolean
    deleteAuthor(input: ID!): Boolean
    deleteAddress(input: ID!): Boolean
  }

  type Book { 
    id: ID!
    title: String!
    language: String!
    numPages: String!
    datePublished: String!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
  }

  type Author {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    age: String!
    numBooksPublished: String!
    addressId: ID!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: String!
    addressId: ID!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input addBookInput {
    title: String! 
    language: String!
    numPages: String!
    datePublished: String!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
  }

  input addAuthorInput {
    email: String!
    firstName: String!
    lastName: String!
    age: String!
    numBooksPublished: String!
    addressId: ID!
  }

  input addPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: String!
    addressId: ID!
  }

  input addAddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`