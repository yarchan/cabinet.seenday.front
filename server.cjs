// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware для обработки CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ со всех источников (это уязвимость с точки зрения безопасности)
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // Прокси для пересылки запросов к https://cabinet.seenday.com
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'https://cabinet.seenday.com',
//     changeOrigin: true,
//   })
// );

// // Запуск сервера
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
