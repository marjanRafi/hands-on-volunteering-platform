const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const helpRequestRoutes = require("./routes/helpRequests");
const teamRoutes = require("./routes/teams");

dotenv.config();
const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  console.log("✅ Database synced!");
  app.listen(5000, () => console.log("🚀 Server running on port 5000"));
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/helpRequests", helpRequestRoutes);
app.use("/api/teams", teamRoutes);
