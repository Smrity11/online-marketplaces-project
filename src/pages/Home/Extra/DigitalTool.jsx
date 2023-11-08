const DigitalTool = () => {
  const digitalImg = [
    "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_ads-512.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png",
    "https://play-lh.googleusercontent.com/Uku36RjbFRupjCW6a8py_Jvk9PY0xYdGK-zXyrGxFrcYEq_dKVfFse4ZRY_0LTOFtvdD=w600-h300-pc0xffffff-pd",
    "https://w7.pngwing.com/pngs/225/846/png-transparent-hubspot-inc-inbound-marketing-account-based-marketing-sales-marketing-service-orange-accountbased-marketing-thumbnail.png",
    "https://s3.amazonaws.com/www-inside-design/uploads/2018/10/mailchimp-sq.jpg",
    "https://logowik.com/content/uploads/images/semrush85.logowik.com.webp",
    "https://logos-world.net/wp-content/uploads/2021/04/Hootsuite-Logo-700x394.png",
    "https://w7.pngwing.com/pngs/271/861/png-transparent-social-media-buffer-blog-purchasing-marketing-social-media-angle-plan-logo.png"
  ];
  return (
    <div className="my-36">
      <div>
        <p className="text-3xl font-bold text-center my-24">
          Digital Marketing Tools
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center  px-6 md:px-10 lg:px-28 gap-11">
          {digitalImg.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl h-[150px] w-[150px] grid items-center justify-center"
            >
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={image} />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-center items-center my-10 lg:px-7">
              <div className="space-y-4">
              <p><span className="text-blue-950 font-bold text-[23px] ">Google Analytics : </span> Provides in-depth website and app analytics to track user behavior, traffic sources, and more.</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">Google Ads : </span> Allows you to create and manage pay-per-click (PPC) advertising campaigns on Googles search and display networks.</p>
                <p><span className="text-blue-950 font-bold text-[23px] "> Facebook Ads Manager : </span> Enables you to create and manage targeted advertising campaigns on Facebook and Instagram.</p>
                <p> <span className="text-blue-950 font-bold text-[23px] ">HubSpot : </span> An inbound marketing and sales platform that includes email marketing, CRM, and automation tools.</p>
              </div>
              <div className="space-y-4">
              <p><span className="text-blue-950 font-bold text-[23px] ">HubSpot : </span> A popular email marketing service that offers email campaigns, automation, and audience insights.</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">SEMrush : </span> Provides tools for keyword research, competitor analysis, SEO audits, and backlink tracking.</p>
                <p> <span className="text-blue-950 font-bold text-[23px] ">Hootsuite : </span>A social media management platform that allows scheduling posts, monitoring mentions, and analyzing social media performance.</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">Buffer : </span>Similar to Hootsuite, Buffer helps schedule social media posts and provides analytics to measure engagement.</p>
              </div>
              </div>
    </div>
  );
};

export default DigitalTool;
