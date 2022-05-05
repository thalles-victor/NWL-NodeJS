import express from 'express';
import type { Request , Response } from 'express';
import status from 'http-status';
import { PrismaFeedbackRepository } from '../../../Providers/repositories/prisma/PrismaFeedbackRepository';
import { NodeMailerAdapter } from '../../../Providers/SendMail/nodemailer/NodeMailerAdapter';
import { FeedbakCreateDTO } from '../Core/DTOs/FeedbakCreate.DTO';
import { SubmitFeedbackUseCase } from '../SubmitServices/Submitfeedback.Service';

export const submitRout = express.Router().post('/feedbacks', async (req: Request, res: Response) => {
  const { type, comment, screenshot }: FeedbakCreateDTO = req.body;

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    new PrismaFeedbackRepository(),
    new NodeMailerAdapter()
  );

  const response = submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  console.log(response)
  return res.status(status.CREATED).send("response no implement");
});