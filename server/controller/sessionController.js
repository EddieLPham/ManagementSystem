const Session = require("../model/Session");

//view a session
exports.getSessions = async (request, response) => {
  try {
    const session = await Session.find()
      .populate({ path: "admin", model: Users, select: "name" })
      .populate({ path: "customer", model: Users, select: "name" });
    response.json(session);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

//view one session
exports.getOneSession = async (request, response) => {
  try {
    const sessionId = request.params.sessionId;
    const session = await Session.findById(sessionId)
      .populate({ path: "admin", model: Users, select: "name" })
      .populate({ path: "customer", model: Users, select: "name" })
      .exec();
    if (session) {
      response.json(session);
    } else {
      response.json("Session not found");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

//create a new session
exports.createSession = async (request, response) => {
  try {
    const { admin, customer, ticketPrice, appointmentDate, status, isPaid } =
      request.body;
    const session = new Session({
      admin,
      customer,
      notes,
    });
    await session.save();
    response.status(201).json(session);
  } catch (error) {
    console.log(error);
    response.status(500).send("Internal Server Error");
  }
};

//update new session
exports.updateSession = async (request, response) => {
  try {
    const sessionId = request.params.sessionId;
    const updateData = {
      admin: request.body.admin,
      customer: request.body.customer,
      notes: request.body.notes,
    };
    const session = await Session.updateOne({ _id: sessionId }, updateData);
    if (!session) {
      response.status(404).send("Session not found");
    }
    response.json(session);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

//delete a session
exports.deleteSession = async (request, response) => {
  try {
    const session = await Session.findOneAndDelete(request.params.id);
    if (!session) {
      response.status(404).send("Session does not found!");
    }
    response.json("Session deleted succesfully!");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
