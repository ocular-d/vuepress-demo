<template>
  <div>
    <h1>{{$page.frontmatter.title}}</h1>
    <div
      style="width: 4rem; height: .5rem; margin: .1rem 0rem 2rem .3rem; background-color: #5469d4;"
    ></div>
    <h4>{{$page.frontmatter.description}}</h4>
    <br />
    &#x1F4A1; {{ $page.readingTime.text }}
    <br />

  </div>
</template>
