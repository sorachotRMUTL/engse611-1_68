# Restaurant Review App - Frontend

🍜 Frontend Application สำหรับระบบรีวิวร้านอาหาร

## 📋 Overview

Restaurant Review App Frontend เป็น React Application ที่ใช้ Vite เป็น build tool สำหรับแสดงผลและจัดการข้อมูลร้านอาหารและรีวิว

## 🚀 Features

- **Restaurant Listing**: แสดงรายการร้านอาหารทั้งหมด
- **Search & Filter**: ค้นหาและกรองร้านอาหารตามต่างๆ
- **Restaurant Details**: ดูรายละเอียดร้านอาหารและรีวิว
- **Review System**: เพิ่มรีวิวและดูรีวิวจากผู้อื่น
- **Responsive Design**: รองรับการใช้งานบนมือถือและเดสก์ท็อป
- **Random Restaurant**: สุ่มร้านอาหารสำหรับผู้ที่ตัดสินใจไม่ได้

## 🛠️ Tech Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Styling**: CSS3 + CSS Modules
- **State Management**: React Hooks (useState, useEffect)

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── RestaurantList.jsx      # รายการร้านอาหาร
│   │   ├── RestaurantCard.jsx      # การ์ดร้านอาหาร
│   │   ├── RestaurantDetails.jsx   # รายละเอียดร้าน
│   │   ├── ReviewList.jsx          # รายการรีวิว
│   │   ├── ReviewForm.jsx          # ฟอร์มเพิ่มรีวิว
│   │   ├── SearchBar.jsx           # แถบค้นหา
│   │   └── FilterPanel.jsx         # แผงกรอง
│   ├── services/
│   │   └── api.js                  # API service functions
│   ├── styles/
│   │   └── components/             # CSS files สำหรับ components
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Global styles
│   └── main.jsx                    # Application entry point
├── .env                            # Environment variables
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
└── eslint.config.js                # ESLint configuration
```

## 🔧 Installation

1. **Clone repository และเข้าสู่ directory**
```bash
cd day5/restaurant-review-app/frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# ตรวจสอบไฟล์ .env
VITE_API_URL=http://localhost:3000/api
```

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
```
Application จะรันที่: `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 🎨 Components Overview

### 1. App.jsx
Main application component ที่จัดการ routing และ global state

### 2. RestaurantList.jsx
- แสดงรายการร้านอาหารทั้งหมด
- รองรับการค้นหาและกรอง
- มีฟีเจอร์สุ่มร้านอาหาร

### 3. RestaurantCard.jsx  
- แสดงข้อมูลร้านอาหารในรูปแบบการ์ด
- แสดงภาพ, ชื่อ, หมวดหมู่, คะแนน

### 4. RestaurantDetails.jsx
- แสดงรายละเอียดครบถ้วนของร้านอาหาร
- แสดงรีวิวทั้งหมดของร้าน
- สามารถเพิ่มรีวิวใหม่ได้

### 5. ReviewList.jsx
- แสดงรายการรีวิวของร้านอาหาร
- รองรับการกรองและเรียงลำดับ

### 6. ReviewForm.jsx
- ฟอร์มสำหรับเพิ่มรีวิวใหม่
- มี validation สำหรับข้อมูลที่จำเป็น

### 7. SearchBar.jsx
- แถบค้นหาร้านอาหารตามชื่อ
- รองรับ real-time search

### 8. FilterPanel.jsx
- แผงกรองตามหมวดหมู่, ราคา, คะแนน
- สามารถรีเซ็ตกรองได้

## 🔌 API Integration

### API Service (services/api.js)
```javascript
// ดึงข้อมูลร้านอาหารทั้งหมด
const restaurants = await getRestaurants(filters);

// ดึงรายละเอียดร้านอาหาร
const restaurant = await getRestaurantById(id);

// เพิ่มรีวิวใหม่
await addReview(reviewData);

// ดึงรีวิวของร้านเฉพาะ
const reviews = await getRestaurantReviews(restaurantId);
```

### Environment Variables
```env
VITE_API_URL=http://localhost:3000/api
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Features
- ✅ Touch-friendly interface
- ✅ Optimized card layouts
- ✅ Responsive navigation
- ✅ Mobile-first design approach

## 🎯 User Experience Features

### Search & Filter
- **Real-time Search**: ค้นหาแบบ real-time
- **Category Filter**: กรองตามหมวดหมู่อาหาร
- **Rating Filter**: กรองตามคะแนนขั้นต่ำ
- **Price Range**: กรองตามช่วงราคา

### Interactive Elements
- **Restaurant Cards**: คลิกเพื่อดูรายละเอียด
- **Random Restaurant**: ปุ่มสุ่มร้านอาหาร
- **Review Forms**: ฟอร์มเพิ่มรีวิวแบบ interactive
- **Loading States**: แสดงสถานะกำลังโหลด

## 🚨 Error Handling

### Error Types
- **Network Errors**: จัดการข้อผิดพลาดการเชื่อมต่อ
- **API Errors**: แสดงข้อความแจ้งเตือนจาก Backend
- **Validation Errors**: ตรวจสอบข้อมูลก่อนส่ง

### Error Display
```jsx
{error && (
  <div className="error-message">
    {error}
  </div>
)}
```

## 🎨 Styling Guidelines

### CSS Organization
- **Global Styles**: `App.css`
- **Component Styles**: `styles/components/`
- **Responsive Design**: Mobile-first approach

### Color Scheme
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #004e64;
  --accent-color: #ffa500;
  --background-color: #f8f9fa;
  --text-color: #333333;
}
```

## 🔍 Development Guidelines

### State Management
```javascript
// ใช้ useState สำหรับ local state
const [restaurants, setRestaurants] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// ใช้ useEffect สำหรับ side effects
useEffect(() => {
  fetchRestaurants();
}, [filters]);
```

### Error Boundaries
```javascript
// จัดการ errors ด้วย try-catch
try {
  const result = await getRestaurants();
  setRestaurants(result.data);
} catch (err) {
  setError('ไม่สามารถโหลดข้อมูลได้');
}
```

## 📊 Performance Optimization

### Best Practices
- ✅ **Lazy Loading**: โหลดส่วนที่จำเป็นเท่านั้น
- ✅ **Memoization**: ใช้ React.memo เมื่อจำเป็น
- ✅ **Debouncing**: สำหรับ search input
- ✅ **Image Optimization**: ปรับขนาดภาพให้เหมาะสม

### Bundle Size
```bash
# ตรวจสอบขนาด bundle
npm run build
```

## 🧪 Testing

### Running Tests
```bash
# Unit tests (ถ้ามี)
npm test

# E2E tests (ถ้ามี)  
npm run test:e2e
```

### Manual Testing Checklist
- [ ] ดูรายการร้านอาหารได้
- [ ] ค้นหาร้านอาหารได้
- [ ] กรองตามหมวดหมู่ได้
- [ ] ดูรายละเอียดร้านได้
- [ ] เพิ่มรีวิวได้
- [ ] สุ่มร้านอาหารได้
- [ ] Responsive บนมือถือ

## 📝 Development Status

### Implementation Progress
- **RestaurantList**: 85% implemented
- **RestaurantCard**: 75% implemented  
- **RestaurantDetails**: 60% implemented
- **ReviewList**: 50% implemented
- **ReviewForm**: 70% implemented
- **SearchBar**: 90% implemented
- **FilterPanel**: 80% implemented

### TODO Items
- [ ] เพิ่ม Image Upload สำหรับรีวิว
- [ ] เพิ่ม User Authentication
- [ ] เพิ่ม Favorite Restaurants
- [ ] เพิ่ม Share ร้านอาหาร
- [ ] เพิ่ม Dark Mode
- [ ] เพิ่ม PWA Support
- [ ] เพิ่ม Unit Tests

## 🐛 Known Issues

- Loading state อาจติดเป็นบางครั้ง
- Search บาง keyword อาจไม่แสดงผล
- Mobile layout ต้องปรับแต่งเพิ่มเติม

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
1. **Vercel**
```bash
npx vercel --prod
```

2. **Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

3. **GitHub Pages**
```bash
npm run build
# Configure GitHub Pages to serve from dist/
```

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is for educational purposes as part of ENGSE611 course.

## 👥 Authors

- Student Name - ENGSE611 Course
- รายวิชา: Web Application Development

---
📧 Contact: [Your Email] | 🎓 Course: ENGSE611-1_68

## 🔗 Related Links

- [Backend README](../backend/README.md)
- [API Documentation](../backend/README.md#api-documentation)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
