# Informe Técnico: Problemas Resueltos de Integración Numérica (La Paz, Bolivia)

> **Asignatura:** Métodos Numéricos — Integración Numérica Aplicada  
> **Métodos implementados:** Trapecio Compuesto, Simpson 1/3 Compuesto, Simpson 3/8 Compuesto y Simpson Combinado  
> **Ejercicios resueltos:** Ejercicios 19 al 27 (`Ejercicios.pdf`) + Adaptación Lago Titicaca + Verificación obligatoria $f(x)=x^2$ (`Desafio_Integracion_Numerica_La_Paz_Solucionario.docx`)

---

## 1. Tabla General Resumen de Todos los Problemas Resueltos

A continuación se presenta la **tabla maestra comparativa** de todos los problemas resueltos, incluyendo el modelo matemático, número de subintervalos $n$, tamaño de paso $h$, resultados por **Trapecio Compuesto**, **Método de Simpson** (1/3, 3/8 o Combinado según la paridad/multiplicidad de $n$), **Valor Exacto o de Referencia**, y los errores porcentuales ($E_{\%}$):

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

## 2. Tabla Comparativa de Convergencia: $n = 4$ vs. $n = 8$

De acuerdo con los criterios de evaluación del solucionario (*"Incorporar comparación $n=4$ y $n=8$ donde corresponda"*), se presenta el comportamiento del error al duplicar el número de subintervalos en los problemas definidos mediante función matemática:

| Ejercicio | Valor Exacto ($I_{\text{ref}}$) | Trapecio ($n=4$) | Error % Trap ($n=4$) | Trapecio ($n=8$) | Error % Trap ($n=8$) | Simpson 1/3 ($n=4$) | Error % Simp ($n=4$) | Simpson 1/3 ($n=8$) | Error % Simp ($n=8$) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Validación** $\int_0^2 x^2 dx$ | $2.666667$ | $2.750000$ | $3.1250\%$ | $2.687500$ | $0.78125\%$ | $2.666667$ | **$0.00000\%$** | $2.666667$ | **$0.00000\%$** |
| **Ej. 22 (Catenaria)** | $43.898841\text{ ft}$ | $44.469492\text{ ft}$ | $1.2999\%$ | $44.042044\text{ ft}$ | $0.3262\%$ | $43.904728\text{ ft}$ | $0.01341\%$ | $43.899213\text{ ft}$ | **$0.00085\%$** |
| **Ej. 23 (Tubería)** | $12.828170\text{ in}^3/\text{s}$ | $10.674415\text{ in}^3/\text{s}$ | $16.7893\%$ | $11.681778\text{ in}^3/\text{s}$ | $8.9365\%$ | $11.572067\text{ in}^3/\text{s}$ | $9.7918\%$ | $12.151244\text{ in}^3/\text{s}$ | **$5.2769\%$** |
| **Ej. 24 (Cardioide)** | $80.000000\text{ u}$ | $75.878680\text{ u}$ | $5.1516\%$ | $78.969264\text{ u}$ | $1.2884\%$ | $80.179241\text{ u}$ | $0.22405\%$ | $80.010767\text{ u}$ | **$0.01346\%$** |
| **Ej. 25 (Satélite)** | $3.48623679\times 10^9\text{ J}$ | $3.48776933\times 10^9\text{ J}$ | $0.0440\%$ | $3.48662008\times 10^9\text{ J}$ | $0.0110\%$ | $3.48623859\times 10^9\text{ J}$ | $0.00005\%$ | $3.48623690\times 10^9\text{ J}$ | **$0.000003\%$** |

---

## 3. Desarrollo Detallado de los Problemas Resueltos (Ejercicios 19 al 27)

### Ejercicio 19 · Transporte Urbano: Distancia recorrida por un vehículo (Grupos A y D)

* **Problema y Contexto:** Un vehículo experimental registra su velocidad cada segundo durante los primeros $7\text{ s}$ de aceleración en un corredor urbano. Se desea calcular la distancia total recorrida.
* **Modelo Matemático y Unidades:**
  $$d = \int_{0}^{7} v(t)\,dt = \frac{1}{3600}\int_{0}^{7} v_{\text{mi/h}}(t)\,dt \quad [\text{mi}]$$
  Como el tiempo está en segundos y la velocidad en $\text{mi/h}$, es indispensable dividir el resultado de la suma numérica entre $3600\text{ s/h}$.
* **Datos Tabulados ($n = 7$, $h = 1\text{ s}$):**

| $t\text{ (s)}$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $v\text{ (mi/h)}$ | $0$ | $14$ | $39$ | $69$ | $95$ | $114$ | $129$ | $139$ |

* **Procedimiento de Cálculo:**
  1. **Trapecio Compuesto ($n = 7$, $h = 1$):**
     $$I_T = 1\cdot\left[\frac{0 + 139}{2} + (14 + 39 + 69 + 95 + 114 + 129)\right] = 69.5 + 460 = 529.5\text{ mi/h}\cdot\text{s}$$
     $$d_T = \frac{529.5}{3600} = \mathbf{0.147083\text{ mi}} \approx 236.71\text{ m}$$
  2. **Simpson Combinado ($n = 7 = 4 + 3$):**
     * **Simpson 1/3 en $[0, 4]$ ($4$ subintervalos):**
       $$I_{1/3} = \frac{1}{3}\left[0 + 4(14) + 2(39) + 4(69) + 95\right] = \frac{505}{3} = 168.333333\text{ mi/h}\cdot\text{s}$$
     * **Simpson 3/8 en $[4, 7]$ ($3$ subintervalos):**
       $$I_{3/8} = \frac{3(1)}{8}\left[95 + 3(114) + 3(129) + 139\right] = \frac{3}{8}(963) = 361.125000\text{ mi/h}\cdot\text{s}$$
     * **Distancia Total Simpson:**
       $$d_S = \frac{168.333333 + 361.125000}{3600} = \frac{529.458333}{3600} = \mathbf{0.147072\text{ mi}} \approx \mathbf{236.69\text{ m}}$$
* **Conclusión:** Ambos métodos concuerdan hasta el quinto decimal ($0.14708\text{ mi}$ vs $0.14707\text{ mi}$). La combinación de Simpson 1/3 y 3/8 permite resolver mallas con número impar de subintervalos ($n=7$) conservando precisión de alto orden.

---

### Ejercicio 20 · Ensayo de Elasticidad: Trabajo de una banda elástica (Grupos B y E)

* **Problema y Contexto:** Se estira una banda elastomérica fijando un extremo y midiendo la fuerza aplicada $F$ a distintos desplazamientos $x$. Determinar el trabajo mecánico realizado.
* **Modelo Matemático:**
  $$W = \int_{0}^{2.8} F(x)\,dx \quad [\text{lb}\cdot\text{in}]$$
* **Datos Tabulados ($n = 7$, $h = 0.4\text{ in}$):**

| $x\text{ (in)}$ | $0$ | $0.4$ | $0.8$ | $1.2$ | $1.6$ | $2.0$ | $2.4$ | $2.8$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $F\text{ (lb)}$ | $0$ | $0.85$ | $1.30$ | $1.60$ | $1.87$ | $2.14$ | $2.34$ | $2.52$ |

* **Procedimiento de Cálculo:**
  1. **Trapecio Compuesto ($n = 7$, $h = 0.4$):**
     $$W_T = 0.4\left[\frac{0 + 2.52}{2} + (0.85 + 1.30 + 1.60 + 1.87 + 2.14 + 2.34)\right] = 0.4(1.26 + 10.10) = \mathbf{4.544000\text{ lb}\cdot\text{in}}$$
  2. **Simpson Combinado (Simpson 1/3 en $[0, 1.6]$ + Simpson 3/8 en $[1.6, 2.8]$):**
     $$W_{1/3} = \frac{0.4}{3}\left[0 + 4(0.85) + 2(1.30) + 4(1.60) + 1.87\right] = \frac{0.4}{3}(14.27) = 1.902667\text{ lb}\cdot\text{in}$$
     $$W_{3/8} = \frac{3(0.4)}{8}\left[1.87 + 3(2.14) + 3(2.34) + 2.52\right] = 0.15(17.83) = 2.674500\text{ lb}\cdot\text{in}$$
     $$W_S = 1.902667 + 2.674500 = \mathbf{4.577167\text{ lb}\cdot\text{in}} \approx \mathbf{0.5172\text{ J}}$$
* **Conclusión:** El método del Trapecio subestima ligeramente el trabajo ($4.544\text{ lb}\cdot\text{in}$) frente a Simpson ($4.577\text{ lb}\cdot\text{in}$) debido a la concavidad negativa de la curva esfuerzo-deformación de la goma.

---

### Ejercicio 21 · Perfil Topográfico: Área bajo la curva digitalizada (Grupo C)

* **Problema y Contexto:** Estimar el área sombreada bajo el perfil topográfico entre $x = 1$ y $x = 10$ digitalizando las ordenadas de la cuadrícula.
* **Modelo Matemático:** $A = \int_{1}^{10} y(x)\,dx \quad [\text{u}^2]$ con paso $h = 1$ ($n = 9$ subintervalos).
* **Datos Digitalizados de Referencia (Solucionario):**

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ aprox. | $1.3$ | $3.7$ | $4.6$ | $4.4$ | $2.7$ | $2.5$ | $3.6$ | $5.3$ | $6.0$ | $5.9$ |

* **Procedimiento de Cálculo:**
  1. **Trapecio Compuesto ($n = 9$, $h = 1$):**
     $$A_T = 1\cdot\left[\frac{1.3 + 5.9}{2} + (3.7 + 4.6 + 4.4 + 2.7 + 2.5 + 3.6 + 5.3 + 6.0)\right] = 3.6 + 32.8 = \mathbf{36.400000\text{ u}^2}$$
  2. **Simpson 1/3 en $[1, 9]$ ($8$ subintervalos) + Trapecio en $[9, 10]$ ($1$ subintervalo):**
     $$A_{S1/3 + T} = \frac{1}{3}(92.7) + \frac{1}{2}(6.0 + 5.9) = 30.900000 + 5.950000 = \mathbf{36.850000\text{ u}^2}$$
  3. **Simpson 3/8 Compuesto puro ($n = 9$ es múltiplo de 3):**
     $$A_{S3/8} = \frac{3(1)}{8}\left[1.3 + 3(3.7+4.6+2.7+2.5+5.3+6.0) + 2(4.4+3.6) + 5.9\right] = \frac{3}{8}(97.6) = \mathbf{36.600000\text{ u}^2}$$
* **Conclusión:** La diferencia entre métodos ($\approx 0.45\text{ u}^2$) es pequeña en comparación con la incertidumbre visual propia del proceso de digitalización de la gráfica.

---

### Ejercicio 22 · Cable Suspendido: Longitud de una catenaria (Grupo D)

* **Problema y Contexto:** Un cable suspendido entre dos apoyos sigue la catenaria $y = a\cosh(x/a)$ con $a = 24\text{ ft}$ entre $x = -12\text{ ft}$ y $x = 26\text{ ft}$.
* **Modelo Matemático:**
  Como $y' = \sinh(x/24)$ y $\sqrt{1 + \sinh^2(x/24)} = \cosh(x/24)$:
  $$L = \int_{-12}^{26} \sqrt{1 + [y'(x)]^2}\,dx = \int_{-12}^{26} \cosh\left(\frac{x}{24}\right)dx$$
  * **Valor Analítico Exacto:** $L_{\text{exacto}} = 24\left[\sinh\left(\frac{26}{24}\right) - \sinh\left(\frac{-12}{24}\right)\right] = \mathbf{43.898841\text{ ft}}$.
* **Nodos y Evaluación ($n = 8$, $h = \frac{26 - (-12)}{8} = 4.75\text{ ft}$):**

| Nodo $i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $x_i\text{ (ft)}$ | $-12.00$ | $-7.25$ | $-2.50$ | $2.25$ | $7.00$ | $11.75$ | $16.50$ | $21.25$ | $26.00$ |
| $\cosh(x_i/24)$ | $1.127626$ | $1.046065$ | $1.005430$ | $1.004398$ | $1.042829$ | $1.122230$ | $1.245909$ | $1.418565$ | $1.647231$ |

* **Resultados y Errores ($n = 8$):**
  * **Trapecio Compuesto:** $L_T = \mathbf{44.042044\text{ ft}}$ ($E_a = 0.143203\text{ ft}$, $E_{\%} = 0.3262\%$).
  * **Simpson 1/3 Compuesto:** $L_S = \mathbf{43.899213\text{ ft}}$ ($E_a = 0.000372\text{ ft}$, $E_{\%} = 0.00085\%$).
* **Conclusión:** Simpson 1/3 con $8$ subintervalos logra un error menor a $0.001\%$ gracias a la suavidad infinita de la función $\cosh(x/24)$.

---

### Ejercicio 23 · Red de Abastecimiento de Agua: Caudal en tubería circular (Grupos A y F)

* **Problema y Contexto:** Calcular el caudal volumétrico $Q$ en una tubería circular de radio $R = 0.25\text{ in}$ con perfil turbulento $v(r) = v_{\max}(1 - r/R)^{1/n}$, donde $v_{\max} = 80\text{ in/s}$ y $n = 7$.
* **Modelo Matemático:**
  $$Q = \int_{0}^{R} 2\pi r v(r)\,dr = \int_{0}^{0.25} 160\pi r\left(1 - \frac{r}{0.25}\right)^{1/7}dr$$
  * **Valor Analítico Exacto:** $Q_{\text{exacto}} = \frac{49\pi}{12} \approx \mathbf{12.828170\text{ in}^3/\text{s}}$.
* **Nodos y Evaluación ($n = 8$, $h = 0.03125\text{ in}$):**

| Nodo $i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $r_i\text{ (in)}$ | $0$ | $0.03125$ | $0.0625$ | $0.09375$ | $0.125$ | $0.15625$ | $0.1875$ | $0.21875$ | $0.25$ |
| $f(r_i)$ | $0$ | $15.410234$ | $30.158550$ | $44.142230$ | $57.198744$ | $69.035568$ | $78.999935$ | $84.996356$ | $0$ |

* **Resultados y Errores ($n = 8$):**
  * **Trapecio Compuesto:** $Q_T = \mathbf{11.681778\text{ in}^3/\text{s}}$ ($E_a = 1.146392$, $E_{\%} = 8.9365\%$).
  * **Simpson 1/3 Compuesto:** $Q_S = \mathbf{12.151244\text{ in}^3/\text{s}}$ ($E_a = 0.676926$, $E_{\%} = 5.2769\%$).
* **Conclusión:** En el borde de la pared ($r \to 0.25$), el integrando cae abruptamente de $85.0$ a $0$ con derivada vertical ($f'(r) \to -\infty$). Esta singularidad en la derivada explica por qué los métodos de Newton-Cotes convergen más lentamente que en funciones suaves.

---

### Ejercicio 24 · Diseño de una Trayectoria: Cardioide paramétrica (Grupo C)

* **Problema y Contexto:** Determinar el perímetro de la curva cardioide $x(t) = 2b\cos t - b\cos 2t$, $y(t) = 2b\sin t - b\sin 2t$ con $b = 5$ en $t \in [0, 2\pi]$.
* **Modelo Matemático:**
  $$L = \int_{0}^{2\pi} \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt = \int_{0}^{2\pi} 20\sin\left(\frac{t}{2}\right)dt = \mathbf{80.000000\text{ u}}$$
* **Nodos y Evaluación ($n = 8$, $h = \pi/4 \approx 0.785398\text{ rad}$):**

| Nodo $i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $t_i$ | $0$ | $\pi/4$ | $\pi/2$ | $3\pi/4$ | $\pi$ | $5\pi/4$ | $3\pi/2$ | $7\pi/4$ | $2\pi$ |
| $ds/dt$ | $0$ | $7.653669$ | $14.142136$ | $18.477591$ | $20.000000$ | $18.477591$ | $14.142136$ | $7.653669$ | $0$ |

* **Resultados y Errores ($n = 8$):**
  * **Trapecio Compuesto:** $L_T = \mathbf{78.969264\text{ u}}$ ($E_a = 1.030736$, $E_{\%} = 1.2884\%$).
  * **Simpson 1/3 Compuesto:** $L_S = \mathbf{80.010767\text{ u}}$ ($E_a = 0.010767$, $E_{\%} = 0.0135\%$).
* **Conclusión:** La parametrización regulariza la cúspide de la cardioide en $t=0$, permitiendo que Simpson 1/3 alcance una exactitud del $99.986\%$.

---

### Ejercicio 25 · Energía Gravitatoria: Elevación de un satélite (Grupo B)

* **Problema y Contexto:** Determinar el cambio en la energía potencial gravitatoria $\Delta U$ de un satélite de $m = 500\text{ kg}$ elevado desde la superficie terrestre ($R = 6,371\text{ km}$, $g_0 = 9.81\text{ m/s}^2$) hasta $h = 800\text{ km}$.
* **Modelo Matemático:**
  $$\Delta U = \int_{0}^{800000} m g_0 \frac{R^2}{(R+y)^2}\,dy = m g_0 \frac{R h}{R + h} = \mathbf{3.486236787 \times 10^9\text{ J}}$$
* **Resultados y Errores ($n = 8$, paso $\Delta y = 100,000\text{ m}$):**
  * **Trapecio Compuesto:** $\Delta U_T = \mathbf{3.48662008 \times 10^9\text{ J}}$ ($E_{\%} = 0.0110\%$).
  * **Simpson 1/3 Compuesto:** $\Delta U_S = \mathbf{3.48623690 \times 10^9\text{ J}}$ ($E_{\%} = 0.000003\%$).
* **Conclusión:** La integración numérica verifica que asumir gravedad constante ($mg_0h = 3.924\times 10^9\text{ J}$) produciría un error físico de $+12.56\%$.

---

### Ejercicio 26 · Superficie del Lago Erie y Adaptación al Lago Titicaca (Grupo F)

* **Problema y Contexto:** Estimar la superficie del Lago Erie integrando anchuras $w(x)$ medidas cada $h = 20\text{ mi}$ entre $x = 40\text{ mi}$ y $x = 260\text{ mi}$ ($n = 11$), comparando con el área real de $9,940\text{ mi}^2$, y proponer una adaptación geográfica al Lago Titicaca ($8,562\text{ km}^2$).
* **Datos Digitalizados Lago Erie ($n = 11$, $h = 20\text{ mi}$):**

| $x\text{ (mi)}$ | $40$ | $60$ | $80$ | $100$ | $120$ | $140$ | $160$ | $180$ | $200$ | $220$ | $240$ | $260$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $w(x)\text{ (mi)}$ | $20$ | $34$ | $42$ | $50$ | $58$ | $59$ | $57$ | $53$ | $50$ | $44$ | $30$ | $12$ |

* **Resultados Lago Erie:**
  * **Trapecio Compuesto ($n=11$):** $A_T = \mathbf{9,860.000000\text{ mi}^2}$ ($E_{\%} = 0.8048\%$).
  * **Simpson Combinado ($S_{1/3}$ en $[40,200]$ + $S_{3/8}$ en $[200,260]$):** $A_S = \mathbf{9,925.833333\text{ mi}^2}$ ($E_{\%} = 0.1425\%$).
* **Adaptación al Lago Titicaca ($x \in [0, 180]\text{ km}$, $h = 20\text{ km}$, $n = 9$):**
  * Con anchuras transversales $w = [12, 38, 56, 65, 62, 58, 52, 45, 29, 10]\text{ km}$:
  * **Trapecio Compuesto:** $8,320.000000\text{ km}^2$ ($E_{\%} = 2.8264\%$).
  * **Simpson 3/8 Compuesto:** $8,512.500000\text{ km}^2$ ($E_{\%} = 0.5781\%$ respecto a $8,562\text{ km}^2$).

---

### Ejercicio 27 · Volumen y Área Superficial de un Objeto Alargado (Grupo E)

* **Problema y Contexto:** A partir de mediciones del diámetro $d(z)$ cada pulgada a lo largo del eje $z \in [0, 12]\text{ in}$ ($n = 12$), estimar el volumen $V$ y discutir la fórmula del área superficial $S$.
* **Datos Tabulados ($n = 12$, $h = 1\text{ in}$, $r = d/2$):**

| $z\text{ (in)}$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $d\text{ (in)}$ | $0$ | $2.6$ | $3.2$ | $4.8$ | $5.6$ | $6.0$ | $6.2$ | $6.0$ | $5.6$ | $4.8$ | $3.3$ | $2.6$ | $0$ |
| $r\text{ (in)}$ | $0$ | $1.3$ | $1.6$ | $2.4$ | $2.8$ | $3.0$ | $3.1$ | $3.0$ | $2.8$ | $2.4$ | $1.65$ | $1.3$ | $0$ |

* **Resultados de Volumen $V = \pi\int_{0}^{12} r^2\,dz$:**
  * **Trapecio Compuesto ($n=12$):** $V_T = \mathbf{199.404740\text{ in}^3}$ ($\approx 3,267.66\text{ cm}^3$).
  * **Simpson 1/3 Compuesto ($n=12$):** $V_S = \mathbf{201.842092\text{ in}^3}$ ($\approx 3,307.60\text{ cm}^3$).
  * **Simpson 3/8 Compuesto ($n=12$):** $V_{S3/8} = \mathbf{201.498087\text{ in}^3}$.
* **Resultados de Superficie $S = 2\pi\int_{0}^{12} r\,dz$ y Discusión Geométrica:**
  * **Trapecio Compuesto:** $S_T = \mathbf{159.278748\text{ in}^2}$.
  * **Simpson 1/3 Compuesto:** $S_S = \mathbf{162.315620\text{ in}^2}$.
  * **Discusión Crítica:** La expresión $S = 2\pi\int_{0}^{L} r\,dz$ omite el diferencial de longitud de arco $\sqrt{1 + (r')^2}\,dz$. El área superficial verdadera de un sólido de revolución requiere $S_{\text{real}} = 2\pi\int_{0}^{L} r\sqrt{1 + (r')^2}\,dz$ (que al estimar $r'(z)$ por diferencias finitas asciende a $\approx 179.58\text{ in}^2$). Por tanto, la fórmula simplificada subestima el área real en un $\sim 9.6\%$.
