import { Router } from 'express';
import { BalanceController } from '../controllers/balance.controller';

const router = Router();
const balanceController = new BalanceController();

router.get('/balance', balanceController.getBalance);

export default router;