<template>
  <div class="custom-block depcreated">
    <p class="custom-block-title">⚠️ Disclaimer</p>
    <p>
    <b>This demo shows only one possible example!</b><br>
    Like always there is <b>no</b> golden solution.<br>
    It really depends on your needs and what works best for you.
  </p>
  </div>
</template>
<script>
export default {
  props: ['msg', 'date'],
  }
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