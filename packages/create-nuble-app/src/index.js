#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa";

const program = new Command();

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define CLI
program
  .name("nuble")
  .argument("<project-name>", "name of the project to create")
  .description("Scaffold a new Nuble app with TypeScript")
  .action(async (projectName) => {
    try {
      const targetDir = path.resolve(process.cwd(), projectName);

      // 1️⃣ Check if folder exists
      if (fs.existsSync(targetDir)) {
        console.error(`❌ Folder "${projectName}" already exists.`);
        process.exit(1);
      }

      // 2️⃣ Copy template
      const templateDir = path.join(__dirname, "../templates/base");
      console.log(`📦 Copying template to ${targetDir}...`);
      await fs.copy(templateDir, targetDir);
      // 3️⃣ Run npm install
      console.log("⚡ Installing dependencies...");
      // await execa("npm install", { cwd: targetDir, stdio: "inherit" });
      await execa("npm install @nuble/core@file:Nuble/packages/nuble-core", { cwd: targetDir, stdio: "inherit" });

      console.log(`✅ Project "${projectName}" created successfully!`);
      console.log(`➡️  cd ${projectName} && npm run dev`);
    } catch (err) {
      console.error("❌ Error creating project:", err);
      process.exit(1);
    }
  });

program.parse(process.argv);
