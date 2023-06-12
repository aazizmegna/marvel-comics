<template>
  <Header/>
  <div class="home__container">
    <article v-for="item in myData" :key="item.id" class="home__article">
      <img :src="item.thumbnail" @click="navigateToDetails(item)"/>
      <h5 class="home__title">{{ item.title }}</h5>
      <div class="modal" @click="navigateToDetails(item)">
        <h5>{{ item.title }}</h5>
        <p class="modal__description">{{ item.description }}</p>
        <ul class="modal__creators">
          <li><h2>Creators:</h2></li>
          <li v-for="creator in item.creator" :key="creator"><a href="/details">{{ creator }}</a></li>
        </ul>
        <font-awesome-icon
          icon="fa-solid fa-heart"
          :class="[heartIconClass(item.id), { clicked: isHeartClicked[item.id] }]"
          @click="handleHeartClick($event, item.id)"
        />
      </div>
    </article>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: 'Marvel-comics',
  data() {
    return {
      myData: [],
      isHeartClicked: {},
    };
  },
  components: {
    Header,
  },
  methods: {
    navigateToDetails(item) {
      this.$router.push({
        path: '/details',
        query: {
          id: item.id,
          description: item.description,
          creators: item.creator,
          title: item.title,
          price: item.price,
          date: item.date,
          thumbnail: item.thumbnail,
        },
      });
    },
    handleHeartClick(event, itemId) {
      event.stopPropagation(); // Prevent the click event from propagating
      this.isHeartClicked[itemId] = !this.isHeartClicked[itemId];
      const item = this.myData.find(item => item.id === itemId);
      if (item) {
        item.isHeartClicked = this.isHeartClicked[itemId];
      }

      this.$store.commit('setFavorites', this.clickedIconCount);
      localStorage.setItem('favorites', this.clickedIconCount);
    },


    fetchMyData() {
      this.myData = this.data.data.results.map((item) => {
        let modifiedDate = item.modified;
        if (modifiedDate.charAt(0) === '-') {
          modifiedDate = modifiedDate.slice(1); // Remove the first "-" sign
        }

        const date = new Date(modifiedDate);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(date);

        return {
          id: item.id,
          title: item.title,
          description: item.description,
          thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension,
          creator: item.creators.items.map((creator) => creator.name),
          date: formattedDate,
          price: item.prices[0].price,
          isHeartClicked: false,
        };
      });
    },
  },
  computed: {
    data() {
      return this.$store.state.data; // Access the fetched data from the store
    },
    heartIconClass() {
      return (itemId) => {
        return this.isHeartClicked[itemId] ? 'iconClicked' : 'icon';
      };
    },
  clickedIconCount() {
    return this.myData.filter(item => this.isHeartClicked[item.id] && item.isHeartClicked).length;
  },
  },
  created() {
    this.$store.dispatch('fetchData'); // Dispatch the fetchData action when the component is mounted
    this.fetchMyData();
  },
};
</script>

<style scoped>
.home__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem 1.5rem;
}

.home__article {
  transition: transform 0.6s;
  padding-top: 1.5rem;
}

.home__article:hover {
  transform: scale(1.1);
}

.home__article:not(:hover) {
  transform: scale(1);
}

.home__title {
  font-size: 12px;
  padding-bottom: 2rem;
}

.icon {
  color: var(--color-white);
}

.iconClicked {
  color: var(--color-red);
}

.icon.clicked {
  color: var(--color-red);
}

.icon:hover {
  color: var(--color-primary);
}

/* Modal Styles */
.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
}

.home__article:hover .modal {
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;
}
.home__article:hover .home__title {
  display: none;
}

.modal__description {
  color: var(--color-white);
  font-size: 10px;
}

.modal__creators {
  color: var(--color-white);
  font-size: 8px;
}

img {
  width: 100%;
  height: 100%;
}

/* Media queries (Medium devices) */
@media screen and (max-width: 1024px) {
  .home__container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Media queries (small devices) */
@media screen and (max-width: 600px) {
  .home__container {
    grid-template-columns: 1fr;
  }
}
</style>
