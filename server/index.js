import express from "express"
import router from "./routes/routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
const port=process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  
  optionsSuccessStatus: 204,
};

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));  
app.use(cors(corsOptions)); 
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
 console.log(`Server listening on http://localhost:${port}`);

});

