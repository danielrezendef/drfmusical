import { rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const includeOpenNext = process.argv.includes("--open-next");
const generatedDirs = includeOpenNext ? [".next", ".open-next"] : [".next"];
const removedDirs = [];

for (const dir of generatedDirs) {
  const target = resolve(root, dir);
  if (!target.startsWith(root)) {
    throw new Error(`Refusing to remove path outside project: ${target}`);
  }

  rmSync(target, { force: true, recursive: true });
  removedDirs.push(dir);
}

if (removedDirs.length > 0) {
  console.log(`Cleaned generated build cache: ${removedDirs.join(", ")}`);
}
