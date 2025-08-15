import express from "express";

export function createNubleServer(port : number) {
  const app = express();

  // Default middleware (could add helmet, json parser, etc.)
  app.use(express.json());

  // Simple health route
  app.get("/", (req, res) => {
    res.send("Welcome to Nuble 🚀");
  });
  app.listen(port,() => { 
    //TODO: make the terminal looks elegant
    console.log(`server is running on port :${port}\n->http://localhost:${port}`)
   })
  return app;
}