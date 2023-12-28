import express from 'express';
import savingsController from '../controller/savingsController.js';

const savingsRouter = express.Router();

savingsRouter.get("/info", savingsController.getSavingsTotal);
savingsRouter.get("/", savingsController.getSavers);
savingsRouter.get("/:id", savingsController.getSaver);
savingsRouter.post("/", savingsController.createSaver);
savingsRouter.delete("/:id", savingsController.deleteSaver);

export default savingsRouter;