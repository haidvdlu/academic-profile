# HƯỚNG DẪN CẬP NHẬT WEBSITE HỒ SƠ HỌC THUẬT – DƯƠNG VĂN HẢI

## 1. Website hiện gồm những gì?
Bản này là **phiên bản công khai** được tạo từ CV cập nhật ngày **07/02/2026** và ảnh chân dung đã cung cấp.

Các file chính:
- `index.html`: cấu trúc website. Thường không cần sửa.
- `style.css`: giao diện.
- `app.js`: chức năng song ngữ, lọc/tìm công bố và chuyển tab đề tài.
- `data.js`: **toàn bộ dữ liệu hiển thị trên website**. Đây là file anh sẽ cập nhật thường xuyên nhất.
- `assets/images/portrait.jpg`: ảnh chân dung.


## 1A. Thông tin đã được ẩn trong bản công khai
Để phù hợp khi đăng Internet, website **không hiển thị và không đóng gói CV gốc** chứa thông tin nhạy cảm.

Các dữ liệu đã loại khỏi bản public:
- ngày sinh;
- giới tính;
- nơi sinh, nguyên quán;
- địa chỉ thường trú;
- số điện thoại cá nhân;
- email cá nhân;
- file CV gốc có chứa các thông tin trên.

Thông tin liên hệ được giữ lại:
- email cơ quan: `haidv@dlu.edu.vn`;
- điện thoại cơ quan;
- địa chỉ cơ quan.



## Lưu ý về quá trình công tác
Bản public này **không hiển thị quá trình công tác chi tiết** và dữ liệu `workHistory` đã được loại khỏi `data.js`.
Website chỉ giữ **chức vụ hiện tại** và **đơn vị công tác hiện tại** trong hồ sơ học thuật.

## 2. Cách xem website
Giải nén file ZIP và nhấp đúp `index.html`.

Nếu muốn chạy như một website local:
```bash
python -m http.server 8000
```
Sau đó mở `http://localhost:8000`.

## 3. Nguyên tắc cập nhật
Mở `data.js` bằng VS Code hoặc Notepad++.
Dữ liệu nằm trong:
```js
window.SITE_DATA = { ... };
```
Không cần sửa `index.html` khi chỉ thay nội dung.

## 4. Cập nhật thông tin học thuật / chức vụ
Tìm khối `"profile"`:
```js
"profile": {
  "name": "Dương Văn Hải",
  "professionalTitleVi": "Giảng viên cao cấp",
  "positionVi": "Trưởng Khoa Toán – Tin học",
  ...
}
```
Sửa đúng giá trị mới rồi lưu.

## 5. Thay ảnh chân dung
Cách dễ nhất:
1. Chuẩn bị ảnh JPG.
2. Đổi tên thành `portrait.jpg`.
3. Chép đè vào `assets/images/portrait.jpg`.
Không cần sửa code.

## 6. Thêm bài báo mới
Tìm mảng `"publications"` và thêm một mục:
```js
{
  "no": 42,
  "title": "Tên bài báo",
  "authors": 4,
  "venue": "Tên tạp chí/hội nghị...",
  "pages": "1-15",
  "year": 2027,
  "category": "International Journal",
  "tags": ["Q1", "ISI"]
}
```
Các loại `category` đang dùng:
- `International Journal`
- `Domestic Journal`
- `International Conference`
- `Domestic Conference`

Sau khi thêm bài, nên cập nhật phần `"publicationSummary"` cho đúng tổng số.

## 7. Cập nhật tổng số công bố
Tìm:
```js
"publicationSummary": {
  "total": 41,
  "internationalJournals": 22,
  "q1": 16,
  "q2": 4,
  "scopusJournals": 2,
  "domesticJournals": 5,
  "internationalConferences": 13,
  "domesticConferences": 1
}
```
Sửa các con số theo CV mới.

## 8. Thêm đề tài chủ trì
Tìm `"projectsLed"` và thêm:
```js
{
  "no": 11,
  "title": "Tên đề tài",
  "level": "Đề tài cấp ...",
  "period": "2027–2029",
  "result": "Đang thực hiện"
}
```

## 9. Thêm đề tài tham gia
Tương tự trong `"projectsMember"`.

## 10. Cập nhật đào tạo và chứng chỉ
- Quá trình đào tạo: `"education"`
- Chứng chỉ/bồi dưỡng: `"training"`
- Ngoại ngữ: `"language"`

## 12. Cập nhật hướng nghiên cứu
Tìm `"researchInterests"`. Có thể thêm hoặc bớt mục. Website tự dàn lại.

## 13. Cập nhật phản biện
Tìm `"reviewing"` và thêm tên tạp chí/hội nghị:
```js
"New Journal / Conference"
```

## 14. Cập nhật giải thưởng
Tìm `"awards"`:
```js
{
  "year": "2027",
  "vi": "Tên giải thưởng tiếng Việt",
  "en": "English name"
}
```

## 15. Cập nhật số liệu hướng dẫn sau đại học
Tìm `"supervision"`:
```js
"phdGraduated": null,
"phdOngoing": 2,
"mastersGraduated": 5,
"mastersOngoing": 3
```
Nếu chưa có số liệu, có thể dùng `null`.

## 16. CV công khai
Bản public **không kèm CV gốc** để tránh làm lộ thông tin riêng tư. Nếu sau này muốn cho phép tải CV, nên tạo một **CV public đã ẩn dữ liệu nhạy cảm**, rồi mới thêm liên kết tải xuống.

## 17. Đưa lên GitHub Pages
1. Tạo repository GitHub, ví dụ `academic-profile`.
2. Upload toàn bộ nội dung trong thư mục website.
3. Vào `Settings` → `Pages`.
4. Chọn `Deploy from a branch`.
5. Chọn branch `main`, thư mục `/ (root)` → `Save`.
6. GitHub sẽ tạo URL dạng:
   `https://username.github.io/academic-profile/`

## 18. Cập nhật website sau này
Khi có nội dung mới:
1. Sửa `data.js`.
2. Commit/upload lại `data.js` lên GitHub.
3. Nếu thay ảnh/CV, upload đè file tương ứng.
4. GitHub Pages tự cập nhật.

## 19. Lưu ý quyền riêng tư
Khi cập nhật website, nên tiếp tục duy trì nguyên tắc: chỉ công khai thông tin cần thiết cho mục đích học thuật và nghề nghiệp. Không đưa số điện thoại cá nhân, địa chỉ nhà, ngày sinh đầy đủ hoặc file tài liệu chứa các dữ liệu đó lên kho public.

## 20. Kiểm tra lỗi
Nếu website trắng sau khi sửa `data.js`, thường do:
- thiếu dấu phẩy `,`;
- thiếu dấu ngoặc `}` hoặc `]`;
- sửa sai dấu nháy.

Cách an toàn: sao chép một mục hiện có, dán bên dưới, rồi chỉ thay nội dung.
