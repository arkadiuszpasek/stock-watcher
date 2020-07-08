![docker](https://img.shields.io/badge/Docker-green) ![docker](https://img.shields.io/badge/Node-Express-green) ![docker](https://img.shields.io/badge/React-Redux-green) ![docker](https://img.shields.io/badge/Mongo-green) ![docker](https://img.shields.io/badge/Amazon%20AWS-EC2-green)

# Stock watcher

Hosted here: http://ec2-18-157-182-151.eu-central-1.compute.amazonaws.com

### Technologies/services used:

- Amazon AWS EC2, working as Ubuntu 18 VPS
- **Docker** hosted on this vps running containers:
  - Node container with **Express API**, which:
    - serves HTML website built with **React**
    - Responds to requests for stocks and makes API calls on its own to https://www.alphavantage.co/ (e.g. User through his browser makes a call regarding item A, makes a call to get data, parses data and responds to user, updates mongo database of this item)
  - **MongoDB** container which works stores items data (currently it works as analytics tools - storing information how many times certain items were requested)

### Project information

This project allows user to get information of stocks at the market. User can enter a ticker symbol, making a call to API, which responds with information of recent prices of this stock, on the front last 7 days of prices are displayed. API takes notice of user asking for this stock and then uses collected information to display which stocks are most popular.

##### I used alphavantage as 3rd party api with free tier, there are call limits (after a few lookups it might start to take long time to get back data, until limits are lifted (should reset after 1 minute))  

#### How can I run this locally?
You can start the backend api on your local machine, but you'd probably need to change the way it establishes connection with MongoDB
