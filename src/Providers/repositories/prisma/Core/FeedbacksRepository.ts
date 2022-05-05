import { FeedbakCreateDTO } from "../../../../Controllers/Submit/Core/DTOs/FeedbakCreat.dto";

export interface FeedbacksRepository {
  create: (data: FeedbakCreateDTO) => Promise<void>;
}