import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err?.status || 500;
  const message = err?.message || "Internal server error";
  if (process.env.NODE_ENV !== "test") console.error(err);
  res.status(status).json({ err: message });
};
