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

1. Always delete the `dist` folder

2.
```bash
yarn && yarn build
```

3.
```bash
npm publish
```

### Link with Upshot UIs

In development, you will likely want to link this repo with the one containing the Upshot UIs (Analytics, Answer, etc.) Follow the latest guide in the [upshot-web repo](https://github.com/upshot-tech/upshot-web/blob/staging/README.md).
