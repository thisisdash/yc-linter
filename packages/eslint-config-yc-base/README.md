# eslint-config-yc-base

eslint yc base has been created to use in any JS vanilla project with nodejs setup.

It inherits some basic packages like:
- eslint-config-airbnb-base
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-prettier
- prettier

## Usage

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

## Running

## Using the .prettierrc.js in your project

In your project you can symlink to the yc-base prettierrc using the following command:

```shell
ln -s node_modules/@youngcapital/eslint-config-yc-base/.prettierrc.js ./.prettierrc.js
```

This will allow your editor prettier integration to use our prettier configuration.

## Migrations

### to v.3

After upgrading your project to use v.3 of `@youngcapital/eslint-config-yc-base` you'll probably want to reformat the code in your repository.  
Please follow [this article][https://www.moxio.com/blog/43/ignoring-bulk-change-commits-with-git-blame] to achieve it in the least painful way.
