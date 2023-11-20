import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
    res.send("This is a book recipe app")
})

const PORT = 3001

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  }); 