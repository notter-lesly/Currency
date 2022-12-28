## Convert anything

convert anything is a project that allows the client to convert currency and check its variation.

## How to install? 

```sh
npm install
```

### How to run?

```sh
npm run dev

```
### The api key

To make requisitions to the api, you need the api.key. You can get one in this link: https://exchangeratesapi.io/.
Once you get the key, you need to go to the backend project ( server ) and put your key inside the .env file.

## Technologies used

Vite - I choose to use vite because it improves the development server start time and also provides a nice coding enviroment
vue3 - Vue3 is a modern framework that provides better performance and better scalability and also, better support to Typescript.
Composition api(setup script) - I choose to use this format because it is modern and reduce the amount of code you need to write and to declare props and emitted events using pure TypeScript 
Typescript - I choose to use Typescript because it's safer and easy to avoid mistakes.
Express - I choose express to run the server locally.

### If I had more time

1. I would spend more time in the configuration of the project to make the integration with css/Sass.
2. I would create a more complex and nice design to the page.
3. I would create more views/pages and for that I would probably use nuxt3 since as it simplify routes and configuration.
4. With a larger application with view and pages, I could create a header with links, a footer with some information and a sitemap.
5. I would search another library with a more adaptable graphic to use it on a mobile.


### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
