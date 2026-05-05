const STRAPI_URL = 'https://sgd5f6nl-1337.inc1.devtunnels.ms';

export async function fetchNews() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/News?populate=*`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    return data.data.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      timestamp: item.timestamp,
      bannerUrl: item.banner?.url 
        ? `${STRAPI_URL}${item.banner.url}`
        : null,
      bannerAlt: item.banner?.alternativeText || item.title,
      bannerWidth: item.banner?.width || 400,
      bannerHeight: item.banner?.height || 300
    })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
}