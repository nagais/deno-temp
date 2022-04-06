import { Router } from 'https://deno.land/x/oak@v6.5.0/mod.ts';
import { getHelloWorld } from '../controllers/MainController.ts'
const router = new Router();

router.get('/', getHelloWorld)

export default router