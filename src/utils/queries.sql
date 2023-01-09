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
INSERT INTO scaloneta_torneos VALUES (1, "Copa América 2021", "/images/competiciones/logo_CopaAmerica2021.png", "/images/trofeos/trofeo_CopaAmerica.png");
INSERT INTO scaloneta_torneos VALUES (2, "Copa de Campeones Conmebol-UEFA 2022", "/images/competiciones/logo_Finalissima2022.png", "/images/trofeos/trofeo_Finalissima.png");
INSERT INTO scaloneta_torneos VALUES (3, "Copa del Mundo 2022", "/images/competiciones/logo_WorldCup2022.png", "/images/trofeos/trofeo_WorldCup2022.png");


-- PARTIDOS
DROP TABLE if exists scaloneta_partidos;
CREATE TABLE if not exists 
	scaloneta_partidos (
		id INT NOT NULL AUTO_INCREMENT, 
        torneo_id INT NOT NULL, 
        torneo VARCHAR(50), 
        instancia VARCHAR(50), 
        fecha VARCHAR(50) NOT NULL, 
        vs VARCHAR(50) NOT NULL, 
        banderavs VARCHAR(50), 
        localia VARCHAR(1) NOT NULL, 
        resultado VARCHAR(50) NOT NULL, 
        video VARCHAR(50),
        PRIMARY KEY(id));
INSERT INTO scaloneta_partidos VALUES (1, 1, "Copa América 2021", "Fase de grupos", "14/06/2021", "Chile", "", "L", "1-1", "15yWb8wEe5YQSQpqXWmXDLaU1GTYBn3b4");
INSERT INTO scaloneta_partidos VALUES (2, 1, "Copa América 2021", "Fase de grupos", "18/06/2021", "Uruguay", "", "L", "1-0", "1u33uYXLuP8zEpJk-pSwcdffi_Hmf8N9f");
INSERT INTO scaloneta_partidos VALUES (3, 1, "Copa América 2021", "Fase de grupos", "21/06/2021", "Paraguay", "", "L", "1-0", "1WDi3hBEc_h71p-K5wdTXgmv6Kqx3DE_P");
INSERT INTO scaloneta_partidos VALUES (4, 1, "Copa América 2021", "Fase de grupos", "28/06/2021", "Bolivia", "", "V", "1-4", "10rwwU7DJfwEtZLW46aobpu7PhAWd4Nbm");
INSERT INTO scaloneta_partidos VALUES (5, 1, "Copa América 2021", "Cuartos de Final", "03/07/2021", "Ecuador", "", "L", "3-0", "17dpfMpE0sGRWw8kyjIQlLiKUg3mLwSzU");
INSERT INTO scaloneta_partidos VALUES (6, 1, "Copa América 2021", "Semifinal", "06/07/2021", "Colombia", "", "L", "1(3)-1(2)", "1VFQvbOyd6rz8EPfRoEuNb4uBIA1JDb0h");
INSERT INTO scaloneta_partidos VALUES (7, 1, "Copa América 2021", "Final", "10/07/2021", "Brasil", "", "L", "1-0", "1__Xw578jVTvZI2ohAQFcOShmZ04sbYQ6");

INSERT INTO scaloneta_partidos VALUES (8, 2, "Finalissima", "Final", "01/06/2022", "Italia", "", "L", "3-0", "18PZxQqhhBGPQBd-etV-mzqJzhIR2_qss");

INSERT INTO scaloneta_partidos VALUES (9, 3, "Copa Mundial Qatar 2022", "Fase de grupos", "22/11/2022", "Arabia Saudita", "", "L", "1-2", "1ijgfOFrf94GU1bHQScrfp1mEDy4ssFKt");
INSERT INTO scaloneta_partidos VALUES (10, 3, "Copa Mundial Qatar 2022", "Fase de grupos", "26/11/2022", "México", "", "L", "2-0", "1HaKWHeTQtFbrQWfPhwSZzjMAjJ3Qu81i");
INSERT INTO scaloneta_partidos VALUES (11, 3, "Copa Mundial Qatar 2022", "Fase de grupos", "30/11/2022", "Polonia", "", "V", "0-2", "1WlUfBqdLy6uClvqJhA1_d5SQ40EHrK1J");
INSERT INTO scaloneta_partidos VALUES (12, 3, "Copa Mundial Qatar 2022", "Octavos de Final", "03/12/2022", "Australia", "", "L", "2-1", "1jaeYe0chOFA4RDqSEnwGBOzQ9z0VFU9K");
INSERT INTO scaloneta_partidos VALUES (13, 3, "Copa Mundial Qatar 2022", "Cuartos de Final", "09/12/2022", "Países Bajos", "", "V", "2(3)-2(4)", "1GliTs7oLJ9zDia3YF2cqyJ1zZKFfb45o");
INSERT INTO scaloneta_partidos VALUES (14, 3, "Copa Mundial Qatar 2022", "Semifinal", "13/12/2022", "Croacia", "", "L", "3-0", "1RZbZyJ6cXYmHxs0Rb6Xs9h4nskOPIish");
INSERT INTO scaloneta_partidos VALUES (15, 3, "Copa Mundial Qatar 2022", "Final", "18/12/2022", "Francia", "", "L", "3(4)-3(2)", "1mO459aE7RoLWRg7-IKpd39SU3msAyYvh");


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

-- COPA AMÉRICA 2021
INSERT INTO scaloneta_goles VALUES (1, 1, "Lionel Messi", "32", "", "Tiro Libre", "L");
INSERT INTO scaloneta_goles VALUES (2, 1, "Eduardo Vargas", "57", "", "", "V");

INSERT INTO scaloneta_goles VALUES (3, 2, "Guido Rodríguez", "13", "Lionel Messi", "", "L");

INSERT INTO scaloneta_goles VALUES (4, 3, "Alejandro Darío Gómez", "10", "Ángel Di María", "", "L");

INSERT INTO scaloneta_goles VALUES (5, 4, "Alejandro Darío Gómez", "6", "Lionel Messi", "", "V");
INSERT INTO scaloneta_goles VALUES (6, 4, "Lionel Messi", "33", "", "Penal", "V");
INSERT INTO scaloneta_goles VALUES (7, 4, "Lionel Messi", "42", "Sergio Aguero", "", "V");
INSERT INTO scaloneta_goles VALUES (8, 4, "Erwin Saavedra", "60", "Leonel Justiniano", "", "L");
INSERT INTO scaloneta_goles VALUES (9, 4, "Lautaro Martínez", "64", "", "", "V");

INSERT INTO scaloneta_goles VALUES (10, 5, "Rodrigo De Paul", "40", "Lionel Messi", "", "L");
INSERT INTO scaloneta_goles VALUES (11, 5, "Lautaro Martínez", "84", "Lionel Messi", "", "L");
INSERT INTO scaloneta_goles VALUES (12, 5, "Lionel Messi", "90+3", "", "Tiro Libre", "L");

INSERT INTO scaloneta_goles VALUES (13, 6, "Lautaro Martínez", "7", "Lionel Messi", "", "L");
INSERT INTO scaloneta_goles VALUES (14, 6, "Luis Fernando Díaz", "61", "Edwin Cardona", "", "V");

INSERT INTO scaloneta_goles VALUES (15, 7, "Ángel Di María", "7", "Rodrigo De Paul", "", "L");

-- FINALÍSSIMA 2022
INSERT INTO scaloneta_goles VALUES (16, 8, "Lautaro Martínez", "28", "Lionel Messi", "", "L");
INSERT INTO scaloneta_goles VALUES (17, 8, "Ángel Di María", "45+1", "Lautaro Martínez", "", "L");
INSERT INTO scaloneta_goles VALUES (18, 8, "Paulo Dybala", "90+4", "Lionel Messi", "", "L");

-- MUNDIAL 2022
INSERT INTO scaloneta_goles VALUES (19, 9, "Lionel Messi", "10", "", "Penal", "L");
INSERT INTO scaloneta_goles VALUES (20, 9, "Saleh Al-Shehri", "48", "Firas Al-Buraikan", "", "V");
INSERT INTO scaloneta_goles VALUES (21, 9, "Salem Al-Dawsari", "53", "", "", "V");

INSERT INTO scaloneta_goles VALUES (22, 10, "Lionel Messi", "64", "Ángel Di María", "", "L");
INSERT INTO scaloneta_goles VALUES (23, 10, "Enzo Fernández", "87", "Lionel Messi", "", "L");

INSERT INTO scaloneta_goles VALUES (24, 11, "Alexis Mac Allister", "46", "Nahuel Molina", "", "V");
INSERT INTO scaloneta_goles VALUES (25, 11, "Julián Álvarez", "67", "Enzo Fernández", "", "V");

INSERT INTO scaloneta_goles VALUES (26, 12, "Lionel Messi", "35", "Nicolás Otamendi", "", "L");
INSERT INTO scaloneta_goles VALUES (27, 12, "Julián Álvarez", "57", "", "", "L");
INSERT INTO scaloneta_goles VALUES (28, 12, "Enzo Fernández", "77", "", "En Contra", "V");

INSERT INTO scaloneta_goles VALUES (29, 13, "Nahuel Molina", "35", "Lionel Messi", "", "V");
INSERT INTO scaloneta_goles VALUES (30, 13, "Lionel Messi", "73", "", "Penal", "V");
INSERT INTO scaloneta_goles VALUES (31, 13, "Wout Weghorst", "83", "Steven Berghuis", "", "L");
INSERT INTO scaloneta_goles VALUES (32, 13, "Wout Weghorst", "90+11", "Teun Koopmeiners", "", "L");

INSERT INTO scaloneta_goles VALUES (33, 14, "Lionel Messi", "34", "", "Penal", "L");
INSERT INTO scaloneta_goles VALUES (34, 14, "Julián Álvarez", "39", "", "", "L");
INSERT INTO scaloneta_goles VALUES (35, 14, "Julián Álvarez", "69", "Lionel Messi", "", "L");

INSERT INTO scaloneta_goles VALUES (36, 15, "Lionel Messi", "23", "", "Penal", "L");
INSERT INTO scaloneta_goles VALUES (37, 15, "Ángel Di María", "36", "Alexis Mac Allister", "", "L");
INSERT INTO scaloneta_goles VALUES (38, 15, "Kylian Mbappé", "80", "", "Penal", "V");
INSERT INTO scaloneta_goles VALUES (39, 15, "Kylian Mbappé", "81", "Marcus Thuram", "", "V");
INSERT INTO scaloneta_goles VALUES (40, 15, "Lionel Messi", "108", "", "", "L");
INSERT INTO scaloneta_goles VALUES (41, 15, "Kylian Mbappé", "118", "", "Penal", "V");

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

-- ARG VS COL
INSERT INTO scaloneta_penales VALUES (1, 6, "Juan Cuadrado", "V", TRUE);
INSERT INTO scaloneta_penales VALUES (2, 6, "Lionel Messi", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (3, 6, "Davinson Sánchez", "V", FALSE);
INSERT INTO scaloneta_penales VALUES (4, 6, "Rodrigo de Paul", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (5, 6, "Yerry Mina", "V", FALSE);
INSERT INTO scaloneta_penales VALUES (6, 6, "Leandro Paredes", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (7, 6, "Miguel Borja", "V", TRUE);
INSERT INTO scaloneta_penales VALUES (8, 6, "Lautaro Martínez", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (9, 6, "Edwin Cardona", "V", FALSE);
-- HOL VS ARG
INSERT INTO scaloneta_penales VALUES (10, 13, "Virgil van Dijk", "L", FALSE);
INSERT INTO scaloneta_penales VALUES (11, 13, "Lionel Messi", "V", TRUE);
INSERT INTO scaloneta_penales VALUES (12, 13, "Steven Berghuis", "L", FALSE);
INSERT INTO scaloneta_penales VALUES (13, 13, "Leandro Paredes", "V", TRUE);
INSERT INTO scaloneta_penales VALUES (14, 13, "Teun Koopmeiners", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (15, 13, "Gonzalo Montiel", "V", TRUE);
INSERT INTO scaloneta_penales VALUES (16, 13, "Wout Weghorst", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (17, 13, "Enzo Fernández", "V", FALSE);
INSERT INTO scaloneta_penales VALUES (18, 13, "Luuk de Jong", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (19, 13, "Lautaro Martínez", "V", TRUE);
-- ARG VS FRA
INSERT INTO scaloneta_penales VALUES (20, 13, "Kylian Mbappé", "V", TRUE);
INSERT INTO scaloneta_penales VALUES (21, 13, "Lionel Messi", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (22, 13, "Kingsley Coman", "V", FALSE);
INSERT INTO scaloneta_penales VALUES (23, 13, "Paulo Dybala", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (24, 13, "Aurélien Tchouaméni", "V", FALSE);
INSERT INTO scaloneta_penales VALUES (25, 13, "Leandro Paredes", "L", TRUE);
INSERT INTO scaloneta_penales VALUES (26, 13, "Randal Kolo Muani", "V", FALSE);
INSERT INTO scaloneta_penales VALUES (27, 13, "Gonzalo Montiel", "L", TRUE);
