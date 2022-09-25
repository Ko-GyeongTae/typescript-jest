import express, { Request, Response } from "express";
import useragent from "express-useragent";

export const initApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(useragent.express());
  // app.use(pino())

  app.get("/test", (req: Request, res: Response) => {
    res.json({ message: "ok" });
  });

  app.post("/post", (req: Request, res: Response) => {
    const { message } = req.body;

    res.json({ message });
  });

  return app;
};
