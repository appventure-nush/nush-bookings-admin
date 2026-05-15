# nush-bookings-admin

This is the Admin Page for the NUSH Bookings site. The main user interface (https://github.com/appventure-nush/nush-bookings) holds more information about the project.  
The deployed page is found at https://nush-open-house-tour.netlify.app/.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy Instructions
This page is hosted on Netlify (https://app.netlify.com/sites/nush-open-house-tour). There is no automatic workflow to upload the updated code, thus, once you finish your changes, build using the instructions above and upload the built pages to the platform manually.

## NOTE ON AZURE ISSUES 

If you start having microsoft azure issue AADSTS7000222: 

Ask Mrs Lee to: 

1) Go to [https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Overview/appId/9b109b28-ee98-43fe-a426-0757a095aeb9](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Overview/appId/9b109b28-ee98-43fe-a426-0757a095aeb9)

2) Under Manage section, click on Certificates & Secrets > Under client secrets, click on + New client secret

3) After creating it, send you 

4) Under Firebase --> Authentication --> Sign-in method --> Sign-in providers, click edit for Microsoft (appears after hovering) and set application secret to that 

## NOTE ON MANUALLY UPDATING DATA 

See ```reset_data_manual.md``` to run ```src/api/interactivedebug.js``` for quick guide 
