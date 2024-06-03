import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = 4000


// middlewares

app.use(cors(
    {
        origin: [""],
        methods: ["POST", "GET"],
        credentials: true
    }
))

// db connection
app.use(express.json())

mongoose.connect('mongodb+srv://frequel45:0123456789@cluster0.mwiak52.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
