import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { login } from './login'

const app = new Hono()

const corsSetting = {
  origin: 'http://localhost:3000',
  allowHeaders: ['appliaction/json', 'Upgrade-Insecure-Requests'],
  allowMethods: ['GET', 'POST',],
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
  maxAge: 600,
  // credentials: true,
}

app.use('/proxy/*',cors(corsSetting));
app.use('/ping/*',cors(corsSetting));

// (async () => await login())();

app.get('/proxy/:path', async (c) => {
  const { path } = c.req.param()
  const response = await fetch(path, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json()
  return c.json({...data});
})

app.post('/proxy/:path', async (c) => {
  const { path } = c.req.param()
  const body = await  c.req.json()
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
  });
  const data = await response.json()
  return c.json({...data});
})

app.get('/ping', async (c) => {
  return c.json({message: 'pong'})
});

serve({  
  port: 3001,
  fetch: app.fetch, 
})