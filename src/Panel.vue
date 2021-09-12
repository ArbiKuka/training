<template>
  <div class="container">
    <div class="list">
      <div class="logo"></div>
      <div class="navigation">
        <div class="home">Home</div>
        <div class="profile">Profile</div>
        <div class="inbox">Inbox</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 75px;
    height: 100%;
    background-color: #F64E60;
    color: white;
    position: fixed;
    display: flex;
  }
  .list{
    height: 370px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .logo{
    width: 100%;
    height: 100px;
  }
  .navigation{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 270px;
    justify-content: space-evenly;
  }
  .home{
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile{
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inbox{
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>