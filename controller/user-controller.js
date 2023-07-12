import User from "../model/UserSchema.js";

export const addUser = async (request, response) => {
  const { email } = request.body;
  // console.log(request.body);

  User.findOne({ email: email }, (err, result) => {
    console.log(result);
    console.log(err);
    if (result) {
      response.send({ message: "Email id is already register", alert: false });
    } else {
      const data = User(request.body);
      const save = data.save();
      response.send({ message: "Successfully sign up", alert: true });
    }
  });
};

export const postUser = async (request, response) => {
  console.log(request.body);
  const { email } = request.body;
  User.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      response.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      response.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
};


