import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

var app = express();

//to link routes
import indexRouter from './routes/index.router.js';
import adminRouter from './routes/admin.router.js';

//configuration to extract request body content
app.use(bodyParser());

//configuration to load static content : js , css , png....
const staticPath=path.join(__dirname,"public");
app.use(express.static(staticPath));

//configuration for template pages
app.set("view engine","ejs");
app.set("views","./views");

//middleware configuration to load route
app.use("/admin",adminRouter);
app.use("/",indexRouter);

app.listen(3000);
console.log("Server invoked at link http://localhost:3000");