// login
export async function login() {
  const url = '';
  const credentials = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Login failed with status ${response.status}`);
    }

    console.log('Login successful');
    return response;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}