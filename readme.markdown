the wizard of moduletopia

# what is modularity

"Do one thing well."

"Compose larger units out of smaller, independent units of functionality."

# dorothy

we've got to find the module city

# 

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
we can use a module that somebody has written

instead

we could have also written the same module ourselves and then published the
result

# finding modules

* `npm search SEARCH TERMS...`
* ask on irc.freenode.net/#node.js! ask your friends!
* open up the npm packages for each result that looks promising
* skim the readme for code snippets
* ignore modules without code in the repos

# sending a patch

# hackers

hacker-deps

http://substack.net/hackers.txt

# splitting modules out

if your application has some functionality that

```
# splitting things out example goes here
```

# write some tests

* running tests in node
* running tests in the browser
* code coverage

# publish!

``` bash
npm init     # create a package.json
npm useradd  # create an npm account
npm publish  # publish your package!
```

# network

github
twitter

get a cheap shell:

* digital ocean
* linode
* ec2
* joyent

and then...

```
$ ssh yourwebsite.com -D 6070
$ google-chrome --proxy-server=socks5://localhost:6070
```
