# Agents operating instructions

Keep folder-level `function.md` files accurate and maintain the root `changelog.md` whenever changes are made.

## When to update
Update relevant `function.md` files and append a changelog entry whenever you:
- Add, rename, move, or delete files or folders
- Change the responsibility or behavior of a folder
- Introduce new top-level tooling or configuration

## How to update
1. Edit the `function.md` in each affected folder:
   - Summarize the folder's purpose
   - List contained files with 1-line explanations
   - If the folder is empty, note its intended purpose
   - Add a "Last updated: YYYY-MM-DD" line
2. If the change affects the top level (new folders, root configs), also update the root `function.md`.
3. Append a new entry to `changelog.md` (see template below).
4. Commit with a descriptive message, e.g.: `docs: update function.md for src/pages and changelog`

## function.md template
```
# <folder> folder overview

Brief description of what lives here and why.

## Files
- `<file>`: one-line purpose

## Subfolders (if any)
- `<subfolder>/`: one-line purpose

Last updated: YYYY-MM-DD
```

## Changelog entry template
```
## YYYY-MM-DD
- Added/Updated/Removed: <short summary>
  - <path>: <details>
```

## Notes
- Keep entries concise and factual.
- Prefer present tense and consistent phrasing across the repo.
- If multiple folders change, add bullet points for each affected path.

## Automation
- One-off regenerate docs: `pnpm run docs:build`
- Watch and auto-update docs: `pnpm run docs:watch`
- Generator script lives at `scripts/update-docs.mjs`. It writes/updates `function.md` per folder and appends a dated entry to `changelog.md`.
