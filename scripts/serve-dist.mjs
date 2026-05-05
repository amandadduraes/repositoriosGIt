import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDirectory = path.resolve(__dirname, "..", "dist");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4175);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function getContentType(filePath) {
  return contentTypes[path.extname(filePath)] || "application/octet-stream";
}

async function resolveFilePath(urlPathname) {
  const requestedPath = path.normalize(decodeURIComponent(urlPathname)).replace(
    /^(\.\.(\/|\\|$))+/,
    "",
  );

  let filePath = path.join(distDirectory, requestedPath);

  if (urlPathname === "/") {
    filePath = path.join(distDirectory, "index.html");
  }

  if (existsSync(filePath)) {
    const fileStats = await stat(filePath);
    if (fileStats.isDirectory()) {
      return path.join(filePath, "index.html");
    }

    return filePath;
  }

  return path.join(distDirectory, "index.html");
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://${host}:${port}`);
    const filePath = await resolveFilePath(requestUrl.pathname);

    response.writeHead(200, {
      "Content-Type": getContentType(filePath),
      "Cache-Control": "no-store",
    });

    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("Erro ao iniciar o servidor local.");
  }
});

server.listen(port, host, () => {
  console.log(`Preview disponivel em http://${host}:${port}`);
});
