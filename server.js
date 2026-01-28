import express from 'express';
import path from "node:path";

const app = express()
const port = 3000

let viewsDirectory;
const currentDirectory = import.meta.dirname;

viewsDirectory = path.join(currentDirectory, "views", "dist");
console.log(viewsDirectory);

app.use(express.json());
app.use('/views', express.static(viewsDirectory));

app.get('/', (req, res) => {
  res.sendFile(path.join(viewsDirectory, 'index.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend API listening on port ${port}`)
})
