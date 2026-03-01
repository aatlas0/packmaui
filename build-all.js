import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
    'coconut-milk-glow',
    'sea-minerals',
    'shea-butter-rich',
    'shine-awapuhi'
];

async function buildAll() {
    console.log('🚀 Starting unified build process...\n');

    try {
        // 1. Build the Hub (root)
        console.log('🏗️ Building Central Hub...');
        execSync('npx vite build', { stdio: 'inherit', cwd: __dirname });
        console.log('✅ Hub built successfully.\n');

        // 2. Build each sub-project and copy to root dist
        for (const project of projects) {
            const projectPath = path.join(__dirname, project);

            if (!fs.existsSync(projectPath)) {
                console.warn(`⚠️ Warning: Project folder ${project} not found. Skipping.`);
                continue;
            }

            console.log(`🏗️ Building ${project}...`);

            // Install dependencies if node_modules doesn't exist (optional, but good for Vercel)
            if (!fs.existsSync(path.join(projectPath, 'node_modules'))) {
                console.log(`📦 Installing dependencies for ${project}...`);
                execSync('npm install', { stdio: 'inherit', cwd: projectPath });
            }

            // Build the project
            execSync('npm run build', { stdio: 'inherit', cwd: projectPath });

            // Copy the dist folder to the root dist folder under the project's name
            const sourceDist = path.join(projectPath, 'dist');
            const targetDist = path.join(__dirname, 'dist', project);

            console.log(`📂 Copying ${project} to root dist...`);
            await fs.copy(sourceDist, targetDist);

            console.log(`✅ ${project} built and copied successfully.\n`);
        }

        console.log('🎉 All builds completed successfully! The /dist folder is ready for Vercel.');

    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

buildAll();
