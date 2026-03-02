const fs = require('fs');
const path = require('path');

const dirs = [
    'shea-butter-rich',
    'shine-awapuhi',
    'sea-minerals',
    'coconut-milk-glow'
];

dirs.forEach(dir => {
    const p = path.join(__dirname, dir, 'tailwind.config.ts');
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        if (content.includes('plugins: [require("tailwindcss-animate")]') && !content.includes('eslint-disable-next-line')) {
            content = content.replace(
                'plugins: [require("tailwindcss-animate")],',
                '// eslint-disable-next-line @typescript-eslint/no-var-requires\n  plugins: [require("tailwindcss-animate")],'
            );
            fs.writeFileSync(p, content, 'utf8');
            console.log('Fixed', p);
        }
    }
});
