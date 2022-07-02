async function postRequestToken() {
  try {
    const res = await fetch('https://api.themoviedb.org/4/auth/request_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        redirect_to: `${process.env.REACT_APP_CLIENT_PORT}/movie/list`,
      }),
    });
    const result = await res.json();
    if (result.success) {
      return result.request_token;
    }
    throw new Error(`${result.status_message}`);
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function postAccessToken(requestToken: string) {
  try {
    const res = await fetch('https://api.themoviedb.org/4/auth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        request_token: `${requestToken}`,
      }),
    });
    const result = await res.json();
    if (result.success) {
      return result.access_token;
    }
    throw new Error(`${result.status_message}`);
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function postSession(accessToken: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/authentication/session/convert/4?api_key=${process.env.REACT_APP_API_KEY3}`,
      {
        method: 'POST',
        body: JSON.stringify({
          access_token: `${accessToken}`,
        }),
      },
    );

    const result = await res.json();
    if (result.success) {
      return result.session_id;
    }
    throw new Error(`${result.status_message}`);
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export { postRequestToken, postAccessToken, postSession };
