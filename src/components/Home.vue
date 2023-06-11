<template>
  <div class="container home__conntainer">
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    <article class="home__article">
      <img src="../assets/iwe.png">
      <div class="home__detail">
        <div class="home__links">
          <a href="" class="home__title">Marvel title</a>
          <a href="" class="home__creator">Marvel creator</a>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>
      </div>
      <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum voluptate ullam placeat consectetur ipsa.</p>
    </article>
    
  </div>
</template>

<script>
export default {
  name: 'Marvel-comics',
}
</script>


<style scoped>
  .home__conntainer{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 2.5rem 0;
  }
  .home__article{
    transition: transform 0.6s;
  }
  .home__article:hover {
    transform: scale(1.1);
  }
  
  .home__article:not(:hover) {
    transform: scale(1);
  }

  .home__description {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    color: var(--color-white);
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    font-size: 10px;
  }
  
  .home__article:hover .home__description {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }

  .home__article .home__links{
    display: flex;
    flex-direction: column;
  }

  .home__title{
    font-size: 12px;
  }
  .home__creator{
    font-size: 8px;
  }
  .home__detail{
    padding-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .icon{
    color: var(--color-white);
  }
  .icon:hover{
    color: var(--color-red);
  }


    /*---------------Media queries (Medium devices)------------------*/
    @media screen and (max-width: 1024px){
      .home__conntainer{
        grid-template-columns: 1fr 1fr;
      }
  }

  /*---------------Media queries (small devices)------------------*/
  @media screen and (max-width: 600px){      
  .home__conntainer{
    grid-template-columns: 1fr;
  }
  }
</style>
