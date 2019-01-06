<template>
    <div class="entire">
        <div class="title">{{ title }}</div>
        <div class="example">
            <div class="premise">{{ premise }}</div>
            <div class="answer">{{ answer }}</div>
        </div>
        <div class="inputbox-label">上の行を写経: <input class="inputbox" type="text" v-model="inputText"></div>
        <div class="judgeText">{{ judgeText }}</div>
        <div class="output">{{ output }}</div>
        <div class="description">{{ description }}</div>
        <div>
            <span class="language">{{ language }} {{ version }}</span>
            <span class="rank">{{ rank }}</span>
        </div>
        <div class="counter">クリアした回数:{{ counter }} 回</div>
    </div>
</template>

<script>

    import api from '../store/api.js';
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'typing',
        data: function() {
            return{
                inputText: '',
                counter: 0,
                title: '',
                output: '',
                description: '',
                answer: '',
                language: '',
                version: '',
                rank: '',

                localStore: null,
                typingIds: null
            }
        },
        computed: {
            ...mapGetters('stored', {
                'showCounter': 'countWithSuffix',
                'getData': 'gettypingData',
            }),
            judgeText(){
                if (this.answer == this.inputText) {
                    //this.add() // 実際にvuexが呼び出されてるのはここ
                    this.inputText = ''
                    this.counter++
                    if (this.counter >= this.typingIds.length) {
                        this.counter = 1;
                    }
                    this.getTypingsDataAPI(this.typingIds[this.counter]);
                    return '正解'
                }
            },
        },
        watch:{
            typingIds(){
                this.getTypingsDataAPI(this.typingIds[this.counter]);
            },
            localStore(){
                // ちょっとダサいやりかたなんだけど、ajaxとcomputedの関係で一回localにデータを置かないとうまく更新されんかった
                this.title = this.localStore.title
                this.premise = this.localStore.premise
                this.answer = this.localStore.answer
                this.description = this.localStore.description
                this.answer = this.localStore.answer
                this.output = this.localStore.output
                this.language = this.localStore.language
                this.version = this.localStore.version
                this.rank = this.localStore.rank
            },
        },
        methods: {
            // ここでvuexを使う準備をしている
            ...mapActions('stored', { 
                'add': 'increment',
            }),
            async getTypingsIds() {
                const result = await api.getTypingIds();
                let tmpArray = result.data.map(x => x["id"])

                // 取り込んだ配列の値をランダムに入れ替える
                for (var i = tmpArray.length - 1; i >= 0; i--){
                    var rand = Math.floor( Math.random() * ( i + 1 ) );
                    [tmpArray[i], tmpArray[rand]] = [tmpArray[rand], tmpArray[i]]
                }
                this.typingIds = tmpArray
            },
            async getTypingsDataAPI(id = 1) {
                const result = await api.getTypingsDataAPI(id);
                this.localStore = result.data
            }
        },
        created: function() {
            this.getTypingsIds();
            //this.$store.dispatch('clear')
        },
        components: {
            // コンポーネントを追加したときは上のほでimportしてここにも名前書くこと
        }
    }
</script>

<style scoped>
  div{
      margin: auto;
      margin-top: 20px;
  }
  .entire{
      width: 100%;
      text-align: center;
      margin-top: 80px;
  }
  .title {
      margin-bottom: 20px;
      font-size: 30px;
      color: #42b983;
  }
  .example {
      margin-left: 250px;
      text-align: left;
      white-space: pre;
  }
  .answer{
      margin: 0px;
      font-weight: bold;
  }
  .inputbox-label{
      margin-left: 45px;
  }
  .inputbox {
      width: 300px;
      font-size: 20px;
  }
  .output::before {
      content: "=> ";
  }
  .output {
      width: 80%;
      padding: 10px 0px 10px 250px;
      text-align: left;
      background-color: rgb(231, 231, 231);
      color: black;
      font-size: 15px;
  }
  .description {
      margin: 30px 0px 50px 130px;
      align-self: center;
      text-align: left;
      width: 480px;
      white-space: pre-wrap;
  }
  .language {
      color: navy;
      font-weight: bold;
  }
  .rank::before {
      content: " - ";
  }
  .rank {
      color: yellowgreen;
  }
</style>
