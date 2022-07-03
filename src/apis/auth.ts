async function postRequestToken(email: string) {
  const res = await fetch('https://api.themoviedb.org/4/auth/request_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      redirect_to: `${process.env.REACT_APP_CLIENT_PORT}/login`,
    }),
  });
  const result = await res.json();

  if (result.success) {
    localStorage.setItem('requestToken', result.request_token);
    window.location.href = `https://www.themoviedb.org/auth/access?request_token=${result.request_token}`;
  }

  return result.request_token;
}

async function postAccessToken(email: string) {
  try {
    const res = await fetch('https://api.themoviedb.org/4/auth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        request_token: `${localStorage.getItem('requestToken')}`,
      }),
    });
    const result = await res.json();

    if (!result.success) {
      localStorage.clear();
    }

    return result;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export { postRequestToken, postAccessToken };
