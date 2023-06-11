<template>
    <div class="header__container">
      <div class="header__overlay">
        <img src="../assets/header-img.jpg" alt="">
        <div class="header__title">
            <a href="">Marvel Comics</a>
            <div class="icons">
                <a href="">My favorites</a> 
                <div class="favorites-count">5</div>
               <font-awesome-icon icon="fa-solid fa-star" class="icon"/>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'Marvel-comics',
  }
  </script>
  
  
  <style scoped>
  .header__container {
    padding: 2rem 0;
    position: relative;
  }
  
  .header__overlay {
    position: relative;
  }
  
  .header__overlay img {
    display: block;
    width: 100%;
    height: 400px;
  }

  a{
    font-size: 40px;
  }
  .icons{
    font-size: 30px;
    padding-top: 1.5rem; 
    position: absolute;
    top: 85%;
    right: 5%;
  
  }
  .icons a{
    font-size: 30px;
  
  }
  .icon{
    color: yellow;
  
  }

  .header__title{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 1rem;
  }

  .favorites-count {
    position: absolute;
    top: 38px;
    right: 12px;
    color:var(--color-red);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  </style>
  