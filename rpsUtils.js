// Generate a computer throw
export function getRandomThrow() {
    const computerNumber = Math.ceil(Math.random() * 3);
    switch (computerNumber) {
        case 1 :
            return 'the-rock';
        case 2 :
            return 'paper';
        case 3 :
            return 'snikt';
    }
    
}

export function compareResult(playerThrow, computerThrow) {
    if (playerThrow === computerThrow) {
        return 'draw';
    }
    else if (playerThrow === 'the-rock') {
        if (computerThrow === 'paper') {
            return 'lose';
        }
        return 'win';
    } else if (playerThrow === 'paper') {
        if (computerThrow === 'snikt') {
            return 'lose';
        }
        return 'win';
    } else if (computerThrow === 'the-rock') {
        return 'lose';
    }
    return 'win';
}