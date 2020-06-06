import  { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers"

const typeDefs = `
    type Query{
        Users: [User]
        Projects: [Project]
    }

    type Mutation{
        createUser(input: UserInput): User,
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User

        createProject(input: ProjectInput): Project,
        deleteProject(_id: ID): Project
        updateProject(_id: ID, input: ProjectInput): Project
    }
  
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Project {
        _id: ID
        name: String!
        description: String!
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int!
    }

    input ProjectInput {
        name: String!
        description: String!
    }


`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})