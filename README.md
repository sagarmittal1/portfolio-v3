The actual design is taken from https://brittanychiang.com/

 Deployed on Vercel :smiley: for the first time.
 
Just remember the command for deploying in Vercel or Netlify
` react-scripts build`
and on `build` folder

If you are going to deploy it on Heroku then you must change a settings in the app settings on Heroku. Go to settings -> Add Buildpacks and add this link so that it deploys the production build. In my case, at first development build was deployed that took almost a minute to load the application. Now it takes no more than 6-7s
