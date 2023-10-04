
const Razorpay = require('razorpay');

apiKey="rzp_test_0NMgl2iOLPI2gf"
apiSecret="FVifbhTltZt9cWa39ROLKhBz"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;