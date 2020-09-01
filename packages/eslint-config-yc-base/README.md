# eslint-config-yc-base

eslint yc base has been created to use in any JS vanilla project with nodejs setup.

It inherits some basic packages like:

- eslint-config-airbnb-base
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-prettier
- prettier

## Usage

### ESLint

- Make sure you have eslint >=6.8.0 installed according to the peerDependencies of this project
- Install the package
- Create `.eslintrc.js` on the root of your project
- Add the block of code below:
  ```
  module.exports = {
    extends: [
      '@youngcapital/eslint-config-yc-base'
    ]
  };
  ```
- Or you could also add `eslintConfig` tag on your package.json as below:
  ```
  {
    "eslintConfig": {
      "extends": "@youngcapital/eslint-config-yc-base"
    }
  }
  ```

### Prettier

- make sure you have correct prettier version (check `peerDependencies.prettier` in [package.json](package.json))
- install the package (e.g. `yarn add --dev @youngcapital/eslint-config-yc-base`)
- update your package.json to include

```json
{
  "prettier": "@youngcapital/eslint-config-yc-base/.prettierrc.js"
}
```

Please follow [official documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more details.

## Migrations

### to v.3

After upgrading your project to use v.3 of `@youngcapital/eslint-config-yc-base` you'll probably want to reformat the code in your repository.  
Please follow [this article](https://www.moxio.com/blog/43/ignoring-bulk-change-commits-with-git-blame) to achieve it in the least painful way.
