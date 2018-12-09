<template>
    <div class="entire">
        <div class="title">{{ title }}</div>
        <div class="answer">{{ answer }}</div>
        <div>入力文字列: <input class="inputbox" type="text" v-model="inputText"></div>
        <div class="judgeText">{{ judgeText }}</div>
        <div class="output">{{ output }}</div>
        <div class="description">{{ description }}</div>
        <div>
            <span class="language">{{ language }} {{ version }}</span>
            <span class="rank">{{ rank }}</span>
        </div>
        <div class="counter">{{ counter }} 回</div>

        <!-- <component :is="isComponent"></component>
        <button v-on:click="buttonAction">{{button}}</button> -->
    </div>
</template>

<script>
    import api from '../store/api.js';
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'typing',
        data: function() {
            return{
                inputText: 'tes',
                counter: 1,
                title: '',
                output: '',
                description: '',
                answer: '',
                language: '',
                version: '',
                rank: '',

                localStore: null 
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
                    this.getTypingsDataAPI(this.counter);
                    return '正解'
                }
            },
        },
        watch:{
            localStore(){
                // ちょっとダサいやりかたなんだけど、ajaxとcomputedの関係で一回localにデータを置かないとうまく更新されんかった
                this.title = this.localStore.title
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
            async getTypingsDataAPI(id = 1) {
                const result = await api.getTypingsDataAPI(id);
                this.localStore = result.data
            }        
        },
        created: function() {
            //this.$store.dispatch('clear')
            this.getTypingsDataAPI(this.counter);
        },
        components: {
            // HeadComp,
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
    }
    .title {
        font-size: 20px;
        color: #42b983;
    }
    .inputbox {
        font-size: 20px;
    }
    .output::before {
        content: "$ ";
    }
    .output {
        width: 60%;
        padding: 10px;
        background-color: lightgray;
        color: black;
        font-size: 15px;
    }
    .description {
        margin-top: 30px;
        margin-bottom: 100px;
        align-self: center;
        width: 60%;
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
