
const orderService = require("../services/order.service");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error:error.message });
  }
};

const confirmedOrder = (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = orderService.confirmedOrder(orderId);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({  error:error.message });
  }
};

const shippOrder = (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = orderService.shipOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).json({  error:error.message });
  }
};

const deliverOrder = (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = orderService.deliveredOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).json({  error:error.message });
  }
};

const cancelledOrder = (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = orderService.cancelledOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).json({  error:error.message });
  }
};

const deleteOrder = (req, res) => {
  try {
    const orderId = req.params.orderId;
    orderService.deleteOrder(orderId);
    res
      .status(200)
      .json({ message: "Order Deleted Successfully", success: true });
  } catch (error) {
    res.status(500).json({  error:error.message });
  }
};



module.exports = {
  getAllOrders,
  confirmedOrder,
  shippOrder,
  deliverOrder,
  cancelledOrder,
  deleteOrder,
};
