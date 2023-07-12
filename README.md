<div align="center">
  <h1>Strapi Plugin: Apollo Sandbox</h1>
  
  <p style="margin-top: 0;">Enhance your Strapi Admin Interface with Apollo Sandbox, an alternative GraphQL Explorer. Simplify development and testing of GraphQL queries and mutations directly within the Strapi Admin Interface. Explore your API schema, test queries in real-time, and iterate faster with this powerful plugin.</p>
  
  <p>
    <a href="https://www.npmjs.org/package/@creazy231/strapi-plugin-apollo-sandbox">
      <img src="https://img.shields.io/npm/v/@creazy231/strapi-plugin-apollo-sandbox/latest.svg" alt="NPM Version" />
    </a>
    <a href="https://www.npmjs.org/package/@creazy231/strapi-plugin-apollo-sandbox">
      <img src="https://img.shields.io/npm/dm/@creazy231/strapi-plugin-apollo-sandbox" alt="Monthly download on NPM" />
    </a>
    <a href="#-contributing">
      <img src="https://img.shields.io/badge/Pull_Request-Welcome-brightgreen.svg" alt="PRs welcome!" />
    </a>
    <a href="#">
      <img alt="Repo stars" src="https://img.shields.io/github/stars/creazy231/strapi-plugin-apollo-sandbox?color=white&label=Github Stars">
    </a>
  </p>
</div>

<img src="https://raw.githubusercontent.com/creazy231/strapi-plugin-apollo-sandbox/main/media/screenshot.jpeg">

## ⏳ Installation

Install the plugin in your Strapi project.

```bash
# using yarn
yarn add @creazy/strapi-plugin-apollo-sandbox

# using npm
npm install @creazy/strapi-plugin-apollo-sandbox --save
```

After successful installation, you've to build a fresh package. To archive that simply use:

```bash
yarn build && yarn develop
# or
npm run build && npm run develop
```

The Apollo Sandbox plugin should appear in the Plugins section of Strapi sidebar after you run the app again.

## 🔧 Configuration
### ⚠️ Important Configuration
You need to modify the `./config/middlewares.ts` file and replace `strapi::security` with the following:

```javascript
export default [
  // ...
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com" ],
        },
      },
    },
  },
  // ...
]
```

After the modification, your file should look like this:
```javascript
export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com" ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
```

### 🛠️ Plugin Configuration
Config can be changed in the `./config/plugins.ts` file in your Strapi project. You can overwrite the config like so:

```javascript
export default {
  // ...
  "apollo-sandbox": {
    enabled: true,
    endpoint: "https://tunneled-strapi.com/graphql", // endpoint has to be accessible from the browser
  },
  // ...
};
```

## 🖐 Requirements
Complete installation requirements are exact same as for Strapi itself and can be found in the documentation under Installation Requirements.

Supported Strapi versions:

- Strapi v4.x.x

Node / NPM versions:

- NodeJS >= 14.21 < 19
- NPM >= 7.x

We recommend always using the latest version of Strapi to start your new projects.

## 🤝 Contributing
Feel free to fork and make a Pull Request to this plugin project. All the input is warmly welcome!

## ⭐️ Show your support
Give a star if this project helped you.

## 🔗 Links
- [NPM package](https://www.npmjs.com/package/@creazy231/strapi-plugin-apollo-sandbox)
- [GitHub repository](https://github.com/boazpoolman/@creazy231/strapi-plugin-apollo-sandbox)

## Community support
For general help using Strapi, please refer to the official Strapi documentation. For additional help with this plugin, you can reach out to me on the Strapi Discord channel or on Twitter.

## 🌎 Community support
- For general help using Strapi, please refer to [the official Strapi documentation](https://strapi.io/documentation/).
- You can contact me on the Strapi Discord [channel](https://discord.strapi.io/).

## License
MIT License Copyright (c) 2023 creazy231.
