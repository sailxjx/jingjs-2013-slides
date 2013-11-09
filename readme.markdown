the wizard of moduletopia

![substack presents](images/substack_presents.png)

![wizard of modules](images/wizard_of_modules.png)

![tornado](images/tornado.png)

![shoes_found](images/shoes_found.png)

![shoes_taken](images/shoes_taken.png)

![shoes](images/shoes.png)

![frameworks](images/frameworks.png)

![framework stuck](images/framework_stuck.png)

![organization](images/organization.png)

![npm](images/npm.png)

![browserify](images/browserify.png)

![database](images/database.png)
![leveldb](images/leveldb.png)

![find home](images/find_home.png)

![courage](images/courage.png)

![courage](images/courage.png)

![wizard](images/wizard.png)

![anyone can publish](images/anyone_can_publish.png)

![robot publsh](images/robot_publish.png)

![dorothy publish](images/dorothy_publish.png)

![scarecrow publish](images/scarecrow_publish.png)

![lion publish](images/lion_publish.png)

![whatever](images/whatever.png)

![anarchy](images/anarchy.png)

![forgiveness](images/forgiveness.png)


# what is modularity

"Do one thing well."

"Compose larger units out of smaller, independent units of functionality."

# dorothy

we've got to find the module city

# a culture of modularity

how to foster a culture of modularity:

* have really good module system
* externalize early, often
* all modules are useful on their own
* easy to test

If you are building an application and get stuck, it probably means that one or
more modules to do the hard parts don't exist yet. Figure out which modules need
to exist and then go make them!

# getting modularity right

* qualified imports
* tiny core functionality

# case study in modularity: leveldb

geospatial indexes

instead of relying on the database vendor to give us
we can use a module that somebody has written that just does 1 thing

we could have also written the same module ourselves and then published the
result

# finding modules

* `npm search SEARCH TERMS...`
* ask on irc.freenode.net/#node.js! ask your friends!
* open up the npm packages for each result that looks promising
* skim the readme for code snippets
* ignore modules without code in the repos

# publish!

``` bash
npm init     # create a package.json
npm useradd  # create an npm account
npm publish  # publish your package!
```
