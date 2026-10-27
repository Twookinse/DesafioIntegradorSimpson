# Desafío Grupal de Métodos Numéricos: Integración Numérica (La Paz, Bolivia)

**Integrantes del Equipo:**
* **Carlos Alexander Ilaluque Huanca**
* **Oscar Felipe Valencia Sanchez**
* **Hernan Yazid Perez Ovando**

* 🌐 **Aplicación Web desplegada (GitHub Pages):** [https://twookinse.github.io/DesafioIntegradorSimpson/](https://twookinse.github.io/DesafioIntegradorSimpson/)
* 📄 **Informe Técnico Completo:** [INFORME_PROBLEMAS_RESUELTOS.md](INFORME_PROBLEMAS_RESUELTOS.md)

Este repositorio contiene la **Aplicación Web Interactiva** (`index.html`, `styles.css`, `app.js`) y el **Informe Técnico de Problemas Resueltos** (`INFORME_PROBLEMAS_RESUELTOS.md`) siguiendo todas las pautas de `Desafio_Integracion_Numerica_La_Paz_Solucionario.docx` y resolviendo la totalidad de los ejercicios de `Ejercicios.pdf` (**Ejercicios 19 al 27** + **Adaptación Lago Titicaca** + **Prueba de Validación $f(x)=x^2$**).

---

## Tabla Maestra de Problemas Resueltos (Ejercicios 19 al 27)

| Ejercicio | Problema / Contexto (La Paz) | Modelo Matemático ($I$) | $n$ | Paso $h$ | Trapecio Compuesto | Simpson (1/3, 3/8 o Combinado) | Valor Exacto / Referencia | Error % Trapecio | Error % Simpson | Conversión SI / Nota |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Ej. 19** | Transporte urbano (Distancia de un vehículo) | $d = \frac{1}{3600}\int_{0}^{7} v(t)\,dt$ | $7$ | $1\text{ s}$ | **0.147083 mi** | **0.147072 mi** *(Comb. 1/3+3/8)* | — *(Datos exp.)* | — | — | $\approx 236.69\text{ m}$ |
| **Ej. 20** | Ensayo de elasticidad (Banda elástica) | $W = \int_{0}^{2.8} F(x)\,dx$ | $7$ | $0.4\text{ in}$ | **4.544000 lb·in** | **4.577167 lb·in** *(Comb. 1/3+3/8)* | — *(Datos exp.)* | — | — | $\approx 0.5172\text{ J}$ |
| **Ej. 21** | Perfil topográfico digitalizado | $A = \int_{1}^{10} y(x)\,dx$ | $9$ | $1\text{ u}$ | **36.400000 u²** | **36.850000 u²** *(S1/3[8]+Trap[1])*<br>**36.600000 u²** *(S3/8 puro)* | — *(Digitalizado)* | — | — | Cotas de cuadrícula |
| **Ej. 22** | Cable suspendido (Catenaria) | $L = \int_{-12}^{26} \cosh\left(\frac{x}{24}\right)dx$ | $8$ | $4.75\text{ ft}$ | **44.042044 ft** | **43.899213 ft** *(Simpson 1/3)* | **43.898841 ft** | $0.3262\%$ | $0.00085\%$ | $\approx 13.3804\text{ m}$ |
| **Ej. 23** | Red de agua (Caudal turbulento en tubería) | $Q = \int_{0}^{0.25} 160\pi r\left(1-\frac{r}{0.25}\right)^{1/7}dr$ | $8$ | $0.03125\text{ in}$ | **11.681778 in³/s** | **12.151244 in³/s** *(Simpson 1/3)* | **12.828170 in³/s** $\left(\frac{49\pi}{12}\right)$ | $8.9365\%$ | $5.2769\%$ | $\approx 210.22\text{ cm}^3/\text{s}$ |
| **Ej. 24** | Diseño de trayectoria (Cardioide $b=5$) | $L = \int_{0}^{2\pi} \sqrt{(x')^2+(y')^2}\,dt = \int_{0}^{2\pi} 20\sin\left(\frac{t}{2}\right)dt$ | $8$ | $\frac{\pi}{4}\text{ rad}$ | **78.969264 u** | **80.010767 u** *(Simpson 1/3)* | **80.000000 u** | $1.2884\%$ | $0.0135\%$ | Trayectoria cerrada |
| **Ej. 25** | Energía potencial gravitatoria de satélite | $\Delta U = \int_{0}^{800000} m g_0 \frac{R^2}{(R+y)^2}\,dy$ | $8$ | $10^5\text{ m}$ | **3.48662008 × 10⁹ J** | **3.48623690 × 10⁹ J** *(Simpson 1/3)* | **3.48623679 × 10⁹ J** | $0.0110\%$ | $0.000003\%$ | $\approx 3.486237\text{ GJ}$ |
| **Ej. 26A** | Superficie del Lago Erie | $A = \int_{40}^{260} w(x)\,dx$ | $11$ | $20\text{ mi}$ | **9,860.000000 mi²** | **9,925.833333 mi²** *(Comb. 1/3+3/8)* | **9,940.000000 mi²** | $0.8048\%$ | $0.1425\%$ | $\approx 25,744.5\text{ km}^2$ |
| **Ej. 26B** | Adaptación Superficie Lago Titicaca | $A = \int_{0}^{180} w(x)\,dx$ | $9$ | $20\text{ km}$ | **8,320.000000 km²** | **8,512.500000 km²** *(Simpson 3/8)* | **8,562.000000 km²** | $2.8264\%$ | $0.5781\%$ | Altiplano La Paz |
| **Ej. 27A** | Volumen de objeto alargado (Balón) | $V = \pi \int_{0}^{12} r(z)^2\,dz$ | $12$ | $1.0\text{ in}$ | **199.404740 in³** | **201.842092 in³** *(Simpson 1/3)*<br>**201.498087 in³** *(Simpson 3/8)* | — *(Datos medidos)* | — | — | $\approx 3,307.60\text{ cm}^3$ |
| **Ej. 27B** | Área superficial de objeto alargado (Balón) | $S = 2\pi \int_{0}^{12} r(z)\,dz$ | $12$ | $1.0\text{ in}$ | **159.278748 in²** | **162.315620 in²** *(Simpson 1/3)*<br>**161.268423 in²** *(Simpson 3/8)* | — *(Omite $\sqrt{1+(r')^2}$)* | — | — | $S_{\text{real}} \approx 179.58\text{ in}^2$ |
| **Validación** | Prueba obligatoria de código $f(x)=x^2$ | $I = \int_{0}^{2} x^2\,dx$ | $8$ | $0.25$ | **2.687500 u²** | **2.666667 u²** *(Simpson 1/3)* | **2.666667 u²** $(8/3)$ | $0.78125\%$ | $0.00000\%$ | Exactitud verificada |

---

## Estructura del Proyecto

1. **[`index.html`](index.html), [`styles.css`](styles.css), [`app.js`](app.js)**: Aplicación web completa que permite:
   * Seleccionar cualquiera de los **Ejercicios 19 al 27** (o filtrar por **Grupos A, B, C, D, E, F**).
   * Leer la **explicación completa del problema** (enunciado original en inglés de `Ejercicios.pdf`, adaptación didáctica a La Paz, modelo matemático, límites, unidades e interpretación física).
   * **Ingresar y modificar datos en tiempo real**: tanto parejas $(x_i, y_i)$ en tabla editable o texto separado por comas, como funciones analíticas $f(x)$ con límites $[a, b]$ y número de subintervalos $n$.
   * Validar automáticamente el espaciamiento uniforme $h = (b-a)/n$, orden creciente de $x$ y condiciones sobre $n$ para **Trapecio Compuesto**, **Simpson 1/3**, **Simpson 3/8** y **Simpson Combinado**.
   * Visualizar la **tabla de nodos y pesos de integración ($w_i$)**, la **comparación $n=4$ vs. $n=8$**, y la **gráfica del área bajo la curva**.
2. **[`INFORME_PROBLEMAS_RESUELTOS.md`](INFORME_PROBLEMAS_RESUELTOS.md)**: Informe técnico detallado con la tabla general al inicio y el desarrollo paso a paso de los ejercicios 19 al 27.

---

## Evidencia del Equipo de Trabajo

![Evidencia del Equipo en Laboratorio](Imagen.jpeg)

