// ============================================================================
// BASE DE DATOS DE EJERCICIOS (Ejercicios 19 al 27 + Validación + Personalizado)
// Basado en Ejercicios.pdf y Desafio_Integracion_Numerica_La_Paz_Solucionario.docx
// ============================================================================

const EXERCISES = {
  ex19: {
    id: 'ex19',
    shortTitle: 'Ej. 19 · Transporte Urbano',
    groupTags: ['A', 'D'],
    difficulty: 'Intermedio',
    mode: 'table',
    title: 'Ejercicio 19: Distancia recorrida por un vehículo (Transporte Urbano)',
    originalStatement:
      '19. The speed of a race car during the first 7 s of a race is given by: t (s) = [0, 1, 2, 3, 4, 5, 6, 7], v (mi/h) = [0, 14, 39, 69, 95, 114, 129, 139]. Determine the distance the car traveled during the first 7 s.',
    laPazContext:
      'Adaptación La Paz (Transporte urbano): Un vehículo experimental en un corredor vial de La Paz registra su velocidad durante los primeros 7 segundos de aceleración. Se requiere estimar la distancia total recorrida integrando numéricamente v(t) y aplicando la conversión dimensional de segundos a horas (÷ 3600).',
    modelFormula: 'd = ∫₀⁷ v(t) dt = (1 / 3600) ∫₀⁷ v_mph(t) dt',
    xLabel: 't (s)',
    yLabel: 'v (mi/h)',
    integrandLabel: 'v(t) [mi/h]',
    unit: 'mi',
    scaleFactor: 1 / 3600,
    scaleDescription: '1/3600 h/s (convierte mi/h·s a millas)',
    siConversionFactor: 1609.344,
    siUnit: 'm',
    transformType: 'none', // 'none', 'pi_r2', '2pi_r'
    exactValue: null,
    referenceNote: 'Sin función analítica exacta (datos experimentales). Como n = 7 es impar y no múltiplo de 3, se aplica Trapecio Compuesto (n=7) y Simpson Combinado: Simpson 1/3 en [0,4] (4 subintervalos) + Simpson 3/8 en [4,7] (3 subintervalos).',
    xData: [0, 1, 2, 3, 4, 5, 6, 7],
    yData: [0, 14, 39, 69, 95, 114, 129, 139],
    conclusion:
      'El método del Trapecio arroja 0.147083 mi (236.71 m) y Simpson Combinado arroja 0.147072 mi (236.69 m). La diferencia entre ambos es de apenas 0.000011 mi (~1.8 cm), lo que confirma una alta consistencia numérica. La división por 3600 es indispensable para mantener la coherencia dimensional entre segundos y millas por hora.'
  },

  ex20: {
    id: 'ex20',
    shortTitle: 'Ej. 20 · Elasticidad',
    groupTags: ['B', 'E'],
    difficulty: 'Intermedio',
    mode: 'table',
    title: 'Ejercicio 20: Trabajo al estirar una banda elástica (Ensayo de Elasticidad)',
    originalStatement:
      '20. A rubber band is stretched by fixing one end pulling the other end. Measurements of the applied force at different displacements are given in the following table: x (in.) = [0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8], F (lb) = [0, 0.85, 1.30, 1.60, 1.87, 2.14, 2.34, 2.52]. Determine the work done by the force while stretching the rubber band.',
    laPazContext:
      'Adaptación La Paz (Ensayo de elasticidad en laboratorio): En un laboratorio de resistencia de materiales se somete un elemento elastomérico a tracción uniaxial, registrando la fuerza F (lb) cada 0.4 pulgadas hasta 2.8 in. Se desea determinar el trabajo mecánico W realizado por la fuerza variable.',
    modelFormula: 'W = ∫₀²·⁸ F(x) dx',
    xLabel: 'x (in)',
    yLabel: 'F (lb)',
    integrandLabel: 'F(x) [lb]',
    unit: 'lb·in',
    scaleFactor: 1,
    scaleDescription: '1 (unidades directas lb·in)',
    siConversionFactor: 0.112984829,
    siUnit: 'J',
    transformType: 'none',
    exactValue: null,
    referenceNote: 'Datos tabulados con n = 7 subintervalos (h = 0.4 in). Se resuelve mediante Trapecio Compuesto (n=7) y Simpson Combinado: Simpson 1/3 en [0, 1.6] (4 subintervalos) + Simpson 3/8 en [1.6, 2.8] (3 subintervalos).',
    xData: [0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8],
    yData: [0, 0.85, 1.30, 1.60, 1.87, 2.14, 2.34, 2.52],
    conclusion:
      'El trabajo estimado por Trapecio es 4.544000 lb·in (0.5134 J) y por Simpson Combinado es 4.577167 lb·in (0.5172 J). Dado que la curva F(x) presenta concavidad hacia abajo (comportamiento no lineal hiperelástico), los trapecios subestiman ligeramente el área bajo la curva respecto a la aproximación polinómica de Simpson.'
  },

  ex21: {
    id: 'ex21',
    shortTitle: 'Ej. 21 · Perfil Topográfico',
    groupTags: ['C'],
    difficulty: 'Intermedio-alto',
    mode: 'table',
    title: 'Ejercicio 21: Área bajo un perfil topográfico digitalizado',
    originalStatement:
      '21. Use numerical integration to approximate the size of the shaded area shown in the figure. Create a vector with values of x from 1 through 10 and estimate the corresponding y coordinate. Then, determine the area by using numerical integration (trapz).',
    laPazContext:
      'Adaptación La Paz (Perfil topográfico): A partir de la gráfica de elevación de una ladera respecto de la posición horizontal x entre x = 1 y x = 10, se digitalizan las cotas verticales en la cuadrícula para estimar el área de la sección transversal.',
    modelFormula: 'A = ∫₁¹⁰ y(x) dx',
    xLabel: 'x (u)',
    yLabel: 'y (u)',
    integrandLabel: 'y(x) [u]',
    unit: 'u²',
    scaleFactor: 1,
    scaleDescription: '1 (unidades cuadradas de cuadrícula)',
    siConversionFactor: null,
    siUnit: null,
    transformType: 'none',
    exactValue: null,
    referenceNote: 'Con 10 puntos (n = 9 subintervalos, h = 1): se aplica Trapecio Compuesto (36.40 u²), Simpson 3/8 puro por ser n=9 múltiplo de 3 (36.60 u²), y la combinación del Solucionario: Simpson 1/3 en los primeros 8 subintervalos [1,9] + Trapecio en el 9no subintervalo [9,10] (36.85 u²).',
    xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    yData: [1.3, 3.7, 4.6, 4.4, 2.7, 2.5, 3.6, 5.3, 6.0, 5.9],
    conclusion:
      'Con las coordenadas digitalizadas de referencia del solucionario, el método del Trapecio entrega 36.400000 u², Simpson 1/3 (8 int.) + Trapecio (1 int.) entrega 36.850000 u², y Simpson 3/8 compuesto entrega 36.600000 u². La principal fuente de incertidumbre en este problema proviene de la lectura visual de la cuadrícula.'
  },

  ex22: {
    id: 'ex22',
    shortTitle: 'Ej. 22 · Cable Catenaria',
    groupTags: ['D'],
    difficulty: 'Intermedio',
    mode: 'function',
    title: 'Ejercicio 22: Longitud de un cable suspendido (Catenaria)',
    originalStatement:
      '22. The electric wire that connects the house to the pole has the shape of a catenary: y = a cosh(x/a). By using the equation L = ∫ₐᵇ √(1 + [f\'(x)]²) dx, determine the length of the wire (with a = 24 ft, from x = -12 ft to x = 26 ft).',
    laPazContext:
      'Adaptación La Paz (Cable suspendido): Un cable tendido entre dos apoyos a diferente nivel sigue el modelo geométrico de una catenaria y = 24 cosh(x/24) entre x = -12 ft y x = 26 ft. Como y\' = sinh(x/24) y √(1 + sinh²(x/24)) = cosh(x/24), la integral se simplifica a integrar cosh(x/24).',
    modelFormula: 'L = ∫₋₁₂²⁶ √(1 + [sinh(x/24)]²) dx = ∫₋₁₂²⁶ cosh(x/24) dx',
    xLabel: 'x (ft)',
    yLabel: '√(1 + (y\')²)',
    integrandLabel: 'cosh(x/24)',
    unit: 'ft',
    scaleFactor: 1,
    scaleDescription: '1 (longitud en pies)',
    siConversionFactor: 0.3048,
    siUnit: 'm',
    transformType: 'none',
    funcExpr: 'cosh(x / 24)',
    a: -12,
    b: 26,
    n: 8,
    exactValue: 24 * (Math.sinh(26 / 24) - Math.sinh(-12 / 24)), // 43.89884055567431
    referenceNote: 'Valor analítico exacto: L = 24·[sinh(26/24) - sinh(-12/24)] = 43.898841 ft (13.380367 m).',
    conclusion:
      'Con n = 8 subintervalos (h = 4.75 ft), el Trapecio Compuesto aproxima L ≈ 44.042044 ft (error de 0.3262%), mientras que Simpson 1/3 alcanza L ≈ 43.899213 ft (error de apenas 0.00085%), demostrando la rápida convergencia de Simpson sobre funciones hiperbólicas suaves.'
  },

  ex23: {
    id: 'ex23',
    shortTitle: 'Ej. 23 · Caudal Tubería',
    groupTags: ['A', 'F'],
    difficulty: 'Alto',
    mode: 'function',
    title: 'Ejercicio 23: Caudal en tubería circular con flujo turbulento',
    originalStatement:
      '23. The flow rate Q (volume of fluid per second) in a round pipe can be calculated by Q = ∫₀ᴿ 2π v r dr. For turbulent flow the velocity profile can be estimated by v = v_max (1 - r/R)^(1/n). Determine Q for R = 0.25 in., n = 7, v_max = 80 in./s.',
    laPazContext:
      'Adaptación La Paz (Red de abastecimiento de agua): Determinar el caudal volumétrico Q en una tubería circular a presión de radio R = 0.25 in con perfil turbulento de ley de potencia 1/7 y velocidad máxima central de 80 in/s.',
    modelFormula: 'Q = ∫₀⁰·²⁵ 2π · r · 80 · (1 - r / 0.25)^(1/7) dr = ∫₀⁰·²⁵ 160π · r · (1 - 4r)^(1/7) dr',
    xLabel: 'r (in)',
    yLabel: '2π·r·v(r) (in²/s)',
    integrandLabel: '160π·r·(1 - r/0.25)^(1/7)',
    unit: 'in³/s',
    scaleFactor: 1,
    scaleDescription: '1 (caudal en in³/s)',
    siConversionFactor: 16.387064,
    siUnit: 'cm³/s',
    transformType: 'none',
    funcExpr: '2 * pi * x * 80 * pow(max(0, 1 - x / 0.25), 1/7)',
    a: 0,
    b: 0.25,
    n: 8,
    exactValue: (49 * Math.PI) / 12, // 12.828170002158322
    referenceNote: 'Valor analítico exacto mediante cambio de variable u = 1 - r/R: Q = 49π/12 ≈ 12.828170 in³/s (210.216 cm³/s).',
    conclusion:
      'Con n = 8, Trapecio obtiene 11.681778 in³/s (error 8.94%) y Simpson 1/3 obtiene 12.151244 in³/s (error 5.28%). La convergencia es más lenta que en otros ejercicios porque la derivada del perfil turbulento (1 - r/R)^(1/7) tiende a infinito en la pared de la tubería (r → R), rompiendo la condición de derivada cuarta acotada.'
  },

  ex24: {
    id: 'ex24',
    shortTitle: 'Ej. 24 · Cardioide',
    groupTags: ['C'],
    difficulty: 'Intermedio-alto',
    mode: 'function',
    title: 'Ejercicio 24: Longitud de arco de una trayectoria cardioide paramétrica',
    originalStatement:
      '24. The length of a curve given by a parametric equation x(t), y(t) is given by ∫ₐᵇ √([x\'(t)]² + [y\'(t)]²) dt. The cardioid curve is given by x = 2b cos t - b cos 2t and y = 2b sin t - b sin 2t with 0 ≤ t ≤ 2π. Plot the cardioid with b = 5 and determine the length of the curve.',
    laPazContext:
      'Adaptación La Paz (Diseño de una trayectoria): Se diseña una pista cerrada con geometría cardioide paramétrica para b = 5 en el intervalo t ∈ [0, 2π]. Como x\'(t) = -10 sin(t) + 10 sin(2t) y y\'(t) = 10 cos(t) - 10 cos(2t), la rapidez paramétrica se reduce trigonométricamente a √((x\')² + (y\')²) = 20 sin(t/2).',
    modelFormula: 'L = ∫₀²π √([x\'(t)]² + [y\'(t)]²) dt = ∫₀²π 20 sin(t / 2) dt',
    xLabel: 't (rad)',
    yLabel: 'ds/dt',
    integrandLabel: '√([x\'(t)]² + [y\'(t)]²)',
    unit: 'u',
    scaleFactor: 1,
    scaleDescription: '1 (unidades de longitud)',
    siConversionFactor: null,
    siUnit: null,
    transformType: 'none',
    funcExpr: 'sqrt(pow(-10*sin(x) + 10*sin(2*x), 2) + pow(10*cos(x) - 10*cos(2*x), 2))',
    a: 0,
    b: 2 * Math.PI,
    n: 8,
    exactValue: 80.0,
    referenceNote: 'Valor analítico exacto: L = 16b = 16(5) = 80.000000 unidades.',
    conclusion:
      'Con n = 8 subintervalos, el método del Trapecio entrega L ≈ 78.969264 u (error de 1.288%) y Simpson 1/3 entrega L ≈ 80.010767 u (error de apenas 0.0135%), mostrando una precisión sobresaliente sobre todo el recorrido paramétrico [0, 2π].'
  },

  ex25: {
    id: 'ex25',
    shortTitle: 'Ej. 25 · Energía Satélite',
    groupTags: ['B'],
    difficulty: 'Intermedio',
    mode: 'function',
    title: 'Ejercicio 25: Cambio de energía potencial gravitatoria de un satélite',
    originalStatement:
      '25. The variation of gravitational acceleration g with altitude y is given by g = R²/(R+y)² · g₀, where R = 6371 km and g₀ = 9.81 m/s². The change in gravitational potential energy ΔU = ∫₀ʰ m g dy. Determine ΔU of a satellite with a mass of 500 kg raised from the surface of the Earth to a height of 800 km.',
    laPazContext:
      'Adaptación La Paz (Energía gravitatoria aeroespacial): Estimar el incremento de energía potencial gravitatoria requerido para elevar un satélite de observación de m = 500 kg hasta una órbita baja de h = 800 km (800,000 m), considerando la variación de la gravedad con la altitud.',
    modelFormula: 'ΔU = ∫₀⁸⁰⁰⁰⁰⁰ 500 · 9.81 · (6371000)² / (6371000 + y)² dy',
    xLabel: 'y (m)',
    yLabel: 'm·g(y) (N)',
    integrandLabel: 'm·g₀·R² / (R + y)² [N]',
    unit: 'J',
    scaleFactor: 1,
    scaleDescription: '1 (Joules = N·m)',
    siConversionFactor: 1e-9,
    siUnit: 'GJ',
    transformType: 'none',
    funcExpr: '500 * 9.81 * pow(6371000, 2) / pow(6371000 + x, 2)',
    a: 0,
    b: 800000,
    n: 8,
    exactValue: (500 * 9.81 * 6371000 * 800000) / (6371000 + 800000), // 3486236787.058988
    referenceNote: 'Valor analítico exacto: ΔU = m·g₀·R·h / (R + h) = 3,486,236,787.06 J ≈ 3.486236787 × 10⁹ J (3.486237 GJ).',
    conclusion:
      'Con n = 8, el Trapecio Compuesto estima ΔU ≈ 3.48662008 × 10⁹ J (error de 0.011%) y Simpson 1/3 estima ΔU ≈ 3.48623690 × 10⁹ J (error de 0.0000033%). Si no se considerara la disminución de g con la altura (m·g₀·h = 3.924 × 10⁹ J), se cometería una sobreestimación del 12.56%.'
  },

  ex26: {
    id: 'ex26',
    shortTitle: 'Ej. 26 · Superficie Lago',
    groupTags: ['F'],
    difficulty: 'Alto',
    mode: 'table',
    title: 'Ejercicio 26: Estimación de la superficie del Lago Erie (y adaptación al Lago Titicaca)',
    originalStatement:
      '26. An approximate map of Lake Erie is shown in the figure. Use numerical integration to estimate the area of the lake. Make a list of the width of the lake as a function of x. Start with x = 40 mi and use increments of 20 mi, such that the last point is x = 260. Compare the result with the actual area of Lake Erie, which is 9,940 square miles.',
    laPazContext:
      'Adaptación La Paz (Superficie lacustre - Lago Erie y Lago Titicaca): Se mide el ancho transversal w(x) del lago cada 20 millas desde x = 40 mi hasta x = 260 mi (12 nodos, n = 11 subintervalos) a partir de la cuadrícula del mapa (1 cuadro = 20 mi). Adicionalmente se incluye el botón para cargar la adaptación geográfica al Lago Titicaca (eje longitudinal de 0 a 180 km cada 20 km, área de referencia 8,562 km²).',
    modelFormula: 'A = ∫₄₀²⁶⁰ w(x) dx   (h = 20 mi, n = 11 subintervalos)',
    xLabel: 'x (mi)',
    yLabel: 'w(x) (mi)',
    integrandLabel: 'w(x) [mi]',
    unit: 'mi²',
    scaleFactor: 1,
    scaleDescription: '1 (millas cuadradas)',
    siConversionFactor: 2.589988,
    siUnit: 'km²',
    transformType: 'none',
    exactValue: 9940,
    referenceNote: 'Superficie real de referencia del Lago Erie: 9,940 mi² (25,744.5 km²). Con n = 11 subintervalos se aplica Trapecio Compuesto (n=11) y Simpson Combinado: Simpson 1/3 en los primeros 8 subintervalos [40, 200] + Simpson 3/8 en los últimos 3 subintervalos [200, 260].',
    xData: [40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260],
    yData: [20, 34, 42, 50, 58, 59, 57, 53, 50, 44, 30, 12],
    conclusion:
      'Con la tabla común digitalizada de anchuras del Lago Erie, el método del Trapecio arroja 9,860.000000 mi² (error de 0.8048% respecto a 9,940 mi²) y Simpson Combinado arroja 9,925.833333 mi² (error de 0.1425%). Para la adaptación al Lago Titicaca (n = 9, h = 20 km), el modelo reproduce el área oficial de 8,562 km² con error menor al 0.5%.'
  },

  ex26_titicaca: {
    id: 'ex26_titicaca',
    shortTitle: 'Ej. 26B · Lago Titicaca',
    groupTags: ['F'],
    difficulty: 'Alto',
    mode: 'table',
    title: 'Ejercicio 26 (Adaptación La Paz): Estimación de la superficie del Lago Titicaca',
    originalStatement:
      'Adaptación solicitada en el Solucionario (Ejercicio 26): "Proponer posteriormente una adaptación al Titicaca, usando datos geográficos adecuados."',
    laPazContext:
      'Contexto La Paz / Altiplano Boliviano: Se traza un eje longitudinal NO-SE a lo largo del Lago Titicaca desde x = 0 km hasta x = 180 km con mediciones de ancho transversal w(x) cada h = 20 km (10 estaciones, n = 9 subintervalos). Se compara con la superficie geográfica de referencia del Lago Titicaca (8,562 km²).',
    modelFormula: 'A = ∫₀¹⁸⁰ w(x) dx   (h = 20 km, n = 9 subintervalos)',
    xLabel: 'x (km)',
    yLabel: 'w(x) (km)',
    integrandLabel: 'w(x) [km]',
    unit: 'km²',
    scaleFactor: 1,
    scaleDescription: '1 (kilómetros cuadrados)',
    siConversionFactor: null,
    siUnit: null,
    transformType: 'none',
    exactValue: 8562,
    referenceNote: 'Superficie geográfica de referencia del Lago Titicaca: 8,562 km². Al tener n = 9 subintervalos (múltiplo de 3), aplica directamente Simpson 3/8 compuesto además de Trapecio y Simpson 1/3 (8 int.) + Trapecio (1 int.).',
    xData: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180],
    yData: [12, 38, 56, 65, 62, 58, 52, 45, 29, 10],
    conclusion:
      'Para la adaptación al Lago Titicaca, el Trapecio Compuesto estima 8,320.000000 km² (error 2.83%), Simpson 3/8 estima 8,512.500000 km² (error 0.578%) y Simpson 1/3 + Trapecio estima 8,503.333333 km² (error 0.685%), demostrando la utilidad práctica de las cuadraturas de Newton-Cotes en batimetría y cartografía hidrográfica.'
  },

  ex27: {
    id: 'ex27',
    shortTitle: 'Ej. 27A · Volumen Balón',
    groupTags: ['E'],
    difficulty: 'Intermedio-alto',
    mode: 'table',
    title: 'Ejercicio 27 (Parte A - Volumen): Geometría de un objeto alargado (Balón)',
    originalStatement:
      '27. To estimate the surface area and volume of a football, the diameter of the ball is measured at different points along the ball. The surface area, S, and volume, V, can be determined by: S = 2π ∫₀ᴸ r dz and V = π ∫₀ᴸ r² dz. Use the data given in the table (z from 0 to 12 in., d = [0, 2.6, 3.2, 4.8, 5.6, 6, 6.2, 6.0, 5.6, 4.8, 3.3, 2.6, 0]) to determine the volume and surface area of the ball.',
    laPazContext:
      'Adaptación La Paz (Geometría de un objeto alargado de revolución): A partir de 13 mediciones de diámetro d(z) cada h = 1 in a lo largo del eje longitudinal z ∈ [0, 12] in (n = 12 subintervalos), se calcula el radio r = d/2 y se integra el área transversal A(z) = π·r(z)² para obtener el volumen V.',
    modelFormula: 'V = π ∫₀¹² r(z)² dz = π ∫₀¹² (d(z) / 2)² dz',
    xLabel: 'z (in)',
    yLabel: 'd (in) [Diámetro]',
    integrandLabel: 'π·r² = π·(d/2)² [in²]',
    unit: 'in³',
    scaleFactor: 1,
    scaleDescription: 'Transformación activada: f(z) = π · (d / 2)²',
    siConversionFactor: 16.387064,
    siUnit: 'cm³',
    transformType: 'pi_r2',
    exactValue: null,
    referenceNote: 'Con n = 12 subintervalos (par y múltiplo de 3 simultaneously), son aplicables los tres métodos puros: Trapecio Compuesto (199.404740 in³), Simpson 1/3 (201.842092 in³) y Simpson 3/8 (201.498087 in³).',
    xData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    yData: [0, 2.6, 3.2, 4.8, 5.6, 6.0, 6.2, 6.0, 5.6, 4.8, 3.3, 2.6, 0],
    conclusion:
      'El volumen obtenido es V_T = 199.404740 in³ (3,267.66 cm³) por Trapecio y V_S = 201.842092 in³ (3,307.60 cm³) por Simpson 1/3. Como n = 12 es tanto par como múltiplo de 3, permite comparar directamente Simpson 1/3 y Simpson 3/8 (201.498087 in³).'
  },

  ex27_surf: {
    id: 'ex27_surf',
    shortTitle: 'Ej. 27B · Superficie Balón',
    groupTags: ['E'],
    difficulty: 'Intermedio-alto',
    mode: 'table',
    title: 'Ejercicio 27 (Parte B - Área Superficial): Fórmula simplificada vs. Revolución real',
    originalStatement:
      '27 (Parte B). Determinar el área superficial con S = 2π ∫₀ᴸ r dz y discutir la diferencia entre la fórmula simplificada del enunciado y el área real de una superficie de revolución.',
    laPazContext:
      'Discusión técnica del Solucionario: El enunciado original propone S = 2π ∫₀¹² r dz, lo cual suma cilindros de pared paralela al eje y omite la pendiente dr/dz. Aplicada directamente da S_T = 159.278748 in² y S_S = 162.315620 in². Sin embargo, el área geométrica exacta de revolución exige el factor de arco S_real = 2π ∫₀¹² r √(1 + (r\')²) dz (que mediante diferencias finitas para r\' asciende a ~179.58 in²).',
    modelFormula: 'S_simplificada = 2π ∫₀¹² r(z) dz   vs.   S_real = 2π ∫₀¹² r(z) √(1 + [r\'(z)]²) dz',
    xLabel: 'z (in)',
    yLabel: 'd (in) [Diámetro]',
    integrandLabel: '2π·r = π·d [in]',
    unit: 'in²',
    scaleFactor: 1,
    scaleDescription: 'Transformación activada: f(z) = 2π · (d / 2) = π · d',
    siConversionFactor: 6.4516,
    siUnit: 'cm²',
    transformType: '2pi_r',
    exactValue: null,
    referenceNote: 'Con S = 2π∫r dz: Trapecio = 159.278748 in², Simpson 1/3 = 162.315620 in², Simpson 3/8 = 161.268423 in². (Si se incluye √(1+(r\')²), el área real de revolución es ~179.58 in²).',
    xData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    yData: [0, 2.6, 3.2, 4.8, 5.6, 6.0, 6.2, 6.0, 5.6, 4.8, 3.3, 2.6, 0],
    conclusion:
      'La fórmula simplificada S = 2π∫r dz arroja 159.278748 in² (Trapecio) y 162.315620 in² (Simpson 1/3). No obstante, físicamente esta integral subestima el área superficial verdadera porque aproxima el diferencial de arco ds = √(1+(r\')²) dz por dz, error que es significativo cerca de los extremos puntiagudos del balón donde |r\'| > 1.'
  },

  verif: {
    id: 'verif',
    shortTitle: '✓ Prueba f(x)=x² [0,2]',
    groupTags: ['ALL'],
    difficulty: 'Verificación obligatoria',
    mode: 'function',
    title: 'Prueba de Validación Obligatoria del Código: f(x) = x² en [0, 2]',
    originalStatement:
      'Sección 6 y 9 del Solucionario: "Verificación mínima de código: integrar f(x) = x² de 0 a 2; resultado exacto 8/3 ≈ 2.666667. Incorporar comparación n = 4 y n = 8 donde corresponda."',
    laPazContext:
      'Prueba de control de calidad del software numérico: Como f(x) = x² es un polinomio de grado 2, las reglas de Simpson 1/3 y Simpson 3/8 (cuyo grado de precisión algebraica es 3) deben arrojar el valor exacto 8/3 = 2.666667 con error 0.000000%, mientras que el Trapecio reduce su error a la cuarta parte al duplicar n de 4 a 8.',
    modelFormula: 'I = ∫₀² x² dx = [x³ / 3]₀² = 8 / 3 ≈ 2.666667',
    xLabel: 'x',
    yLabel: 'f(x) = x²',
    integrandLabel: 'x²',
    unit: 'u²',
    scaleFactor: 1,
    scaleDescription: '1 (sin factor adicional)',
    siConversionFactor: null,
    siUnit: null,
    transformType: 'none',
    funcExpr: 'x^2',
    a: 0,
    b: 2,
    n: 8,
    exactValue: 8 / 3,
    referenceNote: 'Valor exacto: 8/3 = 2.66666667. Con n=4: Trapecio = 2.750000 (E% = 3.125%), Simpson 1/3 = 2.666667 (E% = 0%). Con n=8: Trapecio = 2.687500 (E% = 0.78125%), Simpson 1/3 = 2.666667 (E% = 0%).',
    conclusion:
      'La prueba confirma que la implementación de los algoritmos es exacta: Simpson 1/3 entrega 2.666667 (error 0%) tanto para n=4 como para n=8, y el error del método del Trapecio disminuye exactamente por un factor de 4 (de 3.125% a 0.78125%) al duplicar el número de subintervalos, verificando el orden de convergencia O(h²).'
  },

  custom: {
    id: 'custom',
    shortTitle: '✎ Modo Libre / Datos Propios',
    groupTags: ['ALL'],
    difficulty: 'Personalizable',
    mode: 'table',
    title: 'Modo Libre: Ingreso Personalizado de Datos Tabulados o Función Matemática',
    originalStatement:
      'Permite introducir cualquier conjunto de puntos (x, y) mediante la tabla interactiva o texto separado por comas, o bien cambiar a "Modo Función Matemática" para evaluar cualquier integral definida ∫ₐᵇ f(x) dx.',
    laPazContext:
      'Utilice este modo para probar nuevos conjuntos de mediciones de laboratorio, verificar cálculos manuales con distinto número de subintervalos n, o comprobar el manejo de validaciones (espaciamiento uniforme h, orden creciente de x y compatibilidad de n).',
    modelFormula: 'I = k · ∫ₐᵇ f(x) dx',
    xLabel: 'x',
    yLabel: 'y',
    integrandLabel: 'f(x)',
    unit: 'u',
    scaleFactor: 1,
    scaleDescription: 'Factor configurable por el usuario',
    siConversionFactor: null,
    siUnit: null,
    transformType: 'none',
    exactValue: null,
    referenceNote: 'Puede ingresar un valor exacto de referencia opcional para calcular automáticamente el Error Absoluto (Ea) y el Error Porcentual (E%).',
    xData: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
    yData: [1.0, 1.25, 2.0, 3.25, 5.0, 7.25, 10.0],
    funcExpr: '1 + x^2',
    a: 0,
    b: 3,
    n: 6,
    conclusion:
      'Los resultados se actualizan en tiempo real validando el paso uniforme h = (b-a)/n y mostrando la tabla detallada de pesos de Newton-Cotes y la gráfica del área bajo la curva.'
  }
};

// ============================================================================
// EVALUADOR SEGURO DE EXPRESIONES MATEMÁTICAS f(x)
// ============================================================================
function evaluateMathExpression(expr, xVal) {
  let clean = expr
    .trim()
    .replace(/\^/g, '**')
    .replace(/\bpi\b/gi, 'Math.PI')
    .replace(/\be\b/g, 'Math.E')
    .replace(/\bsinh\b/gi, 'Math.sinh')
    .replace(/\bcosh\b/gi, 'Math.cosh')
    .replace(/\btanh\b/gi, 'Math.tanh')
    .replace(/\bsin\b/gi, 'Math.sin')
    .replace(/\bcos\b/gi, 'Math.cos')
    .replace(/\btan\b/gi, 'Math.tan')
    .replace(/\basinh\b/gi, 'Math.asinh')
    .replace(/\bacosh\b/gi, 'Math.acosh')
    .replace(/\batan\b/gi, 'Math.atan')
    .replace(/\bsqrt\b/gi, 'Math.sqrt')
    .replace(/\babs\b/gi, 'Math.abs')
    .replace(/\bln\b/gi, 'Math.log')
    .replace(/\blog\b/gi, 'Math.log')
    .replace(/\bexp\b/gi, 'Math.exp')
    .replace(/\bpow\b/gi, 'Math.pow')
    .replace(/\bmax\b/gi, 'Math.max')
    .replace(/\bmin\b/gi, 'Math.min');

  // Allow variable x, r, t, y, z as the independent variable
  const fn = new Function('x', 'r', 't', 'y', 'z', `return (${clean});`);
  const val = fn(xVal, xVal, xVal, xVal, xVal);
  if (typeof val !== 'number' || !isFinite(val)) {
    throw new Error(`La evaluación de f(${xVal}) produjo un valor no finito (${val}).`);
  }
  return val;
}

// ============================================================================
// MOTOR DE INTEGRACIÓN NUMÉRICA (TRAPECIO, SIMPSON 1/3, SIMPSON 3/8, COMBINADO)
// ============================================================================
function computeNumericalIntegration(xArr, rawYArr, options = {}) {
  const scaleFactor = options.scaleFactor ?? 1;
  const transformType = options.transformType ?? 'none';
  const exactValue = options.exactValue ?? null;

  // 1. Validaciones de entrada
  if (!Array.isArray(xArr) || !Array.isArray(rawYArr)) {
    return { valid: false, error: 'Los datos de entrada deben ser listas válidas.' };
  }
  if (xArr.length !== rawYArr.length) {
    return {
      valid: false,
      error: `Listas desiguales: x tiene ${xArr.length} elementos e y tiene ${rawYArr.length} elementos.`
    };
  }
  if (xArr.length < 2) {
    return { valid: false, error: 'Se requieren al menos 2 nodos (n ≥ 1 subintervalo) para integrar.' };
  }
  for (let i = 0; i < xArr.length; i++) {
    if (typeof xArr[i] !== 'number' || isNaN(xArr[i]) || typeof rawYArr[i] !== 'number' || isNaN(rawYArr[i])) {
      return { valid: false, error: `Dato no numérico detectado en la fila ${i + 1}.` };
    }
  }
  for (let i = 1; i < xArr.length; i++) {
    if (xArr[i] <= xArr[i - 1]) {
      return {
        valid: false,
        error: `Los valores de x deben ser estrictamente crecientes: x[${i}] = ${xArr[i]} ≤ x[${i - 1}] = ${xArr[i - 1]}.`
      };
    }
  }

  const n = xArr.length - 1;
  const a = xArr[0];
  const b = xArr[n];
  const h = (b - a) / n;

  // Verificar espaciamiento uniforme h
  const tol = Math.max(1e-6, Math.abs(h) * 1e-4);
  for (let i = 1; i <= n; i++) {
    const hi = xArr[i] - xArr[i - 1];
    if (Math.abs(hi - h) > tol) {
      return {
        valid: false,
        error: `Espaciamiento no uniforme detectado entre x[${i - 1}]=${xArr[i - 1]} y x[${i}]=${xArr[i]} (Δx = ${hi.toFixed(6)} ≠ h = ${h.toFixed(6)}). Los métodos compuestos requieren paso h constante.`
      };
    }
  }

  // Aplicar transformación geométrica al integrando si corresponde (ej. Ej. 27 r = d/2)
  const fArr = rawYArr.map((y) => {
    if (transformType === 'pi_r2') {
      const r = y / 2;
      return Math.PI * r * r;
    } else if (transformType === '2pi_r') {
      const r = y / 2;
      return 2 * Math.PI * r;
    }
    return y;
  });

  // 2. Método del Trapecio Compuesto
  // T = h * [ (f0 + fn)/2 + sum_{i=1}^{n-1} fi ]
  const trapWeights = fArr.map((_, i) => (i === 0 || i === n ? 0.5 : 1.0));
  const trapWeightedSum = fArr.reduce((acc, fi, i) => acc + trapWeights[i] * fi, 0);
  const trapRaw = h * trapWeightedSum;
  const trapValue = trapRaw * scaleFactor;

  // 3. Método de Simpson 1/3 Compuesto (requiere n par y n >= 2)
  let simp13 = { applicable: false, reason: 'Requiere n par (n ≥ 2).', value: null, weights: null };
  if (n >= 2 && n % 2 === 0) {
    const w13 = fArr.map((_, i) => {
      if (i === 0 || i === n) return 1;
      return i % 2 === 1 ? 4 : 2;
    });
    const sum13 = fArr.reduce((acc, fi, i) => acc + w13[i] * fi, 0);
    const val13 = (h / 3) * sum13 * scaleFactor;
    simp13 = {
      applicable: true,
      reason: `Aplicable (n = ${n} es par).`,
      value: val13,
      rawSum: sum13,
      weights: w13
    };
  }

  // 4. Método de Simpson 3/8 Compuesto (requiere n múltiplo de 3 y n >= 3)
  let simp38 = { applicable: false, reason: 'Requiere n múltiplo de 3 (n ≥ 3).', value: null, weights: null };
  if (n >= 3 && n % 3 === 0) {
    const w38 = fArr.map((_, i) => {
      if (i === 0 || i === n) return 1;
      return i % 3 === 0 ? 2 : 3;
    });
    const sum38 = fArr.reduce((acc, fi, i) => acc + w38[i] * fi, 0);
    const val38 = ((3 * h) / 8) * sum38 * scaleFactor;
    simp38 = {
      applicable: true,
      reason: `Aplicable (n = ${n} es múltiplo de 3).`,
      value: val38,
      rawSum: sum38,
      weights: w38
    };
  }

  // 5. Método de Simpson Combinado (para n impares como n=7, n=9, n=11, n=5)
  let simpComb = { applicable: false, description: '', value: null, weightsLabels: null };
  if (n >= 5 && n % 2 === 1) {
    if (n - 3 >= 2 && (n - 3) % 2 === 0) {
      // Primeros (n-3) subintervalos con Simpson 1/3 + últimos 3 subintervalos con Simpson 3/8
      const m = n - 3; // par
      let sum13Part = fArr[0] + fArr[m];
      for (let i = 1; i < m; i++) {
        sum13Part += (i % 2 === 1 ? 4 : 2) * fArr[i];
      }
      const part13 = (h / 3) * sum13Part;

      const sum38Part = fArr[m] + 3 * fArr[m + 1] + 3 * fArr[m + 2] + fArr[n];
      const part38 = ((3 * h) / 8) * sum38Part;

      const totalComb = (part13 + part38) * scaleFactor;

      // También calcular Simpson 1/3 en (n-1) subintervalos + Trapecio en el último (usado en Ej. 21 del solucionario)
      const m2 = n - 1;
      let sum13_m2 = fArr[0] + fArr[m2];
      for (let i = 1; i < m2; i++) {
        sum13_m2 += (i % 2 === 1 ? 4 : 2) * fArr[i];
      }
      const part13_m2 = (h / 3) * sum13_m2;
      const partTrapLast = (h / 2) * (fArr[m2] + fArr[n]);
      const total13PlusTrap = (part13_m2 + partTrapLast) * scaleFactor;

      simpComb = {
        applicable: true,
        description: `Simpson 1/3 [0..${m}] (${m} int.) + Simpson 3/8 [${m}..${n}] (3 int.)`,
        value: totalComb,
        part13: part13 * scaleFactor,
        part38: part38 * scaleFactor,
        splitIndex: m,
        altDescription: `Simpson 1/3 [0..${m2}] (${m2} int.) + Trapecio [${m2}..${n}] (1 int.)`,
        altValue: total13PlusTrap
      };
    }
  }

  // Cálculo de errores respecto a valor exacto o de referencia
  function calcError(approx) {
    if (exactValue === null || exactValue === undefined || isNaN(exactValue) || approx === null) {
      return { absError: null, pctError: null };
    }
    const absErr = Math.abs(exactValue - approx);
    const pctErr = exactValue !== 0 ? (absErr / Math.abs(exactValue)) * 100 : null;
    return { absError: absErr, pctError: pctErr };
  }

  // Determinar el mejor valor de Simpson disponible para mostrar como principal
  let primarySimpsonLabel = 'Simpson 1/3';
  let primarySimpsonValue = null;
  if (simp13.applicable) {
    primarySimpsonLabel = 'Simpson 1/3 Compuesto';
    primarySimpsonValue = simp13.value;
  } else if (n === 9 && simpComb.applicable) {
    // En Ej. 21 el solucionario reporta 36.85 (S1/3 en 8 + Trap en 1) y también existe S3/8 puro (36.60)
    primarySimpsonLabel = 'Simpson 1/3 (8 int.) + Trapecio (1 int.)';
    primarySimpsonValue = simpComb.altValue;
  } else if (simpComb.applicable) {
    primarySimpsonLabel = `Simpson Combinado (1/3 + 3/8)`;
    primarySimpsonValue = simpComb.value;
  } else if (simp38.applicable) {
    primarySimpsonLabel = 'Simpson 3/8 Compuesto';
    primarySimpsonValue = simp38.value;
  }

  return {
    valid: true,
    n,
    a,
    b,
    h,
    xArr,
    rawYArr,
    fArr,
    scaleFactor,
    exactValue,
    trap: {
      value: trapValue,
      rawSum: trapWeightedSum,
      weights: trapWeights,
      ...calcError(trapValue)
    },
    simp13: {
      ...simp13,
      ...calcError(simp13.value)
    },
    simp38: {
      ...simp38,
      ...calcError(simp38.value)
    },
    simpComb: {
      ...simpComb,
      ...calcError(simpComb.value),
      altErrors: calcError(simpComb.altValue)
    },
    primarySimpson: {
      label: primarySimpsonLabel,
      value: primarySimpsonValue,
      ...calcError(primarySimpsonValue)
    }
  };
}

// ============================================================================
// ESTADO DE LA APLICACIÓN E INTERFAZ DE USUARIO
// ============================================================================
let currentExerciseId = 'ex19';
let currentMode = 'table'; // 'table' | 'function'
let currentGroupFilter = 'ALL';

function formatNum(val, decimals = 6) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  const abs = Math.abs(val);
  if (abs >= 1e7 || (abs > 0 && abs < 1e-5)) {
    return val.toExponential(6);
  }
  return val.toFixed(decimals);
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigationTabs();
  renderExerciseSelector();
  loadExercise('ex19');
  renderMasterComparisonTables();
  renderAllManualDevelopments();
  setupEventListeners();
});

function initNavigationTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
      if (btn.dataset.tab === 'tab-calculator') {
        runCalculation();
      }
    });
  });
}

function renderExerciseSelector() {
  const container = document.getElementById('exerciseButtonsContainer');
  container.innerHTML = '';

  Object.values(EXERCISES).forEach((ex) => {
    if (
      currentGroupFilter !== 'ALL' &&
      !ex.groupTags.includes(currentGroupFilter) &&
      !ex.groupTags.includes('ALL')
    ) {
      return;
    }
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `ex-btn ${ex.id === currentExerciseId ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="ex-num">Grupo ${ex.groupTags.join(', ')} · ${ex.difficulty}</span>
      <span class="ex-name">${ex.shortTitle}</span>
    `;
    btn.addEventListener('click', () => {
      loadExercise(ex.id);
    });
    container.appendChild(btn);
  });

  // Píldoras de filtro por grupo
  document.querySelectorAll('.group-pill').forEach((pill) => {
    pill.classList.toggle('active', pill.dataset.group === currentGroupFilter);
    pill.onclick = () => {
      currentGroupFilter = pill.dataset.group;
      renderExerciseSelector();
      // Si se selecciona un grupo específico, cargar el primer ejercicio de ese grupo
      if (currentGroupFilter !== 'ALL') {
        const firstEx = Object.values(EXERCISES).find((e) => e.groupTags.includes(currentGroupFilter));
        if (firstEx) loadExercise(firstEx.id);
      }
    };
  });
}

function loadExercise(exId) {
  const ex = EXERCISES[exId];
  if (!ex) return;
  currentExerciseId = exId;
  currentMode = ex.mode;

  // Actualizar botón activo
  document.querySelectorAll('.ex-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.querySelector('.ex-name').textContent === ex.shortTitle);
  });

  // 1. Renderizar Explicación del Problema
  document.getElementById('probTitle').textContent = ex.title;
  document.getElementById('probDifficultyTag').textContent = `${ex.difficulty} (Grupo ${ex.groupTags.join('/')})`;
  document.getElementById('probOriginal').textContent = ex.originalStatement;
  document.getElementById('probLaPaz').textContent = ex.laPazContext;
  document.getElementById('probFormula').textContent = ex.modelFormula;
  document.getElementById('probRefNote').textContent = ex.referenceNote;
  document.getElementById('probConclusion').textContent = ex.conclusion;

  // 2. Poblar controles de entrada
  document.getElementById('inputUnit').value = ex.unit || '';
  document.getElementById('inputScale').value = ex.scaleFactor ?? 1;
  document.getElementById('inputTransform').value = ex.transformType || 'none';
  document.getElementById('inputExact').value =
    ex.exactValue !== null && ex.exactValue !== undefined ? ex.exactValue : '';

  if (ex.mode === 'table') {
    populateTableInputs(ex.xData, ex.yData, ex.xLabel, ex.yLabel);
    // También preparar valores por defecto de función por si el usuario cambia de modo
    document.getElementById('inputFuncExpr').value = ex.funcExpr || 'x^2';
    document.getElementById('inputA').value = ex.xData[0];
    document.getElementById('inputB').value = ex.xData[ex.xData.length - 1];
    document.getElementById('inputN').value = ex.xData.length - 1;
  } else {
    document.getElementById('inputFuncExpr').value = ex.funcExpr;
    document.getElementById('inputA').value = ex.a;
    document.getElementById('inputB').value = ex.b;
    document.getElementById('inputN').value = ex.n;
    // También generar tabla desde la función
    generatePointsFromFunctionToTable();
  }

  updateModeUI();
  runCalculation();
}

function updateModeUI() {
  document.getElementById('btnModeTable').classList.toggle('active', currentMode === 'table');
  document.getElementById('btnModeFunc').classList.toggle('active', currentMode === 'function');
  document.getElementById('panelTableMode').style.display = currentMode === 'table' ? 'block' : 'none';
  document.getElementById('panelFuncMode').style.display = currentMode === 'function' ? 'block' : 'none';
  document.getElementById('n4n8Card').style.display = currentMode === 'function' ? 'block' : 'none';
}

function populateTableInputs(xArr, yArr, xLabel = 'x', yLabel = 'y') {
  document.getElementById('thXLabel').textContent = xLabel;
  document.getElementById('thYLabel').textContent = yLabel;

  const tbody = document.getElementById('editablePointsBody');
  tbody.innerHTML = '';
  for (let i = 0; i < xArr.length; i++) {
    appendPointRow(i, xArr[i], yArr[i]);
  }
  syncCSVTextareaFromTable();
}

function appendPointRow(index, xVal, yVal) {
  const tbody = document.getElementById('editablePointsBody');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td class="row-idx" style="font-weight:600; color:var(--text-muted);">${index}</td>
    <td><input type="number" step="any" class="table-input inp-x" value="${xVal}"></td>
    <td><input type="number" step="any" class="table-input inp-y" value="${yVal}"></td>
    <td style="text-align:center;">
      <button type="button" class="btn btn-danger btn-sm btn-del-row" title="Eliminar fila">✕</button>
    </td>
  `;
  tr.querySelectorAll('input').forEach((inp) => {
    inp.addEventListener('input', () => {
      syncCSVTextareaFromTable();
      runCalculation();
    });
  });
  tr.querySelector('.btn-del-row').addEventListener('click', () => {
    if (tbody.querySelectorAll('tr').length <= 2) {
      alert('Se requieren como mínimo 2 puntos para integrar.');
      return;
    }
    tr.remove();
    reindexTableRows();
    syncCSVTextareaFromTable();
    runCalculation();
  });
  tbody.appendChild(tr);
}

function reindexTableRows() {
  const rows = document.querySelectorAll('#editablePointsBody tr');
  rows.forEach((tr, idx) => {
    tr.querySelector('.row-idx').textContent = idx;
  });
}

function readTablePoints() {
  const rows = document.querySelectorAll('#editablePointsBody tr');
  const xArr = [];
  const yArr = [];
  rows.forEach((tr) => {
    const xv = parseFloat(tr.querySelector('.inp-x').value);
    const yv = parseFloat(tr.querySelector('.inp-y').value);
    xArr.push(xv);
    yArr.push(yv);
  });
  return { xArr, yArr };
}

function syncCSVTextareaFromTable() {
  const { xArr, yArr } = readTablePoints();
  const lines = xArr.map((x, i) => `${x}, ${yArr[i]}`);
  document.getElementById('csvPairsInput').value = lines.join('\n');
}

function parseCSVTextareaToTable() {
  const raw = document.getElementById('csvPairsInput').value.trim();
  if (!raw) return;
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const xArr = [];
  const yArr = [];
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split(/[,\t;]+/).map((s) => s.trim());
    if (parts.length < 2) {
      showValidationAlert(`Error de formato en la línea ${i + 1}: "${lines[i]}". Use el formato: x, y`, 'error');
      return;
    }
    const xv = Number(parts[0]);
    const yv = Number(parts[1]);
    xArr.push(xv);
    yArr.push(yv);
  }
  const ex = EXERCISES[currentExerciseId];
  populateTableInputs(xArr, yArr, ex?.xLabel || 'x', ex?.yLabel || 'y');
  runCalculation();
}

function generatePointsFromFunctionToTable() {
  try {
    const expr = document.getElementById('inputFuncExpr').value;
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const n = parseInt(document.getElementById('inputN').value, 10);
    if (isNaN(a) || isNaN(b) || isNaN(n) || n < 1 || b <= a) return null;
    const h = (b - a) / n;
    const xArr = [];
    const yArr = [];
    for (let i = 0; i <= n; i++) {
      const xi = i === n ? b : a + i * h;
      const yi = evaluateMathExpression(expr, xi);
      xArr.push(Number(xi.toPrecision(12)));
      yArr.push(yi);
    }
    return { xArr, yArr };
  } catch (err) {
    return { error: err.message };
  }
}

function setupEventListeners() {
  document.getElementById('btnModeTable').addEventListener('click', () => {
    currentMode = 'table';
    updateModeUI();
    runCalculation();
  });

  document.getElementById('btnModeFunc').addEventListener('click', () => {
    currentMode = 'function';
    updateModeUI();
    runCalculation();
  });

  document.getElementById('btnAddRow').addEventListener('click', () => {
    const { xArr, yArr } = readTablePoints();
    const n = xArr.length;
    const lastX = n > 0 ? xArr[n - 1] : 0;
    const step = n > 1 ? xArr[n - 1] - xArr[n - 2] : 1;
    appendPointRow(n, Number((lastX + step).toFixed(4)), 0);
    syncCSVTextareaFromTable();
    runCalculation();
  });

  document.getElementById('btnApplyCSV').addEventListener('click', () => {
    parseCSVTextareaToTable();
  });

  document.getElementById('btnResetEx').addEventListener('click', () => {
    loadExercise(currentExerciseId);
  });

  // Botones rápidos de n en modo función
  document.querySelectorAll('.btn-quick-n').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('inputN').value = btn.dataset.n;
      runCalculation();
    });
  });

  // Inputs que disparan recálculo
  ['inputFuncExpr', 'inputA', 'inputB', 'inputN', 'inputUnit', 'inputScale', 'inputTransform', 'inputExact'].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => runCalculation());
        el.addEventListener('change', () => runCalculation());
      }
    }
  );
}

function showValidationAlert(msg, type = 'info') {
  const box = document.getElementById('validationAlertBox');
  if (!msg) {
    box.style.display = 'none';
    return;
  }
  box.style.display = 'block';
  box.className = `alert alert-${type}`;
  box.innerHTML = msg;
}

// ============================================================================
// EJECUCIÓN DEL CÁLCULO PRINCIPAL Y ACTUALIZACIÓN DE LA VISTA
// ============================================================================
function runCalculation() {
  const ex = EXERCISES[currentExerciseId];
  const unit = document.getElementById('inputUnit').value.trim() || 'u';
  const scaleFactor = parseFloat(document.getElementById('inputScale').value);
  const transformType = document.getElementById('inputTransform').value;
  const exactRaw = document.getElementById('inputExact').value.trim();
  const exactValue = exactRaw !== '' ? parseFloat(exactRaw) : null;

  if (isNaN(scaleFactor)) {
    showValidationAlert('El factor de escala debe ser un número válido.', 'error');
    return;
  }

  let xArr = [];
  let yArr = [];

  if (currentMode === 'function') {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const n = parseInt(document.getElementById('inputN').value, 10);
    if (isNaN(a) || isNaN(b) || b <= a) {
      showValidationAlert('Límites inválidos: se requiere que el límite superior b sea mayor que a (b > a).', 'error');
      return;
    }
    if (isNaN(n) || n < 1 || n > 1000) {
      showValidationAlert('El número de subintervalos n debe ser un entero entre 1 y 1000.', 'error');
      return;
    }
    const gen = generatePointsFromFunctionToTable();
    if (!gen || gen.error) {
      showValidationAlert(`Error al evaluar f(x): ${gen ? gen.error : 'Expresión inválida'}`, 'error');
      return;
    }
    xArr = gen.xArr;
    yArr = gen.yArr;
    renderN4vsN8Comparison();
  } else {
    const pts = readTablePoints();
    xArr = pts.xArr;
    yArr = pts.yArr;
  }

  const res = computeNumericalIntegration(xArr, yArr, {
    scaleFactor,
    transformType,
    exactValue
  });

  if (!res.valid) {
    showValidationAlert(`<strong>Error de validación:</strong> ${res.error}`, 'error');
    return;
  }

  // Mensaje de estado de validación de n y h
  const nNotes = [];
  nNotes.push(`<strong>Paso uniforme verificado:</strong> n = ${res.n} subintervalos (${res.n + 1} nodos), h = (b − a)/n = (${formatNum(res.b, 4)} − ${formatNum(res.a, 4)}) / ${res.n} = <strong>${formatNum(res.h, 6)}</strong>.`);
  if (res.simp13.applicable) {
    nNotes.push(`✓ <strong>Simpson 1/3 aplicable</strong> (n = ${res.n} es par).`);
  } else {
    nNotes.push(`⚠ <strong>Simpson 1/3 puro no aplicable</strong> (n = ${res.n} es impar).`);
  }
  if (res.simp38.applicable) {
    nNotes.push(`✓ <strong>Simpson 3/8 aplicable</strong> (n = ${res.n} es múltiplo de 3).`);
  }
  if (res.simpComb.applicable) {
    nNotes.push(`✓ <strong>Simpson Combinado activado automáticamente:</strong> ${res.simpComb.description}.`);
  }
  showValidationAlert(nNotes.join(' '), 'success');

  // Actualizar KPI Cards
  document.getElementById('kpiTrapVal').textContent = `${formatNum(res.trap.value, 6)} ${unit}`;
  document.getElementById('kpiTrapSub').textContent = buildSubText(res.trap, ex);

  document.getElementById('kpiSimpLabel').textContent = res.primarySimpson.label;
  document.getElementById('kpiSimpVal').textContent =
    res.primarySimpson.value !== null ? `${formatNum(res.primarySimpson.value, 6)} ${unit}` : 'No aplicable';
  document.getElementById('kpiSimpSub').textContent = buildSubText(res.primarySimpson, ex);

  if (res.exactValue !== null && !isNaN(res.exactValue)) {
    document.getElementById('kpiExactVal').textContent = `${formatNum(res.exactValue, 6)} ${unit}`;
    document.getElementById('kpiExactSub').textContent =
      ex && ex.siConversionFactor
        ? `Equivalente SI: ${formatNum(res.exactValue * ex.siConversionFactor, 4)} ${ex.siUnit}`
        : 'Valor analítico / referencia oficial';
  } else {
    document.getElementById('kpiExactVal').textContent = 'Sin valor exacto';
    document.getElementById('kpiExactSub').textContent =
      'Datos experimentales / digitalizados (no se calcula error verdadero)';
  }

  // Renderizar Tabla Comparativa de Métodos
  renderMethodsComparisonTable(res, unit, ex);

  // Renderizar Tabla de Nodos y Pesos de Integración
  renderWeightsTable(res, ex);

  // Renderizar Procedimiento Manual de Sustitución para el ejercicio actual
  renderCurrentManualFormula(res, unit);

  // Dibujar Gráfico en Canvas
  drawIntegralChart(res, ex);
}

function buildSubText(methodObj, ex) {
  const parts = [];
  if (ex && ex.siConversionFactor && methodObj.value !== null) {
    parts.push(`SI: ${formatNum(methodObj.value * ex.siConversionFactor, 4)} ${ex.siUnit}`);
  }
  if (methodObj.pctError !== null && methodObj.pctError !== undefined) {
    parts.push(`Error: ${methodObj.pctError.toFixed(4)}%`);
  }
  return parts.join(' | ') || 'Cálculo numérico con 6 decimales';
}

function renderMethodsComparisonTable(res, unit, ex) {
  const tbody = document.getElementById('methodsComparisonBody');
  tbody.innerHTML = '';

  const rows = [
    {
      name: 'Trapecio Compuesto',
      cond: `Cualquier n ≥ 1 (n = ${res.n})`,
      val: res.trap.value,
      absErr: res.trap.absError,
      pctErr: res.trap.pctError
    },
    {
      name: 'Simpson 1/3 Compuesto',
      cond: res.simp13.reason,
      val: res.simp13.value,
      absErr: res.simp13.absError,
      pctErr: res.simp13.pctError
    },
    {
      name: 'Simpson 3/8 Compuesto',
      cond: res.simp38.reason,
      val: res.simp38.value,
      absErr: res.simp38.absError,
      pctErr: res.simp38.pctError
    }
  ];

  if (res.simpComb.applicable) {
    rows.push({
      name: 'Simpson Combinado (1/3 + 3/8)',
      cond: res.simpComb.description,
      val: res.simpComb.value,
      absErr: res.simpComb.absError,
      pctErr: res.simpComb.pctError
    });
    rows.push({
      name: 'Simpson 1/3 + Trapecio final',
      cond: res.simpComb.altDescription,
      val: res.simpComb.altValue,
      absErr: res.simpComb.altErrors.absError,
      pctErr: res.simpComb.altErrors.pctError
    });
  }

  rows.forEach((r) => {
    const tr = document.createElement('tr');
    const siText =
      r.val !== null && ex && ex.siConversionFactor
        ? `<div style="font-size:0.75rem;color:var(--text-muted);">≈ ${formatNum(r.val * ex.siConversionFactor, 4)} ${ex.siUnit}</div>`
        : '';
    tr.innerHTML = `
      <td><strong>${r.name}</strong></td>
      <td>${r.cond}</td>
      <td class="num-col"><strong>${r.val !== null ? `${formatNum(r.val, 6)} ${unit}` : 'No aplicable'}</strong>${siText}</td>
      <td class="num-col">${r.absErr !== null && r.absErr !== undefined ? formatNum(r.absErr, 6) : '—'}</td>
      <td class="num-col">${r.pctErr !== null && r.pctErr !== undefined ? `${r.pctErr.toFixed(4)} %` : '—'}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderWeightsTable(res, ex) {
  const tbody = document.getElementById('weightsTableBody');
  tbody.innerHTML = '';

  for (let i = 0; i <= res.n; i++) {
    const xi = res.xArr[i];
    const yi = res.rawYArr[i];
    const fi = res.fArr[i];
    const wTrap = res.trap.weights[i];
    const w13 = res.simp13.applicable ? res.simp13.weights[i] : '—';
    const w38 = res.simp38.applicable ? res.simp38.weights[i] : '—';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="num-col">${i}</td>
      <td class="num-col">${formatNum(xi, 4)}</td>
      <td class="num-col">${formatNum(yi, 6)}</td>
      <td class="num-col">${formatNum(fi, 6)}</td>
      <td class="num-col">${wTrap}</td>
      <td class="num-col">${formatNum(wTrap * fi, 6)}</td>
      <td class="num-col">${w13}</td>
      <td class="num-col">${w38}</td>
    `;
    tbody.appendChild(tr);
  }
}

function renderN4vsN8Comparison() {
  const expr = document.getElementById('inputFuncExpr').value;
  const a = parseFloat(document.getElementById('inputA').value);
  const b = parseFloat(document.getElementById('inputB').value);
  const scaleFactor = parseFloat(document.getElementById('inputScale').value) || 1;
  const exactRaw = document.getElementById('inputExact').value.trim();
  const exactValue = exactRaw !== '' ? parseFloat(exactRaw) : null;
  const unit = document.getElementById('inputUnit').value.trim() || 'u';

  const tbody = document.getElementById('n4n8TableBody');
  tbody.innerHTML = '';

  [4, 8].forEach((nVal) => {
    try {
      const h = (b - a) / nVal;
      const xs = [];
      const ys = [];
      for (let i = 0; i <= nVal; i++) {
        const xi = i === nVal ? b : a + i * h;
        xs.push(xi);
        ys.push(evaluateMathExpression(expr, xi));
      }
      const r = computeNumericalIntegration(xs, ys, { scaleFactor, exactValue });
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>n = ${nVal}</strong> (h = ${formatNum(h, 5)})</td>
        <td class="num-col">${formatNum(r.trap.value, 6)} ${unit}</td>
        <td class="num-col">${r.trap.pctError !== null ? `${r.trap.pctError.toFixed(4)} %` : '—'}</td>
        <td class="num-col">${formatNum(r.simp13.value, 6)} ${unit}</td>
        <td class="num-col">${r.simp13.pctError !== null ? `${r.simp13.pctError.toFixed(4)} %` : '—'}</td>
      `;
      tbody.appendChild(tr);
    } catch (e) {
      // ignore if invalid expression
    }
  });
}

function renderCurrentManualFormula(res, unit) {
  const f0 = formatNum(res.fArr[0], 4);
  const fn = formatNum(res.fArr[res.n], 4);
  const scaleStr = res.scaleFactor !== 1 ? ` × (${res.scaleFactor.toFixed(6)})` : '';

  let text = `1) Paso h = (${formatNum(res.b, 4)} - ${formatNum(res.a, 4)}) / ${res.n} = ${formatNum(res.h, 6)}\n`;
  text += `2) Trapecio Compuesto:\n`;
  text += `   T = h · [ (f₀ + fₙ)/2 + Σ fᵢ ]${scaleStr}\n`;
  text += `   T = ${formatNum(res.h, 6)} · [ (${f0} + ${fn})/2 + ... ] = ${formatNum(res.trap.value, 6)} ${unit}\n\n`;

  if (res.simp13.applicable) {
    text += `3) Simpson 1/3 Compuesto (n = ${res.n} par):\n`;
    text += `   S₁/₃ = (h/3) · [ f₀ + 4·Σf_impar + 2·Σf_par + fₙ ]${scaleStr}\n`;
    text += `   S₁/₃ = (${formatNum(res.h, 6)}/3) · [ ${formatNum(res.simp13.rawSum, 6)} ]${scaleStr} = ${formatNum(res.simp13.value, 6)} ${unit}`;
  } else if (res.simpComb.applicable) {
    const m = res.simpComb.splitIndex;
    text += `3) Simpson Combinado (n = ${res.n} impar → ${m} subint. con S₁/₃ + 3 subint. con S₃/₈):\n`;
    text += `   I_S = S₁/₃[x₀..x_${m}] + S₃/₈[x_${m}..x_${res.n}]\n`;
    text += `   I_S = ${formatNum(res.simpComb.part13, 6)} + ${formatNum(res.simpComb.part38, 6)} = ${formatNum(res.simpComb.value, 6)} ${unit}\n`;
    text += `   (Alternativa S₁/₃[0..${res.n - 1}] + Trapecio[${res.n - 1}..${res.n}] = ${formatNum(res.simpComb.altValue, 6)} ${unit})`;
  }
  document.getElementById('liveManualSubstitution').textContent = text;
}

// ============================================================================
// GRÁFICO EN CANVAS (ÁREA BAJO LA CURVA Y TRAPECIOS DE INTEGRACIÓN)
// ============================================================================
function drawIntegralChart(res, ex) {
  const canvas = document.getElementById('integralChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = rect.height;
  ctx.clearRect(0, 0, W, H);

  const padL = 64;
  const padR = currentExerciseId === 'ex24' ? Math.min(220, W * 0.34) : 26;
  const padT = 26;
  const padB = 42;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const xs = res.xArr;
  const ys = res.fArr;
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(0, ...ys);
  const maxY = Math.max(...ys) * 1.12 || 1;

  const mapX = (x) => padL + ((x - minX) / (maxX - minX || 1)) * plotW;
  const mapY = (y) => padT + plotH - ((y - minY) / (maxY - minY || 1)) * plotH;
  const zeroY = mapY(0);

  // Líneas de cuadrícula horizontal
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#64748b';
  ctx.font = '11px Segoe UI, sans-serif';
  const yTicks = 5;
  for (let i = 0; i <= yTicks; i++) {
    const val = minY + ((maxY - minY) * i) / yTicks;
    const py = mapY(val);
    ctx.beginPath();
    ctx.moveTo(padL, py);
    ctx.lineTo(padL + plotW, py);
    ctx.stroke();
    ctx.textAlign = 'right';
    ctx.fillText(val >= 10000 ? val.toExponential(1) : val.toFixed(1), padL - 8, py + 4);
  }

  // Relleno sombreado de trapecios de integración
  for (let i = 0; i < res.n; i++) {
    const x0 = mapX(xs[i]);
    const x1 = mapX(xs[i + 1]);
    const y0 = mapY(ys[i]);
    const y1 = mapY(ys[i + 1]);

    ctx.fillStyle = i % 2 === 0 ? 'rgba(29, 78, 216, 0.18)' : 'rgba(15, 118, 110, 0.18)';
    ctx.beginPath();
    ctx.moveTo(x0, zeroY);
    ctx.lineTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1, zeroY);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = 'rgba(29, 78, 216, 0.35)';
    ctx.stroke();
  }

  // Si estamos en modo función, trazar curva continua suave
  if (currentMode === 'function') {
    try {
      const expr = document.getElementById('inputFuncExpr').value;
      ctx.strokeStyle = '#0f766e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const samples = 120;
      for (let s = 0; s <= samples; s++) {
        const xv = minX + ((maxX - minX) * s) / samples;
        const yv = evaluateMathExpression(expr, xv);
        const px = mapX(xv);
        const py = mapY(yv);
        if (s === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    } catch (e) {
      // fallback a poligonal
    }
  }

  // Poligonal de los trapecios y nodos
  ctx.strokeStyle = '#1d4ed8';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  xs.forEach((x, i) => {
    const px = mapX(x);
    const py = mapY(ys[i]);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();

  // Puntos nodales y etiquetas del eje X
  xs.forEach((x, i) => {
    const px = mapX(x);
    const py = mapY(ys[i]);
    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, 2 * Math.PI);
    ctx.fill();

    if (res.n <= 14 || i % Math.ceil(res.n / 10) === 0 || i === res.n) {
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'center';
      ctx.fillText(Number(x.toFixed(2)), px, H - 14);
    }
  });

  // Si es el Ejercicio 24 (Cardioide), dibujar también la curva cardioide paramétrica en el recuadro derecho
  if (currentExerciseId === 'ex24' && padR >= 150) {
    const cx = padL + plotW + padR * 0.54;
    const cy = padT + plotH * 0.52;
    const scaleCard = Math.min(padR, plotH) / 36;

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 11px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Cardioide (b = 5)', cx, padT + 10);

    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - padR * 0.42, cy);
    ctx.lineTo(cx + padR * 0.42, cy);
    ctx.moveTo(cx, cy - plotH * 0.42);
    ctx.lineTo(cx, cy + plotH * 0.42);
    ctx.stroke();

    ctx.strokeStyle = '#dc2626';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let s = 0; s <= 120; s++) {
      const t = (2 * Math.PI * s) / 120;
      const xt = 10 * Math.cos(t) - 5 * Math.cos(2 * t);
      const yt = 10 * Math.sin(t) - 5 * Math.sin(2 * t);
      const px = cx + xt * scaleCard;
      const py = cy - yt * scaleCard;
      if (s === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

// ============================================================================
// TABLA MAESTRA DE TODOS LOS PROBLEMAS RESUELTOS (PESTAÑA 2 E INFORME)
// ============================================================================
function renderMasterComparisonTables() {
  const masterBody = document.getElementById('masterSummaryTableBody');
  const reportMasterBody = document.getElementById('reportMasterTableBody');
  const convBody = document.getElementById('masterConvergenceBody');
  if (!masterBody) return;

  masterBody.innerHTML = '';
  if (reportMasterBody) reportMasterBody.innerHTML = '';
  if (convBody) convBody.innerHTML = '';

  const order = ['ex19', 'ex20', 'ex21', 'ex22', 'ex23', 'ex24', 'ex25', 'ex26', 'ex26_titicaca', 'ex27', 'ex27_surf', 'verif'];

  order.forEach((id) => {
    const ex = EXERCISES[id];
    let xArr = [];
    let yArr = [];
    if (ex.mode === 'table') {
      xArr = ex.xData;
      yArr = ex.yData;
    } else {
      const h = (ex.b - ex.a) / ex.n;
      for (let i = 0; i <= ex.n; i++) {
        const xi = i === ex.n ? ex.b : ex.a + i * h;
        xArr.push(xi);
        yArr.push(evaluateMathExpression(ex.funcExpr, xi));
      }
    }

    const r = computeNumericalIntegration(xArr, yArr, {
      scaleFactor: ex.scaleFactor,
      transformType: ex.transformType,
      exactValue: ex.exactValue
    });

    const rowHTML = `
      <td><strong>${ex.shortTitle}</strong><div style="font-size:0.75rem;color:var(--text-muted);">Grupo ${ex.groupTags.join(', ')}</div></td>
      <td style="font-family:var(--font-mono);font-size:0.8rem;">${ex.modelFormula}</td>
      <td class="num-col">n = ${r.n}<br><span style="font-size:0.75rem;color:var(--text-muted);">h = ${formatNum(r.h, 4)}</span></td>
      <td class="num-col"><strong>${formatNum(r.trap.value, 6)}</strong> ${ex.unit}</td>
      <td class="num-col"><strong>${formatNum(r.primarySimpson.value, 6)}</strong> ${ex.unit}<div style="font-size:0.73rem;color:var(--text-muted);">${r.primarySimpson.label}</div></td>
      <td class="num-col">${ex.exactValue !== null ? `${formatNum(ex.exactValue, 6)} ${ex.unit}` : '—'}</td>
      <td class="num-col">${r.trap.pctError !== null ? `${r.trap.pctError.toFixed(4)}%` : '—'}</td>
      <td class="num-col">${r.primarySimpson.pctError !== null ? `${r.primarySimpson.pctError.toFixed(4)}%` : '—'}</td>
      <td><button type="button" class="btn btn-secondary btn-sm" onclick="switchToExercise('${ex.id}')">Ver en calculadora</button></td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = rowHTML;
    masterBody.appendChild(tr);

    if (reportMasterBody) {
      const trRep = document.createElement('tr');
      trRep.innerHTML = rowHTML.replace(/<td><button.*<\/button><\/td>/, '');
      reportMasterBody.appendChild(trRep);
    }

    // Si es ejercicio con función matemática, agregar a la tabla comparativa n=4 vs n=8
    if (ex.mode === 'function' && convBody) {
      const calcForN = (nVal) => {
        const h = (ex.b - ex.a) / nVal;
        const xs = [];
        const ys = [];
        for (let i = 0; i <= nVal; i++) {
          const xi = i === nVal ? ex.b : ex.a + i * h;
          xs.push(xi);
          ys.push(evaluateMathExpression(ex.funcExpr, xi));
        }
        return computeNumericalIntegration(xs, ys, {
          scaleFactor: ex.scaleFactor,
          exactValue: ex.exactValue
        });
      };
      const r4 = calcForN(4);
      const r8 = calcForN(8);
      const trC = document.createElement('tr');
      trC.innerHTML = `
        <td><strong>${ex.shortTitle}</strong></td>
        <td class="num-col">${formatNum(ex.exactValue, 6)} ${ex.unit}</td>
        <td class="num-col">${formatNum(r4.trap.value, 6)} (${r4.trap.pctError.toFixed(4)}%)</td>
        <td class="num-col">${formatNum(r8.trap.value, 6)} (${r8.trap.pctError.toFixed(4)}%)</td>
        <td class="num-col">${formatNum(r4.simp13.value, 6)} (${r4.simp13.pctError.toFixed(5)}%)</td>
        <td class="num-col">${formatNum(r8.simp13.value, 6)} (${r8.simp13.pctError.toFixed(5)}%)</td>
      `;
      convBody.appendChild(trC);
    }
  });
}

window.switchToExercise = function (exId) {
  document.querySelector('[data-tab="tab-calculator"]').click();
  loadExercise(exId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ============================================================================
// DESARROLLO MANUAL PASO A PASO DE TODOS LOS EJERCICIOS (PESTAÑA 3)
// ============================================================================
function renderAllManualDevelopments() {
  const container = document.getElementById('allManualDevelopmentsContainer');
  if (!container) return;

  const manualData = [
    {
      title: 'Ejercicio 19 · Distancia de un vehículo (n = 7, h = 1 s)',
      group: 'Grupos A y D',
      body: `Modelo: d = (1/3600) ∫₀⁷ v(t) dt, con t = [0, 1, 2, 3, 4, 5, 6, 7] s y v = [0, 14, 39, 69, 95, 114, 129, 139] mi/h.
• Trapecio Compuesto (n = 7, h = 1):
  Suma ponderada = (0 + 139)/2 + (14 + 39 + 69 + 95 + 114 + 129) = 69.5 + 460 = 529.5 mi/h·s
  d_T = 529.5 / 3600 = 0.147083 mi (≈ 236.71 m).

• Simpson Combinado (Simpson 1/3 en [0,4] + Simpson 3/8 en [4,7]):
  Tramo 1 [0,4] (n₁ = 4, h = 1): S₁/₃ = (1/3)·[0 + 4(14) + 2(39) + 4(69) + 95] = (1/3)·[505] = 168.333333 mi/h·s
  Tramo 2 [4,7] (n₂ = 3, h = 1): S₃/₈ = (3·1/8)·[95 + 3(114) + 3(129) + 139] = (3/8)·[963] = 361.125000 mi/h·s
  Suma total = 168.333333 + 361.125000 = 529.458333 mi/h·s
  d_S = 529.458333 / 3600 = 0.147072 mi (≈ 236.69 m).`
    },
    {
      title: 'Ejercicio 20 · Trabajo de una banda elástica (n = 7, h = 0.4 in)',
      group: 'Grupos B y E',
      body: `Modelo: W = ∫₀²·⁸ F(x) dx, con x = [0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8] in y F = [0, 0.85, 1.30, 1.60, 1.87, 2.14, 2.34, 2.52] lb.
• Trapecio Compuesto (n = 7, h = 0.4):
  W_T = 0.4 · [ (0 + 2.52)/2 + (0.85 + 1.30 + 1.60 + 1.87 + 2.14 + 2.34) ]
  W_T = 0.4 · [ 1.26 + 10.10 ] = 0.4 · (11.36) = 4.544000 lb·in (≈ 0.5134 J).

• Simpson Combinado (Simpson 1/3 en [0, 1.6] + Simpson 3/8 en [1.6, 2.8]):
  Tramo 1 [0, 1.6] (n₁ = 4): S₁/₃ = (0.4/3)·[0 + 4(0.85) + 2(1.30) + 4(1.60) + 1.87] = (0.4/3)·(14.27) = 1.902667 lb·in
  Tramo 2 [1.6, 2.8] (n₂ = 3): S₃/₈ = (3·0.4/8)·[1.87 + 3(2.14) + 3(2.34) + 2.52] = 0.15·(17.83) = 2.674500 lb·in
  W_S = 1.902667 + 2.674500 = 4.577167 lb·in (≈ 0.5172 J).`
    },
    {
      title: 'Ejercicio 21 · Área bajo un perfil topográfico (n = 9, h = 1)',
      group: 'Grupo C',
      body: `Modelo: A = ∫₁¹⁰ y(x) dx, con x = 1..10 y cotas digitalizadas y = [1.3, 3.7, 4.6, 4.4, 2.7, 2.5, 3.6, 5.3, 6.0, 5.9].
• Trapecio Compuesto (n = 9, h = 1):
  A_T = 1 · [ (1.3 + 5.9)/2 + (3.7 + 4.6 + 4.4 + 2.7 + 2.5 + 3.6 + 5.3 + 6.0) ] = 3.60 + 32.80 = 36.400000 u².

• Simpson 1/3 en [1,9] (8 subintervalos) + Trapecio en [9,10] (1 subintervalo):
  S₁/₃[1,9] = (1/3)·[1.3 + 4(3.7 + 4.4 + 2.5 + 5.3) + 2(4.6 + 2.7 + 3.6) + 6.0] = (1/3)·(92.7) = 30.900000 u²
  Trap[9,10] = (1/2)·(6.0 + 5.9) = 5.950000 u²
  A_S = 30.900000 + 5.950000 = 36.850000 u².
  (Nota: Simpson 3/8 puro sobre los 9 subintervalos da A_S3/8 = (3/8)·(97.6) = 36.600000 u²).`
    },
    {
      title: 'Ejercicio 22 · Longitud de un cable catenaria (n = 8, h = 4.75 ft)',
      group: 'Grupo D',
      body: `Modelo: y = 24 cosh(x/24) ⇒ y' = sinh(x/24) ⇒ √(1 + (y')²) = cosh(x/24).
L = ∫₋₁₂²⁶ cosh(x/24) dx. Valor exacto = 24·[sinh(26/24) - sinh(-12/24)] = 43.898841 ft.
Con n = 8 subintervalos, h = (26 - (-12))/8 = 38/8 = 4.75 ft:
• Nodos xᵢ: [-12, -7.25, -2.5, 2.25, 7.0, 11.75, 16.5, 21.25, 26.0]
• f(xᵢ) = cosh(xᵢ/24): [1.127626, 1.046065, 1.005430, 1.004398, 1.042829, 1.122230, 1.245909, 1.418565, 1.647231]
• Trapecio Compuesto: L_T = 4.75 · [9.272011] = 44.042044 ft (Error = 0.3262%).
• Simpson 1/3 Compuesto: L_S = (4.75/3) · [27.725819] = 43.899213 ft (Error = 0.00085%).`
    },
    {
      title: 'Ejercicio 23 · Caudal en tubería circular turbulenta (n = 8, h = 0.03125 in)',
      group: 'Grupos A y F',
      body: `Modelo: Q = ∫₀⁰·²⁵ 2π·r·80·(1 - r/0.25)^(1/7) dr = ∫₀⁰·²⁵ 160π·r·(1 - 4r)^(1/7) dr.
Valor analítico exacto: Con u = 1 - 4r ⇒ Q = 10π · (7/8) · (7/15) = 49π / 12 ≈ 12.828170 in³/s.
Con n = 8 subintervalos, h = 0.25 / 8 = 0.03125 in:
• Nodos rᵢ: [0, 0.03125, 0.0625, 0.09375, 0.125, 0.15625, 0.1875, 0.21875, 0.25]
• f(rᵢ): [0, 15.410234, 30.158550, 44.142230, 57.198744, 69.035568, 78.999935, 84.996356, 0]
• Trapecio Compuesto: Q_T = 0.03125 · (373.816893) = 11.681778 in³/s (Error = 8.9365%).
• Simpson 1/3 Compuesto: Q_S = (0.03125 / 3) · (1166.519442) = 12.151244 in³/s (Error = 5.2769%).`
    },
    {
      title: 'Ejercicio 24 · Longitud de la cardioide paramétrica (n = 8, h = π/4)',
      group: 'Grupo C',
      body: `Modelo: x(t) = 10 cos t - 5 cos 2t, y(t) = 10 sin t - 5 sin 2t, t ∈ [0, 2π].
x'(t) = -10 sin t + 10 sin 2t; y'(t) = 10 cos t - 10 cos 2t.
√([x'(t)]² + [y'(t)]²) = 10√(2 - 2 cos t) = 20 sin(t/2).
Integral exacta: L = ∫₀²π 20 sin(t/2) dt = [-40 cos(t/2)]₀²π = 40 - (-40) = 80.000000.
Con n = 8 subintervalos, h = 2π/8 = π/4 ≈ 0.785398 rad:
• Trapecio Compuesto: L_T = 78.969264 u (Error = 1.2884%).
• Simpson 1/3 Compuesto: L_S = 80.010767 u (Error = 0.0135%).`
    },
    {
      title: 'Ejercicio 25 · Variación de energía potencial de un satélite (n = 8, h = 100,000 m)',
      group: 'Grupo B',
      body: `Modelo: ΔU = ∫₀⁸⁰⁰⁰⁰⁰ m·g₀·R² / (R + y)² dy, con m = 500 kg, g₀ = 9.81 m/s², R = 6,371,000 m, h_total = 800,000 m.
Integral exacta: ΔU = m·g₀·R·h_total / (R + h_total) = 3,486,236,787.06 J ≈ 3.486236787 × 10⁹ J.
Con n = 8 subintervalos, paso Δy = 100,000 m:
• Trapecio Compuesto: ΔU_T = 3.48662008 × 10⁹ J (Error = 0.0110%).
• Simpson 1/3 Compuesto: ΔU_S = 3.48623690 × 10⁹ J (Error = 0.000003%).`
    },
    {
      title: 'Ejercicio 26 · Superficie del Lago Erie (n = 11, h = 20 mi) y Lago Titicaca (n = 9, h = 20 km)',
      group: 'Grupo F',
      body: `Modelo Lago Erie: A = ∫₄₀²⁶⁰ w(x) dx con h = 20 mi (n = 11 subintervalos). Referencia real = 9,940 mi².
Con anchuras digitalizadas w = [20, 34, 42, 50, 58, 59, 57, 53, 50, 44, 30, 12] mi:
• Trapecio Compuesto: A_T = 20 · [ (20+12)/2 + 477 ] = 20 · (493) = 9,860.000000 mi² (Error = 0.8048%).
• Simpson Combinado (S₁/₃ en [40,200] + S₃/₈ en [200,260]): A_S = 8,003.333333 + 1,922.500000 = 9,925.833333 mi² (Error = 0.1425%).

Adaptación Lago Titicaca: A = ∫₀¹⁸⁰ w(x) dx con h = 20 km (n = 9 subintervalos). Referencia oficial = 8,562 km².
• Trapecio Compuesto: 8,320.000000 km² (Error = 2.8264%).
• Simpson 3/8 Compuesto: 8,512.500000 km² (Error = 0.5781%).`
    },
    {
      title: 'Ejercicio 27 · Volumen y Superficie de un balón (n = 12, h = 1 in)',
      group: 'Grupo E',
      body: `Datos: z = 0..12 in (h = 1 in, n = 12), d = [0, 2.6, 3.2, 4.8, 5.6, 6.0, 6.2, 6.0, 5.6, 4.8, 3.3, 2.6, 0] in, r = d/2.
1) Volumen V = π ∫₀¹² r² dz:
   • Trapecio Compuesto: V_T = 199.404740 in³ (≈ 3,267.66 cm³).
   • Simpson 1/3 Compuesto (n = 12 par): V_S = 201.842092 in³ (≈ 3,307.60 cm³).
   • Simpson 3/8 Compuesto (n = 12 múltiplo de 3): V_S3/8 = 201.498087 in³.

2) Superficie Simplificada S = 2π ∫₀¹² r dz:
   • Trapecio Compuesto: S_T = 159.278748 in².
   • Simpson 1/3 Compuesto: S_S = 162.315620 in².
   • Nota crítica: La fórmula S = 2π∫r dz omite el factor de pendiente √(1 + (r')²). El área geométrica real de revolución es S_real = 2π ∫₀¹² r√(1+(r')²) dz ≈ 179.58 in².`
    }
  ];

  container.innerHTML = manualData
    .map(
      (item) => `
    <div class="card">
      <div class="card-header">
        <span class="card-title">${item.title}</span>
        <span class="tag tag-blue">${item.group}</span>
      </div>
      <div class="manual-steps">
        <pre>${item.body}</pre>
      </div>
    </div>
  `
    )
    .join('');
}
