//imort the  module
const Todo = require("../model/Todo");
// define the route handler
exports.create;
Todo = async (req, res) => {
  try {
    //extrsct tittle and description fromrequest body
    const { title, description } = req.body;
    const responce = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: responce,
      message: "Enter created succesfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
