import authRouter from "./auth.routes";

export default function router(app) {
    app.use("/api/auth", authRouter);
}