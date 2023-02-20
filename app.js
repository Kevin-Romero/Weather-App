addEventListener("DOMContentLoaded", () => {
  //* Variables
  const $inputCiudad = document.getElementById("inputCiudad");
  const $formulario = document.getElementById("formulario");
  const $contenedor = document.getElementById("contenedor");
  const kelvin = 273.15;

  //* Funciones
  const validarDatos = () =>
    $inputCiudad.value.trim() === ""
      ? ($inputCiudad.required = "true")
      : buscarInformacion($inputCiudad.value.trim());

  const buscarInformacion = async (ciudad) => {
    const apiKey = "cea2413c529e78a110f329e3b536b4f8";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    console.log(url);

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);

    if (resultado.cod == "404") console.log("No hay resultados");

    const { name, main } = resultado;

    if (!name) return null;

    $contenedor.innerHTML = `
    <div class="md:max-w-lg h-36 m-auto flex border">
          <div class="bg-yellow-300 w-1/2 p-4">
            <div class="flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="50"
                viewBox="0 0 1220.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M5974 12776 c-72 -33 -131 -90 -165 -160 l-29 -60 0 -923 c0 -679 3 -929 12 -946 6 -12 15 -29 20 -37 4 -8 11 -22 15 -30 14 -30 93 -97 135 -114 24 -10 51 -22 60 -27 24 -12 158 -11 158 1 0 6 8 10 19 10 27 0 102 44 137 82 43 45 84 122 84 158 0 16 3 31 8 33 4 3 5 409 2 904 l-5 898 -30 54 c-43 78 -103 133 -179 165 -59 25 -179 20 -242 -8z"
                  />
                  <path
                    d="M2455 11634 c-72 -19 -170 -93 -200 -150 -11 -21 -23 -41 -26 -44 -21 -17 -35 -161 -19 -203 28 -73 44 -105 79 -152 21 -27 50 -68 66 -90 16 -22 33 -41 37 -43 4 -2 8 -9 8 -16 0 -7 8 -22 18 -34 43 -51 52 -62 69 -89 17 -26 98 -138 126 -173 7 -8 41 -55 77 -105 35 -49 68 -91 72 -93 4 -2 8 -10 8 -17 0 -7 3 -15 8 -17 4 -1 25 -28 47 -58 22 -30 43 -56 47 -58 5 -2 8 -8 8 -13 0 -10 107 -160 190 -266 22 -28 40 -56 40 -61 0 -5 7 -15 16 -23 9 -7 45 -55 81 -106 74 -107 152 -172 214 -180 22 -3 42 -10 45 -14 7 -12 91 -12 98 0 3 4 23 11 43 13 40 6 112 49 150 90 12 12 36 50 54 83 28 54 32 69 32 145 0 101 -11 125 -137 295 -45 61 -91 124 -101 140 -10 17 -25 36 -32 44 -13 13 -75 99 -122 170 -13 20 -27 38 -30 41 -4 3 -24 30 -46 60 -22 30 -48 64 -57 74 -10 11 -20 28 -24 38 -3 10 -10 18 -15 18 -5 0 -9 4 -9 10 0 5 -7 18 -15 27 -8 10 -49 65 -91 123 -43 58 -80 107 -83 110 -3 3 -10 12 -16 22 -13 21 -116 170 -127 183 -5 5 -40 53 -79 105 -128 172 -180 209 -303 215 -45 2 -90 2 -101 -1z"
                  />
                  <path
                    d="M9568 11633 c-16 -2 -28 -9 -28 -14 0 -5 -5 -9 -11 -9 -29 0 -110 -82 -184 -185 -11 -16 -32 -44 -47 -64 -15 -20 -31 -40 -35 -46 -5 -5 -21 -30 -38 -55 -16 -25 -33 -46 -37 -48 -5 -2 -8 -8 -8 -14 0 -6 -11 -24 -25 -42 -14 -17 -29 -36 -34 -42 -5 -6 -26 -35 -47 -65 -21 -30 -41 -56 -44 -59 -3 -3 -23 -30 -45 -60 -22 -30 -43 -56 -47 -58 -5 -2 -8 -10 -8 -18 0 -8 -4 -14 -9 -14 -5 0 -12 -8 -15 -17 -3 -10 -19 -34 -36 -53 -16 -19 -30 -38 -30 -42 0 -3 -19 -30 -43 -60 -44 -55 -51 -65 -115 -158 -20 -30 -42 -61 -49 -70 -79 -99 -213 -288 -239 -338 -30 -56 -34 -73 -34 -138 0 -41 4 -82 9 -92 5 -9 15 -30 22 -47 19 -40 26 -50 79 -102 72 -71 114 -85 234 -81 100 3 102 3 162 45 40 27 79 66 110 110 26 37 52 70 56 71 4 2 8 9 8 16 0 7 11 23 25 36 14 13 25 29 25 37 0 7 3 13 8 13 4 1 23 24 42 52 19 28 77 106 128 175 50 69 92 127 92 129 0 6 51 75 61 84 3 3 20 26 37 52 18 25 38 52 45 60 7 7 23 29 34 48 12 20 30 46 41 57 10 12 26 32 35 45 9 13 54 74 99 136 46 62 109 150 141 196 32 46 66 92 75 103 9 10 25 36 36 58 10 22 22 48 27 57 13 25 11 152 -2 185 -31 75 -41 92 -71 124 -18 19 -55 50 -83 69 -48 33 -55 35 -145 36 -52 1 -107 0 -122 -3z"
                  />
                  <path
                    d="M5850 9751 c-8 -4 -72 -11 -142 -15 -130 -6 -218 -19 -253 -35 -11 -5 -51 -15 -90 -21 -123 -19 -135 -22 -141 -31 -3 -5 -14 -9 -24 -9 -22 0 -217 -63 -267 -86 -17 -7 -36 -14 -42 -14 -6 0 -19 -4 -29 -9 -9 -5 -35 -17 -57 -26 -169 -72 -344 -160 -368 -184 -6 -6 -17 -11 -24 -11 -8 0 -22 -8 -33 -18 -10 -10 -42 -30 -69 -45 -28 -15 -71 -42 -95 -59 -24 -18 -75 -55 -113 -83 -37 -27 -73 -54 -79 -60 -7 -5 -36 -28 -65 -50 -29 -22 -121 -107 -204 -190 -208 -206 -334 -355 -439 -520 -21 -32 -44 -65 -52 -72 -8 -8 -14 -21 -14 -29 0 -8 -4 -14 -10 -14 -5 0 -10 -5 -10 -11 0 -6 -13 -29 -28 -52 -16 -23 -44 -73 -63 -112 -19 -38 -36 -72 -39 -75 -12 -12 -80 -159 -80 -174 0 -9 -4 -16 -10 -16 -5 0 -10 -9 -10 -19 0 -11 -5 -23 -10 -26 -6 -3 -10 -13 -10 -20 0 -8 -11 -39 -25 -69 -14 -30 -25 -61 -25 -70 0 -8 -4 -18 -10 -21 -5 -3 -10 -17 -10 -30 0 -13 -4 -26 -9 -29 -5 -3 -12 -26 -15 -50 -4 -25 -14 -59 -23 -76 -8 -17 -17 -50 -20 -73 -3 -23 -10 -47 -15 -54 -5 -7 -7 -17 -3 -23 3 -6 -1 -24 -9 -41 -9 -18 -19 -67 -22 -111 -4 -43 -11 -81 -15 -84 -5 -3 -9 -29 -9 -58 0 -28 -6 -58 -12 -64 -10 -10 -13 -106 -13 -412 0 -306 3 -402 13 -411 6 -7 12 -37 12 -65 0 -29 4 -55 9 -58 4 -3 11 -41 15 -84 3 -44 13 -93 22 -111 8 -17 12 -35 9 -41 -4 -6 -2 -16 3 -23 5 -7 12 -31 15 -54 3 -23 12 -56 20 -73 9 -17 19 -51 23 -76 3 -24 10 -47 15 -50 5 -3 9 -16 9 -29 0 -13 5 -27 10 -30 6 -3 10 -13 10 -21 0 -9 11 -40 25 -70 14 -30 25 -61 25 -69 0 -7 5 -17 10 -20 6 -3 10 -15 10 -26 0 -10 5 -19 10 -19 6 0 10 -8 10 -17 0 -17 69 -164 81 -173 3 -3 10 -16 14 -30 4 -14 16 -37 26 -52 11 -14 19 -29 19 -34 0 -4 16 -31 35 -60 19 -29 35 -57 35 -63 0 -6 5 -11 10 -11 6 0 10 -6 10 -14 0 -8 6 -21 14 -29 8 -7 31 -40 52 -72 31 -49 65 -98 112 -160 30 -40 89 -112 99 -120 6 -5 28 -30 48 -55 121 -149 334 -343 545 -499 30 -22 60 -44 65 -48 21 -18 124 -83 130 -83 5 0 64 -39 75 -50 3 -3 27 -16 53 -30 94 -48 102 -53 108 -62 3 -6 9 -9 13 -8 3 0 37 -13 74 -30 37 -17 87 -41 112 -52 25 -11 62 -29 83 -39 20 -10 53 -21 72 -25 19 -3 38 -10 41 -15 3 -5 14 -9 25 -9 10 0 19 -4 19 -10 0 -5 8 -10 18 -10 10 0 51 -11 90 -25 39 -14 83 -25 97 -25 14 0 25 -4 25 -9 0 -5 17 -11 38 -15 115 -17 189 -33 207 -43 23 -13 207 -33 301 -33 35 0 65 -4 68 -9 9 -13 291 -21 416 -11 63 5 171 14 240 19 142 11 258 29 265 41 3 4 35 11 72 15 36 4 76 11 87 15 12 4 39 13 61 18 74 19 280 86 305 99 14 7 30 13 37 13 7 0 27 8 45 18 18 10 52 24 76 32 23 7 42 17 42 22 0 4 6 8 13 8 6 0 39 14 72 30 33 16 63 30 68 30 4 0 41 20 81 45 41 25 77 45 81 45 3 0 61 36 127 80 67 44 126 80 130 80 4 0 8 4 8 10 0 5 12 16 28 24 15 8 39 25 53 38 15 13 42 35 60 50 19 15 47 37 63 50 80 64 259 239 346 338 30 34 60 67 65 74 23 24 112 137 145 183 19 26 39 52 43 58 8 11 79 119 130 200 17 28 50 86 72 130 23 44 46 89 52 100 7 11 18 35 25 53 7 17 16 32 20 32 4 0 10 16 14 35 3 19 10 38 15 41 5 3 9 14 9 25 0 10 5 19 10 19 6 0 10 7 10 15 0 8 4 23 9 33 21 39 41 91 41 105 0 9 5 19 10 22 6 3 10 17 10 30 0 13 4 26 9 29 5 3 12 27 16 53 4 25 13 56 20 67 8 12 21 57 29 101 8 44 22 105 30 135 9 30 16 73 16 95 0 23 4 45 9 51 11 11 17 60 38 336 15 203 15 233 0 435 -21 277 -27 326 -38 337 -5 6 -9 28 -9 51 0 22 -7 65 -16 95 -8 30 -22 91 -30 135 -9 44 -21 89 -29 101 -7 11 -16 42 -20 67 -4 26 -11 50 -16 53 -5 3 -9 16 -9 29 0 13 -4 27 -10 30 -5 3 -10 13 -10 21 0 9 -11 40 -25 70 -14 30 -25 61 -25 69 0 8 -4 15 -10 15 -5 0 -10 11 -10 25 0 14 -4 25 -10 25 -5 0 -10 7 -10 16 0 8 -11 35 -25 60 -14 25 -25 51 -25 59 0 7 -3 15 -7 17 -5 2 -28 43 -53 93 -25 49 -62 117 -84 150 -97 151 -116 181 -123 190 -5 6 -26 35 -48 65 -22 30 -44 60 -50 66 -5 6 -23 28 -40 49 -16 21 -34 43 -40 49 -5 6 -39 44 -75 85 -104 119 -219 231 -345 336 -33 27 -65 54 -71 60 -6 5 -27 21 -47 35 -20 14 -37 28 -37 33 0 4 -7 7 -15 7 -8 0 -20 9 -27 20 -7 11 -16 20 -20 20 -5 0 -36 19 -71 43 -34 24 -84 56 -112 72 -27 15 -52 31 -55 35 -3 4 -15 10 -27 14 -13 4 -23 11 -23 15 0 4 -25 18 -55 31 -30 13 -55 28 -55 32 0 4 -5 8 -11 8 -6 0 -41 14 -78 31 -36 17 -86 40 -111 51 -25 11 -62 29 -83 39 -20 10 -53 21 -72 25 -19 3 -38 10 -41 15 -3 5 -14 9 -25 9 -10 0 -19 4 -19 8 0 4 -27 14 -60 21 -33 8 -63 17 -66 22 -2 5 -27 11 -54 15 -28 4 -50 10 -50 14 0 4 -17 10 -37 14 -99 15 -191 33 -215 44 -14 6 -82 16 -150 21 -68 6 -148 14 -178 17 -93 10 -534 14 -550 5z"
                  />
                  <path
                    d="M11800 8599 c-19 -6 -50 -13 -67 -16 -18 -3 -33 -9 -33 -14 0 -5 -11 -9 -24 -9 -14 0 -27 -4 -30 -9 -3 -5 -23 -12 -43 -16 -21 -3 -47 -12 -58 -19 -11 -7 -38 -16 -60 -20 -41 -8 -115 -31 -150 -46 -11 -5 -38 -14 -60 -21 -22 -6 -57 -18 -78 -25 -20 -8 -49 -14 -62 -14 -14 0 -25 -4 -25 -8 0 -4 -21 -13 -47 -20 -27 -8 -56 -18 -65 -23 -10 -5 -27 -9 -37 -9 -11 0 -22 -4 -25 -9 -4 -5 -25 -12 -48 -16 -23 -4 -50 -11 -60 -16 -10 -5 -27 -13 -38 -19 -11 -5 -27 -10 -35 -10 -8 0 -23 -4 -33 -9 -9 -5 -44 -17 -77 -26 -33 -10 -69 -21 -80 -26 -50 -20 -118 -39 -140 -39 -14 0 -25 -3 -25 -7 0 -5 -35 -19 -78 -32 -42 -13 -81 -27 -87 -31 -5 -4 -27 -10 -48 -14 -40 -7 -51 -15 -124 -80 -44 -40 -83 -107 -83 -145 0 -11 -4 -23 -10 -26 -13 -8 -13 -100 -1 -123 6 -9 13 -34 16 -54 3 -21 10 -38 15 -38 6 0 10 -6 10 -14 0 -17 100 -116 118 -116 6 0 12 -4 12 -8 0 -28 228 -48 253 -23 6 6 21 11 33 11 13 0 26 5 29 10 3 6 17 10 31 10 13 0 24 5 24 10 0 6 8 10 17 10 10 0 51 11 93 24 41 14 129 41 195 62 66 21 125 41 130 45 6 4 31 10 58 14 26 4 47 10 47 14 0 4 21 12 48 20 26 7 56 17 67 21 11 5 61 21 110 36 50 15 94 31 99 36 6 4 20 8 32 8 13 0 25 4 28 9 4 5 23 12 44 16 44 7 108 28 118 38 4 4 18 7 30 7 13 0 25 4 28 9 3 4 25 11 48 15 23 4 47 11 53 16 6 5 37 16 69 24 32 9 71 22 88 30 16 9 46 18 67 22 46 9 83 34 144 98 68 71 77 99 76 225 0 111 0 109 -58 192 -22 32 -85 81 -138 108 -31 16 -161 22 -203 10z"
                  />
                  <path
                    d="M225 8587 c-16 -6 -32 -14 -35 -17 -3 -3 -18 -12 -34 -20 -34 -18 -106 -96 -125 -136 -7 -16 -17 -37 -22 -46 -5 -10 -9 -53 -9 -97 0 -69 4 -86 31 -137 17 -33 40 -70 52 -83 33 -35 100 -79 133 -87 16 -4 34 -10 40 -15 5 -5 36 -15 68 -23 32 -9 71 -22 87 -30 17 -8 50 -18 74 -22 25 -3 45 -10 45 -15 0 -5 10 -9 23 -9 13 0 27 -4 32 -8 6 -5 28 -14 50 -20 136 -38 161 -46 169 -54 6 -4 20 -8 33 -8 13 0 23 -4 23 -10 0 -5 9 -10 20 -10 22 0 223 -64 252 -80 9 -5 35 -13 58 -16 22 -4 43 -11 46 -15 3 -5 14 -9 25 -9 10 0 27 -4 37 -10 26 -15 170 -60 191 -60 10 0 21 -3 25 -7 4 -4 13 -8 19 -8 7 -1 23 -6 37 -12 14 -6 52 -19 85 -29 33 -10 67 -21 75 -25 87 -38 211 -49 293 -25 31 9 57 21 57 26 0 6 6 10 14 10 16 0 116 106 116 123 1 7 9 30 20 52 23 47 26 147 6 186 -7 14 -16 37 -19 51 -10 38 -98 129 -149 154 -23 12 -68 29 -98 38 -30 9 -64 21 -75 25 -11 5 -40 15 -65 22 -25 7 -49 16 -55 20 -5 4 -26 10 -45 13 -19 4 -44 11 -55 16 -32 14 -178 60 -192 60 -7 0 -22 5 -33 10 -11 6 -29 15 -40 20 -11 6 -29 10 -40 10 -11 0 -20 4 -20 9 0 5 -22 11 -50 15 -27 4 -52 11 -55 16 -3 6 -15 10 -26 10 -10 0 -27 4 -37 9 -9 5 -37 15 -62 22 -25 7 -49 16 -55 20 -5 4 -27 10 -48 14 -20 4 -40 11 -43 16 -3 5 -16 9 -28 9 -20 0 -84 21 -151 51 -11 5 -41 13 -67 19 -55 12 -186 55 -195 64 -4 3 -17 6 -30 6 -12 0 -23 4 -23 9 0 22 -208 36 -255 18z"
                  />
                  <path
                    d="M10225 5366 c-5 -2 -29 -9 -52 -16 -24 -7 -43 -17 -43 -22 0 -4 -5 -8 -12 -8 -18 0 -101 -91 -121 -132 -9 -20 -17 -47 -17 -61 0 -14 -4 -29 -10 -32 -5 -3 -10 -26 -10 -50 0 -24 5 -47 10 -50 6 -3 10 -18 10 -32 0 -14 8 -41 17 -61 22 -46 124 -152 147 -152 9 0 16 -4 16 -10 0 -5 9 -10 20 -10 19 0 95 -22 135 -40 11 -4 41 -14 68 -21 26 -8 47 -16 47 -20 0 -4 22 -10 50 -14 27 -4 52 -11 56 -16 3 -5 16 -9 29 -9 13 0 26 -4 29 -9 3 -4 20 -12 38 -16 18 -4 35 -9 38 -10 3 -1 19 -5 35 -9 17 -4 38 -11 47 -17 10 -5 25 -9 33 -9 8 0 25 -5 38 -12 46 -24 57 -28 72 -28 15 0 95 -25 130 -40 11 -5 38 -14 60 -21 22 -7 45 -16 50 -20 6 -3 27 -10 49 -13 21 -4 46 -11 55 -16 9 -4 70 -25 136 -46 66 -20 127 -40 135 -42 8 -3 22 -7 30 -8 24 -5 113 -35 132 -45 10 -5 26 -9 36 -9 10 0 22 -3 26 -7 17 -18 88 -33 153 -33 87 0 157 28 218 87 87 84 95 103 95 238 0 98 -3 120 -21 152 -35 62 -131 149 -176 159 -16 3 -47 14 -70 25 -24 10 -52 19 -63 19 -11 0 -29 5 -40 10 -11 6 -28 14 -38 19 -10 5 -38 12 -62 16 -25 4 -49 10 -55 14 -5 4 -50 20 -100 35 -49 15 -98 32 -107 37 -10 5 -25 9 -33 9 -8 0 -23 4 -33 10 -27 15 -170 60 -192 60 -11 0 -20 5 -20 10 0 6 -11 10 -25 10 -14 0 -34 5 -45 10 -11 6 -29 15 -40 20 -11 6 -26 10 -35 10 -14 0 -149 42 -190 59 -11 5 -47 17 -80 26 -94 28 -208 66 -227 76 -10 5 -25 9 -33 9 -8 0 -23 4 -33 9 -44 22 -93 33 -167 37 -44 2 -84 2 -90 0z"
                  />
                  <path
                    d="M1710 5313 c-69 -24 -133 -44 -142 -44 -10 0 -20 -4 -23 -10 -4 -5 -15 -9 -25 -9 -19 0 -97 -23 -135 -40 -11 -5 -38 -14 -60 -21 -22 -6 -47 -15 -55 -19 -9 -4 -31 -11 -50 -14 -34 -7 -65 -18 -102 -37 -10 -5 -25 -9 -33 -9 -8 0 -23 -4 -33 -9 -9 -6 -44 -17 -77 -26 -60 -17 -94 -29 -127 -46 -10 -5 -27 -9 -37 -9 -11 0 -23 -4 -26 -10 -3 -5 -15 -10 -25 -10 -19 0 -155 -42 -195 -60 -11 -5 -36 -12 -55 -16 -19 -3 -39 -9 -45 -13 -16 -10 -79 -31 -93 -31 -7 0 -31 -9 -54 -20 -23 -11 -57 -23 -77 -26 -43 -8 -93 -38 -141 -85 -37 -36 -50 -57 -92 -141 -11 -24 -10 -154 1 -176 5 -9 16 -32 23 -49 7 -18 16 -33 20 -33 5 0 8 -6 8 -14 0 -18 66 -77 126 -112 43 -25 58 -29 134 -29 76 0 137 11 195 36 11 4 52 18 90 30 39 12 75 25 80 29 6 4 26 11 45 15 19 4 102 29 184 56 82 27 154 49 160 49 7 0 31 9 54 20 22 11 50 20 62 20 11 0 28 4 38 10 23 13 109 40 127 40 9 0 24 5 35 10 11 6 29 15 40 20 11 6 27 10 35 10 8 0 23 4 33 10 9 5 58 21 107 36 50 15 95 31 100 35 6 4 30 10 55 14 44 7 53 11 97 33 13 7 32 12 42 12 11 0 23 5 26 10 3 6 17 10 30 10 13 0 27 5 30 10 3 6 15 10 27 10 36 0 89 32 144 87 30 30 54 59 54 64 0 6 10 31 22 57 34 74 30 150 -14 243 -25 54 -47 85 -74 105 -21 16 -46 35 -55 43 -32 27 -94 41 -174 40 -68 -1 -99 -8 -205 -46z"
                  />
                  <path
                    d="M8660 3171 c-8 -5 -35 -11 -60 -15 -34 -5 -59 -19 -105 -57 -33 -28 -64 -61 -70 -73 -5 -11 -12 -23 -15 -26 -14 -14 -30 -52 -30 -74 0 -14 -4 -28 -10 -31 -5 -3 -10 -28 -10 -55 0 -27 5 -52 10 -55 6 -3 10 -17 10 -30 0 -13 5 -27 10 -30 6 -3 10 -15 10 -26 0 -10 5 -19 10 -19 6 0 10 -5 10 -11 0 -7 15 -30 33 -53 18 -23 41 -54 51 -69 9 -16 24 -36 31 -45 8 -9 39 -51 69 -92 30 -41 59 -79 63 -85 5 -5 20 -26 33 -45 13 -19 30 -41 37 -48 7 -7 13 -18 13 -23 0 -5 8 -18 18 -30 9 -11 27 -33 39 -47 13 -15 23 -30 23 -34 0 -4 6 -13 13 -20 7 -7 35 -44 62 -83 27 -38 52 -72 55 -75 4 -3 40 -52 80 -110 41 -58 80 -111 86 -117 7 -7 22 -29 35 -50 13 -21 26 -40 29 -43 6 -4 148 -199 198 -270 31 -44 106 -116 147 -140 35 -21 53 -24 145 -24 105 -1 105 -1 160 36 30 20 67 49 82 65 35 37 78 118 78 148 0 13 5 27 10 30 6 3 10 24 10 45 0 21 -4 42 -10 45 -5 3 -10 17 -10 30 0 34 -45 114 -110 195 -20 25 -45 58 -55 74 -11 16 -29 41 -40 56 -11 15 -38 54 -60 86 -22 32 -48 66 -57 75 -10 9 -18 20 -18 23 0 4 -6 14 -12 21 -30 33 -38 45 -38 54 0 5 -4 11 -8 13 -4 2 -30 35 -57 73 -55 78 -55 78 -88 120 -13 17 -57 77 -97 135 -41 58 -77 107 -82 108 -4 2 -8 10 -8 18 0 8 -3 14 -7 14 -5 0 -21 20 -38 45 -16 24 -33 45 -37 45 -5 0 -8 5 -8 10 0 9 -125 186 -163 230 -7 8 -25 34 -41 57 -50 75 -148 143 -205 143 -16 0 -33 5 -36 10 -7 12 -54 13 -75 1z"
                  />
                  <path
                    d="M3387 3136 c-86 -45 -113 -73 -244 -266 -21 -30 -46 -62 -55 -71 -10 -9 -18 -20 -18 -24 0 -4 -11 -21 -25 -39 -32 -39 -32 -40 -79 -106 -22 -30 -43 -56 -48 -58 -4 -2 -8 -10 -8 -18 0 -8 -4 -14 -9 -14 -5 0 -12 -8 -15 -18 -4 -10 -14 -27 -24 -38 -10 -10 -51 -66 -91 -124 -41 -58 -78 -106 -82 -108 -5 -2 -9 -10 -9 -18 0 -8 -4 -14 -8 -14 -4 0 -16 -15 -27 -32 -10 -18 -24 -38 -29 -44 -6 -6 -20 -23 -31 -39 -57 -80 -97 -135 -127 -175 -18 -25 -36 -49 -40 -55 -4 -5 -18 -23 -31 -40 -51 -66 -135 -192 -153 -230 -21 -46 -26 -207 -6 -227 7 -7 12 -19 12 -28 0 -10 10 -28 21 -41 12 -13 28 -34 36 -46 8 -12 40 -39 71 -60 l57 -38 115 0 115 0 58 39 c51 34 96 86 192 221 8 11 36 49 62 85 27 36 61 86 78 110 16 25 37 52 45 60 9 8 29 36 45 62 17 27 33 48 38 48 4 0 7 6 7 14 0 8 4 16 8 18 4 2 37 44 72 93 35 50 70 96 77 103 7 8 18 23 25 35 14 28 71 101 81 105 4 2 7 8 7 13 0 12 70 109 78 109 4 0 20 23 37 50 16 28 33 50 37 50 4 0 8 5 8 11 0 7 15 30 33 53 18 23 48 62 65 88 18 25 38 52 44 60 7 7 31 40 53 73 l40 60 0 113 c0 64 -4 116 -10 120 -6 4 -17 20 -25 37 -23 46 -58 82 -119 123 -54 35 -60 37 -156 40 -91 3 -104 1 -148 -22z"
                  />
                  <path
                    d="M6040 2320 c0 -5 -11 -10 -25 -10 -28 0 -120 -56 -150 -92 -28 -34 -65 -106 -65 -128 0 -10 -4 -22 -10 -25 -7 -4 -10 -317 -10 -906 0 -593 3 -899 10 -899 6 0 10 -8 10 -19 0 -64 95 -178 185 -220 54 -25 183 -29 236 -7 72 30 147 95 171 149 7 15 16 27 20 27 5 0 8 11 8 24 0 14 5 28 10 31 7 4 10 322 10 920 0 598 -3 916 -10 920 -5 3 -10 15 -10 26 0 10 -4 19 -10 19 -5 0 -10 9 -10 20 0 44 -140 160 -194 160 -14 0 -28 5 -31 10 -3 6 -35 10 -71 10 -36 0 -64 -4 -64 -10z"
                  />
                </g>
              </svg>
              <p class="text-xl">${name}</p>
            </div>
            <p class="text-right text-4xl font-bold mr-10 mt-5">
              ${parseFloat(main.temp - kelvin, 10).toFixed(
                2
              )}<span>&#x2103;</span>
            </p>
          </div>

          <div class="w-1/2 bg-white flex items-center flex-wrap p-4 text-xl">
            <p class="w-full flex justify-between">
              Maxima <span>${parseFloat(main.temp_max - kelvin, 10).toFixed(
                2
              )}&#x2103;</span>
            </p>
            <p class="w-full flex justify-between">
              Minima <span>${parseFloat(main.temp_min - kelvin, 10).toFixed(
                2
              )}&#x2103;</span>
            </p>
            <p class="w-full flex justify-between">Humedad <span>${
              main.humidity
            }%</span></p>
          </div>
        </div>
    `;
  };

  //* Eventos
  $formulario.addEventListener("submit", validarDatos);
});
