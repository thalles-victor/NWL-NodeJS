
import { prismaService } from "./prisma";
import { FeedbackEntity } from "../../../Controllers/Submit/SubmitServices/SubmitEntity/Feedback.Entity";
import { FeedbakCreateDTO } from "../../../Controllers/Submit/Core/DTOs/FeedbakCreate.DTO";
import { FeedbacksRepository } from "./Core/FeedbacksRepository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create(data: FeedbakCreateDTO): Promise<void> {
    try {
        const feedbackCreated = await prismaService.feedback.create({
          data: {
            type: data.type,
            comment: data.comment,
            screenshot: data.screenshot
          }
        })
      } catch(err) {
        console.log("Error while save in database", err);
      }
    } 
}