import { Component } from "react";
import "./index.css";
import TabItem from "../TabItem";
import AppItem from "../AppItem";

const tabsList = [
  { tabId: "FOOD", displayText: "Food" },
  { tabId: "SNAKS", displayText: "Snaks" },
  { tabId: "GROCERY", displayText: "Grocery" },
  { tabId: "VEGETABLES", displayText: "Vegetables" },
  { tabId: "MEATS", displayText: "Meats" },
];

const appsList = [
  {
    appId: 0,
    appName: "Facebook",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png",
    category: "SOCIAL",
  },
  {
    appId: 1,
    appName: "Messenger",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png",
    category: "SOCIAL",
  },
  {
    appId: 2,
    appName: "WhatsApp",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png",
    category: "SOCIAL",
  },
  {
    appId: 3,
    appName: "Instagram",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png",
    category: "SOCIAL",
  },
  {
    appId: 4,
    appName: "Snapchat",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png",
    category: "SOCIAL",
  },
  {
    appId: 5,
    appName: "Twitter",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png",
    category: "SOCIAL",
  },
  {
    appId: 6,
    appName: "Pinterest",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png",
    category: "SOCIAL",
  },
  {
    appId: 7,
    appName: "WeChat",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png",
    category: "SOCIAL",
  },
  {
    appId: 8,
    appName: "LinkedIn",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png",
    category: "SOCIAL",
  },
  {
    appId: 9,
    appName: "Telegram",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png",
    category: "SOCIAL",
  },
  {
    appId: 10,
    appName: "Subway Surfers",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png",
    category: "GAMES",
  },
  {
    appId: 11,
    appName: "Crossy Road",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png",
    category: "GAMES",
  },
  {
    appId: 12,
    appName: "Clash of Clans",
    imageUrl:
      "https://res.cloudinary.com/dlr7bda2h/image/upload/v1699153478/coc_pic_zgvchp.jpg",
    category: "GAMES",
  },
  {
    appId: 13,
    appName: "Angry Birds",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png",
    category: "GAMES",
  },
  {
    appId: 14,
    appName: "Hill Climb 2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png",
    category: "GAMES",
  },
  {
    appId: 15,
    appName: "Temple Run",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png",
    category: "GAMES",
  },
  {
    appId: 16,
    appName: "Dr. Driving",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png",
    category: "GAMES",
  },
  {
    appId: 17,
    appName: "Pubg",
    imageUrl:
      "https://res.cloudinary.com/dlr7bda2h/image/upload/v1699153789/pubg_dxbwjp.png",
    category: "GAMES",
  },
  {
    appId: 18,
    appName: "Grade Learning",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png",
    category: "GAMES",
  },
  {
    appId: 19,
    appName: "My Talking Tom",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png",
    category: "GAMES",
  },
  {
    appId: 20,
    appName: "Inshorts",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png",
    category: "NEWS",
  },
  {
    appId: 21,
    appName: "Way2News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png",
    category: "NEWS",
  },
  {
    appId: 22,
    appName: "Google News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png",
    category: "NEWS",
  },
  {
    appId: 23,
    appName: "Flip  board",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png",
    category: "NEWS",
  },
  {
    appId: 24,
    appName: "SmartNews",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png",
    category: "NEWS",
  },
  {
    appId: 25,
    appName: "BBC News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png",
    category: "NEWS",
  },
  {
    appId: 26,
    appName: "CNN News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png",
    category: "NEWS",
  },
  {
    appId: 27,
    appName: "Daily Wire",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png",
    category: "NEWS",
  },
  {
    appId: 28,
    appName: "AP News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png",
    category: "NEWS",
  },
  {
    appId: 29,
    appName: "News Break",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png",
    category: "NEWS",
  },
  {
    appId: 30,
    appName: "Zomato",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png",
    category: "FOOD",
  },
  {
    appId: 31,
    appName: "Swiggy",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png",
    category: "FOOD",
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png",
    category: "FOOD",
  },
  {
    appId: 33,
    appName: "All in One",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png",
    category: "FOOD",
  },
  {
    appId: 34,
    appName: "Instacart",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png",
    category: "FOOD",
  },
  {
    appId: 35,
    appName: "Saucey",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png",
    category: "FOOD",
  },
  {
    appId: 36,
    appName: "Waitr",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png",
    category: "FOOD",
  },
  {
    appId: 37,
    appName: "Grubhub",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png",
    category: "FOOD",
  },
  {
    appId: 38,
    appName: "Mercato",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png",
    category: "FOOD",
  },
  {
    appId: 39,
    appName: "DOT",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png",
    category: "FOOD",
  },
];

const dummyData = {
  FOOD: Array.from({ length: 10 }, (_, index) => ({
    name: `Dummy Food ${index + 1}`,
    rupees: Math.floor(Math.random() * 200) + 50, // Random price between 50 and 250
    imageUrl: "https://dummyimage.com/200x200", // Dummy image link
  })),
  SNAKS: Array.from({ length: 10 }, (_, index) => ({
    name: `Dummy Snack ${index + 1}`,
    rupees: Math.floor(Math.random() * 100) + 20, // Random price between 20 and 120
    imageUrl: "https://dummyimage.com/200x200", // Dummy image link
  })),
  GROCERY: Array.from({ length: 10 }, (_, index) => ({
    name: `Dummy Grocery ${index + 1}`,
    rupees: Math.floor(Math.random() * 50) + 10, // Random price between 10 and 60
    imageUrl: "https://dummyimage.com/200x200", // Dummy image link
  })),
  VEGETABLES: Array.from({ length: 10 }, (_, index) => ({
    name: `Dummy Vegetable ${index + 1}`,
    rupees: Math.floor(Math.random() * 30) + 5, // Random price between 5 and 35
    imageUrl: "https://dummyimage.com/200x200", // Dummy image link
  })),
  MEATS: Array.from({ length: 10 }, (_, index) => ({
    name: `Dummy Meat ${index + 1}`,
    rupees: Math.floor(Math.random() * 300) + 100, // Random price between 100 and 400
    imageUrl: "https://dummyimage.com/200x200", // Dummy image link
  })),
};

class AppStore extends Component {
  state = { searchInput: "", currentTab: tabsList[0].tabId, totalAmount: 0 };

  onChangeInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onClickButton = (id) => {
    this.setState({
      currentTab: id,
    });
  };

  // getActiveTabApps = searchedApp => {
  //   const {currentTab} = this.state
  //   const filteredApp = searchedApp.filter(
  //     eachItem => eachItem.category === currentTab,
  //   )
  //   return filteredApp
  // }

  getSearchResults = () => {
    const { searchInput, currentTab } = this.state;
    const searchResults = dummyData[currentTab].filter((eachItem) =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchResults;
  };

  addTotalAmount = (amount) => {
    let totalAmount = amount + this.state.totalAmount;
    this.setState({...this.state, totalAmount});
  };

  subTotalAmount = (amount) => {
    let totalAmount = this.state.totalAmount -amount;
    this.setState({...this.state, totalAmount});
  };

  render() {
    const { searchInput, currentTab, totalAmount } = this.state;
    const searchResults = this.getSearchResults();
    // const filterdAppList = this.getActiveTabApps(searchResults)

    return (
      <div className="app-store-main-container">
        <div className="app-store-container">
          <div className="search-input-container">
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeInput}
              placeholder="Search"
              className="search-app-input"
            />
            <img
              className="search-logo"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            />
          </div>
          {totalAmount !== 0 && <><h1>{`totalAmount: ${totalAmount}`}</h1>
          <button>Order Now</button></>}
          <ul className="tab-list-container">
            {tabsList.map((eachItem) => (
              <TabItem
                onChangeTab={this.onClickButton}
                key={eachItem.tabId}
                tabList={eachItem}
                activeButton={
                  currentTab === eachItem.tabId ? "active-button" : ""
                }
              />
            ))}
          </ul>

          <ul className="app-list-container">
            {searchResults.map((eachItem) => (
              <AppItem
                addTotalAmount={this.addTotalAmount }
                subTotalAmount={this.subTotalAmount }

                appItem={eachItem}
                key={eachItem.name}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AppStore;
