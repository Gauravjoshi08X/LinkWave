const STRAPI_URL = 'http://localhost:1337';

export async function fetchNews() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/News?populate=*&sort=uploaded_at:desc`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    return data.data.map(item => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      category: item.category || 'News and Blog',
      description: item.description || '',
      timestamp: item.uploaded_at || item.publishedAt?.split('T')[0] || '',
      bannerUrl: item.banner?.url ? `${STRAPI_URL}${item.banner.url}` : null,
      bannerAlt: item.banner?.alternativeText || item.title,
      bannerWidth: item.banner?.width || 800,
      bannerHeight: item.banner?.height || 400
    })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
}

export async function fetchSingleNews(documentId) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/News?filters[documentId][$eq]=${documentId}&populate=*`);
    if (!response.ok) throw new Error('News not found');
    const data = await response.json();
    
    if (!data.data || data.data.length === 0) return null;
    
    const item = data.data[0];
    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      category: item.category || 'News and Blog',
      description: item.description || '',
      timestamp: item.uploaded_at || item.publishedAt?.split('T')[0] || '',
      bannerUrl: item.banner?.url ? `${STRAPI_URL}${item.banner.url}` : null,
      bannerAlt: item.banner?.alternativeText || item.title,
      bannerWidth: item.banner?.width || 800,
      bannerHeight: item.banner?.height || 400
    };
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return null;
  }
}