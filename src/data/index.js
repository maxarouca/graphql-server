const videos = [
  {
    id: "a",
    title: "Loren Ipsun",
    duration: 180,
    watched: false
  },
  {
    id: "b",
    title: "Loren Ipsun Dolar",
    duration: 360,
    watched: false
  }
];

export const getVideoByID = id =>
  new Promise(resolve => {
    const [video] = videos.filter(video => video.id === id);
    resolve(video);
  });

export const getVideos = () =>
  new Promise(resolve => {
    resolve(videos);
  });

export const createVideo = ({ title, duration, watched }) => {
  const newVideo = {
    id: new Buffer(title, "utf-8").toString("base64"),
    title,
    duration,
    watched
  };

  videos.push(newVideo);

  return newVideo;
};

export const getObjectById = (type, id) => {
  const types = {
    video: getVideoByID
  };

  return types[type](id);
};
