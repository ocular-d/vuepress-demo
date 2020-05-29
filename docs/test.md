---
date: 2020
---

# Test

Hello world

<TestThis />

<Test2 msg="Hello World" date="2222" />



<Target msg=".foo" date="June 2020"></Target>

This is the year {{ $page.frontmatter.date }}

`CLI`


### Badge <Badge text="beta" type="warning"/> <Badge text="default theme"/>


## Script & Style Hoisting

Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases, you can directly write root-level `<script>` or `<style>` blocks in the Markdown file, and they will be hoisted out of the compiled HTML and used as the `<script>` and `<style>` blocks for the resulting Vue single-file component.

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = 'This is rendered by inline script and styled by inline CSS'
  }
}
</script>

<div class="rounded shadow-lg w-1/2 m-10 p-5 bg-green">
    <p class="text-red text-lg text-center font-sans">I'm a red text!</p>
</div>
