import NewsItem from "./newsitem";

export default function NewsBlock() {
  let articles = [
    {
      id: 0,
      title: "Skiers rescued from 100-foot cliff at Summit at Snoqualmie",
      agency: "Snoqualmie Valley Record",
      location:
        "https://www.valleyrecord.com/news/skiers-rescued-from-100-foot-cliff-at-summit-at-snoqualmie/",
      summary:
        "Late night rescue shuts down part of I-90 when skiers duck ropes at Summit at Snoqualmie, ending up on a cliff above the interstate.",
    },
    {
      id: 1,
      title: "First Responders Rescue Horse on North Bend Trail",
      location:
        "https://www.seattletimes.com/seattle-news/first-responders-rescue-horse-on-north-bend-trail/",
      agency: "The Seattle Times",
      summary:
        "King County Search and Rescue and Washington State Animal Response Team work together to save a horse that fell through a bridge in the Middle Fork valley.",
    },
    {
      id: 2,
      title:
        "King County Sheriff's Office Rescues Hikers Stuck at Franklin Falls",
      location:
        "https://www.kiro7.com/news/local/king-county-sheriffs-office-rescues-hikers-stuck-franklin-falls/LFWC7723PNFOTLDHU3IJFQ7F5Q/",
      agency: "KIRO 7 News",
      summary:
        "King County Search and Rescue saves two hikers who became stuck at Franklin Falls in the Snoqualmie Pass area.",
    },
  ];

  return (
    <div className="">
      {articles.map((article) => (
        <NewsItem
          key={article.id}
          title={article.title}
          agency={article.agency}
          location={article.location}
          summary={article.summary}
        />
      ))}
    </div>
  );
}
