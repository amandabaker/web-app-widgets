const express = require('express');

const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.append('Origin-Trial', 'AzrkZ9Z7OtJE9xNhNxhIjfosa1ni4uWGhgPwx5JHjo4qg0CVDc7Cv6VqwgUP3fVd/u85HtVE0ezaELKU45wi9Q4AAABXeyJvcmlnaW4iOiAiaHR0cDovL2xvY2FsaG9zdDo4MDAwIiwgImZlYXR1cmUiOiAibXNXZWJBcHBXaWRnZXRzIiwgImV4cGlyeSI6IDE2NzAwMjE3NjF9');
  console.log('app.use');
  next();
});

app.use(express.static('.'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

