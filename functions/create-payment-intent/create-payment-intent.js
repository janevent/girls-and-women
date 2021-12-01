// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  console.log(event.httpMethod)
  if(event.httpMethod !== 'POST'){
    return {
      statusCode: 400,
      body: JSON.stringify({message: "Needs to be a post request"})
    }
  }
  console.log(event.queryStringParameters.amount)
  try {
    //const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
