const data = [
  {
    id: 1,
    title: "Istanbul",
    desc: "The largest city in Turkey, Istanbul straddles the Bosporus Strait, connecting Europe and Asia. It boasts historical landmarks like Hagia Sophia and Topkapı Palace, alongside vibrant markets and a buzzing nightlife scene.",
    image:
      "https://media.istockphoto.com/id/527863033/nl/foto/sunset-in-istanbul.jpg?s=612x612&w=0&k=20&c=FZ43JCQ3l2mo6p2azsZtMZet8mhBEwm5qcnXpiafK-Q=",
  },
  {
    id: 2,
    title: "İzmir",
    desc: "Turkey's third-largest city, İzmir, is known for its beautiful Aegean coast, lively beaches, and ancient sites like Ephesus. It offers a relaxed atmosphere, delicious seafood cuisine, and a vibrant cultural scene.",
    image:
      "https://media.istockphoto.com/id/479786994/nl/foto/clock-tower-in-izmir-stock-image.jpg?s=612x612&w=0&k=20&c=BGuIwtvHVJJx6k3i30jGTfwsIYwscDkqS7D-75DROk8=",
  },
  {
    id: 3,
    title: "Ankara",
    desc: "The capital of Turkey, Ankara, is a modern city with historical significance. Home to the Anıtkabir, the mausoleum of Mustafa Kemal Atatürk, the founder of the Turkish Republic, it also offers museums, historical sites, and a diverse culinary scene.",
    image:
      "https://media.istockphoto.com/id/504129131/nl/foto/havadan-ankara-kalesi-2.jpg?s=612x612&w=0&k=20&c=phy5ujPrYBfgVqC7JEa0vZkdTPKvieKJg53--5B4BVk=",
  },
  {
    id: 4,
    title: "Bursa",
    desc: "Bursa, Turkey's former Ottoman capital, is known for its historical mosques, vibrant bazaars, and stunning views. It's also famous for its thermal baths and nearby Mount Uludağ, a popular ski resort in winter.",
    image:
      "https://media.istockphoto.com/id/471850687/nl/foto/bursa-grand-mosque-or-ulu-cami.jpg?s=612x612&w=0&k=20&c=3m-1M4L5LZOcXas9RmUUMX-HimCJakgNpyP1FPouP_s=",
  },
  {
    id: 5,
    title: "Antalya",
    desc: "A major tourist destination, Antalya is renowned for its beautiful beaches, charming marinas, and historical sites. It offers a blend of ancient history, stunning natural scenery, and luxurious resorts, making it a popular choice for beach vacations.",
    image:
      "https://media.istockphoto.com/id/1682186185/nl/foto/alanya-aerial-panoramic-view-turkey.jpg?s=612x612&w=0&k=20&c=WwYqAjZXpU0TP0t3uMWPUxG_vUDtSwhdt-0oazZjhjU=",
  },
  {
    id: 6,
    title: "Adana",
    desc: "Adana, located in southern Turkey, is known for its rich history, delicious cuisine, and unique cultural heritage. It boasts historical sites like the Misis Stone Bridge and the Adana Archaeological Museum.",
    image:
      "https://media.istockphoto.com/id/1164889653/nl/foto/seyhan-rivier-en-sabanc%C4%B1-moskee-in-adana-stad-turkije.jpg?s=612x612&w=0&k=20&c=Vg7ZTp-OGLI8WYtjpnJ3U8ZkI8vMPbDwjXPfJznGPkY=",
  },
  {
    id: 7,
    title: "Trabzon",
    desc: "Located on the Black Sea coast, Trabzon is a beautiful city with a rich history. Explore the UNESCO World Heritage Site Hagia Sophia of Trabzon, wander through the vibrant bazaars, and enjoy the stunning natural beauty of the surrounding area.",
    image:
      "https://media.istockphoto.com/id/477868797/nl/foto/long-lake-in-trabzon.jpg?s=612x612&w=0&k=20&c=OLp5rwjRgZga6VTYXBIGEbqzJAtZUFFX40jc5jXbqvQ=",
  },
  {
    id: 8,
    title: "Konya",
    desc: "Konya, a historic city in central Turkey, was once the capital of the Seljuk Sultanate. Visit the Mevlana Museum, dedicated to the famous Sufi mystic Rumi, and explore the iconic Seljuk architecture like the Alaeddin Mosque.",
    image:
      "https://media.istockphoto.com/id/1301711951/nl/foto/uitzicht-op-het-mevlana-museum.jpg?s=612x612&w=0&k=20&c=0dt90Ieqm3fYdp1FpbjtlOjOqqVuzwIFDPax6CD6y_s=",
  },
  {
    id: 9,
    title: "Mardin",
    desc: "Mardin is a picturesque city in southeastern Turkey known for its historic architecture, including its iconic limestone buildings. It offers a unique blend of cultures and traditions, with influences from Arab, Kurdish, and Assyrian communities.",
    image:
      "https://media.istockphoto.com/id/511746788/photo/historical-city-mardin.jpg?s=612x612&w=0&k=20&c=cRWe4ZUFMX81aZfNtOT2klYxBXY5IwJoGumHuzSzZn4=",
  },
  {
    id: 10,
    title: "Gaziantep",
    desc: "Gaziantep, often referred to as Antep, is famous for its culinary heritage, including dishes like baklava and kebabs. It also boasts well-preserved medieval architecture and historical sites such as the Gaziantep Castle.",
    image:
      "https://media.istockphoto.com/id/1045659638/photo/aerial-view-of-gaziantep-city.jpg?s=612x612&w=0&k=20&c=5XG_JlIW7CmIzZkWM5D2vgpIi6j0Y5Bav4MKBOQViZ8=",
  },
  {
    id: 11,
    title: "Eskişehir",
    desc: "Eskişehir is a vibrant university city known for its cultural events, green spaces, and Ottoman-era architecture. Explore attractions like the Odunpazarı district, filled with traditional wooden houses, and the Porsuk River.",
    image:
      "https://media.istockphoto.com/id/1046383806/photo/eski%C5%9Fehir-all-aspects.jpg?s=612x612&w=0&k=20&c=WhbZd_z26kllO944LoFamTI6pjIhBsA1sCkwURr7GD4=",
  },
  {
    id: 12,
    title: "Şanlıurfa",
    desc: "Şanlıurfa, often simply called Urfa, is a city rich in history and mythology. It's known for its ancient sites such as Göbekli Tepe, considered one of the oldest temples in the world, and the Pool of Sacred Fish (Balıklıgöl).",
    image:
      "https://media.istockphoto.com/id/1366840400/photo/sanliurfa-turkey-balikligol-halilurrahman-mosque-sanliurfa.jpg?s=612x612&w=0&k=20&c=Eq3XbTsNZ3vaotLeY8mI6K-m75URGjZjgZq2sPaySoQ=",
  },
];

export default data;
