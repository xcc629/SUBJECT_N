async function postRequestToken() {
  try {
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
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function postAccessToken() {
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

    if (result.status_code !== 1) {
      localStorage.clear();
    }

    return result;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function postSessionId(accessToken: string) {
  try {
    const res = fetch(
      `https://api.themoviedb.org/3/authentication/session/convert/4?api_key=${process.env.REACT_APP_API_KEY3}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ access_token: accessToken }),
      },
    );

    const result = (await res).json();

    return result;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export { postRequestToken, postAccessToken, postSessionId };
