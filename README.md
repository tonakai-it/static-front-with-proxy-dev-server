## Installing
### front
```bash
npx create-next-app@latest --use-pnpm
```

### proxy-dev-server
```
pnpm add -D hono @hono/node-server tsx
```
## ADR
- フロント…静的ファイルをビルドできるならVite(React)でも可
- バックエンド…proxy-serverを書く

```mermaid
sequenceDiagram
  DEV->>DEV_PROXY_SERVER: fetch request 
  DEV_PROXY_SERVER->>PROD_BACKEND: auth & proxy request
  
  PROD_BACKEND-->>DEV_PROXY_SERVER: response
  DEV_PROXY_SERVER-->>DEV: proxy response
  DEV-->>DEV: Static File Build
```

## .env.local

```env
USERNAME=
PASSWORD=
```