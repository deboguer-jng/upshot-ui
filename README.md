# upshot-ui

The official design system used in Upshot.

### Install dependencies

```bash
yarn
```

### Start storybook server

```bash
yarn storybook
```

### Fix code formatting

```bash
yarn lint
```

### Export module

```bash
yarn build
```

### Publish on NPM

```bash
npm publish
```

### Link with Upshot UIs

In development, you will likely want to link this repo with the one containing the Upshot UIs (Analytics, Answer, etc.), and you can do so with the following commands. Note that the code example below assumes that upshot-web and upshot-ui both live in the same parent directory.

cd upshot-web
yarn install
cd node_modules/react
yarn link
cd ../react-dom
yarn link

cd ../upshot-ui
yarn link
yarn install
yarn link react
yarn link react-dom

cd ../upshot-web
yarn link @upshot-tech/upshot-ui
