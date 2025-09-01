# 1. local launch
```
npm run web
```

# 2. vercel launch
## 2.1 setup
```
danny@abs:~/ArtistGallery$ vercel
Vercel CLI 44.4.1
? Set up and deploy “~/ArtistGallery”? yes
? Which scope should contain your project? Danny Takushi's projects
? Link to existing project? no
? What’s your project’s name? artist-gallery
? In which directory is your code located? ./
Local settings detected in vercel.json:
- Build Command: expo export -p web
- Development Command: expo
- Output Directory: dist
No framework detected. Default Project Settings:
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
? Want to modify these settings? no
🔗  Linked to danny-takushis-projects/artist-gallery (created .vercel and added it to .gitignore)
[...]
```

## 2.2 launch
```
danny@abs:~/ArtistGallery$ vercel
Vercel CLI 44.4.1
🔍  Inspect: https://vercel.com/danny-takushis-projects/artist-gallery/GjBDfwJBigEUttNVKmCw7Yo5gXyP [26s]
✅  Production: https://artist-gallery-fj4wxhfqa-danny-takushis-projects.vercel.app [26s]
2025-07-14T04:59:44.734Z  Running build in Washington, D.C., USA (East) – iad1
2025-07-14T04:59:44.734Z  Build machine configuration: 2 cores, 8 GB
2025-07-14T04:59:44.749Z  Retrieving list of deployment files...
2025-07-14T04:59:44.838Z  Previous build caches not available
2025-07-14T04:59:45.087Z  Downloading 63 deployment files...
2025-07-14T04:59:46.450Z  Running "vercel build"
2025-07-14T04:59:46.884Z  Vercel CLI 44.3.0
2025-07-14T04:59:47.493Z  Installing dependencies...
2025-07-14T04:59:51.829Z  npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-07-14T04:59:52.503Z  npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-07-14T04:59:54.144Z  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-07-14T04:59:54.207Z  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-07-14T04:59:54.260Z  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-07-14T04:59:54.396Z  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-07-14T04:59:54.396Z  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-07-14T05:00:00.188Z  
2025-07-14T05:00:00.189Z  added 725 packages in 12s
2025-07-14T05:00:00.190Z  
2025-07-14T05:00:00.190Z  63 packages are looking for funding
2025-07-14T05:00:00.190Z    run `npm fund` for details
2025-07-14T05:00:01.245Z  Starting Metro Bundler
2025-07-14T05:00:04.837Z  Web ./index.ts ▓▓▓░░░░░░░░░░░░░ 22.5% ( 55/116)
2025-07-14T05:00:08.383Z  Web ./index.ts ▓▓▓▓▓░░░░░░░░░░░ 31.8% (146/321)
2025-07-14T05:00:11.916Z  Web ./index.ts ▓▓▓▓▓░░░░░░░░░░░ 31.8% (257/468)
2025-07-14T05:00:15.552Z  Web ./index.ts ▓▓▓▓▓▓▓░░░░░░░░░ 48.2% (359/517)
2025-07-14T05:00:19.196Z  Web ./index.ts ▓▓▓▓▓▓▓▓▓░░░░░░░ 61.9% (489/638)
2025-07-14T05:00:25.830Z  Web ./index.ts ▓▓▓▓▓▓▓▓▓▓░░░░░░ 67.9% (566/687)
2025-07-14T05:00:29.392Z  Web ./index.ts ▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 79.1% (710/799)
2025-07-14T05:00:32.957Z  Web ./index.ts ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 93.5% (923/961)
2025-07-14T05:00:33.905Z  Web Bundled 31944ms index.ts (986 modules)
2025-07-14T05:00:34.029Z  
2025-07-14T05:00:34.035Z  › Assets (20):
2025-07-14T05:00:34.035Z  assets/Flyer.eb2ba3d3b99b15dec03676a05a70c016.jpg (4.19 MB)
2025-07-14T05:00:34.036Z  assets/forest.5f6e799f33db3d5d12537689cdc1c6ed.jpg (6.9 MB)
2025-07-14T05:00:34.036Z  assets/Linnahall.7dc7535fd7c1c99c08bfd915ab46a553.jpg (2.92 MB)
2025-07-14T05:00:34.036Z  assets/Lotus.18576eadfd76b5256fe3672e48abca15.jpg (2.11 MB)
2025-07-14T05:00:34.036Z  assets/memorial.6306fe2ac43c0741c6f1e2f0b975cbff.jpg (3.54 MB)
2025-07-14T05:00:34.036Z  assets/Trashcan.715ffdf06129d4ad042475ee754c434d.jpg (2.34 MB)
2025-07-14T05:00:34.036Z  assets/Tree.e64a2d42b0f4d32120f4cc53daa07e14.jpg (3.96 MB)
2025-07-14T05:00:34.036Z  assets/workshop.d98fc7d0d4d6dc8fa02ac8b2d4982390.jpg (3.61 MB)
2025-07-14T05:00:34.036Z  assets/zebra.30b98a95733fad55343fd896a230b69d.jpg (2.12 MB)
2025-07-14T05:00:34.037Z  node_modules/@react-navigation/elements/lib/module/assets/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png (653 B)
2025-07-14T05:00:34.037Z  node_modules/@react-navigation/elements/lib/module/assets/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png (207 B)
2025-07-14T05:00:34.037Z  node_modules/@react-navigation/elements/lib/module/assets/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png (4 variations | 425 B)
2025-07-14T05:00:34.037Z  node_modules/@react-navigation/elements/lib/module/assets/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png (4 variations | 235 B)
2025-07-14T05:00:34.037Z  node_modules/@react-navigation/elements/lib/module/assets/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png (928 B)
2025-07-14T05:00:34.037Z  
2025-07-14T05:00:34.037Z  › web bundles (1):
2025-07-14T05:00:34.038Z  _expo/static/js/web/index-d2ca5f4f27412f9aa8e21814a17c762f.js (1.61 MB)
2025-07-14T05:00:34.038Z  
2025-07-14T05:00:34.041Z  › Files (3):
2025-07-14T05:00:34.041Z  favicon.ico (14.5 kB)
2025-07-14T05:00:34.041Z  index.html (1.22 kB)
2025-07-14T05:00:34.042Z  metadata.json (49 B)
2025-07-14T05:00:34.055Z  
2025-07-14T05:00:34.056Z  Exported: dist
2025-07-14T05:00:37.787Z  Build Completed in /vercel/output [50s]
2025-07-14T05:00:37.812Z  Deploying outputs...
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/danny-takushis-projects/artist-gallery/settings
```

# resources
vercel launch guide : https://docs.expo.dev/guides/publishing-websites/#vercel