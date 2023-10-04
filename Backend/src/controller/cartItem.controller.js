const cartItemService=require("../services/cartItem.service.js")
async function updateCartItem(req, res) {
    
    const user = await req.user;
    
    try {
        const updatedCartItem=await cartItemService.updateCartItem(user._id,req.params.id,req.body);

      return res.status(200).send(updatedCartItem);
    } catch (err) {
        console.log("error",err.message)
      return res.status(500).send({ error: err.message });
    }
}

async function removeCartItem(req, res) {
    
    const user = await req.user;
    
    console.log(user._id,"userId");

    try {
        await cartItemService.removeCartItem(user._id,req.params.id)

      return res.status(200).send({message:" cart item removed successfully"});
    } catch (err) {
        console.log("error",err.message)
      return res.status(500).send({ error: err.message });
    }
}

module.exports={updateCartItem,removeCartItem};