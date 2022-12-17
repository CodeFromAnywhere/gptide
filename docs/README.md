# GPT IDE

The site you're seeing now can be transformed into an IDE if you connect it with an API that you can run locally.

## Set up instructions

### 1) Setup the right tools (node, yarn, etc) if you haven't already

[instructions here](https://codefromanywhere.com/docs/course/getting-started/installation-instructions)

### 2) Clone and open it in VSCode

```
git clone https://github.com/CodeFromAnywhere/gptide
```

### 3) Install

```
yarn
```

### 4) Run

```
yarn dev
```

This runs the server. Now you should be able to:

Now you should be able to see different content on this site, whenever your server is running. You can create your own prompts now!

Setup instructions for the GPT Captcha solving and other credentials are coming later.

## Building your own products on top?

Because it's just an API, you can build things with ChatGPT with any techstack. However, I am opinionated, and I recommend Typescript (Node.js, Next.js, and React) because I built a way to build full stack apps with that super quickly (see typerepo.com) and I've started with a course about it (see codefromanywhere.com)

To get started with ChatGPT, there are many ways:

1. Use chat.openai.com manually. Not recommended
2. Use the reverse-engineered API you can find open source on GitHub
3. Use the browser-automation library you can find open source on GitHub

The 3 latter ones can make you get started in a more controlled environment: you can build your own user interfaces on top of ChatGPT with React (or any other framework).

Please DM me on Discord for the most recent links to these GitHub libraries.
