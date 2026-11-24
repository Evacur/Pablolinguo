// The app reads what it shares with the rest of the repository from ../shared (content, logic, icons, the
// document store, the public Supabase config): Metro watches that folder and nothing else outside app/.
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const repoRoot = path.resolve(projectRoot, "..");

const config = getDefaultConfig(projectRoot);
config.watchFolders = [path.resolve(repoRoot, "shared")];
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, "node_modules")];

module.exports = config;
