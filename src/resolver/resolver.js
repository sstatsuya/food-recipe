const Type = require("../model/Type");
const Recipe = require("../model/Recipe");

const resolvers = {
  Query: {
    // Type
    types: async (parent, args) => {
      return await Type.find();
    },
    type: async (parent, args) => {
      return await Type.findById(args.id);
    },

    // Recipe
    recipes: async (parent, args) => {
      return await Recipe.find();
    },
  },

  Type: {
    recipes: async (parent, args) => {
      const recipeList = await Recipe.find();
      return recipeList.filter((item) => {
        let flag = false;
        item.types.forEach((type) => {
          if (type == parent._id) {
            flag = true;
            return true;
          }
        });
        return flag == true;
      });
    },
  },

  Recipe: {
    typeList: async (parent, args) =>{
      return parent.types.map(async item => {
        return await Type.findById(item)
      })
    }
  },

  Mutation: {
    addType: async (parent, args) => {
      const newType = new Type(args);
      return await newType.save();
    },
    editType: async (parent, args) => {
      const data = {
        name: args.name,
      };
      return await Type.findByIdAndUpdate(args._id, data, { new: true });
    },
    deleteType: async (parent, args) => {
      return await Type.findByIdAndDelete(args._id);
    },
  },
};

module.exports = resolvers;
