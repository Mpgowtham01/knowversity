import mongoose from "mongoose";

function validateForeignKey(child, foreignKey, collectionName, next) {
  console.log("foreignKey", foreignKey);
  console.log("collectionName", collectionName);
  mongoose.models[collectionName].find(
    { _id: { $in: child[foreignKey] } },
    (err, parents) => {
      if (err) {
        return next(err);
      }
      if (parents.length !== child[foreignKey].length) {
        return next(new Error(`Some ${collectionName} not found`));
      }
      next();
    }
  );
}

export default validateForeignKey;
