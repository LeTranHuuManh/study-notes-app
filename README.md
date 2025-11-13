# 📚 Study Notes App - Ứng dụng Ghi chú học tập

Ứng dụng ghi chú học tập hiện đại được xây dựng bằng Ionic React và Capacitor, giúp sinh viên quản lý ghi chú theo từng môn học một cách dễ dàng và trực quan.

## 👨‍🎓 Thông tin sinh viên

- **Họ và tên:** Lê Trần Hữu Mạnh
- **Mã sinh viên:** 22It171

## ✨ Tính năng chính

### 1. Quản lý môn học
- ✅ Hiển thị danh sách môn học dạng lưới (grid) với giao diện đẹp mắt
- ✅ Mỗi môn học có màu gradient riêng biệt
- ✅ Thêm môn học mới thông qua nút FAB (Floating Action Button)
- ✅ Icons chuyên biệt cho từng môn học

### 2. Quản lý ghi chú
- ✅ Xem danh sách ghi chú theo từng môn học
- ✅ Thêm ghi chú mới
- ✅ Sửa ghi chú đã có
- ✅ Xóa ghi chú với xác nhận
- ✅ Mỗi ghi chú có màu gradient khác nhau

### 3. Lưu trữ dữ liệu
- ✅ Sử dụng Capacitor Preferences để lưu trữ local
- ✅ Dữ liệu được bảo toàn khi tắt/mở lại ứng dụng
- ✅ Ghi chú được lưu riêng theo từng môn học

### 4. Giao diện
- ✅ Thiết kế hiện đại với gradient đa màu sắc
- ✅ Animations mượt mà
- ✅ Responsive design (web, tablet, mobile)
- ✅ Hiệu ứng hover và transitions
- ✅ Glassmorphism UI effects

## 🚀 Công nghệ sử dụng

- **Framework:** Ionic React
- **Runtime:** Capacitor
- **Language:** TypeScript
- **Storage:** Capacitor Preferences
- **Icons:** Ionicons
- **Styling:** CSS3 với Gradients & Animations

## 📋 Yêu cầu hệ thống

### Để chạy trên Web:
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Để chạy trên Android:
- Android Studio
- JDK 11 trở lên
- Android SDK

### Để chạy trên iOS (chỉ trên macOS):
- Xcode
- CocoaPods
- macOS

## 🛠️ Hướng dẫn cài đặt và chạy

### 1. Clone repository

```bash
git clone https://github.com/LeTranHuuManh/study-notes-app.git
cd study-notes-app
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy ứng dụng trên Web

```bash
ionic serve
```

Ứng dụng sẽ tự động mở tại: `http://localhost:8100`

### 4. Chạy ứng dụng trên Android

#### Bước 1: Build ứng dụng
```bash
ionic build
```

#### Bước 2: Thêm platform Android (nếu chưa có)
```bash
ionic capacitor add android
```

#### Bước 3: Sync code
```bash
ionic capacitor sync android
```

#### Bước 4: Mở Android Studio
```bash
ionic capacitor open android
```

#### Bước 5: Chạy ứng dụng
- Trong Android Studio, chọn thiết bị (máy thật hoặc emulator)
- Nhấn nút **Run 'app'** (▶️)

### 5. Chạy ứng dụng trên iOS (chỉ dành cho macOS)

#### Bước 1: Build ứng dụng
```bash
ionic build
```

#### Bước 2: Thêm platform iOS (nếu chưa có)
```bash
ionic capacitor add ios
```

#### Bước 3: Sync code
```bash
ionic capacitor sync ios
```

#### Bước 4: Mở Xcode
```bash
ionic capacitor open ios
```

#### Bước 5: Chạy ứng dụng
- Trong Xcode, chọn thiết bị (máy thật hoặc simulator)
- Nhấn nút **Run** (▶️)

## 📱 Hướng dẫn sử dụng

### Trang chủ - Quản lý môn học
1. Mở ứng dụng để xem danh sách các môn học
2. Nhấn vào nút **➕** ở góc dưới bên phải để thêm môn học mới
3. Nhập tên môn học và nhấn **Thêm**
4. Click vào bất kỳ môn học nào để xem/thêm ghi chú

### Trang ghi chú
1. Nhập nội dung ghi chú vào ô input
2. Nhấn nút **Thêm** để lưu ghi chú
3. Để **sửa** ghi chú: nhấn vào icon bút ✏️ bên cạnh ghi chú
4. Để **xóa** ghi chú: nhấn vào icon thùng rác 🗑️ và xác nhận

## 🎨 Screenshots

### Trang chủ - Danh sách môn học
Hiển thị các môn học dạng lưới với gradient đa màu sắc

### Trang ghi chú
Quản lý ghi chú với giao diện hiện đại và colorful cards

## 📂 Cấu trúc dự án

```
study-notes-app/
├── android/                    # Android native project
├── ios/                        # iOS native project (nếu có)
├── public/                     # Public assets
├── src/
│   ├── pages/
│   │   ├── Home.tsx           # Trang chủ - danh sách môn học
│   │   ├── Home.css           # Styles cho trang chủ
│   │   ├── Notes.tsx          # Trang ghi chú
│   │   └── Notes.css          # Styles cho trang ghi chú
│   ├── theme/
│   │   └── variables.css      # Theme và color variables
│   ├── App.tsx                # Main app component
│   └── main.tsx               # Entry point
├── capacitor.config.ts        # Capacitor configuration
├── ionic.config.json          # Ionic configuration
├── package.json               # Dependencies
└── README.md                  # Documentation

```

## 🔧 Các lệnh hữu ích

```bash
# Chạy trên web
ionic serve

# Build production
ionic build

# Sync với native platforms
ionic capacitor sync

# Sync Android
ionic capacitor sync android

# Sync iOS
ionic capacitor sync ios

# Mở Android Studio
ionic capacitor open android

# Mở Xcode
ionic capacitor open ios

# Kiểm tra lỗi
npm run lint
```

## 🐛 Xử lý lỗi thường gặp

### Lỗi: "ionic serve can only be run in an Ionic project directory"
**Giải pháp:** Đảm bảo bạn đang ở đúng thư mục dự án
```bash
cd study-notes-app
ionic serve
```

### Lỗi: Android Studio không build được
**Giải pháp:** 
1. Chạy lại sync: `ionic capacitor sync android`
2. Clean project trong Android Studio: **Build > Clean Project**
3. Rebuild: **Build > Rebuild Project**

### Lỗi: Dependencies không tương thích
**Giải pháp:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Ghi chú kỹ thuật

- Ứng dụng sử dụng **Capacitor Preferences** thay vì Storage plugin cũ
- Mỗi ghi chú có **ID duy nhất** (timestamp) để dễ dàng quản lý
- Dữ liệu được lưu theo format JSON
- Responsive design hỗ trợ nhiều kích thước màn hình
- Sử dụng CSS animations và transitions cho UX mượt mà

## 📄 License

MIT License - Tự do sử dụng cho mục đích học tập

## 👤 Tác giả

**Lê Trần Hữu Mạnh**
- Mã SV: 22It171
- GitHub: [@LeTranHuuManh](https://github.com/LeTranHuuManh)

---

⭐ Nếu bạn thấy project này hữu ích, hãy cho nó một star nhé!
