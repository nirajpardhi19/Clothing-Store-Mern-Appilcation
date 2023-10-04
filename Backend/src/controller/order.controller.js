const orderService = require("../services/order.service.js");

const createOrder = async (req, res) => {
  const user = await req.user;
  // console.log("userr ",user,req.body)
  try {
    let createdOrder = await orderService.createOrder(user, req.body);

    console.log("order ", createdOrder);

    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({error:error.message});
  }
};

const findOrderById = async (req, res) => {
  const user = await req.user;
  // console.log("userr ",user,req.body)
  try {
    let createdOrder = await orderService.findOrderById(req.params.id);

    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({error:error.message});
  }
};

const orderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.usersOrderHistory(user._id);
    return res.status(200).send(createdOrder);
  } catch (error) {
    return res.status(500).JSON({error:error.message});
  }
};

module.exports = { createOrder, findOrderById, orderHistory };
