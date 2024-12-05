texto = "oi"
texto2 = str("oi")
numero = 3
numero2 = int(3)
numero3 = 3.0
numero4 = float(3)
print(texto)
print(texto2)
print(numero)
print(numero2)
print(numero3)
print(numero4)
"\n"
val_Feijão = float(input("Qual é o valor do kilo de feijão?"))
qtd_Feijao = int(input("Quantos pacotes de feijão?"))
tot_Feijao = val_Feijão * qtd_Feijao 
print("O valor total dos feijões: ", tot_Feijao)
"\n"
#programa potenciação
numero = int(input("Digite um número: "))
quadrado = pow(numero,2)
print("O quadrado de" ,numero,"é",quadrado)
"\n"
#program caracter
caractere1 = input("Digite o primeiro caractere: ")
caractere2 = input("Digite o segundo caractere: ")
print("O usuário digitou ",caractere1," e ", caractere2)
"\n"
#programa antecessor e sucessor
n = int(input("Digite um número inteiro: "))
a = n - 1
s = n + 1
print("O antecessor de", n, "é", a)
print("O sucessor de", n, "é", s)
"\n"
#programa perimetro e area
b = float(input("Digite a base do retângulo: "))
a = float(input("Digite a altura do retângulo: "))
perimetro = 2 * (b + a)
area = b * a
print("O perímetro do retângulo é:", perimetro)
print("A área do retângulo é:", area)