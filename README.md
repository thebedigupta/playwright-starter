# Playwright Starter Template
Pre-configured Playwright + TypeScript setup with:

- tsconfig.json (fixes process.env type errors)
- Proper .gitignore
- Ready-to-use folder structure

Usage
```
git clone git@github.com:thebedigupta/playwright-starter.git my-project
cd my-project
npm install
npx playwright install
```
When you are setting things for inside any folder 

```
# 1. Clone template
git clone git@github.com:thebedigupta/playwright-starter.git "Phase 1/Week 7/Day 5/playwright-learning"

# 2. Remove ONLY the inner .git
rm -rf "Phase 1/Week 7/Day 5/playwright-learning/.git"

# 3. From the ROOT of qa_learning_journal, add and push
git add "Phase 1/Week 7/Day 5/playwright-learning"
git commit -m "Add Week 7 Day 5"
git push
```
