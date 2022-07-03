export default async function getList() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/4/list/1?api_key=${process.env.REACT_APP_API_KEY3}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );

    const result = await res.json();
    console.log(result);
    if (result.status_message) {
      throw new Error(`${result.status_message}`);
    }
    return result.results;
  } catch (err) {
    throw new Error(`${err}`);
  }
}
