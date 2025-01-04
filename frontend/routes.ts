/**
 * An array of routes that are accesible to the public
 * These routes do not require autgenthicateion 
 * array yang berisi rute-rute dalam aplikasi Anda yang dapat diakses oleh publik tanpa memerlukan autentikasi.
 *  Dalam contoh ini, rute yang diizinkan adalah / (root) dan /settings.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification"
];


/**
 * An array of routes that are used for authentication
 * These routes will riderect logged in users to /settings
 * rray yang berisi rute-rute dalam aplikasi yang digunakan untuk proses autentikasi pengguna. 
 * Pengguna yang sudah masuk (logged-in) dan mencoba mengakses rute-rute ini akan dialihkan (redirect) ke /settings. 
 * Rute-rute yang dimasukkan di sini adalah /auth/login untuk halaman login dan /auth/register untuk halaman registrasi.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/login-admin",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
    // "/auth/register"
]


/**
 * The prefix for API authentichation routes
 * Routes that start with this prefix are used for API authentication purposes
 * digunakan sebagai awalan untuk rute-rute dalam API Anda yang digunakan untuk tujuan autentikasi. 
 * Rute-rute yang dimulai dengan awalan ini (misalnya /api/auth/login, /api/auth/logout, dsb.) 
 * digunakan untuk otentikasi melalui API.
 * @type {string[]}
 */
export const apiAuthPrefix = "api/auth";


/**
 * The default redirect path after Loggin in
 * string yang menyimpan rute tempat pengguna akan diarahkan setelah berhasil masuk (login). 
 * Dalam contoh ini, pengguna akan diarahkan ke /settings setelah berhasil masuk.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";


/**
 * The default redirect path after Loggin in
 * string yang menyimpan rute tempat pengguna akan diarahkan setelah berhasil masuk (login). 
 * Dalam contoh ini, pengguna akan diarahkan ke /settings setelah berhasil masuk.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT_ADMIN = "/auth/register";



