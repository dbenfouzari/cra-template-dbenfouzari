# cra-template-dbenfouzari

This is a template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template cra-template-dbenfouzari` when creating a new app.

For example:

```sh
yarn create react-app my-app --template cra-template-dbenfouzari
```

## What's inside?

It includes some great stuff :
* ESLint
* Prettier
* Stylelint
* Redux
* SCSS
* Storybook

## How to?

### Bootstrap your project

Simply run
```sh
yarn create react-app my-app --template cra-template-dbenfouzari
```

And that's it! You get a new project based on [Create React App](https://github.com/facebook/create-react-app) with more opiniated utils.

### Create a page

Let's say you want to create a `Login` page. Please create a folder `login` under `src/pages/`.
This folder may contain :
* `login.tsx`,
* a `login.stories.tsx` that will be used for rendering that page into Storybook,
* a `login.test.tsx` that will be a test file,
* a `login.module.(s)css` to style your page,
* and an `index.ts` file that just `export { default } from './login';` to allow external files to import it.

### Create a Redux' module

Let's say you want to map your `login` form into Redux.
You can do this by creating a file `src/modules/login.ts`. It will contain similar code as `counter.ts` file.

Check out `src/pages/about` to see how Redux is used.
