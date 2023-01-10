DROP DATABASE if exists Scaloneta_db;
CREATE DATABASE if not exists Scaloneta_db;
USE Scaloneta_db;

-- TORNEOS
DROP TABLE if exists scaloneta_torneos;
CREATE TABLE if not exists 
	scaloneta_torneos (
		id INT NOT NULL AUTO_INCREMENT, 
        torneo VARCHAR(50), 
        imagen VARCHAR(50), 
        trofeo VARCHAR(50),
        PRIMARY KEY(id));
        
INSERT INTO scaloneta_torneos VALUES
    (1, "Copa América 2021", "/images/competiciones/logo_CopaAmerica2021.png", "/images/trofeos/trofeo_CopaAmerica.png"),
    (2, "Copa de Campeones Conmebol-UEFA 2022", "/images/competiciones/logo_Finalissima2022.png", "/images/trofeos/trofeo_Finalissima.png"),
    (3, "Copa del Mundo 2022", "/images/competiciones/logo_WorldCup2022.png", "/images/trofeos/trofeo_WorldCup.png");


-- PARTIDOS
DROP TABLE if exists scaloneta_partidos;
CREATE TABLE if not exists 
	scaloneta_partidos (
		id INT NOT NULL AUTO_INCREMENT, 
        torneo_id INT NOT NULL, 
        instancia VARCHAR(50), 
        fecha VARCHAR(50) NOT NULL, 
        vs VARCHAR(50) NOT NULL, 
        localia VARCHAR(1) NOT NULL, 
        resultado VARCHAR(50) NOT NULL, 
        video VARCHAR(50),
        PRIMARY KEY(id));

INSERT INTO scaloneta_partidos VALUES
    (1, 1, "Fase de grupos", "14/06/2021", "Chile", "L", "1-1", "15yWb8wEe5YQSQpqXWmXDLaU1GTYBn3b4"),
    (2, 1, "Fase de grupos", "18/06/2021", "Uruguay", "L", "1-0", "1u33uYXLuP8zEpJk-pSwcdffi_Hmf8N9f"),
    (3, 1, "Fase de grupos", "21/06/2021", "Paraguay", "L", "1-0", "1WDi3hBEc_h71p-K5wdTXgmv6Kqx3DE_P"),
    (4, 1, "Fase de grupos", "28/06/2021", "Bolivia", "V", "1-4", "10rwwU7DJfwEtZLW46aobpu7PhAWd4Nbm"),
    (5, 1, "Cuartos de Final", "03/07/2021", "Ecuador", "L", "3-0", "17dpfMpE0sGRWw8kyjIQlLiKUg3mLwSzU"),
    (6, 1, "Semifinal", "06/07/2021", "Colombia", "L", "1(3)-1(2)", "1VFQvbOyd6rz8EPfRoEuNb4uBIA1JDb0h"),
    (7, 1, "Final", "10/07/2021", "Brasil", "L", "1-0", "1__Xw578jVTvZI2ohAQFcOShmZ04sbYQ6"),
    (8, 2, "Final", "01/06/2022", "Italia", "V", "0-3", "18PZxQqhhBGPQBd-etV-mzqJzhIR2_qss"),
    (9, 3, "Fase de grupos", "22/11/2022", "Arabia Saudita", "L", "1-2", "1ijgfOFrf94GU1bHQScrfp1mEDy4ssFKt"),
    (10, 3, "Fase de grupos","26/11/2022","México", "L", "2-0", "1HaKWHeTQtFbrQWfPhwSZzjMAjJ3Qu81i"),
    (11, 3, "Fase de grupos", "30/11/2022", "Polonia", "V", "0-2", "1WlUfBqdLy6uClvqJhA1_d5SQ40EHrK1J"),
    (12, 3, "Octavos de Final", "03/12/2022", "Australia", "L", "2-1", "1jaeYe0chOFA4RDqSEnwGBOzQ9z0VFU9K"),
    (13, 3, "Cuartos de Final", "09/12/2022", "Países Bajos", "V", "2(3)-2(4)", "1GliTs7oLJ9zDia3YF2cqyJ1zZKFfb45o"),
    (14, 3, "Semifinal", "13/12/2022", "Croacia", "L", "3-0", "1RZbZyJ6cXYmHxs0Rb6Xs9h4nskOPIish"),
    (15, 3, "Final", "18/12/2022", "Francia", "L", "3(4)-3(2)", "1mO459aE7RoLWRg7-IKpd39SU3msAyYvh");


-- GOLES
DROP TABLE if exists scaloneta_goles;
CREATE TABLE if not exists
	scaloneta_goles (
		id INT NOT NULL,
        partido_id INT NOT NULL,
        autor VARCHAR(50) NOT NULL,
		minuto VARCHAR(50) NOT NULL,
		asistencia VARCHAR(50),
		situacion VARCHAR(50),
        localia VARCHAR(1) NOT NULL,
        PRIMARY KEY(id));

INSERT INTO scaloneta_goles VALUES 
    (1, 1, "Lionel Messi", "32", "", "Tiro Libre", "L"),
    (2, 1, "Eduardo Vargas", "57", "", "", "V"),
    (3, 2, "Guido Rodríguez", "13", "Lionel Messi", "", "L"),
    (4, 3, "Alejandro Darío Gómez", "10", "Ángel Di María", "", "L"),
    (5, 4, "Alejandro Darío Gómez", "6", "Lionel Messi", "", "V"),
    (6, 4, "Lionel Messi", "33", "", "Penal", "V"),
    (7, 4, "Lionel Messi", "42", "Sergio Aguero", "", "V"),
    (8, 4, "Erwin Saavedra", "60", "Leonel Justiniano", "", "L"),
    (9, 4, "Lautaro Martínez", "64", "", "", "V"),
    (10, 5, "Rodrigo De Paul", "40", "Lionel Messi", "", "L"),
    (11, 5, "Lautaro Martínez", "84", "Lionel Messi", "", "L"),
    (12, 5, "Lionel Messi", "90+3", "", "Tiro Libre", "L"),
    (13, 6, "Lautaro Martínez", "7", "Lionel Messi", "", "L"),
    (14, 6, "Luis Fernando Díaz", "61", "Edwin Cardona", "", "V"),
    (15, 7, "Ángel Di María", "7", "Rodrigo De Paul", "", "L"),
    (16, 8, "Lautaro Martínez", "28", "Lionel Messi", "", "V"),
    (17, 8, "Ángel Di María", "45+1", "Lautaro Martínez", "", "V"),
    (18, 8, "Paulo Dybala", "90+4", "Lionel Messi", "", "V"),
    (19, 9, "Lionel Messi", "10", "", "Penal", "L"),
    (20, 9, "Saleh Al-Shehri", "48", "Firas Al-Buraikan", "", "V"),
    (21, 9, "Salem Al-Dawsari", "53", "", "", "V"),
    (22, 10, "Lionel Messi", "64", "Ángel Di María", "", "L"),
    (23, 10, "Enzo Fernández", "87", "Lionel Messi", "", "L"),
    (24, 11, "Alexis Mac Allister", "46", "Nahuel Molina", "", "V"),
    (25, 11, "Julián Álvarez", "67", "Enzo Fernández", "", "V"),
    (26, 12, "Lionel Messi", "35", "Nicolás Otamendi", "", "L"),
    (27, 12, "Julián Álvarez", "57", "", "", "L"),
    (28, 12, "Enzo Fernández", "77", "", "En Contra", "V"),
    (29, 13, "Nahuel Molina", "35", "Lionel Messi", "", "V"),
    (30, 13, "Lionel Messi", "73", "", "Penal", "V"),
    (31, 13, "Wout Weghorst", "83", "Steven Berghuis", "", "L"),
    (32, 13, "Wout Weghorst", "90+11", "Teun Koopmeiners", "", "L"),
    (33, 14, "Lionel Messi", "34", "", "Penal", "L"),
    (34, 14, "Julián Álvarez", "39", "", "", "L"),
    (35, 14, "Julián Álvarez", "69", "Lionel Messi", "", "L"),
    (36, 15, "Lionel Messi", "23", "", "Penal", "L"),
    (37, 15, "Ángel Di María", "36", "Alexis Mac Allister", "", "L"),
    (38, 15, "Kylian Mbappé", "80", "", "Penal", "V"),
    (39, 15, "Kylian Mbappé", "81", "Marcus Thuram", "", "V"),
    (40, 15, "Lionel Messi", "108", "", "", "L"),
    (41, 15, "Kylian Mbappé", "118", "", "Penal", "V");

-- DEFINICION DE PENALES
DROP TABLE if exists scaloneta_penales;
CREATE TABLE if not exists
	scaloneta_penales (
		id INT NOT NULL AUTO_INCREMENT,
        partido_id INT NOT NULL,
        autor VARCHAR(50) NOT NULL,
        localia VARCHAR(1) NOT NULL,
        convierte BOOLEAN NOT NULL,
        PRIMARY KEY(id));

INSERT INTO scaloneta_penales VALUES
    (1, 6, "Juan Cuadrado", "V", TRUE),
    (2, 6, "Lionel Messi", "L", TRUE),
    (3, 6, "Davinson Sánchez", "V", FALSE),
    (4, 6, "Rodrigo de Paul", "L", FALSE),
    (5, 6, "Yerry Mina", "V", FALSE),
    (6, 6, "Leandro Paredes", "L", TRUE),
    (7, 6, "Miguel Borja", "V", TRUE),
    (8, 6, "Lautaro Martínez", "L", TRUE),
    (9, 6, "Edwin Cardona", "V", FALSE),
    (10, 13, "Virgil van Dijk", "L", FALSE),
    (11, 13, "Lionel Messi", "V", TRUE),
    (12, 13, "Steven Berghuis", "L", FALSE),
    (13, 13, "Leandro Paredes", "V", TRUE),
    (14, 13, "Teun Koopmeiners", "L", TRUE),
    (15, 13, "Gonzalo Montiel", "V", TRUE),
    (16, 13, "Wout Weghorst", "L", TRUE),
    (17, 13, "Enzo Fernández", "V", FALSE),
    (18, 13, "Luuk de Jong", "L", TRUE),
    (19, 13, "Lautaro Martínez", "V", TRUE),
    (20, 15, "Kylian Mbappé", "V", TRUE),
    (21, 15, "Lionel Messi", "L", TRUE),
    (22, 15, "Kingsley Coman", "V", FALSE),
    (23, 15, "Paulo Dybala", "L", TRUE),
    (24, 15, "Aurélien Tchouaméni", "V", FALSE),
    (25, 15, "Leandro Paredes", "L", TRUE),
    (26, 15, "Randal Kolo Muani", "V", TRUE),
    (27, 15, "Gonzalo Montiel", "L", TRUE);