import { HN_API_URL } from '../config';
import { get, set } from 'idb-keyval';

export async function getNewStories() {
  const url = `${HN_API_URL}/newstories.json`;

  if (navigator.onLine) {
    const response = await fetch(url);
    const data = await response.json();
    set('hn:newstories', data);
    return data;
  } else {
    const data = await get('hn:newstories');
    return data;
  }
}

export async function getStory(id) {
  let story = await get(`hn:${id}`);

  if (story) {
    return story;
  }

  if (navigator.onLine) {
    const url = `${HN_API_URL}/item/${id}.json`;
    const response = await fetch(url);
    const data = await response.json();
    set(`hn:${id}`, data);
    return data;
  }

  return null;
}
