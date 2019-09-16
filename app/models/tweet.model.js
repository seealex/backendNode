class TweetByTagByUserIdiomVO {
    constructor(tweets, hastTag, idiom) {
        this.tweets = tweets;
        this.hastTag = hastTag;
        this.idiom = idiom;
    }
}

class TweetCountByHourOfDayVO {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
}

class UserTopFiveWithMoreFollowersVO {
    constructor(id, screenName, followers) {
        this.id = id;
        this.screenName = screenName;
        this.followers = followers;
    }
}