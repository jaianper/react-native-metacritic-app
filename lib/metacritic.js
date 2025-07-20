export async function getLatestGames() {
    const LATEST_GAMES =
      "https://backend.metacritic.com/finder/metacritic/web?apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u&sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2025&offset=0&limit=24";
  
    const rawData = await fetch(LATEST_GAMES);
    const json = await rawData.json();
  
    const {
      data: { items },
    } = json;
  
    return items.map((item) => {
      const { description, slug, releaseDate, image, criticScoreSummary, title } =
        item;
      const { score } = criticScoreSummary;
  
      // crea la imagen
      const { bucketType, bucketPath } = image;
      const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;
  
      return {
        description,
        releaseDate,
        score,
        slug,
        title,
        image: img,
      };
    });
  }
  
  export async function getGameDetails(slug) {
    const GAME_DETAILS = `https://backend.metacritic.com/games/metacritic/${slug}/web?apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u&componentName=product&componentDisplayName=Product&componentType=Product`;
    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();
    //const { components } = json;
    const { title, description, criticScoreSummary, images } = json.data.item;
    const { score } = criticScoreSummary;
  
    // get the card image
    const cardImage = images.find((image) => image.typeName === "cardImage");
    const { bucketType, bucketPath } = cardImage;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    /*const GAME_REVIEWS = `https://backend.metacritic.com/reviews/metacritic/critic/games/${slug}/web?apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u&offset=0&limit=50&filterBySentiment=all&sort=score&componentName=critic-reviews&componentDisplayName=critic+Reviews&componentType=ReviewList`;
    const rawReviews = await fetch(GAME_REVIEWS);
    const jsonReviews = await rawReviews.json();
  
    // get the reviews
    const reviews = jsonReviews.data.items.map((review) => {
      const { quote, score, date, publicationName, author } = review;
      return { quote, score, date, publicationName, author };
    });*/
  
    return {
      img,
      title,
      slug,
      description,
      score,
      //reviews,
    };
  }