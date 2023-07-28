import { Request, Response } from 'express';
import BalanceService from '../services/balance.service';

export class BalanceController {

  async getBalance(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
    try {
      const balanceList = await new BalanceService().getBalance();
      return res.status(200).json(balanceList);

    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }


}