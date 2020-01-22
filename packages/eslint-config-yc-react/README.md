# eslint-config-yc-react

eslint yc react has been created to use in reactjs projects with nodejs setup.

It inherits some basic packages like:
- eslint-config-yc-base (This is our package)
- eslint-config-airbnb
- eslint-plugin-jsx-a11y
- eslint-plugin-react

## Usage

- Make sure you have eslint >5.12.0 installed according to the peerDependencies of this project
- Install the package
- Create `.eslintrc.js` on the root of your project
- Add the block of code below:
  ```
  module.exports = {
    extends: [
      '@youngcapital/eslint-config-yc-react'
    ]
  };
  ```
- Or you could also add `eslintConfig` tag on your package.json as below:
  ```
  {
    "eslintConfig": {
      "extends": "@youngcapital/eslint-config-yc-react"
    }
  }
  ```

## Running

## Using the .prettierrc.js in your project

In your project you can symlink to the yc-base prettierrc using the following command:

```ln -s node_modules/@youngcapital/eslint-config-yc-base/.prettierrc.js ./.prettierrc.js```

This will allow your editor prettier integration to use our prettier configuration.
