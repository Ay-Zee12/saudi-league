exports.handler = async function (event, context) {
  try {
    const response = await fetch(
      "https://sofascore.p.rapidapi.com/tournaments/get-next-matches?tournamentId=178&seasonId=29415&pageIndex=0",
      {
        method: "GET",
        headers: {
  "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  "x-rapidapi-host": "sofascore.p.rapidapi.com"
}
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};