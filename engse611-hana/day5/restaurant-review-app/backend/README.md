# Restaurant Review API - Backend

🍜 Backend API สำหรับระบบรีวิวร้านอาหาร

## 📋 Overview

Restaurant Review API เป็น RESTful API ที่พัฒนาด้วย Node.js และ Express.js สำหรับจัดการข้อมูลร้านอาหารและรีวิว

## 🚀 Features

- **Restaurant Management**: CRUD operations สำหรับร้านอาหาร
- **Review System**: ระบบรีวิวและการให้คะแนน
- **Search & Filter**: ค้นหาและกรองร้านอาหารตามหมวดหมู่
- **Data Validation**: ตรวจสอบความถูกต้องของข้อมูล
- **File Management**: จัดการไฟล์ JSON สำหรับเก็บข้อมูล
- **CORS Support**: รองรับการเชื่อมต่อจาก Frontend

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Data Storage**: JSON Files
- **Validation**: Custom middleware
- **CORS**: cors middleware

## 📁 Project Structure

```
backend/
├── data/
│   ├── restaurants.json    # ข้อมูลร้านอาหาร (10 ร้าน)
│   └── reviews.json        # ข้อมูลรีวิว (30+ รีวิว)
├── routes/
│   ├── restaurants.js      # API routes สำหรับร้านอาหาร
│   └── reviews.js          # API routes สำหรับรีวิว
├── middleware/
│   └── validation.js       # Validation middleware
├── utils/
│   └── fileManager.js      # File management utilities
├── server.js               # Express server configuration
├── index.js                # Entry point
└── package.json            # Dependencies
```

## 🔧 Installation

1. **Clone repository และเข้าสู่ directory**
```bash
cd day5/restaurant-review-app/backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env
```

4. **Edit .env file** (optional)
```env
PORT=3000
NODE_ENV=development
```

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server จะรันที่: `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Restaurants Endpoints

#### GET /api/restaurants
ดึงข้อมูลร้านอาหารทั้งหมด
```bash
GET http://localhost:3000/api/restaurants
```

**Query Parameters:**
- `search` - ค้นหาชื่อร้าน
- `category` - กรองตามหมวดหมู่
- `minRating` - คะแนนขั้นต่ำ

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "ร้านอาหารไทยดี",
      "category": "ไทย",
      "location": "กรุงเทพฯ",
      "rating": 4.5,
      "priceRange": "$$",
      "description": "อาหารไทยต้นตำรับ"
    }
  ],
  "total": 10
}
```

#### GET /api/restaurants/:id
ดึงข้อมูลร้านอาหารตาม ID
```bash
GET http://localhost:3000/api/restaurants/1
```

#### POST /api/restaurants
เพิ่มร้านอาหารใหม่
```bash
POST http://localhost:3000/api/restaurants
Content-Type: application/json

{
  "name": "ร้านใหม่",
  "category": "ไทย",
  "location": "กรุงเทพฯ",
  "description": "คำอธิบาย"
}
```

### Reviews Endpoints

#### GET /api/reviews
ดึงข้อมูลรีวิวทั้งหมด
```bash
GET http://localhost:3000/api/reviews
```

#### GET /api/reviews/restaurant/:restaurantId
ดึงรีวิวของร้านอาหารเฉพาะ
```bash
GET http://localhost:3000/api/reviews/restaurant/1
```

#### POST /api/reviews
เพิ่มรีวิวใหม่
```bash
POST http://localhost:3000/api/reviews
Content-Type: application/json

{
  "restaurantId": 1,
  "rating": 5,
  "comment": "อร่อยมาก",
  "reviewerName": "นายสมชาย"
}
```

## 🔍 Testing API

### Using curl
```bash
# ดึงร้านอาหารทั้งหมด
curl http://localhost:3000/api/restaurants

# ค้นหาร้านอาหาร
curl "http://localhost:3000/api/restaurants?search=ไทย"

# ดึงรีวิวของร้านเฉพาะ
curl http://localhost:3000/api/reviews/restaurant/1
```

### Using Postman
Import คำสั่ง API ข้างต้นลงใน Postman collection

## 📊 Sample Data

### Restaurants (10 ร้าน)
- ร้านอาหารไทยต่างๆ
- ร้านอาหารนานาชาติ
- ร้านกาแฟและเครื่องดื่ม

### Reviews (30+ รีวิว)
- รีวิวจากผู้ใช้หลากหลาย
- คะแนนระหว่าง 1-5
- ความคิดเห็นและข้อเสนอแนะ

## 🛡️ Validation Rules

### Restaurant Validation
- `name`: จำเป็น, string, ความยาว 2-100 ตัวอักษร
- `category`: จำเป็น, string
- `location`: จำเป็น, string
- `description`: ไม่จำเป็น, string

### Review Validation
- `restaurantId`: จำเป็น, number
- `rating`: จำเป็น, number ระหว่าง 1-5
- `comment`: จำเป็น, string, ความยาว 5-500 ตัวอักษร
- `reviewerName`: จำเป็น, string

## 🐛 Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": "Error message",
  "details": "Detailed error information"
}
```

### Common Error Codes
- `400` - Bad Request (ข้อมูลไม่ถูกต้อง)
- `404` - Not Found (ไม่พบข้อมูล)
- `500` - Internal Server Error (ข้อผิดพลาดของเซิร์ฟเวอร์)

## 📝 Development Notes

### Current Implementation Status
- **Restaurants Routes**: 50% implemented
- **Reviews Routes**: 50% implemented  
- **Validation Middleware**: 60% implemented
- **File Manager**: 100% implemented
- **Server Configuration**: 70% implemented

### TODO Items
- [ ] เพิ่ม Authentication/Authorization
- [ ] เพิ่ม Rate Limiting
- [ ] เพิ่ม Image Upload สำหรับร้านอาหาร
- [ ] เพิ่ม Pagination สำหรับ API responses
- [ ] เพิ่ม Unit Tests
- [ ] เพิ่ม API Documentation ด้วย Swagger

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