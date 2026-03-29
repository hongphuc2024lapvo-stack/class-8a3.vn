# 📖 Hướng Dẫn Tùy Chỉnh Chi Tiết

Hướng dẫn đầy đủ để tùy chỉnh website Class 8A3 theo nhu cầu của bạn.

## 1. THAY ĐỔI THÔNG TIN CƠẢN

### 1.1 Tên Lớp
Tìm từ khóa `Class 8A3` và thay thế:

**Files cần sửa:**
- `index.html`
- `about.html`
- `members.html`
- `news.html`
- `gallery.html`
- `contact.html`

**Tìm và thay thế:**
```html
<!-- Cũ -->
<i class="fas fa-graduation-cap"></i> Class 8A3

<!-- Mới -->
<i class="fas fa-graduation-cap"></i> Class 8A2  <!-- Hoặc tên lớp của bạn -->
```

### 1.2 Thông Tin Năm Học
**Vị trí:** about.html, footer (tất cả files)

```html
<!-- Cũ -->
Niên khóa: 2023–2027
Năm Học Hiện Tại: 2026 - 2027

<!-- Mới -->
Niên khóa: 2024–2028
Năm Học Hiện Tại: 2027 - 2028
```

### 1.3 Thông Tin Giáo Viên
**Vị trí:** about.html, members.html, contact.html

```html
<!-- Cũ -->
Giáo Viên Chủ Nhiệm: (placeholder)
Cô/Thầy [Tên Giáo Viên]

<!-- Mới -->
Giáo Viên Chủ Nhiệm: Cô Trần Thị A
Cô Trần Thị A
```

### 1.4 Thông Tin Trường Học
**Vị trí:** about.html, members.html, contact.html

```html
<!-- Cũ -->
Trường Học: [Tên Trường Học]
Địa Điểm: [Địa chỉ Trường]

<!-- Mới -->
Trường Học: Trường THCS Nguyễn Tất Thành
Địa Điểm: 123 Đường Lê Lợi, Quận 1, TPHCM
```

## 2. THAY ĐỔI MÀU SẮC

### 2.1 Thay Đổi Màu Chính

Mở file `css/style.css` và tìm phần `:root`:

```css
:root {
    /* Colors */
    --primary-blue: #0d6efd;        /* Thay đổi màu này */
    --primary-light: #0d6efd;       /* Và cả cái này */
    --white: #ffffff;
    --light-gray: #f8f9fa;
    /* ... */
}
```

**Ví dụ các màu khác:**
- Xanh lục: `#17a2b8`
- Tím: `#6f42c1`
- Đỏ: `#dc3545`
- Xanh dương đậm: `#003d82`
- Cam: `#fd7e14`

### 2.2 Tạo Gradient Khác

Tìm các `background: linear-gradient` và thay đổi:

```css
/* Cũ */
background: linear-gradient(135deg, #0d6efd 0%, #0a4ec9 100%);

/* Mới - Gradient thẳng */
background: linear-gradient(90deg, #17a2b8 0%, #117a8b 100%);

/* Mới - Gradient đứng */
background: linear-gradient(180deg, #0d6efd 0%, #0a4ec9 100%);

/* Mới - Gradient 45 độ */
background: linear-gradient(45deg, #0d6efd 0%, #ff69b4 100%);
```

### 2.3 Thay Đổi Shadow & Glow

```css
/* Cũ */
--shadow-lg: 0 8px 32px rgba(13, 110, 253, 0.2);
--shadow-glow: 0 0 20px rgba(13, 110, 253, 0.5);

/* Mới - Màu đỏ */
--shadow-lg: 0 8px 32px rgba(220, 53, 69, 0.2);
--shadow-glow: 0 0 20px rgba(220, 53, 69, 0.5);
```

## 3. THÊM & CHỈNH SỬA THÀNH VIÊN

### 3.1 Thêm Thành Viên Mới

**File:** `members.html`

Tìm section `members-grid` và thêm card mới:

```html
<div class="member-card animate-on-scroll fade-up">
    <div class="member-image">
        <i class="fas fa-user"></i>
    </div>
    <div class="member-info">
        <div class="member-name">Tên Bạn</div>
        <div class="member-role">Chức Vụ</div>
    </div>
</div>
```

### 3.2 Thay Đổi Chức Vụ

```html
<!-- Trước -->
<div class="member-role">Thành Viên</div>

<!-- Sau -->
<div class="member-role">Phó Lớp</div>
<div class="member-role">Bí Thư Đoàn</div>
<div class="member-role">Thủ Quỹ</div>
```

### 3.3 Thêm Ảnh Đại Diện

```html
<!-- Cũ - Icon -->
<div class="member-image">
    <i class="fas fa-user"></i>
</div>

<!-- Mới - Ảnh thật -->
<div class="member-image" style="background: url('images/avatar-name.jpg'); background-size: cover; background-position: center;">
</div>
```

## 4. THÊM & CHỈNH SỬA TIN TỨC

### 4.1 Thêm Thông Báo Mới

**File:** `news.html`

Tìm section `news-grid` và thêm card:

```html
<div class="news-card animate-on-scroll fade-up">
    <div class="news-date">
        <i class="fas fa-calendar"></i> 29/03/2026
    </div>
    <h3 class="news-title">Tiêu Đề Tin Tức</h3>
    <p class="news-description">
        Nội dung tin tức chi tiết ở đây...
    </p>
</div>
```

### 4.2 Format Ngày Tháng

```html
<!-- Cũ -->
<div class="news-date">
    <i class="fas fa-calendar"></i> 29/03/2026
</div>

<!-- Mới - Định dạng khác -->
<div class="news-date">
    <i class="fas fa-calendar"></i> Thứ Ba, 29 tháng 3
</div>
```

## 5. TÙY CHỈNH HERO SECTION

### 5.1 Thay Đổi Tiêu Đề

**File:** `index.html`

```html
<!-- Cũ -->
<h1 class="fade-up">Chào mừng đến với Website Class 8A3</h1>

<!-- Mới -->
<h1 class="fade-up">Chào Mừng Bạn Đến Lớp 8A2 🎓</h1>
```

### 5.2 Thay Đổi Mô Tả

```html
<!-- Cũ -->
<p class="fade-up animate-delay-1">Nơi lưu giữ những kỷ niệm đẹp nhất của lớp chúng ta</p>

<!-- Mới -->
<p class="fade-up animate-delay-1">Một gia đình nhỏ, một công đồng lớn! 💪</p>
```

### 5.3 Thay Đổi Background

```css
/* Trong css/style.css - .hero section */

/* Cũ */
background: linear-gradient(135deg, var(--primary-blue) 0%, #0a4ec9 100%);

/* Mới - Với background ảnh */
background: linear-gradient(135deg, var(--primary-blue) 0%, #0a4ec9 100%),
            url('images/background.jpg') center/cover no-repeat;
background-blend-mode: overlay;
```

## 6. TÙY CHỈNH FORM LIÊN HỆ

### 6.1 Thêm Trường Mới

**File:** `contact.html`

Trong `.contact-form form`, thêm:

```html
<div class="form-group">
    <label for="phone">
        <i class="fas fa-phone"></i> Số Điện Thoại
    </label>
    <input type="tel" id="phone" name="phone" placeholder="0123.456.789">
</div>

<div class="form-group">
    <label for="category">
        <i class="fas fa-list"></i> Loại Yêu Cầu
    </label>
    <select id="category" name="category" style="padding: 1rem; border: 2px solid #dee2e6; border-radius: 10px;">
        <option>Chọn loại yêu cầu...</option>
        <option>Thắc mắc chung</option>
        <option>Đóng góp ý kiến</option>
        <option>Báo cáo vấn đề</option>
    </select>
</div>
```

### 6.2 Thay Đổi Liên Hệ

```html
<!-- Cũ -->
<p style="color: #999;">
    <i class="fas fa-phone"></i> 0123.456.789
</p>

<!-- Mới -->
<p style="color: #999;">
    <i class="fas fa-phone"></i> 
    <a href="tel:0123456789" style="color: #999; text-decoration: none;">0123.456.789</a>
</p>
```

## 7. TÙỲ CHỈNH ANIMATIONS

### 7.1 Tăng/Giảm Tốc Độ Animation

**File:** `css/animation.css`

```css
/* Cũ */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-up {
    animation: fadeUp 0.6s ease-out forwards;
}

/* Mới - Nhanh hơn */
.fade-up {
    animation: fadeUp 0.3s ease-out forwards;  /* 0.6s -> 0.3s */
}

/* Mới - Chậm hơn */
.fade-up {
    animation: fadeUp 1s ease-out forwards;  /* 0.6s -> 1s */
}
```

### 7.2 Thay Đổi Animation Style

```css
/* Cũ */
animation: fadeUp 0.6s ease-out forwards;

/* Mới - Bounce effect */
animation: fadeUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;

/* Mới - Smooth effect */
animation: fadeUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

/* Mới - Linear */
animation: fadeUp 0.6s linear forwards;
```

## 8. THAY ĐỔI FOOTER

### 8.1 Thay Đổi Nội Dung Footer

**Tất cả files HTML**

```html
<!-- Cũ -->
<footer class="footer">
    <p>&copy; 2026 Class 8A3 - All Rights Reserved.</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Được tạo với ❤️ cho gia đình lớp học</p>
</footer>

<!-- Mới -->
<footer class="footer">
    <p>&copy; 2026 Class 8A2 - Bản Quyền Được Bảo Vệ</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Tạo bởi <strong>Tên Bạn</strong> | Năm Học 2026-2027</p>
</footer>
```

### 8.2 Thay Đổi Màu Footer

```css
/* Trong css/style.css */

/* Cũ */
.footer {
    background: linear-gradient(135deg, var(--primary-blue), #0a4ec9);
}

/* Mới - Màu đen */
.footer {
    background: linear-gradient(135deg, #1a1a1a, #333333);
}

/* Mới - Màu gradient tím */
.footer {
    background: linear-gradient(135deg, #6f42c1, #5a32a3);
}
```

## 9. THÊM FONT CHỮ TỰA

### 9.1 Thêm Google Fonts

**File:** Tất cả HTML files, trong `<head>`

```html
<!-- Thêm dòng này vào phía trên <link rel="stylesheet" href="css/style.css"> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Sau đó trong `css/style.css`:

```css
body {
    font-family: 'Poppins', sans-serif;  /* Thay đổi từ 'Segoe UI' */
}
```

## 10. QUẢN LÝ HÌNH ẢNH

### 10.1 Thêm Hình Ảnh

1. Lưu ảnh vào thư mục `images/`
2. Thêm vào HTML:

```html
<!-- Cho Gallery -->
<div class="gallery-item animate-on-scroll fade-up">
    <img class="gallery-image" src="images/photo1.jpg" alt="Ảnh lớp học">
    <div class="gallery-overlay">
        <i class="fas fa-search"></i>
    </div>
</div>

<!-- Cho Member -->
<div class="member-image" style="background: url('images/avatar.jpg'); background-size: cover;"></div>

<!-- Cho Background -->
<div style="background: url('images/bg.jpg') center/cover;"></div>
```

### 10.2 Tối Ưu Hóa Ảnh

- Dùng ảnh `.jpg` hoặc `.png` (không quá 1MB)
- Kích thước hợp lý (chiều rộng 800px trở lên cho background)
- Dùng công cụ compress (TinyPNG, Squoosh)

## 11. KÍCH HOẠT CHỨC NĂNG SPECIAL

### 11.1 Scroll Animation Detail

```javascript
// Trong js/main.js, hàm setupScrollAnimations

const observerOptions = {
    threshold: 0.1,      // 0.1 = kích hoạt khi 10% visible
    rootMargin: '0px 0px -100px 0px'
};

// Thay threshold để điều chỉnh:
// 0 = kích hoạt khi bất kỳ phần nào visible
// 0.5 = kích hoạt khi 50% visible
// 1 = kích hoạt khi 100% visible
```

### 11.2 Smooth Scroll

```javascript
// Đã có sẵn trong js/main.js
// Kích hoạt bằng cách thêm href="#id" trong link

<a href="#features">Xem thêm</a>
<section id="features">...</section>
```

## 🎯 QUICK REFERENCE - Thay Đổi Nhanh

```html
<!-- Thay tên lớp -->
Class 8A3 → Class 8A2

<!-- Thay năm học -->
2023–2027 → 2024–2028

<!-- Thay favicon -->
<link rel="icon" href="images/favicon.ico">

<!-- Thay Open Graph (cho social media) -->
<meta property="og:title" content="Class 8A3 Website">
<meta property="og:description" content="Website chuyên nghiệp cho lớp học">
<meta property="og:image" content="images/thumbnail.jpg">
```

## ⚠️ CẬM ĐẢNG

- **KHÔNG** xóa class CSS mà không hiểu nó làm gì
- **LUÔN** backup file gốc trước khi sửa
- Test trên mobile khi thay đổi layout
- Kiểm tra trên nhiều browser

---

✨ **Hết rồi! Bạn đã sẵn sàng tùy chỉnh website của mình!**
