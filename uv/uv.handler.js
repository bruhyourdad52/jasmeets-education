class UVHandler {
    constructor(config) {
        this.config = config;
    }

    rewriteUrl(url) {
        return this.config.prefix + this.config.encodeUrl(url);
    }

    handleRequest(req) {
        const url = this.config.decodeUrl(req.url.slice(this.config.prefix.length));
        return fetch(url, req);
    }
}

self.UVHandler = UVHandler;
