echo "# static_me" >> README.md
git init
git add .
git config  user.email "you@example.com"
git config  user.name "ddd"
git commit -m "first commit"
git remote remove origin
git remote add origin https://bugfix123:dz19870412123@github.com/bugfix123/static_me.git
git push -u origin master
