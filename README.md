# Jocelin Darma - Portfolio Website

A modern, clean personal portfolio website showcasing my experience as a Full Stack Developer, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Discord Integration**: Live Discord presence using Lanyard API
- **Project Showcase**: Display your development and design projects
- **Skills Section**: Highlight your technical skills with badges
- **Work Experience & Education**: Timeline of your professional journey

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Discord Presence**: Lanyard API

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your images**:
   Place the following images in the `public` folder:
   - `laptop.jpg` - Your workspace/laptop setup
   - `profile.jpg` - Your profile photo
   - `omnifood-preview.jpg` - Project preview images (or replace with your own)

3. **Configure Discord Lanyard** (Optional):
   - Join the [Lanyard Discord server](https://discord.gg/lanyard)
   - Get your Discord User ID
   - Replace `YOUR_DISCORD_USER_ID` in `app/page.tsx` (line 45) with your actual Discord User ID
   - If you don't want to use Lanyard, you can remove or comment out the `<Lanyard userId="..." />` component

4. **Add your projects**:
   Edit the Projects section in `app/page.tsx` to add your actual projects with:
   - GitHub repository links
   - Live demo links
   - Project descriptions and images

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Colors and Theme
Modify the colors in `app/globals.css` under the `:root` and `.dark` sections to match your brand.

### Layout and Sections
Edit `app/page.tsx` to add, remove, or modify sections as needed.

### Components
All UI components are in the `components/ui` folder and can be customized.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
This is a standard Next.js app and can be deployed to any platform that supports Next.js.

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
