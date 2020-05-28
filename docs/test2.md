# Hello

<div v-for="i in items">
    <h2>{{i.name}} {{i.bio}}</h2>
    <img :src="i.avatar_url"/>
</div>

<script>
const axios = require('axios')
export default {
  data () {
      return {
          items: []
      }
  },
  async beforeMount() {
    this.$data.items = await axios.get('https://api.github.com/users/ocular-d')
  }
}
</script>



