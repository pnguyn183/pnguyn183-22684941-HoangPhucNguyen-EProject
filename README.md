# 22684941-HoangPhucNguyen-EProject

## Giới thiệu

Project này là một hệ thống **bán hàng trực tuyến** được xây dựng theo kiến trúc **Microservices**.  
Mục tiêu của project là minh họa cách triển khai một hệ thống gồm nhiều dịch vụ tách biệt, dễ mở rộng và deploy bằng Docker.
Thực hiện bởi: *Hoàng Phúc Nguyên - MSSV: 22684941*

### Các thành phần chính

- **API Gateway**: Tiếp nhận request từ client và forward tới các dịch vụ phù hợp.
- **Auth Service**: Quản lý người dùng, đăng ký, đăng nhập với **API Key**.
- **Product Service**: Quản lý sản phẩm, danh sách sản phẩm, tạo đơn hàng.
- **Order Service**: Quản lý các đơn hàng của khách hàng.
- **MongoDB**: Lưu trữ dữ liệu của các dịch vụ.
- **RabbitMQ**: Hỗ trợ messaging giữa các dịch vụ (khi dùng service *order*).

### Công nghệ sử dụng

- Node.js + Express
- MongoDB
- RabbitMQ
- Docker & Docker Compose
- HTTP Proxy cho API Gateway
- API Key cho xác thực


