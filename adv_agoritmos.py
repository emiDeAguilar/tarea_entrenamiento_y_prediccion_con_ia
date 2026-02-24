import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt


valores_x = np.array([10, 20, 30, 40, 50, 60], dtype=float)
valores_y = np.array([32, 62, 92, 122, 152, 182], dtype=float)


capa = tf.keras.layers.Dense(units=1, input_shape=[1])
modelo = tf.keras.Sequential([capa])


modelo.compile(optimizer=tf.keras.optimizers.Adam(0.1),
               loss='mean_squared_error')

print("Comenzando entrenamiento...")
historial = modelo.fit(valores_x, valores_y, epochs=100, verbose=False)
print("Entrenamiento finalizado.")

print("Predicción para 15:")
resultado_15 = modelo.predict(np.array([15.0]))
print(resultado_15)

print("Predicción para 45:")
resultado_45 = modelo.predict(np.array([45.0]))
print(resultado_45)

plt.xlabel("# Época")
plt.ylabel("Magnitud de pérdida")
plt.plot(historial.history["loss"])
plt.show()
