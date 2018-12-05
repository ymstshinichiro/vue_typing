<template>
    <div>
        <div class="title">{{ title }}</div>
        <div class="answer">{{ answer }}</div>
        <p>入力文字列: <input class="inputbox" type="text" v-model="inputText"></p>
        <div class="judge">{{ judgeText }}</div>
        <div class="odai">{{ comment }}</div>
        <div class="judge">{{ counter }} 回</div>

        <!-- <component :is="isComponent"></component>
        <button v-on:click="buttonAction">{{button}}</button> -->
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'typing',
        data: function() {
            return{
                inputText: 'tes',
                counter: 1,
                comment: '',
                answer: '',
                neta: '',

                localStore: null 
            }
        },
        computed: {
            ...mapGetters('stored', {
                'showCounter': 'countWithSuffix',
                'getData': 'gettypingData',
            }),
            datas(){
                this.localStore = this.getData
                return this.localStore
            },
            judgeText(){
                if (this.answer == this.inputText) {
                    //this.add() // 実際にvuexが呼び出されてるのはここ
                    this.inputText = ''
                    this.counter++
                    this.getTypingsDataAction(this.counter);
                    return '正解'
                }
            },
        },
        watch:{
            localStore(){
                // ちょっとダサいやりかたなんだけど、ajaxとcomputedの関係で、
                // 一回localにデータを置かないとうまくいかなかった
                this.comment = this.localStore.description
                this.answer = this.localStore.answer
                this.title = this.localStore.title
            },
        },
        methods: {
            // ここでvuexを使う準備をしている
            ...mapActions('stored', { 
                'add': 'increment',
                'setData': 'getTypingsDataAction'
            }),
            async getTypingsDataAction(id = 1) {
                const result = await this.setData(id)
            }
        },
        created: function() {
            //this.$store.dispatch('clear')
            this.getTypingsDataAction(this.counter);
        },
        components: {
            // HeadComp,
        }
    }
</script>

<style scoped>
    div{
        margin: 20px;
    }
    .title {
        font-size: 20px;
        color: #42b983;
    }

    .inputbox {
        font-size: 20px;
    }
</style>
