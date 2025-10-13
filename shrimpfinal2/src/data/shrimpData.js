export const SHRIMP_DATA = {
  white_shrimp: {
    image: require('../../assets/images/shrimp-detail.png'), // เปลี่ยน path ตามภาพจริง
    nameKey: {
    th: 'กุ้งขาว',
    en: 'Whiteleg Shrimp'
    },
    description: {
      th: ` กุ้งขาว เป็นกุ้งที่พบตามตลาดได้บ่อยๆ มีลักษณะคือ ตัวใสๆสีขาวอมเทา มีเปลือกบาง ตัวจะลื่นๆ แกะง่าย ปลายหางมีสีแดง ขนาดตัวไม่ใหญ่มาก เนื้อกุ้งมีรสหวาน   
 เหมาะสำหรับใช้ทำเมนูอาหารที่ใช้กุ้งเป็นส่วนประกอบ ไม่ได้เน้นกุ้งเป็นหลัก เช่น กุ้งแช่น้ำปลา ผัดไทยกุ้ง ทอดมันกุ้ง`,
      en: `  Whiteleg shrimp (White shrimp) are commonly found in local markets. They have a translucent, whitish-gray body with a thin shell. The texture is smooth, easy to peel, with reddish tail tips. Their size is relatively small, and the meat has a naturally sweet flavor.
  They are ideal for dishes where shrimp is part of the recipe rather than the main highlight, such as shrimp in fish sauce (Goong Chae Nam Pla), Pad Thai with shrimp, or Crispy Thai Prawn Cake.`,
    },
    nutrition: [
      { label: 'Whiteleg shrimp 100 g'},
      { label: 'Calories', value: '102 Kcal' },
      { label: 'Cholesterol', value: '150 mg' },
      { label: 'Fat', value: '2 g' },
      { label: 'Protein', value: '20 g' },
      { label: 'Carbohydrates', value: '1 g' },
      { label: 'Sodium', value: '150 mg' },
    ],
    prices: [
      { retailer: 'CP PACIFIC PM', price: '359', unit: '/kg', logo: require('../../assets/logos/lotus-logo.png'), 
        size: {
          th: `26/30 กก. `,
          en: `26/30 KG.`,
        }
     },
      { retailer: 'White Shrimp', price: '339', unit: '/kg', logo: require('../../assets/logos/makro-logo.png'),
        size: {
          th: `21/25 กก.`,
          en: `21/25 KG.`,
        }
       },
       { retailer: 'Whiteleg Prawn', price: '339', unit: '/kg', logo: require('../../assets/logos/bigc-logo.png'), 
        size: {
          th: `25/30 กก.`,
          en: `25/30 KG.`,
        }
     },
     { retailer: 'Tops White Shrimp Size L', price: '235', unit: '/pcs', logo: require('../../assets/logos/tops-logo.png'), 
        size: {
          th: `500 กรัม`,
          en: `500 g`,
        }
     },
     { retailer: 'Sr Farmed Whiteleg Shrimp No.1', price: '450', unit: '/kg', logo: require('../../assets/logos/gourmet-market-logo.png'), 
        size: {
          th: `40/50 กก.`,
          en: `40/50 KG.`,
        }
     },
    ],
  },

  banana_shrimp: {
    image: require('../../assets/images/shrimp-detail.png'),
    nameKey: {
    th: 'กุ้งแชบ๊วย',
    en: 'Banana Shrimp'
    },
    description: {
      th: `กุ้งแชบ๊วย เป็นกุ้งทะเล ลักษณะคล้ายกุ้งขาว แต่จะตัวใหญ่กว่าเล็กน้อย มีสีเหลืองอมส้ม เนื้อสีขาวขุ่น เปลือกหนา แต่ร่อน แกะง่าย มีเนื้อหวาน เด้ง แน่นกว่ากุ้งขาว  ขาจะต้องมีสีออกเหลือง 
   เหมาะกับเมนูที่เน้นเนื้อกุ้งเป็นหลัก เช่น กุ้งอบวุ้นเส้น กุ้งทอด ติ่มซำ `,
      en: ` Banana shrimp are marine shrimp that look similar to whiteleg shrimp but are slightly larger. They have a yellowish-orange body, thick yet easy-to-peel shells, and firm, bouncy white meat with a sweet flavor. Their legs are typically yellowish in color.
 They are ideal for dishes that highlight shrimp as the main ingredient, such as shrimp with glass noodles (Goong Ob Woon Sen), fried shrimp, or dim sum.`,
    },
    nutrition: [
      { label: 'Banana shrimp 100 g'},    
      { label: 'Calories', value: '99 Kcal' },
      { label: 'Cholesterol', value: '189 mg' },
      { label: 'Fat', value: '0.3 g' },
      { label: 'Protein', value: '24 g' },
      { label: 'Carbohydrates', value: '0.2 g' },
      { label: 'Sodium', value: '111 mg' },
    ],
    prices: [
      { retailer: 'BANANA SHRIMP', price: '359', unit: '/kg', logo: require('../../assets/logos/lotus-logo.png'), 
        size: {
          th: `20/30 กก. `,
          en: `20/30 KG.`,
        }
     },
      { retailer: 'Banana Prawn L', price: '599', unit: '/kg', logo: require('../../assets/logos/makro-logo.png'),
        size: {
          // th: `21/25 กก.`,
          // en: `21/25 KG.`,
        }
       },
     { retailer: 'TM Banana Shrimp', price: '1,190', unit: '/kg', logo: require('../../assets/logos/tops-logo.png'), 
        size: {
          th: `15/20 กก. `,
          en: `15/20 KG.`,
        }
     },
     { retailer: 'Banana Shrimp S', price: '690', unit: '/kg', logo: require('../../assets/logos/gourmet-market-logo.png'), 
        size: {
          // th: `40/50 กก.`,
          // en: `40/50 KG.`,
        }
     },
    ],
  },

  tiger_shrimp: {
    image: require('../../assets/images/shrimp-detail.png'),
    nameKey: {
    th: 'กุ้งลายเสือ',
    en: 'Black Tiger Shrimp'
    },
    description: {
      th: ` กุ้งลายเสือ หรือ กุ้งกุลาดำ เป็นกุ้งธรรมชาติ ที่อาศัยอยู่ได้ในน้ำกร่อยและน้ำทะเล  มีลักษณะเด่น คือลำตัวสีน้ำตาลอ่อนและมีลาย เป็นแถบสีแดงสลับ ดำคล้ายกับเสือ หนวดยาวไม่มีลายชัดเจน เนื้ออร่อย กรอบ แน่น เด้งสู้ฟัน 
 เหมาะกับเมนูที่เน้นรสชาติของกุ้งเป็นหลัก เช่น กุ้งเผา กุ้งอบเกลือ`,
      en: ` Black tiger shrimp are naturally found in brackish and seawater. Their distinctive feature is a light brown body with alternating red and black stripes, resembling a tiger. They have long antennae without clear markings. The meat is delicious, firm, crunchy, and springy.
They are best suited for dishes that highlight the shrimp’s natural flavor, such as grilled shrimp or salt-baked shrimp.`,
    },
    nutrition: [
      { label: 'Black Tiger Shrimp 100 g'},    
      { label: 'Calories', value: '92 Kcal' },
      { label: 'Cholesterol', value: '175 mg' },
      { label: 'Fat', value: '1.3 g' },
      { label: 'Protein', value: '20.1 g' },
      { label: 'Carbohydrates', value: '0 g' },
      { label: 'Sodium', value: 'N/A' },
    ],
    prices: [
      { retailer: 'TIGER PRAWN', price: '249', unit: '/kg', logo: require('../../assets/logos/lotus-logo.png'), 
        size: {
          th: `20/25 กก. `,
          en: `20/25 KG.`,
        }
     },
      { retailer: 'Black Tiger Prawn M', price: '1,150', unit: '/kg', logo: require('../../assets/logos/makro-logo.png'),
        size: {
          // th: `21/25 กก.`,
          // en: `21/25 KG.`,
        }
       },
       { retailer: 'Black Tiger Shrimp', price: '405', unit: '/kg', logo: require('../../assets/logos/bigc-logo.png'), 
        size: {
          // th: `25/30 กก.`,
          // en: `25/30 KG.`,
        }
     },
     { retailer: 'Giant Tiger Prawn', price: '1,570', unit: '/kg', logo: require('../../assets/logos/tops-logo.png'), 
        size: {
         th: `9/15 กก.`,
          en: `9/15 KG.`,
        }
     },
     { retailer: 'Sr Tiger Prawn', price: '1,780', unit: '/kg', logo: require('../../assets/logos/gourmet-market-logo.png'), 
        size: {
          th: `5/6 กก.`,
          en: `5/6 KG.`,
        }
     },
    ],
  },
};