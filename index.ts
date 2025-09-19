import express from "express";
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path";
import session from "express-session";

const app = express();
const PORT = 3000;

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.use(
  session({
    secret: "yourSecretKey",   
    resave: false,              
    saveUninitialized: false,   
    cookie: {
      maxAge: 1000 * 60 * 60,  
      httpOnly: true,          
    },
  })
);


app.use("/", router);

app.listen(PORT, () => {
  console.log(`You can now see the server on the port ${PORT}`);
});
