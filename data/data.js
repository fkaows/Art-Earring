const PRODUCTS = [
  {
    id: "1",
    title: "Blue Zircon Dangle",
    description: "Stunning and scintillating - these blue zircon crystals shine with brilliance as they captivate and capture your own natural beauty. Stainless steel light black ion plated section above the blue zircon features two clear crystals. ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1041/8074/Blue_Zircon_Emerald_Cut_Dangle__16240.1550991548.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1041/8075/Blue_Zircon_Emerald_Cut_Dangle_tk2848__a__25348.1550991555.jpg?c=2&imbypass=on',
    price: 16.75
  },
  {
    id: "2",
    title: "Crystal Ice Skate",
    description: "This Ice skate Pendant Necklace is an Eye Catcher. Made of Lead Free Metal and finished with a high quality of Rhodium Plating. This pendant Features .4ct of round 1.5mm clear crystals in a pave setting. ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1580/4019/E50190R-C01-1-xl__56625.1525994523.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1580/5677/E50190R-C01-2__49215.1526186216.jpg?c=2&imbypass=on',
    price: 21.00
  },
  {
    id: "3",
    title: "Teardrop Thread ",
    description: "A teardrop design accents the ends of these delicate, stainless steel drop earrings. Fashioned in a versatile design, this piece will last you for years to come. ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1435/3874/E01873A-V00-1-lg__47452.1525994492.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1435/5667/E01873A-V00-2__56195.1526081669.jpg?c=2&imbypass=on',
    price: 17.50
  },
  {
    id: "4",
    title: "Women's Heart   ",
    description: "This beautiful set of pave heart earrings will glisten to perfection on your ears.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1553/3992/E50164R-C01-1-lg__79610.1525994518.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1553/5802/E50164R-C01-3__68383.1538425998.jpg?c=2&imbypass=on',
    price: 27.00
  },
  {
    id: "5",
    title: "Yellow Synthetic",
    description: "These women yellow topaz cubic zirconia Drop earrings are simply amazing. These fish hook earrings are made with clear round cut CZ stones set in black stainless steel.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/855/2961/EA0T-08391__71090.1478933537.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/855/8245/tk2539__a__45811.1559795427.jpg?c=2&imbypass=on',
    price: 20.95
  },
  {
    id: "6",
    title: "Silvertone Tear  ",
    description: "These Silvertone Tear Drop Earrings with Cubic Zirconia are designed to truly make your face beautiful by accessory.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1579/4018/E50189R-V01-1-lg__60500.1525994522.jpg?c=2',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1579/5776/E50189R-V01-2-lg_600x__22273.1534715972.jpg?c=2&imbypass=on',
    price: 20.00
  },
  {
    id: "7",
    title: "Zirconia Bow     ",
    description: "These Olive colored Stone Stud Earrings with a cubic zirconia bow are both classic and elegant. Dressed up or down the possibilities are endless, Accessorize with these pair of cubic zirconia earrings today! This earring set has a matching pendant too!",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1561/4000/E50172R-C42-1-lg__77537.1525994519.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1561/5774/E50172R-C42-3__69931.1533865194.jpg?c=2&imbypass=on',
    price: 33.00
  },
  {
    id: "8",
    title: "Floral Champagne",
    description: "These lovely Floral Cut Champagne Cubic Zirconia Stud Earrings will add a touch of color to your everyday wear",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1574/8275/Floral_Cut_Champagne_Cubic_Zirconia__22367.1561240452.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1574/8273/Floral_Cut_Champagne_Cubic_Zirconia2__75832.1561240452.jpg?c=2&imbypass=on',
    price: 32.00
  },
  {
    id: "9",
    title: "Shimmering Snowflake",
    description: "Backing: Fish Hook, Carat Weight: 3.1 (ct), Jewelry Plating Color: Rhodium, Materials: Cubic Zirconia, Plating Color: Rhodium Shiny, Setting Type: Prongs, Size: 32 Mm L X 23 Mm W X 6 Mm H, Stone Cut: Round, Stone Size: 6 (mm)",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1520/3959/E50059R-C01-1-lg__69284.1525994513.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1520/7877/E50059R-C01-3-lg_2048x@2x__78426.1546911083.jpg?c=2',
    price: 27.00
  },
  {
    id: "10",
    title: "Sterling Silver Princess",
    description: "These Princess cut cubic zirconia earrings will elegantly make for the perfect accessory to ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1360/3799/E01308S-S01-1-lg__13694.1525994479.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1360/7905/E01308S-S01-3-lg_600x__42031.1548188116.jpg?c=2',
    price: 23.00
  },
  {
    id: "11",
    title: "Rose Gold Delicate Curve",
    description: "A subtle touch to the perfect drop. Earrings Details: Backing: Fish Hook, Size: 80 Mm X 6 Mm W X 2 Mm H, Jewelry Plating Color: Rose Gold-tone over metal",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1447/3886/E01880A-C01-1-lg__96874.1525994494.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1447/7903/E01880A-C01-2-lg_2048x@2x__23949.1547774246.jpg?c=2',
    price: 21.00
  },
  {
    id: "12",
    title: "Pave Cubic Zirconia Drop",
    description: "Chic and glamorous, these pave drop earrings will make an attractive complement to any outfit.  ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1555/3994/E50166R-C01-1-lg__40339.1525994518.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1555/5716/x_drop_earrings2__99798.1530230732.jpg?c=2&imbypass=on',
    price: 20.00
  },
  {
    id: "13",
    title: "Silver Graduated",
    description: "Women's Silver Graduated Drop Earrings with Cubic Zirconia",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1477/3916/E01956R-C01-1-xl__69449.1525994500.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1477/7908/E01956R-C01-2-xl_600x__40399.1548274388.jpg?c=2',
    price: 19.00
  },
  {
    id: "14",
    title: "Bridal Earrings in Peridot",
    description: "This earring set exudes elegance. ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1551/3990/E50163R-C41-1-lg__36042.1525994518.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1551/7785/E50163R-C41-2-lg_600x__38968.1544157086.jpg?c=2&imbypass=on',
    price: 18.00
  },
  {
    id: "15",
    title: "Lucky Ladies Horseshoe",
    description: "Lucky Ladies Horseshoe Earrings Fashioned with glimmering stones in a horseshoe design these Lucky Earrings are great to have for everyday dressing! ",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1358/3797/E01280R-C01-1-lg__51021.1525994479.jpg?c=2&imbypass=on',
    imageUrl1: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1358/5655/E01280R-C01-2__08012.1526020377.jpg?c=2&imbypass=on',
    price: 17.00
  },
  {
    id: "16",
    title: "Rose Gold Stainless Steel ",
    imageUrl1: "https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/1280x1280/products/1451/7853/E01882AV-V00-2-lg_2048x@2x__08071.1546242256.jpg?c=2&imbypass=on",
    imageUrl: 'https://cdn11.bigcommerce.com/s-m1vaac64pb/images/stencil/500x659/products/1451/3890/E01882AV-V00-1-lg__47395.1525994495.jpg?c=2&imbypass=on',
    description: 'Wrap these around your ears. Contemporary pair of wide huggie-hoop earrings are so comfortable, you will want to wear them every day.',
    price: 16.00
  },
];

export default PRODUCTS;