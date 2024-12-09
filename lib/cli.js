#!/usr/bin/env node

const path = require('path');
const build_and_move = require('./build-shift.js');

// Parsing command line arguments
const args = process.argv.slice(2);

// Check if the required arguments are provided
if (args.length < 2) {
    console.error("Usage: build-and-move <frontend-dir> <backend-dir> <dist-dir>");
    console.error("By default, dist-dir is 'dist'");
    process.exit(1);
}

// Destructuring arguments and resolving their absolute paths
let [frontendDir, backendDir, distDir] = args;
frontendDir = path.resolve(frontendDir);
backendDir = path.resolve(backendDir);

// Calling the build_and_move function with the provided arguments
try {
    build_and_move(frontendDir, backendDir, distDir);
} catch (error) {
    console.error(error);
    process.exit(1);
}
