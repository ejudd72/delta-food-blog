# delta-food-blog
Team Delta's food blog project

## To clone repository
 on command line use git clone git@github.com:ejudd72/delta-food-blog 


## Dist and Src folders
You should only change what is in the src file, do not touch the dist folder. This contains files automatically compiled by our css watch and js files and is minified. 

Please note that the styles.css in the dist/css folder has been minified, it has been left as styles.css to make it easier when minifying html and not having to rename the CSS href attribute.


## Install NPM Packages
On command line type 'npm install' in the project directory and this will install all relevant packages (seen in node modules folder) for the project.

### Packages required:
1. gulp
2. gulp-clean-css
3. gulp-concat
4. gulp-htmlmin
5. gulp-rename
6. gulp-sass
7. gulp-uglify-es
8. browser-sync

## Work In Progress
### Ellie
1. Footer
2. form layout 
3. adding colour scheme (with Jae)
4. adding font styles and settings (with Jae)
5. Cards layout page
6. cards styling

### Jae
1. Navbar 

### Ross
1. Carousel 

### Nic
1. Gulpfile HTML & Browser-Sync

## Using Git
Updating, pushing and pulling our work can be really tricky with all the gulp tasks going on as well, Follow these steps to make sure everything goes smoothly

### Updating your own master branch 
1 - git branch -a // (check which branch you're on)
2 - git checkout master // (if not already in master)
3 - git status
4 - git pull // (this will pull the remote master into your local master, you may get merge conflicts here - make sure you resolve all of these before proceeding)

### Updating your individual branch with what master has at the moment
4 - git checkout {branch name}
5 - git status 
6 - git merge master (again, you may get merge conflicts, resolve all of these before proceeding);

### Doing individual work on branches
1(a) - TERMINAL: git branch {your branch name - if it's a new branch}
1 - TERMINAL: git checkout {your branch name}
2 - TERMINAL: gulp watch
3 - VS Code: *do your work *in the SRC folders only, in scss files if updating styling* 
4 - TERMINAL: gulp //(this will minify html files and put all into place) **important! - check everything works in the browser window this command opens up

5 - TERMINAL: git status //(check everything's in place)
6 - TERMINAL: git add . //(add all files to staging)
7 - TERMINAL: git commit -am "your commit message here"
8 - TERMINAL: git push //(when you're ready to push your individual branch up; if it's a new branch and it errors then use the code it gives back to you)
9 - GITHUB: (follow link from terminal) - submit pull request 

