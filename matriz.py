import numpy as np

matriz = np.array([[1/4, 3/4, 0, 0, 0],[1/2, 1/2, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1/3, 2/3, 0], [1, 0, 0, 0, 0]])

resultado = np.linalg.matrix_power(matriz, 1000)

print("resultado: ", resultado)