const {gql} = require('apollo-server-express')
			
const typeDefs = gql`
    type Type{
        _id: ID
        name: String
    }

    type Ingredient{
        name: String
        amount: String
    }
    type Recipe{
        _id: ID
        name: String
        time: Int
        number: Int
        level: String
        tutorial: String
        ingredients: [Ingredient]
        types: [String]
        image: String
    }

    type Query{
        #Type
        types: [Type]
        type (id: ID!): Type

        #Recipe
        recipes: [Recipe]
    }

    type Mutation{
        #Type
        addType(_id: ID!, name: String): Type
        editType(_id: ID!, name: String): Type
        deleteType(_id: ID!): Type
    }

`
module.exports = typeDefs
