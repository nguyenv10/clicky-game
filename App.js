import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';





const characters = [
  {
    "id": 0,
    "s_id": 101,
    "image": "https://i.imgur.com/XcdkNp1.png?1"
  },

  {
    "id": 1,
    "s_id": 102,
    "image": "https://vignette.wikia.nocookie.net/the-pokemon-gallery/images/d/d7/Bulbasaur1.png/revision/latest?cb=20170302081502"
  },

  {
    "id": 2,
    "s_id": 103,
    "image": "https://upload.wikimedia.org/wikipedia/en/9/99/Meowth.png"
  },

  {
    "id": 3,
    "s_id": 104,
    "image": "https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg"
  },

  {
    "id": 4,
    "s_id": 105,
    "image": "https://i.ebayimg.com/images/g/ONEAAOxyEqNTl3L0/s-l300.jpg"
  },

  {
    "id": 5,
    "s_id": 106,
    "image": "https://static.pokemonpets.com/images/monsters-images-300-300/95-Onix.png"
  },

  {
    "id": 6,
    "s_id": 107,
    "image": "https://static.pokemonpets.com/images/monsters-images-300-300/64-Kadabra.png"
  },

  {
    "id": 7,
    "s_id": 108,
    "image": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-x-y-version/9/91/Mega_blastose.jpg"
  },

  {
    "id": 8,
    "s_id": 109,
    "image": "https://cdn.bulbagarden.net/upload/thumb/f/f2/076Golem.png/250px-076Golem.png"
  },

  {
    "id": 9,
    "s_id": 110,
    "image": "http://dl2.glitter-graphics.net/pub/1366/1366612ea8qgypfzz.png"
  },

  {
    "id": 10,
    "s_id": 111,
    "image": "https://cdn.bulbagarden.net/upload/thumb/3/3f/078Rapidash.png/250px-078Rapidash.png"
  },

  {
    "id": 11,
    "s_id": 112,
    "image": "https://cdn.bulbagarden.net/upload/thumb/8/8b/149Dragonite.png/250px-149Dragonite.png"
  },
]

emptyArr = []

arry = []

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      maxScore: 12,
      characters: [],
      myState: []


    };

  }

  selected(charactersId) {

    // // console.log(characters)
    // console.log(charactersId)
    if (arry.length === 0) {

      arry.push(charactersId);
      // console.log("called")

    }
    else {

      if (!arry == null) {
        for (i = 0; i < arry.length; i++) {
          if (charactersId === arry[i]) {
            this.setState({ score: 0 })
            arry = null;

          }
          else {

            arry.push(charactersId)
          }

        }
      }

    }



    if (this.state.score < this.state.maxScore) {
      if (this.state.myState.every((item) => item.id !== charactersId)) {
        this.state.myState.push({ id: charactersId });
        this.state.score++;
        this.setState({ score: this.state.score });

      }

      // } if (this.state.score === this.state.maxScore) {

      //   return 12
      // }
      if (this.state.score === this.state.maxScore) {
        this.setState({ score: this.state.score })
      }
      // console.log("id:" + charactersId)
    }

  }


  shuffle(arr) {
    var i,
      j,
      temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  };



  componentDidMount() {
    // console.log(...characters);
    // console.log("aftershuffle")

    // console.log(this.shuffle(characters));


  }


  render() {



    incrementScore = () => {
      if (this.state.score === 12) {
        this.setState({ score: this.state.score = 0 })
      }
      else {
        this.setState({ score: this.state.score + 1 })
      }


    }

    onPress = (id) => {
      console.log(id);
    }



    return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header} >
            <Text style={styles.text}> Clicky{"\n"}  Game! </Text >
            <Text style={styles.ttext}> Click on an image to earn points, but don't click on any more than once  !  </Text>
          </View>




          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(0);

            ch = this.shuffle(characters)
            console.log(ch)
            incrementScore()
            // console.log(characters);
            this.selected(ch[0].id)
            console.log(ch[0].id)

          }}>
            <Image style={styles.cardImage} source={{ uri: characters[0].image }} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(1);

            ch = this.shuffle(characters)
            console.log(ch)
            incrementScore()
            // console.log(characters);
            this.selected(ch[1].id)
            console.log(ch[1].id)

            // this.setState({ score: this.state.score + 1 })
          }}>
            <Image style={styles.cardImage} source={{ uri: characters[1].image }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(2);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[2].id)
            // this.setState({ score: this.state.score + 1 })
          }}>

            <Image style={styles.cardImage} source={{ uri: characters[2].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(3);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[3].id)
            // this.setState({ score: this.state.score + 1 })
          }}>

            <Image style={styles.cardImage} source={{ uri: characters[3].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(4);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[4].id)
            // this.setState({ score: this.state.score + 1 })
          }}>

            <Image style={styles.cardImage} source={{ uri: characters[4].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(5);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[5].id)
            // this.setState({ score: this.state.score + 1 })
          }}>

            <Image style={styles.cardImage} source={{ uri: characters[5].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(6);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[6].id)
            // this.setState({ score: this.state.score + 1 })
          }}>
            <Image style={styles.cardImage} source={{ uri: characters[6].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(7);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[7].id)
            // this.setState({ score: this.state.score + 1 })
          }}>
            <Image style={styles.cardImage} source={{ uri: characters[7].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(8);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[8].id)
            // this.setState({ score: this.state.score + 1 })
          }}>
            <Image style={styles.cardImage} source={{ uri: characters[8].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(9);
            console.log(characters)
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[9].id)
            console.log(characters[9])
            // this.setState({ score: this.state.score + 1 })
          }}>
            <Image style={styles.cardImage} source={{ uri: characters[9].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(10);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[10].id)
            // this.setState({ score: this.state.score + 1 })
          }} >
            <Image style={styles.cardImage} source={{ uri: characters[10].image }} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {
            onPress(11);
            ch = this.shuffle(characters)
            console.log(ch)

            incrementScore()
            this.selected(ch[11].id)
            // this.setState({ score: this.state.score + 1 })
          }}>
            <Image style={styles.cardImage} source={{ uri: characters[11].image }} />

          </TouchableOpacity>



          <View style={styles.bottomView}>
            <Text style={styles.bottomViewText}> Pokemon@trademark.com </Text>
          </View>


        </ScrollView>

        <View style={styles.topView}>
          <Text style={styles.topViewText}> score: {this.state.score}</Text>
          <Text style={styles.topViewText}> Pokemon </Text>
        </View>
      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: 'white',
  },

  header: {
    marginTop: 45,
    backgroundColor: '#003A70'
  },

  topView: {
    width: '100%',
    height: 50,
    backgroundColor: '#3D7DCA',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 0
  },

  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '800',
    alignSelf: 'center',
    textAlign: 'center'
  },

  bottomView: {
    width: '100%',
    height: 75,
    backgroundColor: '#003A70',
    alignItems: 'center',
    flexDirection: 'row',
  },

  bottomViewText: {
    color: 'white',
    fontSize: 18,
    marginTop: 50,
  },

  topViewText: {
    color: 'white',
    fontSize: 18,
  },

  ttext: {
    color: 'white',
    fontSize: 22,
    fontWeight: '100',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,

  },

  card: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: '25%',
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      widht: 3,
      height: 3
    }

  },

  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover'
  },

});

