# Canonical exercise


## Running the app

Clone this repo.
In the project directory, run:

```
npm install
```

followed by
```
npm start
``` 

Thi runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you edit the code.\


## Thoughts and Notes

There wasn't much to go on in terms of API, I just in followed the provided [link](https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json) and inspected the `JSON` there.\
I have a feeling some of the fields I'm accessing are "internal" but it got the job done. I looked into the WordPress API docs, [especially to fetch the author](https://developer.wordpress.org/rest-api/reference/users/#retrieve-a-user), but it didn't seem to work so I just used as much of the `v2/posts` endpoint as I could.

Further enhancements could involve this part of the app, by subsequently fetching the required data using the response of the first request.
Also typing out the API schema would be a good improvement. 

Overall, I'd say this took me about 3h. I did the data fetching, error handling and state management in about 30min, pretty standard stuff.
The rest of the time was mostly spent reading the Vanilla docs, figuring out how to use it.\
I didn't notice there was a `react-components` package at first, so roughly the last hour was me just refactoring and trying to understand what pre-built components I could use.

 
:rocket:

     
#### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
