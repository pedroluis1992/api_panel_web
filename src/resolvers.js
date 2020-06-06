import User from "./models/User"
import Project from "./models/Projects"

export const resolvers = {
    Query: {
        /// Users
        async Users(){
            return await User.find();
        },
        /// Projects
        async Projects(){
            return await Project.find();
        }
    }, 
    Mutation: {
        //Users
        async createUser(_, { input }){
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_,{ _id, input }){
            return await User.findByIdAndUpdate(_id, input, {new: true })
        },

        /// Projects
        async createProject(_, { input }){
            const newProject = new Project(input)
            await newProject.save();
            return newProject;
        },
        async deleteProject(_, { _id }){
            return await Project.findByIdAndDelete(_id);
        },
        async updateProject(_,{ _id, input }){
            return await Project.findByIdAndUpdate(_id, input, {new: true })
        }
    }
}