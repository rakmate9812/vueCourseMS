# vueCourseMS

## Sections

1 - Set up and intro

2 - Basics: DOM interaction

3 - Conditions, lists, loops

4 - Monster slayer game

5 - Vue behind teh scenes

6 - Intro to components

7 - Vue CLI + deep dive into components

## Good to Know

Node 18 conflicts with webpack, because in the course the teacher uses an older version, which does not compatible with node 18. There is a summary of this problem here: <a src="https://sebhastian.com/error-0308010c-digital-envelope-routines-unsupported/?utm_content=cmp-true">Link</a>

What worked for me:

1 - Update this line in every project created with the Vue CLI: "serve": "vue-cli-service serve --openssl-legacy-provider"

2 - Type this into cmd inside the project folder (in the same folder as package.json): set NODE_OPTIONS=--openssl-legacy-provider
