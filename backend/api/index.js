"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const app_module_1 = require("../src/app.module");
const express_1 = require("express");
const server = (0, express_1.default)();
async function createNestServer(expressInstance) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    app.enableCors({
        origin: true,
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.init();
}
createNestServer(server);
exports.default = server;
//# sourceMappingURL=index.js.map