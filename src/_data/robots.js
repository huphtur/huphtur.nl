import dotenv from 'dotenv';
import EleventyFetch from '@11ty/eleventy-fetch';

dotenv.config();

const accessToken = process.env.DARKVISITORS;

const fetchRobotsTxt = async () => {
  const url = 'https://api.darkvisitors.com/robots-txts';
  const body = JSON.stringify({
    agent_types: ['AI Assistant', 'AI Data Scraper', 'AI Search Crawler'],
    disallow: '/',
  });
  const response = await EleventyFetch(url, {
    duration: '1d',
    type: 'text',
    fetchOptions: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body,
    },
  });

  return response.toString();
};

export default async function () {
  const robotsTxt = await fetchRobotsTxt();

  return robotsTxt;
}
