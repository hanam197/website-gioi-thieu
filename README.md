# 🌿 Happy Station - Trạm Hạnh Phúc

> **Du lịch sức khỏe không chỉ là đặc quyền của một số ít người, mà là quyền lợi của tất cả mọi người**

## 📋 Giới Thiệu Dự Án

Happy Station là một nền tảng du lịch sức khỏe toàn diện, được xây dựng bởi những người con Phú Yên có tâm huyết. Chúng tôi cam kết đem lại trải nghiệm chữa lành thân-tâm-trí cho du khách thông qua:

- 🏖️ **Du lịch xanh & bền vững** - Hướng tới "Net Zero"
- 💆 **Dịch vụ wellness** - Spa, massage trị liệu, yoga & thiền
- 🏔️ **Du lịch sức khỏe** - Khám phá các danh lam thắng cảnh Phú Yên
- 🍽️ **Du lịch y tế & ẩm thực** 


---

## ✨ Tính Năng Chính

### 🎯 Trang Chủ (Home)
- Banner slider động hiển thị các điểm đến hấp dẫn
- Giới thiệu về Happy Station & sứ mệnh
- Danh sách tour packages nổi bật
- Dịch vụ wellness & trải nghiệm
- Danh sách điểm du lịch nổi bật
- Tin tức & bài viết khám phá
- Thư viện ảnh carousel
- Form liên hệ trực tiếp

### 🏢 Giới Thiệu (About Us)
- Câu chuyện thương hiệu Happy Station
- Sứ mệnh, tầm nhìn & giá trị cơ bản
- Thành tích & chứng chỉ (OCOP Phú Yên)
- Hình ảnh về các hoạt động & dịch vụ

### 🎫 Các Tour (Tours)
- Danh sách tour ngắn ngày & dài ngày
- Workshop chuyên biệt
- Thông tin chi tiết, giá cả, lịch trình
- Tính năng lọc & so sánh tour

### 🗺️ Địa Điểm Nổi Bật (Destinations)
- Danh lam thắng cảnh Phú Yên
- Danh sách lễ hội & sự kiện
- Làng văn hóa truyền thống
- Thông tin chi tiết & hướng dẫn du lịch

### 🛎️ Dịch Vụ (Services)
- Spa & massage trị liệu
- Yoga & thiền
- Tư vấn sức khỏe
- Lịch hoạt động & đặt lịch

### 📰 Tin Tức & Khám Phá (Blog)
- Bài viết du lịch truyên cảm
- Kinh nghiệm & mẹo du lịch
- Giới thiệu ẩm thực địa phương
- Hình ảnh & video du lịch

### 📞 Liên Hệ (Contact)
- Form liên hệ trực tiếp
- Thông tin địa chỉ & hotline
- Bản đồ Google Maps
- Kết nối mạng xã hội

---

## 🛠️ Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc semantic & SEO-friendly
- **CSS3** - Responsive design, Grid, Flexbox
- **JavaScript (Vanilla)** - Tương tác & slider động
- **Bootstrap Icons & Font Awesome** - Icons & biểu tượng
- **JSON** - Quản lý dữ liệu tour
- **Responsive Design** - Mobile-first approach

---

## 📁 Cấu Trúc Thư Mục

```
website-gioi-thieu/
├── pages/                    # Các trang HTML
│   ├── home-page.html       # Trang chủ
│   ├── about-us.html        # Giới thiệu
│   ├── tour.html            # Danh sách tour
│   ├── destinations.html    # Địa điểm nổi bật
│   ├── service-page.html    # Dịch vụ
│   ├── blog-page.html       # Danh sách tin tức
│   ├── detailed-blog-page.html  # Chi tiết bài viết
│   ├── detailed-tour-page.html  # Chi tiết tour
│   └── contact.html         # Liên hệ
├── css/                      # Stylesheet
│   ├── base.css            # CSS cơ bản
│   ├── header.css          # Header styling
│   ├── footer.css          # Footer styling
│   ├── home-page.css       # Home page styling
│   ├── about-us.css        # About page styling
│   ├── tour.css            # Tour page styling
│   ├── destinations.css    # Destinations page styling
│   ├── service-page.css    # Service page styling
│   ├── blog-page.css       # Blog page styling
│   ├── detailed-blog-page.css
│   ├── detailed-tour-page.css
│   └── contact.css
├── js/                       # JavaScript files
│   ├── js.js               # Main JavaScript
│   ├── tour-renderer.js    # Tour list rendering
│   ├── banner-slider.js    # Banner slider
│   ├── about-us.js         # About page logic
│   ├── destinations.js     # Destinations logic
│   ├── detailed-tour-page.js
│   ├── form-validation.js  # Form validation
│   ├── header-hero.js      # Header animations
│   └── tour-page.js        # Tour page logic
├── data/                     # Data files
│   ├── tour-data.json      # Tour information
│   └── tour-homedata.js    # Home page tour data
├── images/                   # Image assets
│   ├── about-us/           # About page images
│   ├── blog-page/          # Blog images
│   ├── destinations/       # Destination images
│   └── logo.png            # Brand logo
├── fonts/                    # Custom fonts
├── README.md               # Tài liệu này
└── .gitignore             # Git ignore file
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy

### Yêu Cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Server web hoặc Live Server

### Cài Đặt

1. **Clone repository**
```bash
git clone https://github.com/hanam197/website-gioi-thieu.git
cd website-gioi-thieu
```

2. **Chạy website**

**Cách 1: Sử dụng Live Server (VS Code)**
- Cài đặt extension "Live Server"
- Chuột phải vào `home-page.html` → "Open with Live Server"

**Cách 2: Sử dụng HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

3. **Truy cập**
- Mở trình duyệt: `http://localhost:8000` (hoặc port tương ứng)

---

## 📝 Hướng Dẫn Sử Dụng

### Tìm Kiếm Tour
1. Truy cập trang **"Tour"** từ menu chính
2. Xem danh sách tour available
3. Click "Khám phá" để xem chi tiết

### Đặt Tour
1. Chọn tour quan tâm
2. Click nút "Liên hệ" hoặc "Xem các tour"
3. Điền form liên hệ với thông tin cần thiết
4. Nhân viên sẽ liên hệ trong 24 giờ

### Theo Dõi Tin Tức
1. Truy cập **"Tin tức & Khám phá"**
2. Chọn bài viết để đọc chi tiết
3. Chia sẻ hoặc save bài viết yêu thích

---

## 👥 Thông Tin Liên Hệ

📍 **Địa chỉ:** Hàn Thuyên, khu phố 6 P, Thủ Đức, Hồ Chí Minh

📞 **Hotline:** [0393728287](tel:0393728287)

📧 **Email:** [tramhanhphuc.f4@gmail.com](mailto:tramhanhphuc.f4@gmail.com)

📱 **Mạng xã hội:**
- Facebook: [Happy Station](https://www.facebook.com/)
- Instagram: [@HappyStation](https://www.instagram.com/)

---

## 🎯 Mục Tiêu & Sứ Mệnh

**Sứ Mệnh:**
Xây dựng một hệ sinh thái du lịch bao gồm các hoạt động du lịch, dịch vụ, sản phẩm hướng đến "Net Zero", kết hợp bảo vệ môi trường với phát triển cộng đồng.

**Tầm Nhìn:**
Đưa du lịch xanh, du lịch sức khỏe, du lịch y tế trở thành sản phẩm du lịch đặc trưng của Phú Yên.

---

## 🌱 Cam Kết Bền Vững

- ♻️ Hoạt động du lịch hướng tới "Net Zero"
- 🤝 Hợp tác với các tổ chức bảo vệ môi trường
- 🌾 Tích hợp sản phẩm OCOP (chương trình mỗi xã một sản phẩm) Phú Yên
- 🏘️ Hỗ trợ xây dựng nông thôn mới bền vững

---

## 📧 Feedback & Đóng Góp

Chúng tôi luôn chào đón ý kiến đóng góp để cải thiện dịch vụ. Vui lòng liên hệ qua:
- **Email:** tramhanhphuc.f4@gmail.com


---

## 📄 Giấy Phép

Copyright © 2025 Happy Station. All Rights Reserved.

---

## 🙏 Cảm Ơn

Cảm ơn bạn đã ghé thăm Happy Station - Trạm Hạnh Phúc. Hãy sạc thêm năng lượng bình an và hạnh phúc cho con đường phía trước! 🌟