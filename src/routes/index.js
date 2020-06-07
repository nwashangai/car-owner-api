import { OwnerController } from "../controllers";

const router = (app) => {
  /* GET index page. */
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Car Owners API" });
  });

  app.post("/records", OwnerController.records);
};

export default router;
