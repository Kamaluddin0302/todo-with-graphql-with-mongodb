const express = require('express');
const graphQLHTTP = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, graphql } = require('graphql');
const User = require("./schema")
const UserType = require('./graphqlschema')


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            users: {
                type: new GraphQLList(UserType),
                resolve: async () => {
                    let user = await User.find();
                    return user
                }
            },
            user: {
                // type: new GraphQLList(UserType),
                type: UserType,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: async (parent, id) => {
                    console.log(id)
                    const users = await User.find();
                    const user = users.filter(user => user.id == id.id);
                    console.log(user)
                    return user[0];
                }
            }
        })
    })
});
module.exports = schema