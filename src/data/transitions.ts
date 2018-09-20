import states from './states';

export const transitionTypes = {
  RETRY: 'retry',
  NEXT: 'next',
  JUMP: 'jump'
};

export const transitions = [
  { from: 'none', to: states.MEAN06, name: 'init' },
  // { from: 'none', to: states.MEAN02, name: 'init' },
  //{ from: 'none', to: states.MEAN03, name: 'init' },

  { from: states.MEAN01, to: states.MEAN01, name: transitionTypes.RETRY },
  { from: states.MEAN01, to: states.MEAN02, name: transitionTypes.NEXT },
  { from: states.MEAN01, to: states.MEAN03, name: transitionTypes.JUMP },

  { from: states.MEAN02, to: states.MEAN02, name: transitionTypes.RETRY },
  { from: states.MEAN02, to: states.MEAN03, name: transitionTypes.NEXT },
  //{ from: states.MEAN02, to: states.MEAN04, name: transitionTypes.JUMP },

  { from: states.MEAN03, to: states.MEAN03, name: transitionTypes.RETRY },
  { from: states.MEAN03, to: states.MEAN04, name: transitionTypes.NEXT },
  { from: states.MEAN03, to: states.MEAN06, name: transitionTypes.JUMP },

  { from: states.MEAN04, to: states.MEAN04, name: transitionTypes.RETRY },
  { from: states.MEAN04, to: states.MEAN05, name: transitionTypes.NEXT },
  { from: states.MEAN04, to: states.MEAN07, name: transitionTypes.JUMP },

  { from: states.MEAN05, to: states.MEAN05, name: transitionTypes.RETRY },
  { from: states.MEAN05, to: states.MEAN06, name: transitionTypes.NEXT },
 // { from: states.MEAN05, to: states.MEAN07, name: transitionTypes.JUMP },

  { from: states.MEAN06, to: states.MEAN06, name: transitionTypes.RETRY },
  { from: states.MEAN06, to: states.MEAN07, name: transitionTypes.NEXT },
  //{ from: states.MEAN06, to: states.MEAN07, name: transitionTypes.JUMP },

  { from: states.MEAN07, to: states.MEAN07, name: transitionTypes.RETRY },
  { from: states.MEAN07, to: states.WIN, name: transitionTypes.NEXT },
  //{ from: states.MEAN04, to: states.MEAN06, name: transitionTypes.JUMP },


];

export const rules = {
  onRightAnswer(fsm, userData) {

    console.log(userData);
    const next: Function= fsm[transitionTypes.NEXT].bind(fsm);

    if (userData.hintUsed){
    //const next: Function = fsm[transitionTypes.NEXT].bind(fsm);
    //const jump: Function = fsm[transitionTypes.JUMP].bind(fsm);
      next();
    } else {
      console.log('jump');
      const jump: Function = fsm[transitionTypes.JUMP].bind(fsm);

      jump();
    }
  },
    onWrongAnswer(fsm, userData) {
      const retry: Function = fsm[transitionTypes.RETRY].bind(fsm);
  
      retry();
    }
  };
  
  


