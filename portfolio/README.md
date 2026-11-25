# Carlos S. Reyna Blanco | CV portfolio

The portfolio is a standalone Hugo site. Its fonts, illustrations, portrait, and downloadable CV are included. The three project pages are Markdown files.

## Preview locally

With Hugo 0.145.0 installed, open the extracted folder and run the following commands.

~~~sh
cd portfolio
hugo server
~~~

Open the local address printed by Hugo. Run `hugo --minify` to generate the publishable site in `dist/`.

## Edit the portfolio

| Change | File or folder |
| --- | --- |
| Experience, selected papers, education, skills | `data/resume.yaml` |
| Full bibliography | `content/publications/_index.md` |
| Courses and proposed articles | `content/courses/_index.md` and `content/notes/_index.md` |
| Project titles, summaries, methods, and case studies | `content/projects/` |
| Email address, professional profiles, CV path, base URL | `hugo.toml` |
| Homepage introduction and biography | `layouts/index.html` |
| Downloadable PDF | `static/downloads/Carlos_Reyna_Blanco_CV.pdf` |
| Portrait and scientific illustrations | `static/assets/` |
| Colors, typography, spacing, and layout | `static/assets/site.css` |

The two homepage plot views show the same simulated field. Project illustrations are conceptual. Research outputs are linked from each case study.

## Use your existing GitHub Pages address

1. Unzip the source into a temporary directory. Copy the extracted `portfolio/` folder into a new branch of `csReynaB/csreynab.github.io`. Your original Hugo Blox files can sit alongside it.
2. Preview from the repository root with `hugo server --source portfolio`.
3. When you choose to publish this design, copy `portfolio/github-pages.yml` over the existing `.github/workflows/deploy.yml` on that branch. The supplied workflow builds the `portfolio/` folder.
4. In the repository’s **Settings → Pages**, select **GitHub Actions** as the source. Review the branch and merge it into `main`. Check the **Deploy the CV portfolio** run in the Actions tab.

The workflow uses GitHub’s configured Pages URL for canonical links and the sitemap. To restore the earlier design later, revert the workflow change and run its deployment.
