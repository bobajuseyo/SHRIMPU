export const RECIPES = {
  crispy: {
    id: 'crispy',
    cover: require('../../assets/images/1.jpg'),
    theme: 'orange',
    th: {
      title: 'กุ้งทอดกรอบ',
      subtitle: '',
      ingTitle: 'วัตถุดิบ',
      insTitle: 'วิธีทำ',
      ingredients: [
        ['กุ้งสด (กุ้งแชบ๊วย/กุ้งขาว)', '½ กิโลกรัม'],
        ['แป้งทอดกรอบ', '½ กิโลกรัม'],
        ['น้ำเย็น', '1 ถ้วย'],
        ['น้ำมันสำหรับทอด', '2 ถ้วย']
      ],
      steps: [
        'เตรียมกุ้ง: ซับกุ้งให้แห้งด้วยกระดาษทิชชู่',
        'ผสมแป้ง: ผสมแป้งทอดกรอบกับเครื่องปรุง จากนั้นค่อย ๆ เติมน้ำเย็นจัด คนจนแป้งเนียน',
        'ชุบแป้ง: โรยแป้งแห้งบาง ๆ ที่ตัวกุ้ง จากนั้นนำกุ้ง ไปชุบแป้งเปียก โดยจับที่หางกุ้ง',
        'ทอด: ใส่กุ้งลงทอดในน้ำมันร้อน (180°C / 350°F) ทอดประมาณ 2–3 นาที จนเหลืองกรอบ',
        'เสิร์ฟ: ตักขึ้นพักบนตะแกรงให้สะเด็ดน้ำมัน  แล้วเสิร์ฟทันทีขณะร้อน ๆ'
      ]
    },
    en: {
      title: 'Crispy Fried Shrimp',
      subtitle: '',
      ingTitle: 'Ingredients',
      insTitle: 'Instructions',
      ingredients: [
        ['Shrimp (Whiteleg Shrimp/Banana Shrimp)', '½ kilo'],
        ['Crispy Flour', '½ kilo'],
        ['Cold Water', '1 cup'],
        ['Frying Oil', '2 cup']
      ],
      steps: [
      'Prepare : Pat the shrimp dry.',
      'Mix  Batter: Combine flour and seasoning. Whisk in the ice-cold water until just smooth.',
      'Coat: Lightly dust each shrimp with dry flour, then dip into the wet batter, holding by the tail.',
      'Fry: Carefully place shrimp in hot oil (180°C / 350°F). Fry for 2-3 minutes until golden and crispy.',
      'Serve: Drain on a wire rack and serve immediately'
      ]
    }
  },
  raw: {
    id: 'raw',
    cover: require('../../assets/images/3.jpg'),
    theme: 'teal',
    th: {
      title: 'กุ้งแช่น้ำปลา', subtitle: '',
      ingTitle: 'วัตถุดิบ', insTitle: 'วิธีทำ',
      ingredients: [
        ['กุ้งสด (กุ้งแชบ๊วย/กุ้งลายเสือ)', '250 กรัม'], ['น้ำปลา', '6 ช้อนโต๊ะ'], ['น้ำอัดลมโซดา', '2 ถ้วย'],
        ['น้ำตาลปี๊บ', '2 ชช.'], ['น้ำมะนาว', '5 ชต.'], ['พริกขี้หนู', '20 เม็ด'],
        ['กระเทียม', '¼ ถ้วย'], ['รากผักชี', '3 ราก']
      ],
      steps: [ 
      'เตรียมกุ้ง: ล้างกุ้งสดให้สะอาด ปอกเปลือกและผ่าหลังดึงเส้นดำออก โดยเว้นหางไว้เพื่อให้กุ้งกรอบ ให้นำกุ้งไปแช่ในน้ำโซดาเย็นจัดประมาณ 2–3 นาที จากนั้นสะเด็ดน้ำและแช่เย็นให้กุ้งกรอบเด้ง',
      'ทำน้ำจิ้ม: โขลกหรือปั่นพริก กระเทียม และรากผักชีให้ละเอียด ปรุงรสด้วยน้ำปลา น้ำมะนาวสด และน้ำตาลปี๊บ คนให้เข้ากัน ชิมรสตามชอบ',
      'จัดเสิร์ฟ: วางกุ้งแช่เย็นเรียงบนจาน  ราดด้วยน้ำจิ้มรสจัด พร้อมเสิร์ฟ' 
      ]
    },
    en: {
      title: 'Raw Shrimp in Fish Sauce', subtitle: '',
      ingTitle: 'Ingredients', insTitle: 'Instructions',
      ingredients: [
        ['Shrimp (Banana Shrimp/Black Tiger Shrimp)', '250 g'], ['Fish Sauce', '6 tbsp'], ['Soda', '2 cup'],
        ['Palm Sugar', '2 tsp'], ['Lemon Juice', '5 tbsp'], ['Chilli', '20 pieces'],
        ['Garlic', '¼ cup'], ['Coriander Root', '3 pieces']
      ],
      steps: [
      'Prepare the Shrimp: Wash the fresh shrimp thoroughly. Peel and devein them, leaving the tails on. To make them crisp, soak the shrimp in ice-cold soda water for 2-3 minutes, then drain and place them in the refrigerator to chill completely.',
      'Make the Dipping Sauce: Pound or blend the chilies, garlic, and coriander roots into a fine paste. Season with fish sauce, fresh lime juice, and palm sugar. Mix well, then taste and adjust the seasoning to your preference.',
      'Serve: Arrange the chilled shrimp on a platter. Pour the spicy dipping sauce over the shrimp.'
      ]
    }
  },
  hagow: {
    id: 'hagow',
    cover: require('../../assets/images/2.jpg'),
    theme: 'orange',
    th: {
      title: 'ฮะเก๋า', subtitle: '',
      ingTitle: 'วัตถุดิบ', insTitle: 'วิธีทำ',
      ingredients: [
        ['แป้งสาลี', '1 ถ้วย'], ['แป้งมันสำปะหลัง', '¼ ถ้วย'], ['น้ำมันพืช', '2 ช้อนชา'],
        ['น้ำร้อน', '1 ถ้วย'], ['กุ้งสด (กุ้งแชบ๊วย/กุ้งขาว)', '250 กรัม'], ['มันหมู', '40 กรัม']
      ],
      steps: [
      'ทำไส้: สับกุ้งสด มันหมูแข็ง และหน่อไม้ให้ละเอียด คลุกเคล้ากับเครื่องปรุงทั้งหมดให้เข้ากัน แล้วนำไปแช่ตู้เย็นจนเย็นจัด',
      'ทำแป้งห่อ: ผสมแป้งสาลีและแป้งมันเข้าด้วยกัน จากนั้นใส่น้ำร้อนจัด คนเร็ว ๆ แล้วนวดต่อพร้อม น้ำมันจนแป้งเนียนนุ่ม',
      'ห่อและนึ่ง: รีดแป้งเป็นแผ่นกลมบาง ใส่ไส้กุ้ง ตรงกลาง พับจีบปิดให้สวยงาม วางเรียงในลัง ถึงที่มีน้ำเดือดแรง นึ่งด้วยไฟแรงประมาณ 6–8 นาที จนแป้งสุกใสเป็นฮะเก๋าใส ๆ'
      ]
    },
    en: {
      title: 'Ha Gow', subtitle: 'crystal shrimp dumpling',
      ingTitle: 'Ingredients', insTitle: 'Instructions',
      ingredients: [
        ['Wheat Starch', '1 cup'], ['Tapioca Starch', '¼ cup'], ['Oil', '2 tsp'],
        ['Boiled Water', '1 cup'], ['Shrimp (Whiteleg Shrimp/Banana Shrimp)', '250 g'], ['Pork Fat', '40 g']
      ],
      steps: [
        'Make the Filling: Combine the chopped shrimp, pork fat, bamboo shoots, and all seasonings. Mix well and chill in the refrigerator until very cold.',
        'Make the Dough: Mix the wheat starch and tapioca starch together. Pour in boiling water, stir quickly, and then knead with oil until the dough is smooth and soft.',
        'Wrap and Steam: Roll the dough into thin, round wrappers. Place the cold filling in the center and pleat to seal beautifully. Steam over boiling water on high heat for about 6-8 minutes until the wrappers are cooked and translucent.'
      ]
    }
  }
  
};

export const ORDER = ['crispy', 'raw', 'hagow'];
