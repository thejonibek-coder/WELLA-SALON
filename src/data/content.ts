import shahnoza from '../assets/shahnoza.png';
import zarina from '../assets/zarina.png';
import umida from '../assets/umida.png';
import mahliyo from '../assets/mahliyo.png';
import hokimova from '../assets/hokimova.png';
import nazarxon from '../assets/nazarxon.png';

export type ServiceItem = {
  name: string;
  price: string;
  desc?: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  icon: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: 'hair',
    label: "Soch turmaklash va bo'yash",
    icon: 'Scissors',
    items: [
      { name: "Ayollar soch turmaklash", price: "120 000 so'm", desc: "Modelsiz va klassik turmaklar" },
      { name: "Erkaklar soch kesish", price: "80 000 so'm", desc: "Styling bilan" },
      { name: "Soch bo'yash (bitta rang)", price: "350 000 so'm", desc: "Premium bo'yoqlar bilan" },
      { name: "Balayaj / Ombre", price: "650 000 so'm", desc: "Tabiiy o'tish effekti" },
      { name: "Soch davolash (botox)", price: "450 000 so'm", desc: "Tiklaydigan kompleks" },
      { name: "To'y soch turmagi", price: "400 000 so'm", desc: "Velining va tojlarda" },
    ],
  },
  {
    id: 'nails',
    label: 'Manikyur va Pedikyur',
    icon: 'Sparkles',
    items: [
      { name: "Klassik manikyur", price: "90 000 so'm", desc: "Kutikula parvarishi bilan" },
      { name: "Gel-lak qoplamasi", price: "150 000 so'm", desc: "3 hafta chidamlilik" },
      { name: "Nail-art dizayni", price: "200 000 so'm", desc: "Individual chizmalar" },
      { name: "Spa-pedikyur", price: "180 000 so'm", desc: "Yumshatuvchi vanna bilan" },
      { name: "Oyoq + Qo'l kompleks", price: "280 000 so'm", desc: "To'liq parvarish" },
    ],
  },
  {
    id: 'makeup',
    label: 'Makiyaj va Qosh dizayni',
    icon: 'Brush',
    items: [
      { name: "Kundalik makiyaj", price: "200 000 so'm", desc: "Tabiiy ko'rinish" },
      { name: "To'y makiyaji", price: "500 000 so'm", desc: "Uzoq chidamli qoplamada" },
      { name: "Tunda makiyaj", price: "300 000 so'm", desc: "Bayramona variant" },
      { name: "Qosh arxitekturasi", price: "120 000 so'm", desc: "Shakllantirish + bo'yash" },
      { name: "Ko'pinchalarning kengaytmasi", price: "250 000 so'm", desc: "Tabiiy effekt" },
    ],
  },
  {
    id: 'facial',
    label: 'Kosmetologiya va Yuz parvarishi',
    icon: 'Flower2',
    items: [
      { name: "Detox yuz tozalash", price: "250 000 so'm", desc: "Terini chuqur tozalash" },
      { name: "Gidrodermabrazyon", price: "350 000 so'm", desc: "Yoshartiruvchi effekt" },
      { name: "Mezoterapiya", price: "600 000 so'm", desc: "Vitamin kokteyllari" },
      { name: "Yuz massaji", price: "180 000 so'm", desc: "Limfa drenaji" },
      { name: "Anti-age kompleks", price: "700 000 so'm", desc: "Tortishuv va nurlantirish" },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Shahnoza G'ulomova",
    role: "Stilist, makiyaj va kolorist ustasi",
    photo: shahnoza,
  },
  {
    name: 'Qobilova Zarina',
    role: "Kolorist va stilist mutaxassisi",
    photo: zarina,
  },
  {
    name: 'Umida',
    role: "Kapsula va pedikyur ustasi",
    photo: umida,
  },
  {
    name: 'Mahliyo Bafoyeva',
    role: "Kosmetolog-lashmeyker",
    photo: mahliyo,
  },
  {
    name: 'Hokimova Umida',
    role: "Laminatsiya va qosh terish ustasi",
    photo: hokimova,
  },
  {
    name: 'Nazarxon',
    role: "Manikyur va shved lak (shellac) ustasi",
    photo: nazarxon,
  },
];
export type GalleryImage = {
  url: string;
  alt: string;
  span?: boolean;
};

export const gallery: GalleryImage[] = [
  {
    url: 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Salon interyeri",
    span: true,
  },
  {
    url: 'https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Soch turmaklash",
  },
  {
    url: 'https://images.pexels.com/photos/3997384/pexels-photo-3997384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Manikyur namunasi",
  },
  {
    url: 'https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Salon dizayni",
  },
  {
    url: 'https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Soch bo'yash",
    span: true,
  },
  {
    url: 'https://images.pexels.com/photos/4530187/pexels-photo-4530187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Tirnoq dizayni",
  },
  {
    url: 'https://images.pexels.com/photos/13018457/pexels-photo-13018457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Makiyaj san'ati",
  },
  {
    url: 'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Zerkal zali",
  },
];

export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Dilnoza A.',
    rating: 5,
    text: "Wella Salon'ga kelganimdan keyin sochlarim butunlay boshqacha ko'rinishga ega bo'ldi. Kamola juda professional ustasi!",
    service: "Soch bo'yash va turmaklash",
  },
  {
    name: 'Gulnoza R.',
    rating: 5,
    text: "To'y kunim uchun makiyaj a'yo chiqdi. Butun kun davomida mukammal ko'rindi. Minnatdorman!",
    service: "To'y makiyaji",
  },
  {
    name: 'Zarina M.',
    rating: 5,
    text: "Eng yaxshi manikyur Toshkentda shu yerda. O'ziga xos dizaynlar va sifatli materiallar.",
    service: "Gel-lak va nail-art",
  },
  {
    name: 'Lola T.',
    rating: 5,
    text: "Yuz parvarishidan keyin terim juda yorqiq va sog'lom ko'rinadi. Sevara haqiqiy professional.",
    service: "Kosmetologiya",
  },
];

export const serviceOptions = services.map((s) => s.label);

export const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
];
