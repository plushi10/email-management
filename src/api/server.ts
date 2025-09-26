import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './router/userRoot.js';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');

app.use(express.json());
app.use("/user", userRouter);

// Middleware per servire i file statici dalla cartella 'dist/frontend'
app.use(express.static(path.join(projectRoot, "dist/frontend")));

// Rotta per la home page (punto di ingresso unico per l'SPA)
app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(projectRoot, "dist/frontend/main.html"));
});

app.listen(port, () => {
    console.log(`✅ Server avviato su http://localhost:${port}`);
});