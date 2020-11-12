<template>
  <div id="app">
    <div class="alg-test">
        <textarea rows="25" cols="100" placeholder="Ввод текста" v-model="text" type="text"></textarea>
        <input @input="setFirstWord" type="text" placeholder="Первое слово">
        <input @input="setSecondWord" type="text" placeholder="Второе слово">
        <button @click="getDistance">Вычислить дистанцию</button>
      <p>Минимальное расстояние {{minDistance}}</p>
      <p>Максимальное расстояние {{maxDistance}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    setFirstWord(e) {
      console.log(e)
      this.firstWord = e.path[0].value.toLowerCase();
    },
    setSecondWord(e) {
      this.secondWord = e.path[0].value.toLowerCase();
    },
    getDistance() {
        let fw1 = null
        let fw2 = null
        let sw1 = null
        let sw2 = null
        const words = this.text.toLowerCase().split(' ');
        let minDifference = words.length
        for (let i in words) {
          if (this.firstWord === words[i] && fw1 == null) {
            fw1 = i
          }
          if (this.secondWord === words[i] && sw1 == null) {
            sw1 = i
          }
          if (this.firstWord === words[i]) {
            fw2 = i;
          }
          if (this.secondWord === words[i]) {
            sw2 = i;
          }
          if (fw2 && sw2 && (Math.abs(fw2 - sw2) < minDifference)) {
            minDifference = Math.abs(fw2 - sw2);
          }
        }

        if (fw2 - sw1 > sw2 - fw1 && fw1 && fw2 && sw1 && sw2) {
          this.maxDistance = fw2 - sw1
        } else {
          this.maxDistance = sw2 - fw1
        }
       if (minDifference == words.length) {
          this.minDistance = 'Совпадений нет'
          this.maxDistance = 'Совпадений нет'
        } else {
          this.minDistance = minDifference
        }
      }
    
  },
  data() {
    return {
      text: '',
      minDistance: null,
      maxDistance: null,
      firstWord: '',
      secondWord: '',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
textarea {
  margin-right: 25px;
  margin-bottom: 15px;
}
.alg-test {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;
}
input {
  width: 400px;
  margin: 15px 0;
}
</style>
