<template>
  <form class="form-horizontal">
    <fieldset>
      <legend>お題を登録する</legend>

      <div :class="errorClassObject('language')" class="form-group">
        <label for="inputLanguage" class="language-label">言語</label>
        <input v-model="edit.language" type="text" class="short-box" id="inputLanguage" placeholder="Ruby">
      </div>

      <div :class="errorClassObject('version')" class="form-group">
        <label for="inputVersion" class="version-label">バージョン</label>
        <input v-model="edit.version" type="text" class="short-box" id="inputVersion" placeholder="2.5.0">
        <span>任意入力です</span>
      </div>

      <div :class="errorClassObject('rank')" class="form-group">
        <label for="inputRank" class="rank-label">ランク</label>
        <input v-model="edit.rank" type="text" class="short-box" id="inputRank" placeholder="silver">
        <span>任意入力です</span>
      </div>
      
      <br>

      <div :class="errorClassObject('title')" class="form-group">
        <label for="inputTitle" class="title-label">タイトル</label>
        <div class="title-box">
          <input v-model="edit.title" type="text" class="form-control" id="inputTitle" placeholder="shift">
        </div>
      </div>

      <div :class="errorClassObject('premise')" class="form-group">
        <label for="inputPremise" class="premise-label">予備の行</label>
        <div class="premise-box">
          <textarea v-model="edit.premise" rows="8" class="form-control" id="inputPremise" placeholder="a = [1, 2, 3]" />
        </div>
      </div>

      <div :class="errorClassObject('answer')" class="form-group">
        <label for="inputAnswer" class="answer-label">タイピングする行(末尾に表示される)</label>
        <div class="answer-box">
          <input v-model="edit.answer" type="text" class="form-control" id="inputAnswer" placeholder="a.shift">
        </div>
      </div>

      <div :class="errorClassObject('output')" class="form-group">
        <label for="inputOutput" class="output-label">出力結果</label>
        <div class="output-box">
          <input v-model="edit.output" type="text" class="form-control" id="inputOutput" placeholder="1">
        </div>
      </div>

      <div :class="errorClassObject('description')" class="form-group">
        <label for="inputDescription" class="description-label">解説</label>
        <div class="description-box">
          <textarea v-model="edit.description" rows="5" class="form-control" id="inputDescription" placeholder="shiftメソッドは、配列の最初の要素を削除し、その要素を返します。レシーバ自身を変更するメソッドです。配列が空のときはnilを返します。" />
        </div>
      </div>

      <button type="submit" class="btn submit"
        @click="doSubmit"
        :disabled="isValid == false" >Submit</button>
      
      <button @click="flushData" class="btn flush">Flush</button>

    </fieldset>
  </form>
</template>


<script>
import api from '../store/api.js';

export default {
  data() {
    return {
      edit: {
        title: '',
        output: '',
        description: '',
        answer: '',
        language: '',
        version: '',
        rank: '',
      },
      limitShorter: 200,
      limitlonger: 1000
    }
  },
  computed: {
    validation() {
      const edit = this.edit
      return {
        title  : (!!edit.title && edit.title.length <= this.limitShorter),
        output  : (!!edit.output && edit.output.length <= this.limitShorter),
        description  : (!!edit.description && edit.description.length <= this.limitlonger),
        answer  : (!!edit.answer && edit.answer.length <= this.limitShorter),
        language  : (!!edit.language && edit.language.length <= this.limitShorter),
        version  : (edit.version.length <= this.limitShorter),
        rank  : (edit.rank.length <= this.limitShorter),
      }
    },
    isValid() {
      const validation = this.validation
      return Object
        .keys(validation)
        .every(function (key) {
          return validation[key]
      })
    }
  },
  methods: {
    errorClassObject(key) {
      return {
        'has-error': (this.validation[key] == false)
      }
    },
    async postTypingRecord(params) {
        const result = await api.postTypingRecord(params);
        console.log(result.data)
    },
    doSubmit() {
      this.postTypingRecord(this.edit)
      alert("新しいお題が登録されました")
    },
    flushData() {
      for (var key in this.edit) {
        this.edit[key] = ''
      }
    }
  }
}
</script>

<style scoped>
.form-horizontal{
  margin-top: 80px;
  width: 100%;
}

div{
  margin-top: 3px;
}

label{
  font-size: 14px;
}

input{
  width: 100%;
}
textarea{
  width: 100%;
}

.short-box{
  width: 20%;

}
.language-label{
  margin-left: 42px;
}
.rank-label{
  margin-left: 28px;
}

#inputTitle{
  font-size: 20px;
  margin-bottom: 10px;
}
#inputAnswer{
  margin-bottom: 20px;
}

#inputOutput{
  margin-bottom: 20px;
}

.btn{
  display: inline;
  margin: 20px 0px 10px 0px;
  width: 80px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Thasadith', sans-serif;
  cursor: pointer;
  text-align: center;
}

.submit{
  border: 1px solid rgb(7, 33, 88);
  background: white;
  color: rgb(7, 33, 88);
}

.submit:hover{
  border: 1px solid rgb(7, 33, 88);
  background: rgb(7, 33, 88);
  color: white;
}

.flush{
  margin-left: 50px;
  border: 1px solid rgb(141, 1, 43);
  background: white;
  color: rgb(141, 1, 43);
}

.flush:hover{
  border: 1px solid rgb(141, 1, 43);
  background: rgb(141, 1, 43);
  color: white;
}

</style>
