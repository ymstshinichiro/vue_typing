<template>
  <div class=header>
    <div class=headtext>
      <span class=title>you're CODE tyipng machine.</span>
      <div class=links>
        <button class=main @click="toMain" >Typing</button>
        <button class=post @click="toPost" >Post</button>
        <button class=about>About</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toMain() {
      this.$router.push({ name: 'TypeMain' })
    },
    toPost() {
      this.$router.push({ name: 'TypePost' })
    }
  }
}

</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(37, 55, 90, 0.8);
    width: 100%;
    height: 60px;
  }
  .headtext {
    margin: 15px 20px;
  }
  .title {
    font-family: 'Thasadith', sans-serif;
    font-size: 20px;
    color: white;
    margin-right: 50px;    
  }
  .links {
    float: right;
  }

  button{
    margin: 5px 9px;
    width: 80px;
    background: white;
    border: 1px solid white;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Thasadith', sans-serif;
    color: rgb(7, 33, 88);
    cursor: pointer;
    text-align: center;
  }
  button:hover{
    border: 1px solid rgb(7, 33, 88);
    background: rgb(7, 33, 88);
    color: white;
  }
</style>
