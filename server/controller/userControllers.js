const User = require("../model/Users");

//view all users
exports.getUsers = async (request, response) => {
  try {
    const user = await User.find();
    response.json(user);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

//view a single user
exports.getOneUser = async (request, response) => {
  try {
    const userId = request.params.userId;

    const user = await User.findOne({ _id: userId });

    if (user) {
      response.json(user);
    } else {
      response.json("User not found");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

//create new user
exports.createUser = async (request, response) => {
  try {
    const newUser = new User({
      email: request.body.email,
      password: request.body.password,
      name: request.body.name,
      phone: request.body.phone,
      role: request.body.role,
      schedules: request.body.schedulesId,
    });
    await newUser.save();
    response.json("New User Added");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
//update a user
exports.updateUser = async (request, response) => {
  try {
    const userId = request.params.userId; // Assuming you have the userId in the request parameters
    const updateData = {
      email: request.body.email,
      password: request.body.password,
      name: request.body.name,
      phone: request.body.phone,
      role: request.body.role,
      schedules: request.body.schedulesId,
    };
    const result = await User.updateOne({ _id: userId }, updateData);

    if (result.modifiedCount > 0) {
      response.json("User Updated");
    } else {
      response.json("No modifications made");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

//delete a user
exports.deleteUser = async (request, response) => {
  try {
    const userId = request.params.userId;

    const result = await User.deleteOne({ _id: userId });

    if (result.deletedCount > 0) {
      response.json("User Deleted");
    } else {
      response.json("User not found or no deletions made");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
