const ContentBox = function (title, info, img) {
  return (
    <div>
      <img src={img} loading="lazy" alt="svg" />
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default ContentBox;
