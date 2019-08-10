cd dist

git init
git add .
git commit -m 'Deploy examples'

git remote add origin git@github.com:hardo/cosova.git
git push --force --set-upstream origin master:gh-pages
