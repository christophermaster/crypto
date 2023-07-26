import { Request, Response } from 'express';
import BalanceService from '../services/balance.service';
import querySchema from '../validator/balance.validator';

export class BalanceController {

  async getBalance(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
    try {
      const { crypto } = req.query;

      const { error, value } = querySchema.validate(req.query, { abortEarly: false });

      if (error) {
        const errorDetails = error.details.map((detail : any) => detail.message).join(', ');
        return res.status(400).json({ message: errorDetails });
      }

      const balanceList = await new BalanceService().getBalance(String(crypto));
      return res.status(200).json(balanceList);

    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }


}