# React + TypeScript + Vite













![Untitled design](https://github.com/samik1234/social-media-tumblr/assets/82882143/fadf94b4-d781-4f82-8f30-64d1f26b6bc3)





Build Your App - Social Media App - Tumblr






Build a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more.





To build your social media app, you can use React JS with TypeScript and Vite. You can also use Appwrite for backend services. Vite is a fast and lightweight build tool that provides a rapid development experience focused on speed and simplicity. Next.js is a popular framework for building server-side rendered React applications. It provides features such as automatic code splitting, server-side rendering, and static site generation. You can use vite and nextjs to build your app.





Use this code and build an great application.













![tun](https://github.com/samik1234/social-media-tumblr/assets/82882143/cc3fc668-9507-4735-843d-c5600685430e)

















This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
