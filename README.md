# API PARA CREAR UN TABLERO DE MANIFESTACION

Una aplicación web completa para la gestion de un tablero de manifestacion. Permite a los usuarios:

- Registrarse e iniciar sesión.
- Ver las imagenes con su descripción, subirlas y eliminarlas.


## 🛠️ Tecnologías

### Frontend

- HTML + Bootstrap 5
- JavaScript puro (vanilla)
- ejs motor de plantillas para dar dinamismo al documento HTML permite renderizar codigo javascript desde el backend

### Backend
- Node.js + Express
- MongoDB con Mongoose
- JWT (JSON Web Token) para autenticación
- Bcrypt con sal y **pepper** para el manejo seguro de contraseñas
- Multer Middleware que sirve para procesar formularios que incluyen archivos, por ejemplo cuando un usuario sube una imagen, un  PDF o cualquier tipo de archivo mediante un formulario HTML.
- Timeago formatea la fecha de creacion para que de vea como "x tiempo ago"
---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/JulyAnahi/TableroDeManifestar.git
cd API_PINTEREST
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` con:

```env
MONGO_URI=mongodb://localhost:27017/cineapp
JWT_SECRET=tu_clave_secreta
PEPPER=tu_pepper
```

4. Iniciar el servidor:

```bash
npm run dev
```

Servidor corriendo en [http://localhost:3000](http://localhost:3000)

---

## 📁 Estructura del Proyecto

```
API_PINTEREST/
├── middleware/
│   └── authMiddleware.js
│   
├── controllers/
│   └── authControllers.js
│   
├── models/
│   └── User.js
│   └── image.js
├── routes/
│   ├── auth.js
│   ├── index.js
│   ├── proptected.js
├── views/partials
│   ├── login.ejs
│   ├── index.ejs
│   ├── register.ejs
│   ├── profile.ejs
│   ├── uploads.ejs
│   
├── public/img/uploads
│     
├── index.js
└── .env
├── database.js
└── .gitignore


---

## 🔐 Autenticación

- Las contraseñas están cifradas con bcrypt, sal y pepper.
- El token JWT se guarda en `localStorage` y se envía en el header `Authorization`.

---

## 🧠 Funcionalidades del Usuario
- Crear un tablero con imagenes de su preferencia
- Subir imagenes con su titulo y descripción y eliminar .


---

## 📸 Ejemplo de Imagenes

```json

[
  {
    _id: new ObjectId('67fbd0ea8540c775588db884'),
    created_at: 2025-04-13T00:12:37.802Z,
    title: 'de viaje',
    description: 'Disfrutando la vida',
    path: '/img/uploads/a9e0bfc5-b63f-4725-ac5f-e9c8d9f74220.jpg',
    originalname: 'a9e0bfc5-b63f-4725-ac5f-e9c8d9f74220.jpg',
    mimeType: 'image/jpeg',
    size: 101851,
    __v: 0
  },
  {
    _id: new ObjectId('67fbd720ad2c8af0f42786e9'),
    created_at: 2025-04-13T15:00:32.221Z,
    title: 'Comienza la aventura',
    description: 'Viajando por el mundo',
    path: '/img/uploads/263cdd79-13e6-4fdc-aede-96cc3b282078.jpg',
    originalname: '263cdd79-13e6-4fdc-aede-96cc3b282078.jpg',
    mimeType: 'image/jpeg',
    size: 17157,
    __v: 0
  }
]  
```

---

## ✍️ Autor

Hecho con ❤️ por [Julieta Ruiz].

---



