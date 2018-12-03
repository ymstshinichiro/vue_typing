<template>
    <div>
        <div class="title">タイピングのページ</div>
        <div class="odai">{{ comment }}</div>
        <div class="odai">{{ answer }}</div>
        <p>入力文字列: <input class="inputbox" type="text" v-model="inputText"></p>
        <div class="judge">{{ judgeText }}</div>
        <div class="judge">{{ showCounter }}</div>
        <div class="judge">{{ datafromAPI }}</div>

        <!-- <component :is="isComponent"></component>
        <button v-on:click="buttonAction">{{button}}</button> -->
    </div>
</template>

<script>
    // axios を require してインスタンスを生成する
    // const axiosBase = require('axios');
    // const axios = axiosBase.create({
    //     baseURL: 'http://localhost:3000/', 
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-Requested-With': 'XMLHttpRequest'
    //     },
    //     responseType: 'json'  
    // });

    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'typing',
        data: function() {
            return{
                datafromAPI: null,
                inputText: 'tes',
                source: '#これはコメント\ndef source\n#これはコメント2\ndef source2',
                listanswer: [],
                lineCount: 0,
            }
        },
        computed: {
            comment(){
                return this.listanswer[this.lineCount]
            },
            answer(){
                // return  this.$store.getters.gettypingData

                return this.getData
            },
            judgeText(){
                if (this.answer == this.inputText) {
                    this.lineCount += 2
                    this.add() // 実際にvuexが呼び出されてるのはここ
                    this.inputText = ''
                    return '正解'
                }
            },
            ...mapGetters('stored', {
                'showCounter': 'countWithSuffix',
                'getData': 'gettypingData',
            })
        },
        methods: {
            // ここでvuexを使う準備をしている
            // ...mapActions('stored', { add: 'increment' })
            ...mapActions('stored', { 
                'add': 'increment',
                'getTypingsDataAction': 'getTypingsDataAction' })
        },
        created: function() {
            this.listanswer = this.source.split(/\r\n|\r|\n/)
            console.log(this.listanswer)
            //this.$store.dispatch('clear')

            // axios.get('/typings?id=1').then(response => {
            //     this.datafromAPI = response.data
            // }).catch(function(error) {
            //     console.log('ERROR!! occurred in Backend.')
            // });

            this.getTypingsDataAction();

        },
        components: {
            // HeadComp,
        }
    }
    // NOTE: dbにこんなかんじのjsonが入ってるイメージ
    // {
    //     id: 0,
    //     title: 'mapメソッド',
    //     answer: '[1, 2, 3, 4].map{|x| x+1 }',
    //     output: '[2, 3, 4, 5]'
    //     description: 'mapメソッドはhogehogehoge'
    // }
</script>

<style scoped>
    .title {
        font-size: 20px;
        color: #42b983;
    }

    .inputbox {
        font-size: 20px;
    }
</style>
