import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseController } from './exercise.controller';

describe('ExerciseController', () => {
  let exerciseController: ExerciseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseController],
      providers: [],
    }).compile();

    exerciseController = app.get<ExerciseController>(ExerciseController);
  });

  describe('root', () => {
    it('should return all exercises', () => {
      expect(exerciseController.getAll()).toBe('Hello World!');
    });
  });
});
