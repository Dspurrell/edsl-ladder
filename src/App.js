import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()


    this.state = {
      ladder: {},
    }
  }


  drawRound = [
    [
      {
        awayteam: 'team1',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 4,
        goalsHome: 5,
        homeTeam: 'team2',
        lock: false,
        roundNumber: '1',
        season: '2017'
      },
      {
        awayteam: 'team3',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 2,
        goalsHome: 70,
        homeTeam: 'team4',
        lock: false,
        roundNumber: '1',
        season: '2017'
      },
      {
        awayteam: 'team5',
        date: '',
        divcode: 'div1',
        game: 3,
        goalsAway: 2,
        goalsHome: 20,
        homeTeam: 'team6',
        lock: false,
        roundNumber: '1',
        season: '2017'
      },
      {
        awayteam: 'team7',
        date: '',
        divcode: 'div1',
        game: 4,
        goalsAway: 90,
        goalsHome: 74,
        homeTeam: 'team8',
        lock: false,
        roundNumber: '1',
        season: '2017'
      }
      //End round 1
    ],
    [
      {
        awayteam: 'team2',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 2,
        goalsHome: 70,
        homeTeam: 'team3',
        lock: false,
        roundNumber: '2',
        season: '2017'
      },
      {
        awayteam: 'team4',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 1002,
        goalsHome: 70,
        homeTeam: 'team5',
        lock: false,
        roundNumber: '2',
        season: '2017'
      },
      {
        awayteam: 'team6',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 1000000,
        goalsHome: 70,
        homeTeam: 'team7',
        lock: false,
        roundNumber: '2',
        season: '2017'
      },
      {
        awayteam: 'team8',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 2,
        goalsHome: 70,
        homeTeam: 'team1',
        lock: false,
        roundNumber: '2',
        season: '2017'
      }
      //End Round 2
    ],
    [
      {
        awayteam: 'team1',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 2,
        goalsHome: 70,
        homeTeam: 'team3',
        lock: false,
        roundNumber: '3',
        season: ''
      },
      {
        awayteam: 'team2',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 2,
        goalsHome: 70,
        homeTeam: 'team4',
        lock: false,
        roundNumber: '3',
        season: ''
      },
      {
        awayteam: 'team5',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 100,
        goalsHome: 70,
        homeTeam: 'team7',
        lock: false,
        roundNumber: '3',
        season: ''
      },
      {
        awayteam: 'team6',
        date: '',
        divcode: 'div1',
        game: 1,
        goalsAway: 2,
        goalsHome: 70,
        homeTeam: 'team8',
        lock: false,
        roundNumber: '3',
        season: ''
      }
      //End Round 3
    ]

  ]
  teams = [
    {
      teamName: 'team1',
      div: 1
    },
    {
      teamName: 'team2',
      div: 1
    },
    {
      teamName: 'team3',
      div: 1
    },
    {
      teamName: 'team4',
      div: 1
    },
    {
      teamName: 'team5',
      div: 1
    },
    {
      teamName: 'team6',
      div: 1
    },
    {
      teamName: 'team7',
      div: 1
    },
    {
      teamName: 'team8',
      div: 1
    }


  ]









  // This function creates all the team objects and stores them in the Ladder array

  // Setup initial data -- create object to fill with teamNames

  componentWillMount() {

    this.teams.map((x, index) => {
      this.setState({
        ...this.state,
        ladder: {
          ...this.state.ladder,
          ...this.state.ladder[index] = {
            teamName: x.teamName,
            div: x.div,
            win: 0,
            loss: 0,
            points: 0,
            goals: 0,
            percent: 0,

          }

        }
      })

    })

  }

  //This function creates the actual ladder
  createLadder() {
    var newLadder = this.state.ladder;
    for (var i = 0; i < this.drawRound.length; i++) {
      // Iterate over parent array 

      for (var o = 0; o < this.drawRound[0].length; o++) {
        // enter each round array 


        // Home team wins
        if (this.drawRound[i][o].goalsHome > this.drawRound[i][o].goalsAway)//compares scores
        {
          const { homeTeam, awayteam, goalsHome, divcode } = this.drawRound[i][o];
          // homeTeam: name, awayTeam: name,
          // goalsHome: x, goalsAway: 0,
          // console.log('this.drawRound[i][o]', this.drawRound[i][o]);

          this.teams.map((x, index) => {
            // console.log('XX', x);
            if (this.state.ladder[`${index}`].teamName == homeTeam) {
              this.setState({
                ...this.state,
                ladder: {
                  ...this.state.ladder,
                  ...this.state.ladder[index] = {
                    ...this.state.ladder[index],
                    win: this.state.ladder[index].win + 1,
                    points: this.state.ladder[index].points + 4,
                    goals: this.state.ladder[index].goals + goalsHome,
                  }
                }
              })

              console.log('this.state', this.state);
            }

            if (this.state.ladder[`${index}`].teamName == awayteam) {
              console.log('ADD LOSS TO FCKING TEAM:');
              this.setState({
                ...this.state,
                ladder: {
                  ...this.state.ladder,
                  ...this.state.ladder[index] = {
                    ...this.state.ladder[index],
                    loss: this.state.ladder[index].loss + 1,
                    goals: this.state.ladder[index].goals + goalsHome,
                  }
                }
              })
            }
          })
        }
        //Away team WINS

        else if (this.drawRound[i][o].goalsHome < this.drawRound[i][o].goalsAway) {
          this.teams.map((x, index) => {
            const { homeTeam, awayteam, goalsAway, divcode } = this.drawRound[i][o];

            if (this.state.ladder[`${index}`].teamName == awayteam) {
              this.setState({
                ...this.state,
                ladder: {
                  ...this.state.ladder,
                  ...this.state.ladder[index] = {
                    ...this.state.ladder[index],
                    win: this.state.ladder[index].win + 1,
                    points: this.state.ladder[index].points + 4,
                    goals: this.state.ladder[index].goals + goalsAway,
                  }
                }
              })

              console.log('AWAY TEAM this.state', this.state);
            }

            if (this.state.ladder[`${index}`].teamName == homeTeam) {
              console.log('ADD LOSS TO FCKING TEAM:');
              this.setState({
                ...this.state,
                ladder: {
                  ...this.state.ladder,
                  ...this.state.ladder[index] = {
                    ...this.state.ladder[index],
                    loss: this.state.ladder[index].loss + 1,
                    goals: this.state.ladder[index].goals + homeTeam,
                  }
                }
              })
            }

          })
        }
        // else {
        //   newLadder[`${this.drawRound[i][o].awayteam}`].points += 2//assigns the new points and goals to the teams
        //   newLadder[`${this.drawRound[i][o].hometeam}`].points += 2
        //   newLadder[`${this.drawRound[i][o].awayteam}`].goals += this.drawRound[i][o].goalsAway
        //   newLadder[`${this.drawRound[i][o].homeTeam}`].goals += this.drawRound[i][o].goalsHome
        // }

      }
    }
    //sorting algorithm
    for (var i = 1; i <= this.state.teamNum; i++) {
      console.log('heyehye')
      var j = i;
      while (j > 0 && newLadder[j - 1] > newLadder[j]) {
        var temp = newLadder[j];
        newLadder[j] = newLadder[j - 1];
        newLadder[j - 1] = temp;
      }
    }
    //logging updated array in order
    for (var i = 0; i <= this.state.teamNum; i++) {
      console.log('hey hye', newLadder[i])
    }
    //sorts the ladder
  }


  render() {
    return (
      <div>
        <button onClick={() => { this.createLadder() }} />

      </div>
    );
  }


}

export default App;
