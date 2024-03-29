---
title: Introduction
description: Introduction to VuePress Demo
meta:
  - name: "og:description"
    content: Introduction to VuePress Demo
  - name: keywords
    content: API documentation guide demo Vue VuePress
---

<KeyPoint/>

---

## About

<DisclaimerMain />

This demo features a [VuePress](https://vuepress.vuejs.org/ "Link to VuePress website") setup tailored for (technical) documentation.

It includes a list of [plugins](https://vuepress.vuejs.org/plugin/ "Link to VuePress plugins")
and [components](https://v1.vuepress.vuejs.org/guide/using-vue.html#using-components "Link explaining components")which can enhance the functionality of VuePress as documentation base.

In addition this setup showcases the usage of [GitHub Actions](https://github.com/features/actions "Link to GitHub Actions on GitHub") for [Docs As Code](#docs-as-code "Docs As Code"),
includes a editorial style guide and one for Markdown.

## Docs As Code

Docs As Code assumes that you use the same tooling for writing documentation which you use for working on your code.

In the same manner that code editors are configured with plugins for reporting coding style violations,
you can configure your code editor with plugins that report inconsistencies with your company's editorial and content style guides.

Depending on your documentation, these could be plugins for checking the consistency of your markup language,
the style of headings, the length of documents and many more.

Consistent, tested documentation can help your product and your development cycle.

Consistency means that you write your documentation according to a defined standard reflecting your product and company.
It also means that you can find information and understand that information when you encounter problems.

Using the same tooling may also include [CI/CD](#continuous-integration)(Continuous Integration).

![CircleCI](./assets/cci-base.png)

TODO:

- ADD here CI part and that is does not matter which CI
- Add some words about used QA checks
- Add `VuePress` to `vale` checks

## Quality Assurance

Poor documentation reflects badly on the quality of the product and your company.
A key part of the Docs As Code approach is to apply a Quality Assurance (QA) model in your documentation process.

This means running documentation tests in the same manner that developers run automated tests against the software they are writing.,

Documentation testing is a non-functional test of your content which helps ensure that it stays up-to-date with your product, the installation requirements, and is understandable by your audience.

Docs As Code done right saves you time and money by decreasing the time you spend fixing documentation and increasing its quality.

![GH-Base](./assets/gh-base.png)

## Continuous Integration And Deploy

[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration "Link to Wikipedia, explaining CI")
for every change submitted to an application - even to development branches -
it’s built and tested automatically and continuously, ensuring the introduced changes pass all tests, guidelines, and code compliance standards you established for your app.

[Continuous Deployment](https://continuousdelivery.com/ "Link explaining CD") is a further step beyond Continuous Integration, similar to Continuous Delivery.
The difference is that instead of deploying your application manually, you set it to be deployed automatically.
It does not require human intervention at all to have your application deployed.

This demo uses [GitHub Actions](https://github.com/features/actions "Link to GitHub Actions on GitHub").

:::tip

[GitHub Actions](https://github.com/features/actions "Link to GitHub Actions on GitHub") is only *one* possibility!

The same can be done with [CircleCI](https://circleci.com/ "Link to CircleCI"), [Jenkins](https://www.jenkins.io/ "link to Jenkins"), [Drone](https://drone.io/ "Link to Drone CI"), [GitLab](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/ "Link to GitLab"), [Buildkite](https://buildkite.com/ "Link to Builkite") or every other CI/CD system.

:::

![CI/CD](./assets/ci-cd.png)
