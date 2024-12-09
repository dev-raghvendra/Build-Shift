const chalk = require('chalk');
const { exec } = require("child_process");
const fs = require("fs-extra");
const path = require("path");

/**
 * Main function to handle building and moving the frontend build to the backend.
 * @param {string} frontendDir - Path to the frontend directory.
 * @param {string} backendDir - Path to the backend directory.
 * @param {string} distDir - Directory where the build will be outputted (default is 'dist').
 */
module.exports = async function (frontendDir, backendDir, distDir) {
    // Starting the frontend build process
    console.log(chalk.blue("Building frontend..."));
    const execution = exec("npm run build", { cwd: frontendDir });

    // Outputting the build process logs
    execution.stdout.on('data', (data) => {
        process.stdout.write(chalk.blue(data.toString()));
    });

    execution.stderr.on('data', (data) => {
        process.stderr.write(chalk.red(data.toString()));
    });

    // Once the build process is done
    execution.on("close", async function (code) {
        if (code !== 0) {
            console.error("Frontend build failed");
            return;
        }

        // Build was successful, now move the build files to the backend
        console.log(chalk.green("=> Frontend build successful"));
        console.log(chalk.green("=> Moving frontend build to backend..."));

        // Default 'dist' directory if not specified
        const frontendBuildDir = path.join(frontendDir, distDir || "dist");
        const backendBuildDir = path.join(backendDir, "public");
        
        // Validate if the frontend build directory exists
        if (!fs.existsSync(frontendBuildDir) && !distDir) {
            console.error(`Specify the dist directory or make sure the frontend build is in ${frontendBuildDir}`);
            return;
        }

        if (!fs.existsSync(frontendBuildDir)) {
            console.error(`Specified dist directory doesn't exist: ${frontendBuildDir}`);
            console.error("=> Clearing build...");
            fs.removeSync(frontendBuildDir);
            return;
        }

        try {
            // Remove existing build in the backend and copy the new build
            fs.removeSync(backendBuildDir);
            fs.copySync(frontendBuildDir, backendBuildDir);
            fs.removeSync(frontendBuildDir);
            console.log(chalk.green("=> Frontend build moved to backend under the public directory"));
        } catch (error) {
            console.error("Error during moving: ", error);
            return;
        }
    });
}
