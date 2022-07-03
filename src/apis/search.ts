async function getTvShow(searchValue: string) {
  try {
    const res = await fetch(`
    https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY3}&query=${searchValue}`);

    const result = await res.json();

    return result.resuts;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function getMovie(searchValue: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY3}&query=${searchValue}`,
    );

    const result = await res.json();

    return result.results;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function getPeople(searchValue: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY3}&query=${searchValue}`,
    );

    const result = await res.json();

    return result.result;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export { getTvShow, getMovie, getPeople };
