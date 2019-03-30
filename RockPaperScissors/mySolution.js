let rps = (rounds) => {
  let results = [];
  let possibilities = ['r', 'p', 's']

  let play = (playedSoFar, rounds) => {
    if (rounds === 0){
      results.push(playedSoFar)
      return
    }

    for (let i = 0; i < 3; i++){
      play(playedSoFar + possibilities[i], rounds - 1)
    }
  }

  play('', rounds);
  
  return results;
}

rps(2)