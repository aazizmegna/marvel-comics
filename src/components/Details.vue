<template>
    <div class='details__container'>
        <img :src="selectedItem.thumbnail" alt="">
        <div class="details__content">
            <h1>{{selectedItem.title}}</h1>
            <div>
                <h3>Published:</h3>
                <p>{{selectedItem.date}}</p>
            </div>
            <div>
                <h3>Creators:</h3>
                <ul>
                    <li v-for="creator in selectedItem.creators" :key="creator">
                        <a href="">{{creator}}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Price:</h3>
                <p>$ {{selectedItem.price}}</p>
            </div>
            <div>
                <h3>Description:</h3>
                <p>{{selectedItem.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'Marvel-comics',
    data() {
    return {
      selectedItem: null
    }
  },
    created() {
        this.selectedItem = this.$route.query;
        console.log(this.selectedItem)
    }
  }
</script>

<style scoped>
    .details__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        padding: 5rem 3rem;
    }

    .details__content{
        display: grid;
        gap: 1rem;
    }

    img{
        width: 100%;
        height: 100%;
    }
    h3{
        color: var(--color-red);
    }

    /* Media queries (Medium devices) */
    @media screen and (max-width: 1024px) {
        .details__container {
        grid-template-columns: 1fr;
        }
    }
    
    /* Media queries (small devices) */
    @media screen and (max-width: 600px) {
        .details__container {
        grid-template-columns: 1fr;
        }
    }
</style>