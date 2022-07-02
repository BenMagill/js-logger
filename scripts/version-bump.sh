#! /bin/bash
bump_type=$1

# Handle no bump type
if [ -z "$bump_type" ] | [ -z "$NPM_TOKEN" ]
then 
  exit 0
fi

# increase version
new_version=$(npm version $bump_type)

# push tag to remote
git push origin $new_version

# publish to npm
npm publish