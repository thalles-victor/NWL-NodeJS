import { SubmitFeedbackUseCase } from "./Submitfeedback.Service"
const createFeedbackSpy = jest.fn();
const sendMail = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMail }
)

describe('Subimit feedback', ()=> {
  it('should be able to submit a feedback', async () => {    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: "example comment",
      screenshot: "data:image/png;base64/fasdfasdftest.jpg"
    })).resolves.not.toThrow();
  });

  it("Should not be ablr o submit feedback without type", async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64/fasdfasdftest.jpg'
    })).rejects.toThrow();
  })  
  
  it("Should not be ablr o submit feedback without comment", async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64/fasdfasdftest.jpg'
    })).rejects.toThrow();
  });

  it("Should not be ablr o submit feedback with an scheen shoot invalid", async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'ta tudo bugado',
      screenshot: '123'
    })).rejects.toThrow();
  });
})