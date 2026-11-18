-- Crear base de datos
CREATE DATABASE portafolio;

-- Seleccionar base de datos
USE portafolio;

-- Crear tabla de mensajes
CREATE TABLE mensajes (
    id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
    nombres_apellidos VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    celular VARCHAR(20) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);