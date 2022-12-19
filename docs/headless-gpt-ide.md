The API behind GPT-IDE (the one you can run locally) can be used as a [headless backend solution](https://craftercms.com/blog/2019/12/what-is-a-headless-application-) to create complete full stack applications that integrate with LLM's and other AI models (for now, ChatGPT only).

Docs and a detailed guide for creating an app based on this will follow later, but for now, just imagine you have all these API's

- CRUD prompts
- CRUD prompt results
- CRUD files and folders
- Executing prompts for different models on selection, files, and folders
- User signup, roles, authentication, authorisation
- Monetisation (credit system on which you can build any packages on top as you wish)
- Automations (cronjobs), Queue system (executing thousands of prompts at once), watch-system (executing prompts if certain things happen)

On top of this, we also have a thorough integration of these api's with React. There's an `api` sdk available that has full typesafety for all these endpoints. I'm using [typerepo](https://typerepo.com) for this.

I'm most interested in building these things on top of my headless solution:

- Chrome Plugin
- VSCode Plugin
- Whitelabel app builder for prompt collections (Writer UX applied on a niche concept)

I'll start with this myself eventually, but if you want to do it, please DM, we could collab on it. Also, if you're interested on applying this IDE on your own market, please get in touch, we'll have much to talk about!
