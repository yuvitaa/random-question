import quizzes from './quizzes';
import states from './states';

describe('quizzes', () => {
  it('contains several type of quiz', () => {
    expect(Object.keys(quizzes).length).toBeGreaterThan(0);
  });

  it('has quiz for each state', () => {
    Object.keys(states).forEach(key => {
      expect(quizzes[states[key]]).toBeDefined();
    });
  });


  fit('has correct answer key', () => {
    Object.keys(states).forEach(key => {
      let data, quiz;
      switch(states[key]) {
        case states.MENU:
          data = [
            [125, 'cm'], 
            [135, 'cm']
          ];
          quiz = quizzes[states.MENU];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(130)).toBeTruthy();
        break;        

        case states.MEAN01:
          data = [
            [125, 'cm'], 
            [135, 'cm']
          ];
          quiz = quizzes[states.MEAN01];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(130)).toBeTruthy();
        break;

        case states.MEAN02:
          data = [
            [90, 'cm'],
            [180, 'cm'],
            [165, 'cm']
          ];
          quiz = quizzes[states.MEAN02];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(145)).toBeTruthy();
        break;

        case states.MEAN03:
          data = [
            [130, 'cm'], 
            [135, 'cm'],  
            [145, 'cm'], 
            [140, 'cm'], 
            [120, 'cm']
          ];
          quiz = quizzes[states.MEAN03];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(134)).toBeTruthy();
        break;

        case states.MEAN04:
         data = [
          50, 60, 70, 80, 90, 100
          ];
          quiz = quizzes[states.MEAN04];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(75)).toBeTruthy();
        break;

        case states.MEAN05:
          data = [
            [120, 2],
            [140, 3],
          ];
          quiz = quizzes[states.MEAN05];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(132)).toBeTruthy();
          break;

        case states.MEAN06:
          data = [
            [40, 1],
            [30, 1],
            [50, 1],
            [60, 2]
          ];
          quiz = quizzes[states.MEAN06];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(48)).toBeTruthy();
          break;
        
        case states.MEAN07:
          data = [
            [125, 2],
            [140, 2],
            [150, 1]
          ];
          quiz = quizzes[states.MEAN07];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(136)).toBeTruthy();
          break;

        case states.WIN:
          data = [
            [125, 'cm'], 
            [135, 'cm']
          ];
          quiz = quizzes[states.WIN];
          quiz.data = data;
          expect(quiz.data).toEqual(data);
          expect(quiz.checkAnswer(130)).toBeTruthy();
        break; 
      }
    });
  });
});