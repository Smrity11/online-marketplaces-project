const DigitalTool = () => {
  const digitalImg = [
    "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_ads-512.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png",
    "https://play-lh.googleusercontent.com/Uku36RjbFRupjCW6a8py_Jvk9PY0xYdGK-zXyrGxFrcYEq_dKVfFse4ZRY_0LTOFtvdD=w600-h300-pc0xffffff-pd",
    "https://w7.pngwing.com/pngs/225/846/png-transparent-hubspot-inc-inbound-marketing-account-based-marketing-sales-marketing-service-orange-accountbased-marketing-thumbnail.png",
    "https://s3.amazonaws.com/www-inside-design/uploads/2018/10/mailchimp-sq.jpg",
    "https://logowik.com/content/uploads/images/semrush85.logowik.com.webp",
    "https://logos-world.net/wp-content/uploads/2021/04/Hootsuite-Logo-700x394.png",
  ];
  return (
    <div>
      <div>
        <p className="text-3xl font-bold text-center my-10">
          digital marketing tools
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
              <div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTool;
