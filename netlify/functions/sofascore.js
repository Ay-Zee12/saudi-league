exports.handler = async function () {
  const response = await fetch(
    "https://sofascore.p.rapidapi.com/tournaments/get-next-matches?tournamentId=178&seasonId=29415&pageIndex=0",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "sofascore.p.rapidapi.com"
      }
    }
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};