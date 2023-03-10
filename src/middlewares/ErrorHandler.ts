import { NextFunction, Request, Response } from 'express';

import HttpException from './http';

class ErrorHandler {
  public static handle(err: Error, _req: Request, res: Response, _next: NextFunction) {
    const { status, message } = err as HttpException;
    if (status) {
      return res.status(status || 500).json({ message });
    }
  }
}

export default ErrorHandler;