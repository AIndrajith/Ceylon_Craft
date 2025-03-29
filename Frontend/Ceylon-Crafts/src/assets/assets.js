import logo from './logo.png'
import cart from './cart.png'
import login from './login.png'
import search from './search.png'
import hero_img from './hero_img.jpg'
import w_1 from './w_1.jpg'
import r_1 from './r_1.jpg'
import r_2 from './r_2.jpg'
import r_3 from './r_3.jpg'
import r_4 from './r_4.jpg'
import pb_1 from './pb_1.jpg'
import pb_2 from './pb_2.jpg'
import pb_3 from './pb_3.jpg'
import pb_4 from './pb_4.jpg'
import b_1 from './b_1.jpg'
import b_2 from './b_2.jpg'
import fr_1 from './fr_1.jpg'
import fr_2 from './fr_2.jpg'
import fr_3 from './fr_3.jpg'
import btf_1 from './btf_1.jpg'
import btf_2 from './btf_2.jpg'
import btf_3 from './btf_3.jpg'
import customizable from './customizable.png'
import unique from './unique.png'
import ap from './affordable_pricing.png'

export const assets = {
    logo, cart, login, search, hero_img,customizable,ap,unique
}

export const products = [
    {
        product_id: '001a',
        name:"Pearl White Rose Bouquet",
        description: "💐 Price: ₹270 per flower (Price varies with quantity)	•	A versatile choice for gifting, events, or personal décor.	•	Customization:	•	Decide the number of flowers for your bouquet .	•	Select the flower colors and wrapping material to suit your style.",
        price: 270,
        image: [w_1],
        occasions: ["birthdays","w_day","graduations"],
        category: 'flower bouquets',
        wrapping_type: 'normal',
        flower_type: 'roses',
        lightning: 'no',
        color_type: ['white'],
        type: '(per flower)'
    },
    {
        product_id: '002b',
        name:"Red Velvet Rose Bouquet",
        description: "💐 Price: ₹300	•	Perfect for minimalistic and elegant gifting.	•	Customization: Choose your preferred flower color and wrapping style to match your occasion.",
        price: 300,
        image: [r_1,r_2,r_3,r_4],
        occasions: ["birthdays","w_day","graduations","v_day"],
        category: 'single flower',
        wrapping_type: 'normal',
        flower_type: 'roses',
        lightning: 'no',
        color_type: ['red'],
        type: '(per flower)'
    },
    {
        product_id: '003c',
        name:"Elegant Purple & Light Blue Roses with Butterfly Wrap",
        description: "💐 Price: ₹300 (Additional for butterfly wrapping)💐 Custom Rose Arrangement: ₹270 per flower (Price varies with quantity)✨ Description:Experience the charm of our Purple & Light Blue Butterfly Rose Bouquet, designed to add a touch of elegance and magic to any occasion. Wrapped in a stunning butterfly-themed wrap, this bouquet is a symbol of beauty and transformation—perfect for gifting, celebrations, or personal décor.💖 Why You'll Love It:✔ Unique Color Combination – A mesmerizing blend of purple & light blue roses for a dreamy, elegant look.✔ Butterfly-Inspired Wrapping – Add an enchanting touch with our delicate butterfly wrap (optional).✔ Perfect for Any Occasion – Ideal for birthdays, anniversaries, weddings, and surprises.✔ Fully Customizable – Choose the number of roses, colors, and wrapping material to match your style.🌟 Make it Yours! 🌟✨ Standard Bouquet: ₹300✨ Customize Your Own: ₹270 per flower (Price depends on quantity)Create a one-of-a-kind bouquet that expresses your love, appreciation, or celebration! 💙💜🦋",       
        price: 270,
        image: [pb_1,pb_2,pb_3,pb_4],
        occasions: ["birthdays","w_day","graduations","weddings"],
        category: 'flower bouquets',
        wrapping_type: 'butterfly',
        flower_type: 'roses',
        lightning: 'no',
        color_type: ['purple','light blue'],
        type: '(per flower)'
    },
    {
        product_id: '004d',
        name:"Black Rose Mini Bouquet",
        description: "🖤 Elegant Black Rose Mini Bouquet 🖤💐 Price: ₹85 per flower (Perfect for a stylish yet affordable gift)✨ Description:Make a bold statement with our Black Rose Mini Bouquet—a sleek, elegant, and compact arrangement that’s perfect for thoughtful gestures and special moments. Whether it’s a token of appreciation, a romantic surprise, or a stylish décor piece, this mini bouquet is sure to impress!💖 Why You’ll Love It:✔ Chic & Unique – A single black rose or a small bouquet creates a sophisticated and timeless look.✔ Perfect for Any Occasion – Ideal for small gifts, birthdays, anniversaries, or even a personal keepsake.✔ Fully Customizable – Choose the number of roses, flower colors, and wrapping material to suit your style.✔ Budget-Friendly Beauty – A luxurious-looking bouquet at an affordable price!🌟 Create Your Own Mini Bouquet! 🌟💐 Starting at ₹85 per flower—design it just the way you like!Give a small yet powerful expression of love, elegance, and mystery with our Black Rose Mini Bouquet! 🖤🌹",       
        price: 85,
        image: [b_1,b_2],
        occasions: ["birthdays","anniversary"],
        category: 'mini bouquets',
        wrapping_type: 'normal',
        flower_type: 'roses',
        lightning: 'no',
        color_type: ['black'],
        type: '(per flower)'
    },
    {
        product_id: '005e',
        name:"Fiery Red Rose Valentine's Special Flower bouquet",
        description: "",       
        price: 270,
        image: [fr_1,fr_2,fr_3],
        occasions: ["birthdays","anniversary","weddings","v_day","W-day","graduations"],
        category: 'flower bouquets',
        wrapping_type: 'normal',
        flower_type: 'roses',
        lightning: 'no',
        color_type: ['red'],
        type: '(per flower)'
    },
    {
        product_id: '006d',
        name:"Lightning Butterfly Bouquet",
        description: "",       
        price: 1000,
        image: [btf_1,btf_2,btf_3],
        occasions: ["birthdays","anniversary","weddings","v_day","W-day","graduations"],
        category: 'butterfly bouquets',
        wrapping_type: 'normal',
        flower_type: 'butterflies',
        lightning: 'yes',
        color_type: [],
        type: '(per 40 butterflies)'
    },
]