<template>
  <div class="custom-block depcreated">
  <p class="custom-block-title">⚠️ Depcreated</p>
  <p>
  <p>{{ msg }} at {{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "msg",
  props: {
    msg: String,
    required: true
  },
  name: "date",
  props: {
    msg: String,
    required: true
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-block .custom-block-title {
	font-weight: 600;
	margin-bottom: -0.4rem;
  color: red;
}

.custom-block.depcreated {
	padding: 0.1rem 1.5rem;
	border-left-width: 0.5rem;
	border-left-style: solid;
	margin: 1rem 0;
  background-color: #eff3f7;
}
</style>

