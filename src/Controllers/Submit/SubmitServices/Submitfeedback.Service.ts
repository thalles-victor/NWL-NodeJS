import { FeedbacksRepository } from "../../../Providers/repositories/prisma/Core/FeedbacksRepository";
import { NodeMailerAdapter } from "../../../Providers/SendMail/nodemailer/NodeMailerAdapter";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: NodeMailerAdapter,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type || !comment) {
      throw new Error("Type is required")
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error("Invalid screenshot format.")
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<p>Hello</p>`
      ].join('\n')
    })
  }
}