# Positional Logic

**Live website: [https://1d42c4.github.io/chess9/](https://1d42c4.github.io/chess9/)**

500 standalone chess lessons: 50 positional patterns explored through 10 passes, with practice boards and local progress tracking.

This repository publishes the complete contents of the supplied `positional` folder, with its existing directory structure. The root `index.html` is the website entry point.

## Start learning

- [Searchable course home](index.html)
- [First lesson](lesson-001.html)
- [Final lesson](lesson-500.html)

## All four chess websites

| Repository | Collection | GitHub Pages |
| --- | --- | --- |
| [chess7](https://github.com/1d42c4/chess7) | Chess Combat School | [Open site](https://1d42c4.github.io/chess7/) |
| [chess8](https://github.com/1d42c4/chess8) | OnePageLove Chess | [Open site](https://1d42c4.github.io/chess8/) |
| [chess9](https://github.com/1d42c4/chess9) | Positional Logic | [Open site](https://1d42c4.github.io/chess9/) |
| [chess10](https://github.com/1d42c4/chess10) | The Earlier Advantage | [Open site](https://1d42c4.github.io/chess10/) |

## Files and downloads

All 509 original source files are included. Any existing course archives, tools, and documentation remain available. Use **Code → Download ZIP** to download this repository, or clone it with Git:

```sh
git clone https://github.com/1d42c4/chess9.git
```

`SOURCE_MANIFEST.json` records every original file, its original and uploaded SHA-256 hashes, and the deliberate publishing changes. These include the repository README, Pages settings files, and any repaired site links.

## Publishing and protection

GitHub Pages serves the committed files from the root of `main`. No package installation or build step is needed to view the site. The `.nojekyll` file enables direct static-file publishing.

The repository’s active default-branch rules require pull requests, block force pushes, and block branch deletion, with no bypass actors configured. Submit future content changes through a pull request, then merge to publish them. These rules preserve branch history; an owner can still change the rules or delete the repository, and approved changes can still modify or remove files.

## Original project documentation

The original project README is retained below. Some setup notes describe the project before this GitHub Pages publication.

---

# Positional Logic

A dependency-free, GitHub Pages-ready course with **500 standalone chess lessons** plus a searchable course homepage.

## Publish on GitHub Pages

1. Create a GitHub repository (the name `positional-logic` is recommended).
2. Upload everything in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**.
5. Save. GitHub will show the public URL after deployment.

No build step, framework, server, or external asset is required. Open `index.html` locally to use the course offline. Lesson completion is stored only in the visitor's browser.

## Course design

The curriculum revisits 50 durable positional patterns over ten passes: Notice, Evaluate, Plan, Improve, Prevent, Exchange, Candidates, Calculate, Play both sides, and Master. This spiral structure makes abstract logic concrete without demanding long study sessions.

## Maintenance

- Rebuild all pages: `node tools/generate-site.mjs`
- Validate the site: `node tools/validate-site.mjs`

The checked-in HTML is the deployable site; the scripts are included only to make future edits reproducible.
