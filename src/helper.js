import axios from 'axios';
import publicIp from 'public-ip';

export const get_movie_list = async query => {
  if (!query) {
    return 'title is required';
  }
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=e7e8f46&s=${query}`,
    );

    if (res.data.Error) {
      console.log(
        `${res.data.Error}, please use quotes to search movies eg: 'the irishman'`,
      );

      return null;
    }

    if (res.data.Search) {
      const movies = res.data.Search;
      return movies;
    }

    return null;
  } catch (err) {
    console.log('😥 movie not found');
    return err;
  }
};

export const get_movie = async videoId => {
  const ipaddress = await publicIp.v4();
  console.log(`ipaddress : ${ipaddress}`);

  const ticketUrl = `https://videospider.in/getticket.php?key=${process.env.REACT_APP_KEY}&secret_key=${process.env.REACT_APP_SECRET_KEY}&video_id=${videoId}&ip=${ipaddress}`;

  try {
    const res = await axios.get(ticketUrl);
    console.log(`ticket : ${res.data}`);
    const url = `https://videospider.stream/getvideo?key=${process.env.REACT_APP_KEY}&video_id=${videoId}&ticket=${res.data}`;
    console.log(`${url}`);

    return url;
  } catch (err) {
    console.log('error', err);
  }
};
