---
title: VuePress Components
description: VuePress Components Overview
meta:
  - name: "og:description"
    content: VuePress Components Overview
  - name: keywords
    content: API documentation QA GitHub CI/CD VuePress Components
---

# VuePress Components

:::tip Key Point
Overview of VuePress components used in this setup

:bulb: {{ $page.readingTime.text }}
:::

---

## Components

Components are reusable [Vue](https://vuejs.org/v2/guide/components.html "Link to Vue docs about components") instances.

Any `*.vue` files found in `.vuepress/components` are automatically registered as [global](https://vuejs.org/v2/guide/components-registration.html#Global-Registration "Link to Vue docs"), [async](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components "Link to Vue async docs") components.

For example:

```shell
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

Inside any Markdown file you can then directly use the components (names are inferred from filenames):

``` md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

<demo-1></demo-1>

<OtherComponent/>

<Foo-Bar/>

::: warning IMPORTANT
Make sure a custom component’s name either contains a hyphen or is in PascalCase.
Otherwise it will be treated as an inline element and wrapped inside a `<p>` tag, which will lead to hydration mismatch because `<p>` does not allow block elements to be placed inside it.
:::

For more information check the [official docs](https://vuepress.vuejs.org/guide/using-vue.html "Link to VuePress docs")

## Used Components

These components are uses in this demo setup.

### Disclaimer

Used on the [introduction site](./intro#about)

```md
<DisclaimerMain />
```

<DisclaimerMain />

## Plugins For SEO

- Seo
- sitemap
- robot.txt

## General Plugins

- progress bar