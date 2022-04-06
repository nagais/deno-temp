import { Application, Router, RouterContext } from 'https://deno.land/x/oak@v6.5.0/mod.ts';
import router from './router/router.ts'

const port = 8080;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log('app running at :' + port)
await app.listen({ port: 8080 });