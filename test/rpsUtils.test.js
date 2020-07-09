// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow, compareResult } from '../rpsUtils.js';
const test = QUnit.test;

test('compareResult should accept a playerThrow and a computerThrow and return win, lose, or draw for the correct combination of throws', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedRockPaper = 'lose';
    const expectedRocksnikt = 'win';
    const expectedRockRock = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualRockPaper = compareResult('the-rock', 'paper');
    const actualRockSnikt = compareResult('the-rock', 'snickt');
    const actualRockRock = compareResult('the-rock', 'the-rock');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualRockPaper, expectedRockPaper);
    expect.equal(actualRockSnikt, expectedRocksnikt);
    expect.equal(actualRockRock, expectedRockRock);
});

test('getRandomThrow should return a string of either "the-rock", "paper", or "snikt"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
     //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
        //Assert
        // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'the-rock' || actual === 'paper' || actual === 'snikt');
});
