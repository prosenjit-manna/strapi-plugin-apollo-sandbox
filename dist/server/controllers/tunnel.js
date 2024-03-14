"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tunnel = null;
exports.default = ({ strapi }) => ({
    async createTunnel(ctx) {
        // const endpoint = strapi.config.get(pluginId)?.endpoint;
        // const PORT = strapi.config.get("server.port");
        // const ENDPOINT = strapi.config.get("plugin.graphql.endpoint");
        // if ((!PORT || !ENDPOINT) && !endpoint) {
        //   return ctx.throw(400, "Server port or GraphQL endpoint not found");
        // }
        const NODE_MAJOR_VERSION = process.versions.node.split(".")[0];
        // tunnel = await localtunnel({
        //   host: "http://lt.boltapi.com",
        //   port: PORT,
        //   local_host: Number(NODE_MAJOR_VERSION) <= 16 ? "0.0.0.0" : "127.0.0.1",
        //   allow_invalid_cert: true,
        // });
        ctx.body = {
            url: `http://localhost:1338/graphql`,
        };
    },
    async closeTunnel(ctx) {
        tunnel === null || tunnel === void 0 ? void 0 : tunnel.close();
        ctx.body = {
            success: true,
        };
    },
});
