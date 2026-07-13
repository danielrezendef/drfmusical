import { rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const generatedDirs = [".next", ".open-next"];

for (const dir of generatedDirs) {
  const target = resolve(root, dir);
  if (!target.startsWith(root)) {
    throw new Error(`Refusing to remove path outside project: ${target}`);
  }

  rmSync(target, { force: true, recursive: true });
}
