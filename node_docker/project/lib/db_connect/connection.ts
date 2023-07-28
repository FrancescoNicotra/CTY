import { createConnection } from "mysql2/promise";

const connection = createConnection({
  host: "localhost",
  port: 3306,
  database: "social_network",
  user: "root",
  password: "Lycaon5%",
});

export default connection;
