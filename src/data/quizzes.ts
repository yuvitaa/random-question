import states from './states';
import * as _ from 'lodash';

export interface Quiz {
  question: string;
  data: Array<any>;
  checkAnswer: Function;
  newData: Function;
}

export interface Quizzes {
  [key:string]: Quiz;
}

const quizzes:Quizzes = { 
  [states.MENU]: {
    question: 'Berapa nilai rata-rata tinggi anak di atas?',
    data: [
      [125, 'cm'],
      [135, 'cm']
    ],
    checkAnswer(userAnswer) {
      return userAnswer === _.mean(this.data.map(d => d[0]));
    },
    newData() {
      const min = 100;
      const max = 150;
      this.data = [
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm']
      ];
    }
  },
  [states.MEAN01]: {
    question: 'Berapa nilai rata-rata tinggi anak di atas?',
    data: [
      [125, 'cm'],
      [135, 'cm']
    ],
    checkAnswer(userAnswer) {
      return userAnswer === _.mean(this.data.map(d => d[0]));
    },
    newData() {
      const min = 100;
      const max = 150;
      this.data = [
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm']
      ];
    }
  },
  [states.MEAN02]: {
    question: 'Berapa nilai rata-rata tinggi anak di atas?',
    data: [
      [90, 'cm'],
      [180, 'cm'],
      [165, 'cm']
    ],
    checkAnswer(userAnswer) {
      return userAnswer === _.mean(this.data.map(d => d[0]));
    },
    newData() {
      const min = 90;
      const max = 180;
      this.data = [
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm']
      ];
    }
  },
  
  [states.MEAN03]: {
    question: 'Berapa nilai rata-rata tinggi anak di atas?',
    data: [
      [130, 'cm'], 
      [135, 'cm'],  
      [145, 'cm'], 
      [140, 'cm'], 
      [120, 'cm']
    ],
    checkAnswer(userAnswer) {
      return userAnswer === _.mean(this.data.map(d => d[0]));
    },
    newData() {
      const min = 90;
      const max = 185;
      this.data = [
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm'],
        [ min + Math.floor(Math.random() * (max - min)), 'cm']
      ];
    }
  },

  [states.MEAN04]: {
    question: 'Berapa  rata-rata  nilai Matematika siswa di atas?',
    data: [
      50, 60, 70, 80, 90, 100
    ],
    checkAnswer(userAnswer) {
      const answer = this.data
        .reduce((acc, val, _, arr) => acc + val/arr.length, 0);

      return userAnswer === answer;
    },
    newData() {
      const min = 60;
      const max = 100;
      this.data = [
        Math.floor(min + Math.random()*(max-min)),
        Math.floor(min + Math.random()*(max-min)),
        Math.floor(min + Math.random()*(max-min)),
        Math.floor(min + Math.random()*(max-min)),
        Math.floor(min + Math.random()*(max-min)),
        Math.floor(min + Math.random()*(max-min)),
      ];
    }
  },
   

  [states.MEAN05]: {
    question: 'Berapa nilai rata-rata tinggi badan siswa di atas?',
    data: [
      [120, 2],
      [140, 3],
    ],
    checkAnswer(userAnswer) {
      const expanded = _.chain(this.data)
        .map(d => Array(d[1]).fill(d[0]))
        .flatten()
        .value();

      return userAnswer === _.mean(expanded);
    },
    newData() {
      const maxQuantity = 6;
      const minValue = 80;
      const maxValue = 150;
      this.data = [
        [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
        [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
        
      ];
    }
  },
    [states.MEAN06]: {
      question: 'Berapa nilai rata-rata berat badan siswa di atas?',
      data: [
        [40, 1],
        [30, 1],
        [50, 1],
        [60, 2]
        
      ],
      checkAnswer(userAnswer) {
        const expanded = _.chain(this.data)
          .map(d => Array(d[1]).fill(d[0]))
          .flatten()
          .value();
  
        return userAnswer === _.mean(expanded);
      },
      newData() {
        const maxQuantity = 5;
        const minValue = 60;
        const maxValue = 100;
        this.data = [
          [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
          [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
          [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
        ];
      }
    },

    [states.MEAN07]: {
      question: 'Berapa nilai rata-rata tinggi badan siswa di atas?',
      data: [
        [125, 2],
        [140, 2],
        [150, 1]
      ],
      checkAnswer(userAnswer) {
        const expanded = _.chain(this.data)
          .map(d => Array(d[1]).fill(d[0]))
          .flatten()
          .value();
  
        return userAnswer === _.mean(expanded);
      },
      newData() {
        const maxQuantity = 5;
        const minValue = 125;
        const maxValue = 170;
        this.data = [
          [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
          [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
          [ Math.floor(minValue + Math.random()*(maxValue - minValue)), Math.floor(Math.random()*maxQuantity) ],
        ];
      }
    },

      [states.WIN]: {
        question: 'Berapa nilai rata-rata tinggi anak di atas?',
        data: [
          [125, 'cm'],
          [135, 'cm']
        ],
        checkAnswer(userAnswer) {
          return userAnswer === _.mean(this.data.map(d => d[0]));
        },
        newData() {
          const min = 100;
          const max = 150;
          this.data = [
            [ min + Math.floor(Math.random() * (max - min)), 'cm'],
            [ min + Math.floor(Math.random() * (max - min)), 'cm']
          ];
        }
      }
    };




export default quizzes;