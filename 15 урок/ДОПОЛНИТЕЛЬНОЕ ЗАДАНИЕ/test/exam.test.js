const test = require('../tests/index.js');

describe('Sum', () => {
    it(`Сумма больше 10 ?`, () => {
        const { task: func } = test;
        expect(func(2, 2)).toBe(true);     
    });
});

describe('Arrays', () => {
    it(`Равно ли num 5 ?`, () => {
        const { task1: func } = test;
        expect(func()).toEqual(5);
    });
});

describe('Each', () => {
    const expected = [8, 7, 6, 5, 4];
    it(`Совпадают ли массивы ?`, () => {
        const { task2: func } = test;
        expect(func()).toEqual(expect.arrayContaining(expected));
    });

    it(`Является ли длинна массива 5 ?`, () => {
        const { task2: func } = test;
        expect(func().length).toEqual(5);
    });

    it(`Является ли Each массивом ?`, () => {
        const { task2: func } = test;
        expect(typeof(func())).toBe("array");
    });
});