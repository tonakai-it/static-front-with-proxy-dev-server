export async function optFetch(url: string, init?: RequestInit) {
  if (process.env.NODE_ENV === "development") {
    // const targetUrl = `https://jsonplaceholder.typicode.com/${url}`;
    const targetUrl = `http://localhost:3001/${url}`;
    return fetch(targetUrl, {...init})
  }
  return fetch(url, {...init})
}