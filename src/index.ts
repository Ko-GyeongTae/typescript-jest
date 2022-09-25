import { initApp } from "./app";

const app = initApp();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port : ${process.env.PORT}`);
});
