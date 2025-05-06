import './blog.css';
const Blog = () => {
  const blogPosts = [
      {
          id: 1,
          date: "June 12, 2024",
          location: "Lake Serenity, Northern Region",
          title: "The One That Got Away",
          content: "Spent the morning at dawn casting near the old dock. Had a massive strike around 7:30 AM - felt like a record bass! Fought it for what felt like ages before the line snapped. Note to self: retie leaders more often. Caught 3 decent largemouths later in the day on plastic worms.",
          weather: "Sunny, 25°C"
      },
      {
          id: 2,
          date: "June 5, 2024",
          location: "Willow Creek, East Fork",
          title: "Trout Triumph",
          content: "Perfect day for fly fishing! Nailed the presentation with a #14 Elk Hair Caddis. Landed 7 rainbow trout between 12-16 inches. Released all but one for dinner. Water was crystal clear - could see the strikes coming.",
          weather: "Partly cloudy, 20°C"
      },
      {
          id: 3,
          date: "May 28, 2024",
          location: "Coastal Pier, South Harbor",
          title: "Saltwater Surprise",
          content: "Went for mackerel but ended up with a 22-inch striped bass! Hit my spoon like a freight train. Also caught a mess of bluefish that tore up my tackle. Need heavier gear next time.",
          weather: "Windy, 22°C"
      },
      {
          id: 4,
          date: "May 20, 2024",
          location: "Hidden Pond, Backwoods Trail",
          title: "Solitude and Sunfish",
          content: "Hiked 2 miles to my secret spot. Nothing big today but dozens of feisty sunfish kept it interesting. Perfect weather, not another soul around. Ate lunch on the fallen oak - best sandwich I've ever had.",
          weather: "Perfect, 24°C"
      }
  ];

  return (
      <div className="page">
          <h1 className="title">Fisherman's Journal</h1>
          <p className="subtitle">Personal adventures of mine</p>
          <div className="posts">
              {blogPosts.map(post => (
                  <article key={post.id} className="post">
                      <div className="header">
                          <div className="meta">
                              <span className="location">
                                  {post.location}
                              </span>
                              <span className="date">{post.date}</span>
                          </div>
                      </div>
                      
                      <h2 className="post-title">{post.title}</h2>
                      
                      <div className="post-weather">
                          {post.weather}
                      </div>
                      
                      <p className="post-content">{post.content}</p>
                      
                      <div className="post-footer">
                          <div className="post-signature">
                              <div className="signature-line"></div>
                              <p className="signature-text">- FishingMan244</p>
                          </div>
                      </div>
                  </article>
              ))}
          </div>
      </div>
  );
};

export default Blog;