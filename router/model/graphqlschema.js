const express = require('express');
const graphQLHTTP = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, graphql } = require('graphql');
const User = require('./schema')


const UserType = new GraphQLObjectType({
    name: "users", // you can write anything else in name property but it will be better if you put schema nam
    fields: {
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phonenumber: {
            type: GraphQLInt
        },
        age: {
            type: GraphQLInt
        },
        id: {
            type: GraphQLInt

        }
    }
})

module.exports = UserType