export const RECIPES = {
  crispy: {
    id: 'crispy',
    cover: require('../../assets/images/1.jpg'),
    theme: 'orange',
    th: {
      title: 'กุ้งทอดกรอบ',
      subtitle: '',
      ingTitle: 'ส่วนผสม',
      insTitle: 'วิธีทำ',
      ingredients: [
        ['กุ้ง', 'ครึ่งกิโล'],
        ['แป้งทอดกรอบ', 'ครึ่งกิโล'],
        ['น้ำเย็นจัด', '1 ถ้วย'],
        ['น้ำมันทอด', '2 ถ้วย']
      ],
      steps: [
        'เตรียมกุ้ง: ซับกุ้งให้แห้ง',
        'ทำแป้ง: ผสมแป้ง เติมน้ำเย็นจัด',
        'ชุบแป้ง: คลุกแป้งแห้ง → แป้งเปียก',
        'ทอด: 180°C 2–3 นาที',
        'เสิร์ฟ: พักบนตะแกรง'
      ]
    },
    en: {
      title: 'Crispy Fried Shrimp',
      subtitle: '',
      ingTitle: 'Ingredients',
      insTitle: 'Instructions',
      ingredients: [
        ['Shrimp', '1/2 kilo'],
        ['Crispy Flour', '1/2 kilo'],
        ['Cold Water', '1 cup'],
        ['Frying Oil', '2 cup']
      ],
      steps: [
        'Pat shrimp dry',
        'Mix batter (ice-cold water)',
        'Dust then dip batter',
        'Fry 180°C 2–3 min',
        'Serve hot'
      ]
    }
  },
  raw: {
    id: 'raw',
    cover: require('../../assets/images/3.jpg'),
    theme: 'teal',
    th: {
      title: 'กุ้งแช่น้ำปลา', subtitle: '',
      ingTitle: 'ส่วนผสม', insTitle: 'วิธีทำ',
      ingredients: [
        ['กุ้งสด', '250 กรัม'], ['น้ำปลา', '6 ชต.'], ['โซดา', '2 ถ้วย'],
        ['น้ำตาลปี๊บ', '2 ชช.'], ['น้ำมะนาว', '5 ชต.'], ['พริก', '20 เม็ด'],
        ['กระเทียม', '1/4 ถ้วย'], ['รากผักชี', '3 ราก']
      ],
      steps: [
        'ล้าง+ผ่าหลัง แช่โซดาเย็น 2–3 นาที',
        'ทำน้ำจิ้ม พริก/กระเทียม/รากผักชี+ปรุงรส',
        'จัดจาน ราดน้ำจิ้ม'
      ]
    },
    en: {
      title: 'Raw Shrimp in Fish Sauce', subtitle: '',
      ingTitle: 'Ingredients', insTitle: 'Instructions',
      ingredients: [
        ['Shrimp', '250 g'], ['Fish Sauce', '6 tbsp'], ['Soda', '2 cup'],
        ['Palm Sugar', '2 tsp'], ['Lemon Juice', '5 tbsp'], ['Chilli', '20 pcs'],
        ['Garlic', '1/4 cup'], ['Coriander Root', '3']
      ],
      steps: [
        'Devein; soak in ice-cold soda 2–3 min',
        'Sauce: pound & mix with seasonings',
        'Plate and pour sauce'
      ]
    }
  },
  hagow: {
    id: 'hagow',
    cover: require('../../assets/images/2.jpg'),
    theme: 'orange',
    th: {
      title: 'ฮะเก๋า', subtitle: 'เกี๊ยวกุ้งคริสตัล',
      ingTitle: 'ส่วนผสม', insTitle: 'วิธีทำ',
      ingredients: [
        ['แป้งสาลีจีน', '1 ถ้วย'], ['แป้งมัน', '1/4 ถ้วย'], ['น้ำมัน', '2 ชช.'],
        ['น้ำเดือด', '1 ถ้วย'], ['กุ้ง', '250 กรัม'], ['มันหมู', '40 กรัม']
      ],
      steps: ['ทำไส้แล้วแช่เย็น', 'ทำแป้งด้วยน้ำเดือด นวดกับน้ำมัน', 'ห่อ นึ่ง 6–8 นาที']
    },
    en: {
      title: 'Ha Gow', subtitle: 'crystal shrimp dumpling',
      ingTitle: 'Ingredients', insTitle: 'Instructions',
      ingredients: [
        ['Wheat Starch', '1 cup'], ['Tapioca Starch', '1/4 cup'], ['Oil', '2 tsp'],
        ['Boiled Water', '1 cup'], ['Shrimp', '250 g'], ['Pork Fat', '40 g']
      ],
      steps: ['Make filling; chill', 'Make dough with boiling water; knead', 'Wrap & steam 6–8 min']
    }
  }
  
};

export const ORDER = ['crispy', 'raw', 'hagow'];
