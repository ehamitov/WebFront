import { CategoryComponent } from './category/category.component';

export interface Product{
  id:number;
  category_id:number;
  name:string,
  price:number;
  description:string,
  full:string,
  image: string,
  link:string,
  buttonn:string
}

export const products = [
  {
    id: 1,
    category_id: 1,
    name: 'Microsoft Surface Laptop Go - 12.4" Touchscreen - Intel Core i5 - 8GB Memory - 128GB SSD - Ice Blue',
    image:'https://images-na.ssl-images-amazon.com/images/I/61Cycl-ymmL._AC_SL1500_.jpg',
    rating:'4.6',
    link:'https://www.amazon.com/Microsoft-Surface-Laptop-Go-Touchscreen/dp/B08GZKZ95X/ref=sr_1_7?dchild=1&keywords=laptop&qid=1614102483&sr=8-7',
    price: 674,
    description: 'Surface Laptop Go display has rounded corners within a standard rectangle. When measured as a standard rectangular shape the screen is 12.45” diagonally (actual viewable area is less). Some accessories and software sold separately.',
    full:'Make the most of every day with the sleek style, performance, and all-day battery life you need in our lightest Surface Laptop, all at an exceptional value. Ultra-light and portable profile, the apps you use every day, premium materials, and a choice of must-have colors will make this your go-to laptop.'
  },
  {
    id: 2,
    category_id: 1,
    name: 'Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H 6-Core, NVIDIA GeForce GTX 1660 Ti, 15.6" FHD 1080p 144Hz, 16GB RAM, 256GB SSD, CNC Aluminum, Chroma RGB Lighting, Thunderbolt 3, Black',
    image:'https://images-na.ssl-images-amazon.com/images/I/71r5254QPZL._AC_SL1500_.jpg',
    rating:'4.6',
    link:'https://www.amazon.com/Razer-Blade-Base-Gaming-Laptop/dp/B086MGY9TZ/ref=sr_1_2?dchild=1&keywords=laptop&qid=1614102483&sr=8-2',
    price: 1370,
    description: 'More power: The 10th Gen Intel Core i7-10750H processor provides the ultimate level of performance with up to 5.0 GHz max turbo and 6 cores.',
    full:'Supercharger: The NVIDIA GeForce GTX 1660 Ti graphics is a blazing-fast supercharger for today’s most popular games More frames: Incredible performance paired with the fast 144Hz 15. 6" full HD thin bezel display helps edge out the win.'
  },
  {
    id: 3,
    category_id: 1,
    name: 'Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6" Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6, DTS X Ultra,Backlit Keyboard,AN515-55-59KS',
    image:'https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg',
    rating:'4.6',
    link:'https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg',
    price: 820,
    description: '10th Generation Intel Core i5-10300H Processor (Up to 4.5GHz)',
    full:'10th Generation Intel Core i5-10300H Processor (Up to 4.5GHz). 15" Full HD Widescreen IPS LED-backlit 144Hz Refresh Display | NVIDIA GeForce GTX 1650 Ti Graphics with 4 GB of dedicated GDDR6 VRAM'
  },
  {
    id: 4,
    category_id: 1,
    name: 'Lenovo IdeaPad 3 Intel i5-1035G1 Quad Core 12GB RAM 256GB SSD 15.6-inch Touch Screen Laptop',
    image:'https://images-na.ssl-images-amazon.com/images/I/61DrCbSkM4L._AC_SL1500_.jpg',
    rating:'4.6',
    link:'https://www.amazon.com/Lenovo-IdeaPad-i5-1035G1-15-6-inch-Screen/dp/B08NXSJVCR/ref=sr_1_4?dchild=1&keywords=laptop&qid=1614102483&sr=8-4',
    price: 490,
    description: '10th generation Intel Core i5-1035G1 processor. Dual-core, four-way intelligent processing performance. Intel Turbo Boost Technology delivers dynamic extra power when you need it, while increasing energy efficiency when you dont',
    full:'10th generation Intel Core i5-1035G1 processor. Dual-core, four-way intelligent processing performance. Intel Turbo Boost Technology delivers dynamic extra power when you need it, while increasing energy efficiency when you dont.15.6-inch touchscreen for convenient control. Tap, tap, swipe and get the most out of Windows 10. HD TruBrite technology that expands color and clarity. 1366 x 768 typical HD resolution. Supports 720p content. Energy efficient LED backlighting.'
  },
  {
    id: 5,
    category_id: 1,
    name: 'ASUS F512JA-AS34 VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray',
    image:'https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg',
    rating:'4.5',
    link:'https://www.amazon.com/ASUS-F512JA-AS34-VivoBook-i3-1005G1-Fingerprint/dp/B0869L1326/ref=sr_1_5?dchild=1&keywords=laptop&qid=1614102483&sr=8-5',
    price: 395,
    description: '15.6 inch Full HD (1920x1080) 4-way NanoEdge bezel display with a stunning 88% screen-to-body ratio',
    full:'15.6 inch Full HD (1920x1080) 4-way NanoEdge bezel display with a stunning 88% screen-to-body ratio.Compatible with Google Classroom; run Google Classroom on Microsoft Edge or Internet Explorer 11Latest 10th Gen Intel Core i3-1005G1 CPU (4M Cache, up to 3.4 GHz)'
  },
  {
    id: 6,
    category_id: 2,
    name: 'Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State Drive - Black',
    image:'https://images-na.ssl-images-amazon.com/images/I/614L9gKcksL._AC_SL1011_.jpg',
    rating:'4.3',
    link:'https://www.amazon.com/Lenovo-IdeaPad-Gaming-Laptop-GeForce/dp/B08N5TQD6M/ref=sr_1_6?dchild=1&keywords=laptop&qid=1614102483&sr=8-6',
    price: 299,
    description: '9th Gen Intel Core i5-9300HF mobile processor',
    full:'9th Gen Intel Core i5-9300HF mobile processor15.6" Full HD display , 1920 x 1080 resolution8GB system memory for advanced multitasking256 GB Solid State Drive (PCI-e)NVIDIA GeForce GTX 1650 graphics'
  },
  {
    id: 7,
    category_id: 2,
    name: 'HP Chromebook 14-inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome (14a-na0010nr, Mineral Silver)',
    image:'https://images-na.ssl-images-amazon.com/images/I/91shKLxoedL._AC_SL1500_.jpg',
    rating: "3,383",
    link:'https://www.amazon.com/HP-Chromebook-14-inch-Celeron-14a-na0010nr/dp/B08529TZMC/ref=sr_1_1?dchild=1&keywords=laptop&qid=1614099055&sr=8-1',
    price: 195,
    description: 'Good laptop',
    full:'Google Play Store: The millions of Android apps you know and love on your phone and tablet can now run on your Chrome device without compromising their speed, simplicity or security.Sleek, responsive design: Keep going comfortably with the backlit keyboard and multi-touch touchpad that supports four finger gestures set in a sleek design for moving from room to room or on the road.'
  },
  {
    id: 8,
    category_id: 2,
    name: '2020 Asus TUF 15.6" FHD Premium Gaming Laptop, 10th Gen Intel Quad-Core i5-10300H, 16GB RAM, 1TB SSD, NVIDIA GeForce GTX 1650Ti 4GB GDDR6, RGB Backlit Keyboard, Windows 10 Home',
    image:'https://images-na.ssl-images-amazon.com/images/I/714U9oCvrML._AC_SL1000_.jpg',
    rating:'4.6',
    link:'https://www.amazon.com/Premium-Quad-Core-i5-10300H-GeForce-Keyboard/dp/B08NBNLHRD/ref=sr_1_9?dchild=1&keywords=laptop&qid=1614102483&sr=8-9',
    price: 779,
    description: '10th Gen Intel Core i5-10300H Processor (Quad-Core, 2.5 GHz Up to 4.5GHz, 8MB Cache), 16GB DDR4 Memory 3200 MHz, 1024GB SSD.',
    full:'10th Gen Intel Core i5-10300H Processor (Quad-Core, 2.5 GHz Up to 4.5GHz, 8MB Cache), 16GB DDR4 Memory 3200 MHz, 1024GB SSD.15.6" (16:9) LED-backlit FHD (1920x1080) 60Hz Anti-Glare Panel with 45% NTSC, NVIDIA GeForce GTX 1650Ti 4GB GDDR6'
  },
  {
    id: 9,
    category_id: 2,
    name: '2020 HP 17.3" HD+ Premium Laptop Computer, AMD Ryzen 5 3500U Quad-Core Up to 3.7GHz, 12GB DDR4 RAM, 256GB SSD, DVDRW, AMD Radeon Vega 8, 802.11ac WiFi, Bluetooth 4.2, USB 3.1, HDMI, Black, Windows 10',
    image:'https://images-na.ssl-images-amazon.com/images/I/71P4GrZ1WJL._AC_SL1500_.jpg',
    rating:'4.5',
    link:'https://www.amazon.com/HP-Computer-Quad-Core-802-11ac-Bluetooth/dp/B082NZX92C/ref=sr_1_11?dchild=1&keywords=laptop&qid=1614102483&sr=8-11',
    price: 605,
    description: 'Powered by latest AMD Ryzen 5 3500U Quad-Core Processor @ 2.1GHz (4 Cores, up to 3.7GHz, 4MB Cache).',
    full:'Powered by latest AMD Ryzen 5 3500U Quad-Core Processor @ 2.1GHz (4 Cores, up to 3.7GHz, 4MB Cache).17.3" diagonal HD+ SVA BrightView WLED-backlit 60% NTSC, 220 nits brightness (1600 x 900) Display; AMD Radeon Vega 8 Graphics'
  },
  {
    id: 10,
    category_id: 2,
    name: '2020 Lenovo IdeaPad Laptop ComputerAMD A6-9220e 1.6GHz 4GB Memory 64GB eMMC Flash Memory 14" AMD Radeon R4 AC WiFi Microsoft Office 365 Platinum Gray Windows 10 Home',
    image:'https://images-na.ssl-images-amazon.com/images/I/51OiRBclsxL._AC_SL1000_.jpg',
    rating:'4',
    link:'https://www.amazon.com/Lenovo-IdeaPad-ComputerAMD-A6-9220e-Microsoft/dp/B081GMHQLR/ref=sr_1_12?dchild=1&keywords=laptop&qid=1614102483&sr=8-12',
    price: 190,
    description: 'Processor & Memory✍ AMD A6-9220e r 1. 6GHz ✍ 4GB DDR4 Memory Operating System✍ ',
    full:'Processor & Memory✍ AMD A6-9220e r 1. 6GHz ✍ 4GB DDR4 Memory Operating System✍ Microsoft Windows 10 Home (64 bit) Drives✍ 64GB✍ NO DVD drive Display & Resolution✍ 14" display✍ 1366 x 768 Communications✍ Wireless-AC Graphics (integrated)✍ AMD Radeon R4 integrated graphics Ports & Slots✍ 2 x USB 3. 0✍ 1x HDMI✍ 1x Media Card Reader✍ 1xCombo microphone and headphones audio jack Battery✍ 35 WHr Additional Information✍ Dimensions: 12. 9 x 9. 3 x 0. 7" in✍ Approximate Weight: 3. 1 pounds'
  },
  {
    id:11,
    category_id: 3,
    name:'Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black',
    image:'https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._AC_SL1500_.jpg',
    rating:'4.6',
    link:'https://www.amazon.com/Google-Pixel-4a-Unlocked-Smartphone/dp/B08CFSZLQ4/ref=sr_1_1?crid=87MKY2UUV90L&dchild=1&keywords=smartphone&qid=1614702083&sprefix=smartp%2Caps%2C411&sr=8-1',
    price:528,
    description:'New, unlocked Android phone gives you the flexibility to change carriers and choose your own data plan; works with Verizon, T-Mobile, Sprint, AT&T, and other major carriers',
    full:'New, unlocked Android phone gives you the flexibility to change carriers and choose your own data plan; works with Verizon, T-Mobile, Sprint, AT&T, and other major carriers.Capture great photos using your cell phone on the 12 MP dual pixel rear camera with features like Live HDR+, Night Sight, and Portrait Mode; share photos directly from the viewfinder of your Pixel camera to Google and popular third party apps',

  },
  {
    id:12,
    category_id: 3,
    name:'Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy',
    image:'https://images-na.ssl-images-amazon.com/images/I/61Iol44%2B28L._AC_SL1000_.jpg',
    rating:'4.6',
    link:'https://www.amazon.com/Samsung-Galaxy-G780F-Unlocked-Android/dp/B08KYKX7Y4/ref=sr_1_20?dchild=1&keywords=smartphone&qid=1619079432&sr=8-20',
    price:715,
    description:'Pro-Grade Camera: The new Samsung Galaxy S20 FE mobile phone features high-powered pro lenses for beautiful portraits, stunning landscapes and crisp close-ups in any light with its 3X optical zoom',
    full:'Pro-Grade Camera: The new Samsung Galaxy S20 FE mobile phone features high-powered pro lenses for beautiful portraits, stunning landscapes and crisp close-ups in any light with its 3X optical zoom.30X Space Zoom: Whether you want your cellphone to zoom in close from afar or magnify details of something nearby, 30X Space Zoom gives you the power to get closer',

  },
  {
    id:13,
    category_id: 3,
    name:'Samsung Galaxy A10s A107M - 32GB, 6.2" HD+ Infinity-V Display, 13MP+2MP Dual Rear +8MP Front Cameras, GSM Unlocked Smartphone - Blue',
    image:'https://images-na.ssl-images-amazon.com/images/I/51ME-ADMjRL._AC_SL1000_.jpg',
    rating:'4.3',
    link:'https://www.amazon.com/Samsung-Galaxy-A10s-A107M-Infinity-V/dp/B07XQHM1CV/ref=sr_1_3?crid=87MKY2UUV90L&dchild=1&keywords=smartphone&qid=1614702840&sprefix=smartp%2Caps%2C411&sr=8-3',
    price:500,
    description:'Compatible with Most GSM Carriers like T-Mobile, AT&T, MetroPCS, etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost International Model - No warranty in US.',
    full:'Compatible with Most GSM Carriers like T-Mobile, AT&T, MetroPCS, etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost International Model - No warranty in US..Dual SIM, Unlocked, Android 9.0 (Pie), Samsung One UI; 32GB storage expandable with SD card up to 512GB + 2 GB RAM',

  },
  {
    id:14,
    category_id: 3,
    name:'Xiaomi Redmi Note 9 Pro 128GB + 6GB RAM, 6.67" FHD+ DotDisplay, 64MP AI Quad Camera, Qualcomm Snapdragon 720G LTE Factory Unlocked Smartphone - International Version (Interstellar Grey)',
    image:'https://images-na.ssl-images-amazon.com/images/I/61VTwVvavNL._AC_SL1000_.jpg',
    rating:'4.5',
    link:'https://www.amazon.com/Xiaomi-DotDisplay-Qualcomm-Snapdragon-Smartphone/dp/B0881TZRTZ/ref=sr_1_13?crid=87MKY2UUV90L&dchild=1&keywords=smartphone&qid=1614702840&sprefix=smartp%2Caps%2C411&sr=8-13',
    price:280,
    description:'6.67” FHD+ DotDisplay 2340x1080 FHD+ - Corning Gorilla Glass 5 front and TÜV Rheinland low blue light certification - Splash-proof nano coating',
    full:'6.67” FHD+ DotDisplay 2340x1080 FHD+ - Corning Gorilla Glass 5 front and TÜV Rheinland low blue light certification - Splash-proof nano coating.128GB + 6GB RAM - Snapdragon 720G High-performance octa-core processor - 5020mAh Ultra high capacity battery - 2.4G Wi-Fi',

  },
  {
    id:15,
    category_id: 3,
    name:'New Apple iPhone 12 Pro (512GB, Graphite) [Locked] + Carrier Subscription',
    image:'https://m.media-amazon.com/images/I/71YlH-4MUQL._FMwebp__.jpg',
    rating:'3.9',
    link:'https://www.amazon.com/Apple-iPhone-Graphite-Carrier-Subscription/dp/B08L5QPVH7/ref=sr_1_7?crid=3KDYLMTDYY17P&dchild=1&keywords=iphone&qid=1614703197&sprefix=iph%2Caps%2C364&sr=8-7#',
    price:999,
    description:'OFFER INCLUDES: An Apple iPhone and a wireless plan with unlimited data/talk/text',
    full:'OFFER INCLUDES: An Apple iPhone and a wireless plan with unlimited data/talk/text.WIRELESS PLAN: Unlimited talk, text, and data with mobile hotspot, nationwide coverage, and international reach. No long-term contract required.',

  },
  {
    id: 16,
    category_id: 4,
    name: 'Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41BS3eLBuPL._AC_.jpg',
    rating: '4.7',
    link: '720p-Smart/dp/B07FPP6TB5/ref=sr_1_1_sspa?dchild=1&keywords=tv&qid=1619033009&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQlQ3NTkyM1VQR05JJmVuY3J5cHRlZElkPUEwNjYwNTE4Q0s4ODQ1M1VVOVlSJmVuY3J5cHRlZEFkSWQ9QTA2MjQ3MjgzRDZHWVBBWkgyWDNTJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9d',
    price: 140,
    description: 'Insignia HD Smart TV – Fire TV Edition delivers 720p picture quality with deep blacks and rich colors.',
    full: 'Insignia HD Smart TV is a new generation of television featuring the Fire TV experience built-in and including a Voice Remote with Insignia delivers a superior TV experience that gets smarter everyday. The Voice Remote with Alexa lets you do everything you\'d expect from a remote—plus, easily launch apps, search for titles, play music, switch inputs, control smart home devices, and more, using just your voice.'
  },
  {
    id:17,
    category_id: 4,
    name: 'Toshiba 43LF421U21 43-inch Smart HD 1080p TV - Fire TV Edition, Released 2020',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg',
    rating:'4,7' ,
    link:'https://www.amazon.com/All-New-Toshiba-43LF421U21-43-inch-Smart/dp/B086VR9J8Q/ref=sr_1_2_sspa?dchild=1&keywords=tv&qid=1619035111&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNFNXVUw5RzZYOVBYJmVuY3J5cHRlZElkPUEwNzkyMzU2MkRCUzU0NzlYODFHTiZlbmNyeXB0ZWRBZElkPUEwMDU4NTEzMjFaMkZYMFZCRllEUiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=' ,
    price: 300,
    description: 'Fire TV Edition brings together live-over-the air TV and your streaming content on the home screen. Connect any HD antenna (sold separately) to watch live over-the-air TV or stream movies and shows from Disney+, Netflix, YouTube, Prime Video, Hulu, HBO and more.',
    full: 'Toshiba Full HD Smart TV is a new generation of television featuring the Fire TV experience built-in and including a Voice Remote with Alexa. Toshiba delivers a superior TV experience that gets smarter everyday and access to all the movies and TV shows you love. The Voice Remote with Alexa lets you do everything you\'d expect from a remote—plus, easily launch apps, search for titles, play music, switch inputs, control smart home devices, and more, using just your voice.',
  },
  {
    id:18,
    category_id: 4,
    name:'TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model' ,
    image:'https://images-na.ssl-images-amazon.com/images/I/714hn7q7WxL._AC_SL1500_.jpg' ,
    rating:'4,7' ,
    link: 'https://www.amazon.com/TCL-4K-Smart-LED-50S435/dp/B08DHFX4FV/ref=sr_1_3?dchild=1&keywords=tv&qid=1619035210&sr=8-3',
    price:400 ,
    description: 'Dimensions (W x H x D): TV without stand: 44. 1 X 25. 7 X 3. 2 inches, TV with stand: 44. 1 X 28 X 8 inches',
    full: 'The 4-Series Roku TV delivers stunning 4K picture quality with four times the resolution of Full HD for enhanced clarity and detail, as well as endless entertainment with thousands of streaming channels. High dynamic range (HDR) technology delivers bright and accurate colors for a lifelike viewing experience. In addition, your favorite HD shows, movies, and sporting events are upscaled to near Ultra HD resolution with 4K Upscaling. The simple, personalized home screen allows seamless access thousands of streaming channels, plus your cable box, Blu-ray player, gaming console, and other devices without flipping through inputs or complicated menus. The super-simple remote—with about half the number of buttons on a traditional TV remote—puts you in control of your favorite entertainment.\n',
  },
  {
    id:19,
    category_id: 4,
    name: 'VIZIO 40-Inch V-Series - 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming (V405-H69, 2020)',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81NCnG8UvYL._AC_SL1500_.jpg',
    rating:'4,3' ,
    link: 'https://www.amazon.com/VIZIO-39-5-Diag-HDR-Smart/dp/B08BCBJP71/ref=sr_1_5?dchild=1&keywords=tv&qid=1619035210&sr=8-5',
    price:305 ,
    description: 'Dolby Vison HDR Dolby Vision transforms your TV experience with dramatic imaging – incredible brightness, contrast, and color that bring entertainment to life before your eyes. In addition, this TV supports HDR10+ and HLG high dynamic range formats.',
    full:'Discover the wonder of 4K entertainment with the all-new VIZO V-Series 4K HDR Smart TV. The feature-packed V-Series combines 4K Ultra HD and full array backlighting with Dolby Vision high dynamic range and the lightning-quick IQ Active processor to achieve breathtaking picture quality and performance. The V-Gaming Engine with Auto Game Mode, meanwhile, makes the latest console games more responsive at the lowest input lag. Fill that beautiful 4K screen with the latest entertainment as you stream, control and share like never before' ,
  }

];
