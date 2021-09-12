<template>
  <div class="container">
      <div class="cover-image"></div>
      <div class="profile-pic"></div>
      <div class="details">
          <p class="signed-in">Signed in as</p>
          <h6 class="username">23 Holy Moly Road</h6>
      </div>
      <div class="bottom">
          <div class="button" @click="liked"> Give Flower</div>
      </div>
  </div>
  <div class="glow" id="glow"></div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods : {
      liked: function(){
        document.getElementById('glow').style.transition= "all 0.5s";
        document.getElementById('glow').style.width= 288 + "px";
        document.getElementById('glow').style.height= 310 + "px";
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 278px;
    height: 300px;
    background-color: #ffffff;
    color: white;
    position: fixed;
    border-radius: 10px;
    top: 120px;
    left: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .glow{
    width: 0;
    height: 0;
    background: linear-gradient(45deg, #64ec89, #60c07f, #52fc7f, #20c07f);
    position: fixed;
    border-radius: 10px;
    top: 115px;
    left: 235px;
    z-index: -1;
  }
  .cover-image{
      overflow: hidden;
      width: 100%;
      height: 70px;
      background-image: url(https://media.comicbook.com/2021/03/attack-on-titan-1258846-1280x0.jpeg);
      background-size: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
  }
  .profile-pic{
      border-radius: 50%;
      background-image: url(https://i1.sndcdn.com/avatars-l3f4huVHb5sRi2Fg-QAfNDg-t500x500.jpg);
      background-size: contain;
      width:75px;
      height:75px;
      border: 4px solid white;
      margin-top: -33px;
  }
  .details{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .signed-in{
      color:rgb(214, 211, 211);
      margin: 0;
      margin-top: 14px;
  }
  .username{
      margin: 0;
      margin-top: 5px;
      font-size: 16px;
      color:rgb(49, 49, 49);
  }
  .bottom{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      flex: 1 1 auto;
      border-top: 2px solid rgb(233, 233, 233);
  }
  .button{
      width:120px;
      background-color: rgb(233, 233, 233);
      height:45px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(143, 143, 143);
      font-weight: 600;
      user-select: none;
      cursor: pointer;
  }
</style>