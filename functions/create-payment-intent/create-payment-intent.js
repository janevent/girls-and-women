// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Stripe = require('stripe')
//why error
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (event) => {
  console.log('reached create-payment-intent function')
  if(event.httpMethod !== 'POST'){
    return {
      statusCode: 400,
      body: JSON.stringify({message: "Needs to be a post request"})
    }
  }
  
  try {
    //const subject = event.queryStringParameters.name || 'World'
    const { amount, receipt_email } = JSON.parse(event.body)
    const message = "You are about to pay ${amount}."
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      receipt_email,
      currency: "cad",
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ amount, paymentIntent, message }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    //not to string?
    return { status: 500, body: error.toString() }
  }
}

module.exports = { handler }
