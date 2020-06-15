/*
 * @Description: 汇总模块子路由
 */
const Router = require('koa-router');


let Routers = new Router();

const userRouter = require('./router/userRouter');
const resourcesRouter = require('./router/resourcesRouter');
const productRouter = require('./router/productRouter');
const shoppingCartRouter = require('./router/shoppingCartRouter');
const orderRouter = require('./router/orderRouter');
const collectRouter = require('./router/collectRouter');
const adminRouter  = require('./router/adminRouter');
const uploadRouter = require('./router/uploadRouter');

Routers.use(userRouter.routes());
Routers.use(resourcesRouter.routes());
Routers.use(productRouter.routes());
Routers.use(shoppingCartRouter.routes());
Routers.use(orderRouter.routes());
Routers.use(collectRouter.routes());
Routers.use(adminRouter.routes());
Routers.use(uploadRouter.routes());

module.exports = Routers;
