// You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

const getVotes = () => {
  sortedAr = votes.sort()
  console.log(sortedAr)
  let counter = 0
  let obj = {}
  let highest = 0
  let winner = 'z'

  for (let i in sortedAr){
    counter = counter + 1
    if (sortedAr[i] !== sortedAr[Number(i) + 1]){
      if (counter > highest){
        highest = counter
      }
      obj[sortedAr[i]] = counter
      counter = 0
    }
  }

  console.log(obj)

  for (i in obj){
    if (obj[i] === highest && i < winner){
      winner = i
    }
  }
  console.log(winner)
}

const votes = ['veronica', 'mary', 'mary', 'james', 'mary', 'michael', 'alex', 'michael'];

getVotes(votes)
