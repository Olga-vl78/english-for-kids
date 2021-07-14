import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import {cardsRouter} from './cards/cards-router';
import {usersRouter} from "./users/users-router";
import {categoriesRouter} from "./categories/categories-router";


const app = express();
const port = process.env.PORT || 3000;;


app.use(bodyParser.json());

app.use( (req, res, next) => {
    console.log(req.url);
    const filename = path.basename(req.url);
    console.log(filename);
    next();
});

// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '..', 'dist', 'english-for-kids')));

app.use("/api/", categoriesRouter);
app.use("/api/", cardsRouter);
app.use("/api/", usersRouter);

app.listen(port, () => {
  console.log(`... Server started on http://localhost:${port}`)
})
