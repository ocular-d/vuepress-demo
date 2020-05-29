<template>
  <div class="custom-block depcreated">
    <p class="custom-block-title">⚠️ Depcreated</p>
    <p>
    <b>This (component|method) is scheduled for deprecation by ({{ date }})!</b><br>
    Please use (<code>{{ msg }}</code>) instead.<br>
    Note that this information is available in the  API with the <code>@deprecated</code> endpoint,
    and also in the <a href="https://github.com/foo/CHANGELOG.md" title="Link to Changelog" target="_blank"
    rel="noopener noreferrer">API Changelog<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>.
  </p>
    <p>Legenda: {{ msg }} - {{ date }}</p>
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