# Car Repair Services - Car Doctor Platform

A comprehensive car repair services platform built with Next.js, Ant Design, Tailwind CSS, MongoDB, and NextAuth. Features include service listings, appointment booking, and user authentication.

## Features

- Server-side rendering with Next.js
- Responsive design for all devices
- User authentication with NextAuth
- MongoDB database integration
- Service listings and booking
- Ant Design components
- Secure API endpoints
- Fast loading and performance

## Technologies Used

- **Framework:** Next.js 14
- **UI Library:** Ant Design
- **Styling:** Tailwind CSS, DaisyUI
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Security:** bcrypt
- **Icons:** Heroicons, React Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/Car-Repair-Services.git
   ```

2. Open the project folder:
   ```bash
   cd Car-Repair-Services
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file with the following variables:
   ```env
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000`

## Project Structure

```
Car-Repair-Services/
├── app/
│   ├── api/
│   ├── page.js
│   ├── layout.js
│   └── globals.css
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Features in Detail

### User Authentication
- Secure login and registration
- NextAuth integration
- Password hashing with bcrypt

### Service Management
- Browse car repair services
- View service details
- Book appointments

### Database Integration
- MongoDB for data storage
- Efficient queries and caching
- Secure data handling

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
