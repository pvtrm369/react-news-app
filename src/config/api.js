const API_DOMAIN = "https://gnews.io/api/v4/search";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "d122a2761a14574f50199db7be280a7b";
export const endpointPath = (country, category) => {
  if (category === "developers") {
    return `${API_DOMAIN}?q=developers&lang=en&country=${country}&apikey=${API_KEY}`;
  } else{
    
    return `${API_DOMAIN}?q=${category}&lang=en&country=${country}&apikey=${API_KEY}`;
  }
};

export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
