# weather-viewer
1. Nuxt APP with SSR mode + Vuetify + Yarn package manager
2. Main page - random City weather (every time user opens site, different City weather shown) + Button  "Set my location"
3. After press Button show popup with form of choosing preffered location -> save location in local storage
4. After page reload user should see choosen location weather if exists. In another case -> random City (item 2).
5. Make a request to receive weather for a specific city no more than once per hour. Use localStorage
6. Add page PostMessage. Add button "openPostMessageSender". After button press open current application in new browser tab on page PostMessageSender.
In page PostMessageSender add button "close". Before close page PostMessageSender send message to opener tab.
Used API https://rapidapi.com/weatherapi/api/weatherapi-com
