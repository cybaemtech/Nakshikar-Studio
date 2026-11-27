import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { ROUTES_SEO, transformHtmlWithSeo } from "./scripts/seoData.js";

function seoDevPlugin() {
  return {
    name: "seo-dev-plugin",
    transformIndexHtml(html: string, ctx: any) {
      const rawUrl = ctx.originalUrl || ctx.path || "/";
      const cleanUrl = rawUrl.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
      const seo = (ROUTES_SEO as Record<string, any>)[cleanUrl] || (ROUTES_SEO as Record<string, any>)["/"];
      if (!seo) return html;
      return transformHtmlWithSeo(html, seo);
    },
  };
}

function emailApiPlugin() {
  return {
    name: "email-api-plugin",
    configureServer(server: any) {
      // Load env variables from .env file and merge into process.env
      const env = loadEnv(server.config.mode, process.cwd(), "");
      Object.assign(process.env, env);

      server.middlewares.use("/api/send-email", async (req: any, res: any) => {
        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk: any) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body);
              const { sendContactEmails } = await import("./src/lib/sendEmail");
              await sendContactEmails(data);
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true, message: "Email sent successfully!" }));
            } catch (err: any) {
              console.error("Vite Dev Server Email API Error:", err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: false, error: err.message || "Failed to send email" }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end("Method Not Allowed");
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    emailApiPlugin(),
    seoDevPlugin(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    viteReact(),
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "vendor-react", test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/, priority: 30 },
            { name: "vendor-motion", test: /node_modules[\\/]framer-motion[\\/]/, priority: 20 },
            { name: "vendor-tanstack", test: /node_modules[\\/]@tanstack[\\/]/, priority: 10 },
          ],
        },
      },
    },
  },
});
